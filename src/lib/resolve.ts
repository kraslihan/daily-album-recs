import "server-only";

import { fetchDeezerAlbum } from "./deezer";
import {
  isSpotifyApiConfigured,
  matchSpotifyTrack,
  resolveSpotifyAlbum,
  spotifyAlbumUrl,
  spotifySearchUrl,
  spotifyTrackUrl,
} from "./spotify";
import type { Album, ResolvedAlbum, Track } from "./types";

export async function resolveAlbum(album: Album): Promise<ResolvedAlbum> {
  const [deezer, spotify] = await Promise.all([
    fetchDeezerAlbum(album.deezerId),
    isSpotifyApiConfigured()
      ? resolveSpotifyAlbum(album.artist, album.title, album.year).catch(() => null)
      : Promise.resolve(null),
  ]);

  const albumQuery = `${album.artist} ${album.title}`;
  const spotifyAlbumId = spotify?.id ?? null;
  const spotifyAlbum = spotifyAlbumId ? spotifyAlbumUrl(spotifyAlbumId) : spotifySearchUrl(albumQuery);

  const deezerTracks = deezer?.tracks ?? [];
  const tracks: Track[] = deezerTracks.map((t) => {
    const spotifyId = spotify ? matchSpotifyTrack(spotify, t.title, t.position, deezerTracks.length) : null;
    return {
      position: t.position,
      title: t.title,
      duration: t.duration,
      previewUrl: t.previewUrl,
      explicit: t.explicit,
      spotifyUrl: spotifyId ? spotifyTrackUrl(spotifyId) : spotifySearchUrl(`${t.title} ${album.artist}`),
    };
  });

  return {
    album,
    coverUrl: deezer?.coverUrl ?? null,
    coverSmallUrl: deezer?.coverSmallUrl ?? null,
    releaseDate: deezer?.releaseDate ?? null,
    label: deezer?.label ?? null,
    totalDuration: deezer?.duration ?? (tracks.length ? tracks.reduce((s, t) => s + t.duration, 0) : null),
    tracks,
    spotifyAlbumUrl: spotifyAlbum,
    spotifyAlbumId,
    tracksUnavailable: tracks.length === 0,
  };
}
