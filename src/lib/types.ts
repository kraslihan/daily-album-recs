export type Album = {
  /** URL-safe unique key, e.g. "three-days-grace-one-x". */
  slug: string;
  artist: string;
  title: string;
  year: number;
  /** Deezer album id, used for cover art, tracklist and 30s previews (no API key needed). */
  deezerId: number;
  genres: string[];
  /** Where the artist is from, shown as a small label. */
  origin: string;
  /** One sentence: why this album fits the listener's taste. */
  why: string;
  /** Album story paragraphs. */
  story: string[];
  /** About the artist / band. */
  artistInfo: string;
  /** Line-up on the record (or the core people behind it). */
  members: string[];
  funFacts: string[];
  /** Which of the listener's favourite artists this record connects to. */
  relatedTo: string[];
};

export type Track = {
  position: number;
  title: string;
  /** Seconds. */
  duration: number;
  /** 30 second MP3 preview, when the source provides one. */
  previewUrl: string | null;
  explicit: boolean;
  /** Exact Spotify track URL when the Spotify API is configured; otherwise a Spotify search deep link. */
  spotifyUrl: string;
};

export type ResolvedAlbum = {
  album: Album;
  coverUrl: string | null;
  coverSmallUrl: string | null;
  releaseDate: string | null;
  label: string | null;
  totalDuration: number | null;
  tracks: Track[];
  /** Exact Spotify album URL when available, otherwise a search deep link. */
  spotifyAlbumUrl: string;
  /** Spotify album id when the Spotify API resolved it (enables the embedded player). */
  spotifyAlbumId: string | null;
  /** True when the tracklist could not be loaded from any source. */
  tracksUnavailable: boolean;
};
