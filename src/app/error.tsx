"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[#1f1712]">
        Something skipped a beat
      </h1>
      <p className="max-w-sm font-sans text-sm text-[#6e5f52]">
        The battle hit a snag. Try again — your Harry is still out there.
      </p>
      <button
        type="button"
        onClick={reset}
        className="min-h-11 rounded-sm bg-[#1f1712] px-5 py-2.5 font-sans text-sm uppercase tracking-[0.14em] text-[#f7f1e7]"
      >
        Try again
      </button>
    </main>
  );
}
