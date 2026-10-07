import type { HarryPhoto } from "@/data/harryData";

export type GamePhase =
  | "intro"
  | "battle"
  | "maybe"
  | "final"
  | "result";

export type MatchPair = {
  a: HarryPhoto;
  b: HarryPhoto;
};

export type MaybeEntry = {
  aId: string;
  bId: string;
};

export type ChoiceKind = "a" | "b" | "maybe" | "both";

export type GameState = {
  phase: GamePhase;
  photoScores: Record<string, number>;
  eraScores: Record<string, number>;
  matchesPlayed: number;
  targetMatches: number;
  maybePile: MaybeEntry[];
  seenPairs: string[];
  currentPair: MatchPair | null;
  maybeIndex: number;
  winnerId: string | null;
  topThreeIds: string[];
  selectionsSinceReaction: number;
  hydrated: boolean;
};

export type PersistableState = Omit<GameState, "currentPair" | "hydrated"> & {
  currentPairIds: [string, string] | null;
};

export const STORAGE_KEY = "harry-era-battle-v4";
export const TARGET_MATCHES = 15;
export const MAX_MAYBE_ROUNDS = 4;
