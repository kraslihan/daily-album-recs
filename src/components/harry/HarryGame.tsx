"use client";

import { useEffect, useRef, useState } from "react";
import { getPhotoById } from "@/data/harryData";
import {
  applyChoice,
  battleProgress,
  buildMaybePairs,
  createFreshState,
  eraPickPercentage,
  getFinalPair,
  getTopPhotos,
  getWinningEra,
  pickNextPair,
} from "@/lib/harry/algorithm";
import { pickReaction, shouldShowReaction } from "@/lib/harry/reactions";
import { clearGame, loadGame, resetGame, saveGame } from "@/lib/harry/storage";
import type { GameState, MatchPair } from "@/lib/harry/types";
import { BattleScreen } from "./BattleScreen";
import { FinalBattle } from "./FinalBattle";
import { GameIntro } from "./GameIntro";
import { MaybeRound } from "./MaybeRound";
import { ReactionToast } from "./ReactionToast";
import { ResultScreen } from "./ResultScreen";

export function HarryGame() {
  const [state, setState] = useState<GameState>(() => ({
    ...createFreshState(),
    hydrated: false,
  }));
  const [reaction, setReaction] = useState<string | null>(null);
  const [maybeQueue, setMaybeQueue] = useState<MatchPair[]>([]);
  const reactionTimer = useRef<number | null>(null);

  useEffect(() => {
    const saved = loadGame();
    if (saved && saved.phase !== "intro" && saved.phase !== "result") {
      setState(saved);
      if (saved.phase === "maybe") {
        setMaybeQueue(buildMaybePairs(saved.maybePile));
      }
    } else {
      setState(createFreshState());
    }
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    saveGame(state);
  }, [state]);

  useEffect(() => {
    return () => {
      if (reactionTimer.current) window.clearTimeout(reactionTimer.current);
    };
  }, []);

  const showReactionMaybe = (next: GameState) => {
    if (!shouldShowReaction(next.selectionsSinceReaction)) return next;
    const message = pickReaction();
    setReaction(message);
    if (reactionTimer.current) window.clearTimeout(reactionTimer.current);
    reactionTimer.current = window.setTimeout(() => {
      setReaction(null);
    }, 850);
    return { ...next, selectionsSinceReaction: 0 };
  };

  const startBattle = () => {
    const base = createFreshState();
    const pair = pickNextPair(base);
    setMaybeQueue([]);
    setReaction(null);
    setState({
      ...base,
      phase: "battle",
      currentPair: pair,
    });
  };

  const advanceAfterBattle = (updated: GameState) => {
    const withReaction = showReactionMaybe(updated);

    if (withReaction.matchesPlayed >= withReaction.targetMatches) {
      const queue = buildMaybePairs(withReaction.maybePile);
      if (queue.length > 0) {
        setMaybeQueue(queue);
        setState({
          ...withReaction,
          phase: "maybe",
          maybeIndex: 0,
          currentPair: queue[0] ?? null,
        });
        return;
      }
      enterFinal(withReaction);
      return;
    }

    const nextPair = pickNextPair(withReaction);
    if (!nextPair) {
      enterFinal(withReaction);
      return;
    }

    setState({
      ...withReaction,
      phase: "battle",
      currentPair: nextPair,
    });
  };

  const enterFinal = (base: GameState) => {
    const pair = getFinalPair(base);
    if (!pair) {
      finishWithWinner(base, getTopPhotos(base.photoScores, 1)[0]?.id ?? null);
      return;
    }
    setState({
      ...base,
      phase: "final",
      currentPair: pair,
    });
  };

  const finishWithWinner = (base: GameState, winnerId: string | null) => {
    const ranked = getTopPhotos(base.photoScores, 5);
    const resolvedWinner =
      winnerId ??
      ranked[0]?.id ??
      null;
    const topThreeIds = resolvedWinner
      ? [
          resolvedWinner,
          ...ranked.map((p) => p.id).filter((id) => id !== resolvedWinner),
        ].slice(0, 3)
      : ranked.slice(0, 3).map((p) => p.id);
    clearGame();
    setState({
      ...base,
      phase: "result",
      winnerId: resolvedWinner,
      topThreeIds,
      currentPair: null,
    });
  };

  const handleBattleChoice = (choice: "a" | "b" | "maybe" | "both") => {
    if (!state.currentPair) return;
    const updated = applyChoice(state, choice === "both" ? "maybe" : choice);
    advanceAfterBattle(updated);
  };

  const handleMaybeChoice = (choice: "a" | "b" | "both") => {
    if (!state.currentPair) return;
    const updated = applyChoice(state, choice);
    const nextIndex = state.maybeIndex + 1;
    const withReaction = showReactionMaybe(updated);

    if (nextIndex < maybeQueue.length) {
      setState({
        ...withReaction,
        phase: "maybe",
        maybeIndex: nextIndex,
        currentPair: maybeQueue[nextIndex] ?? null,
      });
      return;
    }

    enterFinal(withReaction);
  };

  const handleFinalChoice = (choice: "a" | "b") => {
    if (!state.currentPair) return;
    const updated = applyChoice(state, choice);
    const winnerId =
      choice === "a" ? state.currentPair.a.id : state.currentPair.b.id;
    finishWithWinner(updated, winnerId);
  };

  const handlePlayAgain = () => {
    setMaybeQueue([]);
    setReaction(null);
    setState(resetGame());
  };

  if (!state.hydrated) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f1e7]">
        <p className="font-sans text-sm tracking-wide text-[#8a7a6c]">
          Loading your Harry...
        </p>
      </div>
    );
  }

  return (
    <div className="harry-app relative min-h-[100dvh] bg-[#f7f1e7] text-[#1f1712]">
      <ReactionToast message={reaction} />

      {state.phase === "intro" && <GameIntro onStart={startBattle} />}

      {state.phase === "battle" && state.currentPair && (
        <BattleScreen
          a={state.currentPair.a}
          b={state.currentPair.b}
          progress={battleProgress(state)}
          allowMaybe
          onChoose={handleBattleChoice}
        />
      )}

      {state.phase === "maybe" && state.currentPair && (
        <MaybeRound
          a={state.currentPair.a}
          b={state.currentPair.b}
          progress={battleProgress(state)}
          onChoose={handleMaybeChoice}
        />
      )}

      {state.phase === "final" && state.currentPair && (
        <FinalBattle
          a={state.currentPair.a}
          b={state.currentPair.b}
          onChoose={handleFinalChoice}
        />
      )}

      {state.phase === "result" && state.winnerId && (
        <ResultScreen
          winner={getPhotoById(state.winnerId)!}
          topThree={state.topThreeIds
            .map((id) => getPhotoById(id))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))}
          era={getWinningEra(state.eraScores)}
          eraPercent={eraPickPercentage(
            state.eraScores,
            getWinningEra(state.eraScores),
          )}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}
