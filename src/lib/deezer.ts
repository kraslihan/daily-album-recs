import "server-only";

export type DeezerAlbum = {
  id: number;
  title: string;
  coverUrl: string | null;
  coverSmallUrl: string | null;
  releaseDate: string | null;
  label: string | null;
  duration: number | null;
  tracks: DeezerTrack[];
};

export type DeezerTrack = {
  id: number;
  title: string;
  duration: number;
  previewUrl: string | null;
  explicit: boolean;
  position: number;
};

type DeezerAlbumResponse = {
  id: number;
  title: string;
  cover_xl?: string;
  cover_big?: string;
  cover_medium?: string;
  release_date?: string;
  label?: string;
  duration?: number;
  tracks?: {
    data: Array<{
      id: number;
      title: string;
      duration: number;
      preview?: string;
      explicit_lyrics?: boolean;
    }>;
  };
  error?: { message?: string };
};

/**
 * Deezer's public album endpoint needs no API key and covers the whole catalogue,
 * including records that are missing from the iTunes storefront. Album data is
 * immutable, so it is cached indefinitely in Next's data cache.
 */
export async function fetchDeezerAlbum(deezerId: number): Promise<DeezerAlbum | null> {
  try {
    const res = await fetch(`https://api.deezer.com/album/${deezerId}`, {
      cache: "force-cache",
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as DeezerAlbumResponse;
    if (data.error || !data.id) return null;

    return {
      id: data.id,
      title: data.title,
      coverUrl: data.cover_xl ?? data.cover_big ?? null,
      coverSmallUrl: data.cover_medium ?? data.cover_big ?? null,
      releaseDate: data.release_date ?? null,
      label: data.label ?? null,
      duration: data.duration ?? null,
      tracks: (data.tracks?.data ?? []).map((t, i) => ({
        id: t.id,
        title: t.title,
        duration: t.duration,
        previewUrl: t.preview || null,
        explicit: Boolean(t.explicit_lyrics),
        position: i + 1,
      })),
    };
  } catch {
    return null;
  }
}
