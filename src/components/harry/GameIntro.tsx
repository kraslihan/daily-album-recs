"use client";

type GameIntroProps = {
  onStart: () => void;
};

export function GameIntro({ onStart }: GameIntroProps) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-10 pt-16 sm:justify-center sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 20% 15%, rgba(232,201,106,0.28), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgba(212,165,165,0.35), transparent 50%), radial-gradient(ellipse 60% 45% at 70% 85%, rgba(143,163,138,0.22), transparent 55%), linear-gradient(165deg, #f7f1e7 0%, #efe6d8 48%, #f4ebe0 100%)",
        }}
      />
      <div
        aria-hidden
        className="harry-grain pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto w-full max-w-lg animate-[harry-rise_700ms_ease-out]">
        <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.28em] text-[#8a6a5a]">
          A fashion editorial battle
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,11vw,4.4rem)] leading-[0.95] tracking-tight text-[#1f1712]">
          Which Harry
          <br />
          <em className="italic text-[#c23b3b]">is your Harry?</em>
        </h1>
        <p className="mt-5 max-w-sm font-sans text-base leading-relaxed text-[#5c4d42]">
          Years of Harry. Questionable haircuts. Excellent jackets.
          <br />
          Let&apos;s find your ultimate version.
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#1f1712] px-6 py-3.5 font-sans text-sm uppercase tracking-[0.18em] text-[#f7f1e7] transition-transform duration-200 active:scale-[0.98] sm:w-auto"
        >
          Start the battle
        </button>

        <p className="mt-4 font-sans text-xs text-[#8a7a6c]">
          ~3 min • no wrong answers
        </p>
      </div>
    </section>
  );
}
