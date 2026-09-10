import "server-only";

/**
 * Spotify integration works in two tiers:
 *
 * 1. Without credentials every album and track links to a Spotify search deep link.
 * 2. With SPOTIFY_CLIENT_ID + SPOTIFY_CLIENT_SECRET the album is resolved through the
 *    Web API so we get cover art, the exact tracklist, and embeddable album/track URLs.
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

export type SpotifyTrack = {
  id: string;
  name: string;
  durationMs: number;
  explicit: boolean;
  trackNumber: number;
  discNumber: number;
  previewUrl: string | null;
};

export type SpotifyResolvedAlbum = {
  id: string;
  name: string;
  releaseDate: string | null;
  label: string | null;
  coverUrl: string | null;
  coverSmallUrl: string | null;
  tracks: SpotifyTrack[];
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

export function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\(.*?\)|\[.*?\]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

type SearchAlbum = {
  id: string;
  name: string;
  album_type: string;
  total_tracks: number;
  release_date: string;
  artists: Array<{ name: string }>;
  images?: Array<{ url: string; width: number; height: number }>;
};

type SearchResponse = { albums?: { items: SearchAlbum[] } };

type AlbumResponse = {
  id: string;
  name: string;
  release_date?: string;
  label?: string;
  images?: Array<{ url: string; width: number }>;
  tracks?: {
    items: Array<{
      id: string;
      name: string;
      duration_ms: number;
      explicit: boolean;
      track_number: number;
      disc_number: number;
      preview_url: string | null;
    }>;
    next: string | null;
  };
};

type TracksPage = {
  items: Array<{
    id: string;
    name: string;
    duration_ms: number;
    explicit: boolean;
    track_number: number;
    disc_number: number;
    preview_url: string | null;
  }>;
  next: string | null;
};

function pickCover(images: Array<{ url: string; width?: number }> | undefined): { large: string | null; small: string | null } {
  if (!images?.length) return { large: null, small: null };
  const sorted = [...images].sort((a, b) => (b.width ?? 0) - (a.width ?? 0));
  return { large: sorted[0]?.url ?? null, small: sorted[sorted.length - 1]?.url ?? sorted[0]?.url ?? null };
}

function scoreAlbum(a: SearchAlbum, wantArtist: string, wantTitle: string, year: number): number | null {
  if (!a.artists.some((x) => {
    const n = normalise(x.name);
    return n === wantArtist || n.includes(wantArtist) || wantArtist.includes(n);
  })) {
    return null;
  }
  const name = normalise(a.name);
  let score = 0;
  if (name === wantTitle) score += 100;
  else if (name.startsWith(wantTitle) || wantTitle.startsWith(name)) score += 60;
  else if (name.includes(wantTitle) || wantTitle.includes(name)) score += 30;
  else return null;
  if (a.album_type === "album") score += 20;
  if (a.release_date?.startsWith(String(year))) score += 30;
  if (/deluxe|anniversary|expanded|remaster|live|edition/i.test(a.name)) score -= 25;
  return score;
}

export async function resolveSpotifyAlbum(
  artist: string,
  title: string,
  year: number,
): Promise<SpotifyResolvedAlbum | null> {
  const token = await getAccessToken();
  if (!token) return null;

  const headers = { authorization: `Bearer ${token}` };
  const queries = [
    `album:${title} artist:${artist}`,
    `${artist} ${title}`,
    `${title} ${artist}`,
  ];

  const wantArtist = normalise(artist);
  const wantTitle = normalise(title);
  let best: SearchAlbum | null = null;
  let bestScore = -1;

  for (const q of queries) {
    const searchRes = await fetch(
      `https://api.spotify.com/v1/search?type=album&limit=10&q=${encodeURIComponent(q)}`,
      { headers, next: { revalidate: 60 * 60 * 24 * 7 } },
    );
    if (!searchRes.ok) continue;
    const search = (await searchRes.json()) as SearchResponse;
    for (const a of search.albums?.items ?? []) {
      const score = scoreAlbum(a, wantArtist, wantTitle, year);
      if (score !== null && score > bestScore) {
        best = a;
        bestScore = score;
      }
    }
    if (bestScore >= 100) break;
  }

  if (!best) return null;

  const albumRes = await fetch(`https://api.spotify.com/v1/albums/${best.id}`, {
    headers,
    next: { revalidate: 60 * 60 * 24 * 7 },
  });
  if (!albumRes.ok) return null;
  const album = (await albumRes.json()) as AlbumResponse;
  const covers = pickCover(album.images);

  const tracks: SpotifyTrack[] = [];
  const page = album.tracks;
  let nextUrl = page?.next ?? null;
  for (const t of page?.items ?? []) {
    tracks.push({
      id: t.id,
      name: t.name,
      durationMs: t.duration_ms,
      explicit: t.explicit,
      trackNumber: t.track_number,
      discNumber: t.disc_number,
      previewUrl: t.preview_url,
    });
  }
  while (nextUrl) {
    const res: Response = await fetch(nextUrl, { headers, next: { revalidate: 60 * 60 * 24 * 7 } });
    if (!res.ok) break;
    const data = (await res.json()) as TracksPage;
    for (const t of data.items) {
      tracks.push({
        id: t.id,
        name: t.name,
        durationMs: t.duration_ms,
        explicit: t.explicit,
        trackNumber: t.track_number,
        discNumber: t.disc_number,
        previewUrl: t.preview_url,
      });
    }
    nextUrl = data.next;
  }

  tracks.sort((a, b) => a.discNumber - b.discNumber || a.trackNumber - b.trackNumber);

  return {
    id: album.id,
    name: album.name,
    releaseDate: album.release_date ?? null,
    label: album.label ?? null,
    coverUrl: covers.large,
    coverSmallUrl: covers.small,
    tracks,
  };
}
