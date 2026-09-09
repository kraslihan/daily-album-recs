import "server-only";

/**
 * Spotify integration works in two tiers:
 *
 * 1. Without credentials (default) every album and track links to a Spotify search deep
 *    link. open.spotify.com URLs hand off to the native app when it is installed.
 * 2. With SPOTIFY_CLIENT_ID + SPOTIFY_CLIENT_SECRET set, the album is resolved through the
 *    Web API (client-credentials flow) so links point at the exact album/track and the
 *    embedded player becomes available.
 */

export function spotifySearchUrl(query: string): string {
  return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
}

export function spotifyAlbumUrl(id: string): string {
  return `https://open.spotify.com/album/${id}`;
}

export function spotifyTrackUrl(id: string): string {
  return `https://open.spotify.com/track/${id}`;
}

export function isSpotifyApiConfigured(): boolean {
  return Boolean(process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET);
}

export type SpotifyResolvedAlbum = {
  id: string;
  tracks: Array<{ id: string; name: string; trackNumber: number; discNumber: number }>;
};

type TokenResponse = { access_token: string; expires_in: number };

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) return cachedToken.value;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    cache: "no-store",
    headers: {
      authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as TokenResponse;
  cachedToken = { value: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\(.*?\)|\[.*?\]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

type SearchResponse = {
  albums?: {
    items: Array<{
      id: string;
      name: string;
      album_type: string;
      total_tracks: number;
      release_date: string;
      artists: Array<{ name: string }>;
    }>;
  };
};

type TracksResponse = {
  items: Array<{ id: string; name: string; track_number: number; disc_number: number }>;
  next: string | null;
};

export async function resolveSpotifyAlbum(
  artist: string,
  title: string,
  year: number,
): Promise<SpotifyResolvedAlbum | null> {
  const token = await getAccessToken();
  if (!token) return null;

  const headers = { authorization: `Bearer ${token}` };
  const q = `album:${title} artist:${artist}`;
  const searchRes = await fetch(
    `https://api.spotify.com/v1/search?type=album&limit=10&q=${encodeURIComponent(q)}`,
    { headers, next: { revalidate: 60 * 60 * 24 * 30 } },
  );
  if (!searchRes.ok) return null;
  const search = (await searchRes.json()) as SearchResponse;

  const wantArtist = normalise(artist);
  const wantTitle = normalise(title);
  const scored = (search.albums?.items ?? [])
    .filter((a) => a.artists.some((x) => normalise(x.name) === wantArtist))
    .map((a) => {
      const name = normalise(a.name);
      let score = 0;
      if (name === wantTitle) score += 100;
      else if (name.startsWith(wantTitle)) score += 60;
      if (a.album_type === "album") score += 20;
      if (a.release_date?.startsWith(String(year))) score += 30;
      if (/deluxe|anniversary|expanded|remaster|live|edition/i.test(a.name)) score -= 25;
      return { album: a, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = scored[0]?.album;
  if (!best) return null;

  const tracks: SpotifyResolvedAlbum["tracks"] = [];
  let url: string | null = `https://api.spotify.com/v1/albums/${best.id}/tracks?limit=50`;
  while (url) {
    const res: Response = await fetch(url, { headers, next: { revalidate: 60 * 60 * 24 * 30 } });
    if (!res.ok) break;
    const data = (await res.json()) as TracksResponse;
    for (const t of data.items) {
      tracks.push({ id: t.id, name: t.name, trackNumber: t.track_number, discNumber: t.disc_number });
    }
    url = data.next;
  }

  return { id: best.id, tracks };
}

/** Match a Spotify track to a Deezer track by title, then by position as a fallback. */
export function matchSpotifyTrack(
  resolved: SpotifyResolvedAlbum,
  title: string,
  position: number,
  totalTracks: number,
): string | null {
  const want = normalise(title);
  const byTitle = resolved.tracks.find((t) => normalise(t.name) === want);
  if (byTitle) return byTitle.id;
  const loose = resolved.tracks.find((t) => {
    const n = normalise(t.name);
    return n.startsWith(want) || want.startsWith(n);
  });
  if (loose) return loose.id;
  if (resolved.tracks.length === totalTracks) return resolved.tracks[position - 1]?.id ?? null;
  return null;
}
