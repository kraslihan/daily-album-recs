"use client";

import { cn } from "@/lib/utils";

type ReactionToastProps = {
  message: string | null;
};

export function ReactionToast({ message }: ReactionToastProps) {
  return (
    <div
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed left-1/2 top-[4.5rem] z-50 w-[min(90vw,22rem)] -translate-x-1/2 transition-all duration-300",
        message
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0",
      )}
    >
      <div className="rounded-sm border border-[#2a2118]/10 bg-[#fffaf3]/95 px-4 py-2.5 text-center shadow-[0_12px_30px_-18px_rgba(40,28,20,0.5)] backdrop-blur-sm">
        <p className="font-sans text-sm text-[#2a2118]">{message}</p>
      </div>
    </div>
  );
}
