import "server-only";

import { fetchDeezerAlbum } from "./deezer";
import { fetchItunesAlbum } from "./itunes";
import {
  isSpotifyApiConfigured,
  resolveSpotifyAlbum,
  spotifyAlbumUrl,
  spotifySearchUrl,
  spotifyTrackUrl,
} from "./spotify";
import type { Album, ResolvedAlbum, Track } from "./types";

export async function resolveAlbum(album: Album): Promise<ResolvedAlbum> {
  const [deezer, spotify, itunes] = await Promise.all([
    fetchDeezerAlbum(album.deezerId).catch(() => null),
    isSpotifyApiConfigured()
      ? resolveSpotifyAlbum(album.artist, album.title, album.year).catch(() => null)
      : Promise.resolve(null),
    fetchItunesAlbum(album.artist, album.title, album.year).catch(() => null),
  ]);

  const albumQuery = `${album.artist} ${album.title}`;
  const spotifyAlbumId = spotify?.id ?? null;
  const spotifyAlbum = spotifyAlbumId ? spotifyAlbumUrl(spotifyAlbumId) : spotifySearchUrl(albumQuery);

  let tracks: Track[] = [];

  if (spotify && spotify.tracks.length) {
    tracks = spotify.tracks.map((t, i) => {
      const deezerPreview = deezer?.tracks.find((d) => d.position === i + 1)?.previewUrl
        ?? deezer?.tracks.find((d) => d.title.toLowerCase() === t.name.toLowerCase())?.previewUrl
        ?? null;
      const itunesPreview = itunes?.tracks.find((d) => d.position === i + 1)?.previewUrl
        ?? itunes?.tracks.find((d) => d.title.toLowerCase() === t.name.toLowerCase())?.previewUrl
        ?? null;
      return {
        position: i + 1,
        title: t.name,
        duration: Math.round(t.durationMs / 1000),
        previewUrl: t.previewUrl ?? deezerPreview ?? itunesPreview,
        explicit: t.explicit,
        spotifyUrl: spotifyTrackUrl(t.id),
      };
    });
  } else if (deezer && deezer.tracks.length) {
    tracks = deezer.tracks.map((t) => ({
      position: t.position,
      title: t.title,
      duration: t.duration,
      previewUrl: t.previewUrl,
      explicit: t.explicit,
      spotifyUrl: spotifySearchUrl(`${t.title} ${album.artist}`),
    }));
  } else if (itunes && itunes.tracks.length) {
    tracks = itunes.tracks.map((t) => ({
      position: t.position,
      title: t.title,
      duration: t.duration,
      previewUrl: t.previewUrl,
      explicit: t.explicit,
      spotifyUrl: spotifySearchUrl(`${t.title} ${album.artist}`),
    }));
  }

  return {
    album,
    coverUrl: spotify?.coverUrl ?? deezer?.coverUrl ?? itunes?.coverUrl ?? null,
    coverSmallUrl: spotify?.coverSmallUrl ?? deezer?.coverSmallUrl ?? itunes?.coverSmallUrl ?? null,
    releaseDate: spotify?.releaseDate ?? deezer?.releaseDate ?? itunes?.releaseDate ?? null,
    label: spotify?.label ?? deezer?.label ?? null,
    totalDuration: tracks.length ? tracks.reduce((s, t) => s + t.duration, 0) : (deezer?.duration ?? null),
    tracks,
    spotifyAlbumUrl: spotifyAlbum,
    spotifyAlbumId,
    tracksUnavailable: tracks.length === 0,
  };
}
