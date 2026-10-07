import { getPhotoById } from "@/data/harryData";
import { createFreshState } from "./algorithm";
import type { GameState, PersistableState } from "./types";
import { STORAGE_KEY } from "./types";

export const toPersistable = (state: GameState): PersistableState => ({
  phase: state.phase,
  photoScores: state.photoScores,
  eraScores: state.eraScores,
  matchesPlayed: state.matchesPlayed,
  targetMatches: state.targetMatches,
  maybePile: state.maybePile,
  seenPairs: state.seenPairs,
  maybeIndex: state.maybeIndex,
  winnerId: state.winnerId,
  topThreeIds: state.topThreeIds,
  selectionsSinceReaction: state.selectionsSinceReaction,
  currentPairIds: state.currentPair
    ? [state.currentPair.a.id, state.currentPair.b.id]
    : null,
});

export const fromPersistable = (data: PersistableState): GameState | null => {
  if (!data || typeof data !== "object") return null;
  if (!data.phase || !data.photoScores || !data.eraScores) return null;

  let currentPair = null;
  if (data.currentPairIds) {
    const a = getPhotoById(data.currentPairIds[0]);
    const b = getPhotoById(data.currentPairIds[1]);
    if (a && b) currentPair = { a, b };
  }

  return {
    phase: data.phase,
    photoScores: data.photoScores,
    eraScores: data.eraScores,
    matchesPlayed: data.matchesPlayed ?? 0,
    targetMatches: data.targetMatches ?? 15,
    maybePile: data.maybePile ?? [],
    seenPairs: data.seenPairs ?? [],
    currentPair,
    maybeIndex: data.maybeIndex ?? 0,
    winnerId: data.winnerId,
    topThreeIds: data.topThreeIds ?? [],
    selectionsSinceReaction: data.selectionsSinceReaction ?? 0,
    hydrated: true,
  };
};

export const saveGame = (state: GameState) => {
  if (typeof window === "undefined") return;
  try {
    if (state.phase === "intro" || state.phase === "result") {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersistable(state)));
  } catch {
    // ignore quota / private mode
  }
};

export const loadGame = (): GameState | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return fromPersistable(JSON.parse(raw) as PersistableState);
  } catch {
    return null;
  }
};

export const clearGame = () => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
};

export const resetGame = (): GameState => {
  clearGame();
  return createFreshState();
};
