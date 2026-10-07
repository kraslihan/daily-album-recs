"use client";

import type { HarryPhoto } from "@/data/harryData";
import { BattleScreen } from "./BattleScreen";

type MaybeRoundProps = {
  a: HarryPhoto;
  b: HarryPhoto;
  progress: number;
  onChoose: (choice: "a" | "b" | "both") => void;
};

export function MaybeRound({ a, b, progress, onChoose }: MaybeRoundProps) {
  return (
    <BattleScreen
      a={a}
      b={b}
      progress={progress}
      title="Okay. We need to settle something."
      subtitle="You refused to choose earlier. Now you have to."
      allowMaybe={false}
      allowBoth
      onChoose={(choice) => {
        if (choice === "maybe") return;
        onChoose(choice);
      }}
    />
  );
}
