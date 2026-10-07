import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[#1f1712]">
        Lost in the wardrobe
      </h1>
      <p className="max-w-sm font-sans text-sm text-[#6e5f52]">
        This page doesn&apos;t exist. Head back to find your Harry.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-sm bg-[#1f1712] px-5 py-2.5 font-sans text-sm uppercase tracking-[0.14em] text-[#f7f1e7]"
      >
        Back to the battle
      </Link>
    </main>
  );
}
