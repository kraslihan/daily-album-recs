import { coreAlbums } from "./catalog-core";
import { similarAlbums } from "./catalog-similar";
import type { Album } from "./types";

export const catalog: Album[] = [...coreAlbums, ...similarAlbums];

const bySlug = new Map(catalog.map((a) => [a.slug, a]));

export function getAlbumBySlug(slug: string): Album | undefined {
  return bySlug.get(slug);
}

/** The listener's favourite artists, in the order they were given. */
export const favouriteArtists = [
  "Three Days Grace",
  "The Pretty Reckless",
  "Breaking Benjamin",
  "Panic! At the Disco",
  "The Neighbourhood",
  "Imagine Dragons",
  "The Beatles",
  "Broken Bells",
];
