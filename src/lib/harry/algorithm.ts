import { getEras, getPhotoById, harryPhotos, type HarryPhoto } from "@/data/harryData";
import type { GameState, MatchPair, MaybeEntry } from "./types";
import { MAX_MAYBE_ROUNDS, TARGET_MATCHES } from "./types";

const pairKey = (aId: string, bId: string) =>
  [aId, bId].sort().join("::");

const shuffle = <T>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const createInitialScores = () => {
  const photoScores: Record<string, number> = {};
  const eraScores: Record<string, number> = {};
  for (const photo of harryPhotos) {
    photoScores[photo.id] = 0;
    eraScores[photo.era] = eraScores[photo.era] ?? 0;
  }
  return { photoScores, eraScores };
};

export const createFreshState = (): GameState => {
  const { photoScores, eraScores } = createInitialScores();
  return {
    phase: "intro",
    photoScores,
    eraScores,
    matchesPlayed: 0,
    targetMatches: TARGET_MATCHES,
    maybePile: [],
    seenPairs: [],
    currentPair: null,
    maybeIndex: 0,
    winnerId: null,
    topThreeIds: [],
    selectionsSinceReaction: 0,
    hydrated: true,
  };
};

const wasSeen = (seen: string[], aId: string, bId: string) =>
  seen.includes(pairKey(aId, bId));

const progressRatio = (state: GameState) =>
  state.matchesPlayed / Math.max(1, state.targetMatches);

/** Rank eras by score (desc), then by photo count as tiebreaker. */
export const rankedEras = (eraScores: Record<string, number>): string[] => {
  const eras = getEras();
  return [...eras].sort((a, b) => {
    const diff = (eraScores[b] ?? 0) - (eraScores[a] ?? 0);
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  });
};

const photosInEra = (era: string) => harryPhotos.filter((p) => p.era === era);

const pickWeightedPhoto = (
  pool: HarryPhoto[],
  photoScores: Record<string, number>,
  preferHigh: boolean,
): HarryPhoto | null => {
  if (pool.length === 0) return null;
  const scored = pool.map((photo) => {
    const scoreWeight = preferHigh
      ? Math.max(0.35, (photoScores[photo.id] ?? 0) + 1)
      : Math.max(0.35, 2.5 - (photoScores[photo.id] ?? 0));
    // Prefer real demo photos over SVG placeholders when both exist.
    const mediaBoost = photo.image.endsWith(".svg") ? 0.25 : 1.35;
    return { photo, weight: scoreWeight * mediaBoost };
  });
  const total = scored.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of scored) {
    roll -= item.weight;
    if (roll <= 0) return item.photo;
  }
  return scored[scored.length - 1]?.photo ?? null;
};

const tryBuildPair = (
  leftPool: HarryPhoto[],
  rightPool: HarryPhoto[],
  state: GameState,
  preferHighScores: boolean,
): MatchPair | null => {
  const attempts = 40;
  for (let i = 0; i < attempts; i += 1) {
    const a = pickWeightedPhoto(leftPool, state.photoScores, preferHighScores);
    const b = pickWeightedPhoto(rightPool, state.photoScores, preferHighScores);
    if (!a || !b || a.id === b.id) continue;
    if (wasSeen(state.seenPairs, a.id, b.id)) continue;
    return { a, b };
  }
  // Fallback: any unseen pair across pools
  for (const a of shuffle(leftPool)) {
    for (const b of shuffle(rightPool)) {
      if (a.id === b.id) continue;
      if (wasSeen(state.seenPairs, a.id, b.id)) continue;
      return { a, b };
    }
  }
  return null;
};

/**
 * Exploration → preference detection → narrowing.
 * Early: cross-era. Mid: mix. Late: within top eras.
 */
export const pickNextPair = (state: GameState): MatchPair | null => {
  const ratio = progressRatio(state);
  const eras = rankedEras(state.eraScores);
  const preferHigh = ratio > 0.35;

  // Late game: intra-era look battles among top eras
  if (ratio >= 0.55) {
    const topEras = eras.slice(0, Math.min(3, eras.length));
    for (const era of shuffle(topEras)) {
      const pool = photosInEra(era);
      if (pool.length < 2) continue;
      const pair = tryBuildPair(pool, pool, state, true);
      if (pair) return pair;
    }
    // Cross among top eras if intra-era exhausted
    if (topEras.length >= 2) {
      const [e1, e2] = shuffle(topEras).slice(0, 2);
      const pair = tryBuildPair(photosInEra(e1), photosInEra(e2), state, true);
      if (pair) return pair;
    }
  }

  // Mid: bias toward higher-scoring eras vs mid-tier
  if (ratio >= 0.3) {
    const strong = eras.slice(0, Math.max(2, Math.ceil(eras.length / 2)));
    const weak = eras.slice(Math.floor(eras.length / 2));
    if (Math.random() < 0.55 && strong.length >= 2) {
      const [e1, e2] = shuffle(strong).slice(0, 2);
      const pair = tryBuildPair(photosInEra(e1), photosInEra(e2), state, preferHigh);
      if (pair) return pair;
    }
    if (strong.length && weak.length) {
      const e1 = shuffle(strong)[0];
      const e2 = shuffle(weak)[0];
      const pair = tryBuildPair(photosInEra(e1), photosInEra(e2), state, preferHigh);
      if (pair) return pair;
    }
  }

  // Early exploration: different eras
  const shuffledEras = shuffle(eras);
  for (let i = 0; i < shuffledEras.length; i += 1) {
    for (let j = i + 1; j < shuffledEras.length; j += 1) {
      const pair = tryBuildPair(
        photosInEra(shuffledEras[i]),
        photosInEra(shuffledEras[j]),
        state,
        false,
      );
      if (pair) return pair;
    }
  }

  // Absolute fallback: any two unseen photos
  return tryBuildPair(harryPhotos, harryPhotos, state, preferHigh);
};

