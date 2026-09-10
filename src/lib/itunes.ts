import "server-only";

import { normalise } from "./spotify";

export type ItunesAlbum = {
  collectionId: number;
  coverUrl: string | null;
  coverSmallUrl: string | null;
  releaseDate: string | null;
  tracks: Array<{
    title: string;
    duration: number;
    previewUrl: string | null;
    explicit: boolean;
    position: number;
  }>;
};

type ItunesResult = {
  wrapperType?: string;
  collectionId?: number;
  artistName?: string;
  collectionName?: string;
  artworkUrl100?: string;
  releaseDate?: string;
  trackCount?: number;
  trackName?: string;
  trackTimeMillis?: number;
  previewUrl?: string;
  trackExplicitness?: string;
  trackNumber?: number;
  collectionExplicitness?: string;
};

function artwork(url: string | undefined, size: number): string | null {
  if (!url) return null;
  return url.replace(/\/\d+x\d+bb\./, `/${size}x${size}bb.`);
}

/**
 * Public iTunes Search API — no key. Used when Deezer is blocked (common on Vercel)
 * and as a source of 30s previews.
 */
export async function fetchItunesAlbum(artist: string, title: string, year: number): Promise<ItunesAlbum | null> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(`${artist} ${title}`)}&entity=album&limit=12&country=us`,
      { next: { revalidate: 60 * 60 * 24 * 7 }, headers: { accept: "application/json" } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { results?: ItunesResult[] };
    const wantArtist = normalise(artist);
    const wantTitle = normalise(title);

    const scored = (data.results ?? [])
      .filter((r) => r.wrapperType === "collection" && r.collectionId)
      .map((r) => {
        const an = normalise(r.artistName ?? "");
        const tn = normalise(r.collectionName ?? "");
        let score = 0;
        if (!(an.includes(wantArtist) || wantArtist.includes(an))) return { r, score: -1 };
        if (tn === wantTitle) score += 100;
        else if (tn.startsWith(wantTitle) || wantTitle.startsWith(tn)) score += 60;
        else if (tn.includes(wantTitle)) score += 25;
        else return { r, score: -1 };
        if (r.releaseDate?.startsWith(String(year))) score += 30;
        if (/deluxe|anniversary|expanded|remaster|live|edition/i.test(r.collectionName ?? "")) score -= 25;
        return { r, score };
      })
      .filter((x) => x.score >= 0)
      .sort((a, b) => b.score - a.score);

    const best = scored[0]?.r;
    if (!best?.collectionId) return null;

    const lookup = await fetch(
      `https://itunes.apple.com/lookup?id=${best.collectionId}&entity=song&country=us`,
      { next: { revalidate: 60 * 60 * 24 * 7 }, headers: { accept: "application/json" } },
    );
    if (!lookup.ok) return null;
    const looked = (await lookup.json()) as { results?: ItunesResult[] };
    const collection = looked.results?.find((r) => r.wrapperType === "collection") ?? best;
    const songs = (looked.results ?? [])
      .filter((r) => r.wrapperType === "track" && r.trackName)
      .sort((a, b) => (a.trackNumber ?? 0) - (b.trackNumber ?? 0));

    return {
      collectionId: best.collectionId,
      coverUrl: artwork(collection.artworkUrl100, 1000),
      coverSmallUrl: artwork(collection.artworkUrl100, 200),
      releaseDate: collection.releaseDate?.slice(0, 10) ?? null,
      tracks: songs.map((t, i) => ({
        title: t.trackName!,
        duration: Math.round((t.trackTimeMillis ?? 0) / 1000),
        previewUrl: t.previewUrl ?? null,
        explicit: t.trackExplicitness === "explicit",
        position: t.trackNumber ?? i + 1,
      })),
    };
  } catch {
    return null;
  }
}
