"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HarryPhoto } from "@/data/harryData";

type PhotoCardProps = {
  photo: HarryPhoto;
  side?: "a" | "b";
  selected?: boolean | null;
  dimmed?: boolean;
  onSelect?: () => void;
  large?: boolean;
  showLabel?: boolean;
  className?: string;
  disabled?: boolean;
};

export function PhotoCard({
  photo,
  side = "a",
  selected = null,
  dimmed = false,
  onSelect,
  large = false,
  showLabel = true,
  className,
  disabled = false,
}: PhotoCardProps) {
  const isWinner = selected === true;
  const isLoser = selected === false;

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled || !onSelect}
      aria-label={`Choose ${photo.label}, ${photo.era} ${photo.year}`}
      className={cn(
        "group relative flex w-full min-h-11 flex-col overflow-hidden rounded-[2px] bg-[#faf7f1] text-left shadow-[0_10px_28px_-16px_rgba(40,28,20,0.45)] transition-all duration-[350ms] ease-out",
        "ring-1 ring-[#2a2118]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c23b3b]/60",
        large ? "aspect-[3/4]" : "aspect-[3/4] max-h-[46vh]",
        isWinner && "z-10 scale-[1.04] ring-2 ring-[#c23b3b]/50",
        isLoser && "scale-[0.96] opacity-35",
        dimmed && !isWinner && "opacity-40",
        !disabled && onSelect && "active:scale-[0.985]",
        className,
      )}
      style={{
        transform: isWinner
          ? `scale(1.04) rotate(${side === "a" ? -0.6 : 0.6}deg)`
          : undefined,
      }}
    >
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={photo.image}
          alt={photo.label}
          fill
          sizes="(max-width: 768px) 48vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
          unoptimized={photo.image.endsWith(".svg")}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1410]/45 via-transparent to-transparent" />
      </div>

      {showLabel && (
        <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/80">
            {photo.year}
          </p>
          <p className="font-[family-name:var(--font-display)] text-sm leading-tight text-white sm:text-base">
            {photo.era}
          </p>
        </div>
      )}
    </button>
  );
}
