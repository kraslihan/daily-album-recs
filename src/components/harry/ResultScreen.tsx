"use client";

import Image from "next/image";
import {
  ERA_BLURBS,
  ERA_YEAR_RANGES,
  type HarryPhoto,
} from "@/data/harryData";
import { ShareResult } from "./ShareResult";
import { TopThree } from "./TopThree";

type ResultScreenProps = {
  winner: HarryPhoto;
  topThree: HarryPhoto[];
  era: string;
  eraPercent: number;
  onPlayAgain: () => void;
};

export function ResultScreen({
  winner,
  topThree,
  era,
  eraPercent,
  onPlayAgain,
}: ResultScreenProps) {
  const winnerEra = winner.era;
  const yearRange = ERA_YEAR_RANGES[winnerEra] ?? winner.year;
  const blurb =
    ERA_BLURBS[winnerEra] ??
    `You found your Harry.\n${winner.label}.\n\nThis is your Harry.`;

  const shareText = `My Harry is ${winner.label} (${winnerEra}). What's yours?`;

  return (
    <section className="relative min-h-[100dvh] px-4 pb-12 pt-8 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,165,165,0.25), transparent 55%), linear-gradient(180deg, #f7f1e7 0%, #efe6d8 100%)",
        }}
      />

      <div
        id="harry-result-card"
        className="relative mx-auto w-full max-w-md animate-[harry-rise_600ms_ease-out] rounded-sm bg-[#faf6ef] p-4 shadow-[0_24px_50px_-28px_rgba(40,28,20,0.45)] ring-1 ring-[#2a2118]/10 sm:p-5"
      >
        <p className="text-center font-sans text-[11px] uppercase tracking-[0.28em] text-[#c23b3b]">
          Your Harry
        </p>

        <div className="relative mx-auto mt-4 aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2px] bg-[#efe6d8]">
          <Image
            src={winner.image}
            alt={winner.label}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
            priority
            unoptimized={winner.image.endsWith(".svg")}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="mt-5 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[#1f1712] sm:text-4xl">
            {winner.label}
          </h2>
          <p className="mt-1 font-sans text-sm tracking-wide text-[#8a7a6c]">
            {winnerEra}
            <span className="mx-2 text-[#c9b8a8]">·</span>
            {yearRange}
          </p>
          <p className="mx-auto mt-4 max-w-xs whitespace-pre-line font-sans text-sm leading-relaxed text-[#5c4d42]">
            {blurb}
          </p>
        </div>

        <TopThree photos={topThree} />

        <div className="mt-8 border-t border-[#2a2118]/10 pt-5">
          <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#8a7a6c]">
            Your Era
          </p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#1f1712]">
              {era}
            </h3>
            <p className="font-sans text-sm text-[#6e5f52]">
              {eraPercent}% of your picks
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-sm bg-[#e8dfd3]">
            <div
              className="h-full bg-[#c23b3b] transition-all duration-700"
              style={{ width: `${Math.max(8, eraPercent)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex w-full max-w-md gap-3">
        <button
          type="button"
          onClick={onPlayAgain}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm bg-[#1f1712] px-5 py-3 font-sans text-sm uppercase tracking-[0.14em] text-[#f7f1e7] transition-transform active:scale-[0.98]"
        >
          Play Again
        </button>
        <ShareResult title="Which Harry is your Harry?" text={shareText} />
      </div>
    </section>
  );
}
