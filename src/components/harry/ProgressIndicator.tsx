"use client";

import { cn } from "@/lib/utils";

type ProgressIndicatorProps = {
  progress: number;
  label?: string;
};

export function ProgressIndicator({
  progress,
  label = "Finding your Harry...",
}: ProgressIndicatorProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  const filled = Math.round(clamped * 10);

  return (
    <div className="mx-auto w-full max-w-sm px-1">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#6e5f52]">
          {label}
        </p>
        <div className="flex gap-1" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300",
                i < Math.ceil(clamped * 5) ? "bg-[#c23b3b]" : "bg-[#d9cfc3]",
              )}
            />
          ))}
        </div>
      </div>
      <div
        role="progressbar"
        aria-valuenow={Math.round(clamped * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="flex h-2.5 items-stretch gap-0.5 overflow-hidden rounded-sm bg-[#e8dfd3]"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "flex-1 transition-colors duration-300",
              i < filled ? "bg-[#c23b3b]" : "bg-transparent",
            )}
          />
        ))}
      </div>
    </div>
  );
}
