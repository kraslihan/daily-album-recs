import { coreAlbums } from "./catalog-core";
import { discoveryAlbums } from "./catalog-discovery";
import { similarAlbums } from "./catalog-similar";
import type { Album, AlbumLane } from "./types";

const discoveryPool: Album[] = [...similarAlbums, ...discoveryAlbums];

/** The day rolls over at 00:00 in this timezone, regardless of where the visitor is. */
export const TIMEZONE = "Europe/Istanbul";

/** Fixed seed so the shuffle order is identical on every server, forever. */
const ROTATION_SEED = 20261030;

const DAY_MS = 86_400_000;
const DAY_KEY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * 3-day loop:
 *   day % 3 === 0  → an album by one of the listener's own artists
 *   day % 3 === 1  → discovery
 *   day % 3 === 2  → discovery
 */
export const CYCLE_LENGTH = 3;

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Spread an artist's albums across the list so the same name is not back-to-back.
 */
function spreadByArtist(albums: Album[], seed: number): Album[] {
  const rand = mulberry32(seed);
  const groups = new Map<string, Album[]>();
  for (const album of albums) {
    const list = groups.get(album.artist) ?? [];
    list.push(album);
    groups.set(album.artist, list);
  }

  const total = albums.length;
  const lanes = seededShuffle([...groups.values()], rand).map((g) => {
    const stride = total / g.length;
    return { queue: seededShuffle(g, rand), stride, due: rand() * stride };
  });

  const rotation: Album[] = [];
  for (let slot = 0; slot < total; slot++) {
    let pick = -1;
    for (let i = 0; i < lanes.length; i++) {
      const lane = lanes[i];
      if (!lane.queue.length) continue;
      if (pick === -1 || lane.due < lanes[pick].due) pick = i;
    }
    const lane = lanes[pick];
    rotation.push(lane.queue.shift()!);
    lane.due += lane.stride;
  }
  return rotation;
}

const knownRotation = spreadByArtist(coreAlbums, ROTATION_SEED);
const discoveryRotation = spreadByArtist(discoveryPool, ROTATION_SEED + 1);

export function getLaneForDay(dayKey: string): AlbumLane {
  const n = dayKeyToNumber(dayKey);
  return ((n % CYCLE_LENGTH) + CYCLE_LENGTH) % CYCLE_LENGTH === 0 ? "known" : "discovery";
}

export function getAlbumForDay(dayKey: string): Album {
  const n = dayKeyToNumber(dayKey);
  const slot = ((n % CYCLE_LENGTH) + CYCLE_LENGTH) % CYCLE_LENGTH;
  const cycle = Math.floor(n / CYCLE_LENGTH);

  if (slot === 0) {
    return knownRotation[((cycle % knownRotation.length) + knownRotation.length) % knownRotation.length];
  }

  const discoveryIndex = cycle * 2 + (slot - 1);
  return discoveryRotation[((discoveryIndex % discoveryRotation.length) + discoveryRotation.length) % discoveryRotation.length];
}

function zonedParts(date: Date, timeZone: string) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts: Record<string, number> = {};
  for (const p of dtf.formatToParts(date)) {
    if (p.type !== "literal") parts[p.type] = Number(p.value);
  }
  return parts as { year: number; month: number; day: number; hour: number; minute: number; second: number };
}

/** "YYYY-MM-DD" for the given instant, as seen from the app's timezone. */
export function getDayKey(date: Date = new Date(), timeZone: string = TIMEZONE): string {
  const { year, month, day } = zonedParts(date, timeZone);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function isValidDayKey(key: string): boolean {
  const m = DAY_KEY_RE.exec(key);
  if (!m) return false;
  const [, y, mo, d] = m.map(Number);
  const dt = new Date(Date.UTC(y, mo - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
}

/** Whole days since the Unix epoch for a "YYYY-MM-DD" key. */
export function dayKeyToNumber(key: string): number {
  const [y, m, d] = key.split("-").map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / DAY_MS);
}

export function shiftDayKey(key: string, deltaDays: number): string {
  const n = dayKeyToNumber(key) + deltaDays;
  return new Date(n * DAY_MS).toISOString().slice(0, 10);
}

/** The exact instant at which `dayKey` begins (00:00) in the app's timezone. */
export function zonedMidnight(dayKey: string, timeZone: string = TIMEZONE): Date {
  const [y, m, d] = dayKey.split("-").map(Number);
  const guess = Date.UTC(y, m - 1, d);
  const p = zonedParts(new Date(guess), timeZone);
  const seenAs = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  const offset = seenAs - guess;
  return new Date(guess - offset);
}

/** Next 00:00 in the app's timezone after `now`. */
export function getNextMidnight(now: Date = new Date()): Date {
  return zonedMidnight(shiftDayKey(getDayKey(now), 1));
}

export function getTodayKey(): string {
  return getDayKey(new Date());
}

export function formatDayKey(dayKey: string, locale = "tr-TR"): string {
  const [y, m, d] = dayKey.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

export const knownCatalogSize = knownRotation.length;
export const discoveryCatalogSize = discoveryRotation.length;
/** How far back the archive goes: a little over a year of unique days. */
export const catalogSize = 400;
export const catalogTotal = knownRotation.length + discoveryRotation.length;
