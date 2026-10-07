"use client";

type ShareResultProps = {
  title: string;
  text: string;
};

export function ShareResult({ title, text }: ShareResultProps) {
  const handleShare = async () => {
    const payload = {
      title,
      text,
      url: typeof window !== "undefined" ? window.location.href : undefined,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        return;
      } catch {
        // user cancelled or share failed — fall through
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${payload.url ?? ""}`.trim());
      window.alert("Result copied to clipboard — screenshot the card to share.");
    } catch {
      window.alert("Screenshot the result card to share your Harry.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm border border-[#1f1712]/20 bg-transparent px-5 py-3 font-sans text-sm uppercase tracking-[0.14em] text-[#1f1712] transition-colors hover:bg-[#1f1712]/5"
    >
      Share Result
    </button>
  );
}
