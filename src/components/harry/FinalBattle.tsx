"use client";

import { useEffect, useRef, useState } from "react";
import type { HarryPhoto } from "@/data/harryData";
import { PhotoCard } from "./PhotoCard";
import { ProgressIndicator } from "./ProgressIndicator";

type FinalBattleProps = {
  a: HarryPhoto;
  b: HarryPhoto;
  onChoose: (choice: "a" | "b") => void;
};

export function FinalBattle({ a, b, onChoose }: FinalBattleProps) {
  const [selected, setSelected] = useState<"a" | "b" | null>(null);
  const [flash, setFlash] = useState(false);
  const lockRef = useRef(false);

  useEffect(() => {
    setSelected(null);
    setFlash(false);
    lockRef.current = false;
  }, [a.id, b.id]);

  const commit = (choice: "a" | "b") => {
    if (lockRef.current) return;
    lockRef.current = true;
    setSelected(choice);
    setFlash(true);
    window.setTimeout(() => {
      onChoose(choice);
    }, 700);
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden px-4 pb-8 pt-4 sm:px-6">
      {flash && <div aria-hidden className="harry-flash pointer-events-none absolute inset-0 z-40" />}
      {flash && <div aria-hidden className="harry-confetti pointer-events-none absolute inset-0 z-30" />}

      <ProgressIndicator progress={0.95} label="Almost there..." />

      <div className="mx-auto mt-6 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#c23b3b]">
          Final Battle
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[#1f1712] sm:text-4xl">
          There can only be one.
        </h2>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-xl flex-1 flex-col justify-center gap-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <PhotoCard
            photo={a}
            side="a"
            large
            selected={selected === "a" ? true : selected === "b" ? false : null}
            onSelect={() => commit("a")}
            disabled={Boolean(selected)}
            className="max-h-none min-h-[42vh] sm:min-h-0"
          />
          <div className="flex items-center justify-center sm:hidden">
            <span className="font-[family-name:var(--font-display)] text-xl italic text-[#c23b3b]">
              VS
            </span>
          </div>
          <PhotoCard
            photo={b}
            side="b"
            large
            selected={selected === "b" ? true : selected === "a" ? false : null}
            onSelect={() => commit("b")}
            disabled={Boolean(selected)}
            className="max-h-none min-h-[42vh] sm:min-h-0"
          />
        </div>
        <p className="hidden text-center font-[family-name:var(--font-display)] text-2xl italic text-[#c23b3b] sm:block">
          VS
        </p>
      </div>
    </section>
  );
}
