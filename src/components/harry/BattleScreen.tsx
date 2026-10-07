"use client";

import { useEffect, useRef, useState } from "react";
import type { HarryPhoto } from "@/data/harryData";
import { PhotoCard } from "./PhotoCard";
import { ProgressIndicator } from "./ProgressIndicator";

type BattleScreenProps = {
  a: HarryPhoto;
  b: HarryPhoto;
  progress: number;
  title?: string;
  subtitle?: string;
  allowMaybe?: boolean;
  allowBoth?: boolean;
  onChoose: (choice: "a" | "b" | "maybe" | "both") => void;
};

export function BattleScreen({
  a,
  b,
  progress,
  title,
  subtitle,
  allowMaybe = true,
  allowBoth = false,
  onChoose,
}: BattleScreenProps) {
  const [selected, setSelected] = useState<"a" | "b" | "maybe" | "both" | null>(
    null,
  );
  const lockRef = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setSelected(null);
    lockRef.current = false;
  }, [a.id, b.id]);

  const commit = (choice: "a" | "b" | "maybe" | "both") => {
    if (lockRef.current) return;
    lockRef.current = true;
    setSelected(choice);
    window.setTimeout(() => {
      onChoose(choice);
    }, 360);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    if (!touch) return;
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch || lockRef.current) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    commit(dx < 0 ? "a" : "b");
  };

  return (
    <section
      className="flex min-h-[100dvh] flex-col px-4 pb-6 pt-4 sm:px-6"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ProgressIndicator progress={progress} />

      {(title || subtitle) && (
        <div className="mx-auto mt-5 max-w-md text-center">
          {title && (
            <h2 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-[#1f1712] sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 font-sans text-sm text-[#6e5f52]">{subtitle}</p>
          )}
        </div>
      )}

      <div className="mx-auto mt-4 flex w-full max-w-lg flex-1 flex-col justify-center gap-3">
        <div className="relative grid grid-cols-2 items-stretch gap-2.5 sm:gap-4">
          <PhotoCard
            photo={a}
            side="a"
            selected={
              selected === "a" || selected === "both"
                ? true
                : selected === "b" || selected === "maybe"
                  ? false
                  : null
            }
            dimmed={selected === "b"}
            onSelect={() => commit("a")}
            disabled={Boolean(selected)}
          />
          <PhotoCard
            photo={b}
            side="b"
            selected={
              selected === "b" || selected === "both"
                ? true
                : selected === "a" || selected === "maybe"
                  ? false
                  : null
            }
            dimmed={selected === "a"}
            onSelect={() => commit("b")}
            disabled={Boolean(selected)}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f1e7]/92 px-2.5 py-1 font-[family-name:var(--font-display)] text-base italic tracking-wide text-[#c23b3b] shadow-sm ring-1 ring-[#2a2118]/8 sm:text-lg"
          >
            VS
          </span>
        </div>

        {allowMaybe && (
          <button
            type="button"
            onClick={() => commit("maybe")}
            disabled={Boolean(selected)}
            className="mx-auto flex min-h-11 items-center gap-2 rounded-sm px-4 py-2 font-sans text-sm text-[#6e5f52] transition-colors hover:bg-[#1f1712]/5 disabled:opacity-50"
          >
            <span aria-hidden>😭</span>
            <span>I literally can&apos;t choose</span>
          </button>
        )}

        {allowBoth && (
          <button
            type="button"
            onClick={() => commit("both")}
            disabled={Boolean(selected)}
            className="mx-auto flex min-h-11 items-center justify-center rounded-sm border border-[#1f1712]/15 px-4 py-2 font-sans text-sm text-[#3d3128] transition-colors hover:bg-[#1f1712]/5 disabled:opacity-50"
          >
            Both are dangerously correct
          </button>
        )}
      </div>
    </section>
  );
}