export const applyChoice = (
  state: GameState,
  choice: "a" | "b" | "maybe" | "both",
): GameState => {
  const pair = state.currentPair;
  if (!pair) return state;

  const nextScores = { ...state.photoScores };
  const nextEraScores = { ...state.eraScores };
  let nextMaybe = [...state.maybePile];

  if (choice === "a") {
    nextScores[pair.a.id] = (nextScores[pair.a.id] ?? 0) + 1;
    nextEraScores[pair.a.era] = (nextEraScores[pair.a.era] ?? 0) + 1;
  } else if (choice === "b") {
    nextScores[pair.b.id] = (nextScores[pair.b.id] ?? 0) + 1;
    nextEraScores[pair.b.era] = (nextEraScores[pair.b.era] ?? 0) + 1;
  } else if (choice === "maybe") {
    nextScores[pair.a.id] = (nextScores[pair.a.id] ?? 0) + 0.5;
    nextScores[pair.b.id] = (nextScores[pair.b.id] ?? 0) + 0.5;
    nextEraScores[pair.a.era] = (nextEraScores[pair.a.era] ?? 0) + 0.5;
    nextEraScores[pair.b.era] = (nextEraScores[pair.b.era] ?? 0) + 0.5;
    nextMaybe = [...nextMaybe, { aId: pair.a.id, bId: pair.b.id }];
  } else if (choice === "both") {
    // Equal bump — neither advances alone
    nextScores[pair.a.id] = (nextScores[pair.a.id] ?? 0) + 0.5;
    nextScores[pair.b.id] = (nextScores[pair.b.id] ?? 0) + 0.5;
    nextEraScores[pair.a.era] = (nextEraScores[pair.a.era] ?? 0) + 0.5;
    nextEraScores[pair.b.era] = (nextEraScores[pair.b.era] ?? 0) + 0.5;
  }

  const seenPairs = [...state.seenPairs, pairKey(pair.a.id, pair.b.id)];
  const matchesPlayed = state.matchesPlayed + 1;

  return {
    ...state,
    photoScores: nextScores,
    eraScores: nextEraScores,
    maybePile: nextMaybe,
    seenPairs,
    matchesPlayed,
    selectionsSinceReaction: state.selectionsSinceReaction + 1,
  };
};

export const uniqueMaybeCandidates = (pile: MaybeEntry[]): HarryPhoto[] => {
  const ids = new Set<string>();
  for (const entry of pile) {
    ids.add(entry.aId);
    ids.add(entry.bId);
  }
  return [...ids]
    .map((id) => getPhotoById(id))
    .filter((p): p is HarryPhoto => Boolean(p));
};

export const buildMaybePairs = (pile: MaybeEntry[]): MatchPair[] => {
  const candidates = uniqueMaybeCandidates(pile);
  if (candidates.length < 2) return [];

  // Prefer original unresolved pairs first, then fill from leftover strong candidates
  const pairs: MatchPair[] = [];
  const used = new Set<string>();

  for (const entry of pile) {
    if (pairs.length >= MAX_MAYBE_ROUNDS) break;
    const a = getPhotoById(entry.aId);
    const b = getPhotoById(entry.bId);
    if (!a || !b) continue;
    const key = pairKey(a.id, b.id);
    if (used.has(key)) continue;
    used.add(key);
    pairs.push({ a, b });
  }

  // If we still have room and 3+ candidates, pair leftovers by score later via caller
  if (pairs.length < MAX_MAYBE_ROUNDS && candidates.length >= 3) {
    const leftovers = shuffle(candidates);
    for (let i = 0; i + 1 < leftovers.length && pairs.length < MAX_MAYBE_ROUNDS; i += 2) {
      const a = leftovers[i];
      const b = leftovers[i + 1];
      const key = pairKey(a.id, b.id);
      if (used.has(key)) continue;
      used.add(key);
      pairs.push({ a, b });
    }
  }

  return pairs.slice(0, MAX_MAYBE_ROUNDS);
};

export const getTopPhotos = (
  photoScores: Record<string, number>,
  count = 3,
): HarryPhoto[] => {
  return [...harryPhotos]
    .sort((a, b) => {
      const diff = (photoScores[b.id] ?? 0) - (photoScores[a.id] ?? 0);
      if (diff !== 0) return diff;
      return a.id.localeCompare(b.id);
    })
    .slice(0, count);
};

export const getFinalPair = (state: GameState): MatchPair | null => {
  const top = getTopPhotos(state.photoScores, 2);
  if (top.length < 2) return null;
  return { a: top[0], b: top[1] };
};

export const getWinningEra = (eraScores: Record<string, number>): string =>
  rankedEras(eraScores)[0] ?? getEras()[0] ?? "Harry's House";

export const eraPickPercentage = (
  eraScores: Record<string, number>,
  era: string,
): number => {
  const total = Object.values(eraScores).reduce((sum, n) => sum + n, 0);
  if (total <= 0) return 0;
  return Math.round(((eraScores[era] ?? 0) / total) * 100);
};

export const battleProgress = (state: GameState): number => {
  if (state.phase === "result") return 1;
  if (state.phase === "final") return 0.95;
  if (state.phase === "maybe") {
    const maybePairs = buildMaybePairs(state.maybePile);
    const total = Math.max(1, maybePairs.length);
    return 0.75 + (state.maybeIndex / total) * 0.15;
  }
  return Math.min(0.75, (state.matchesPlayed / state.targetMatches) * 0.75);
};
