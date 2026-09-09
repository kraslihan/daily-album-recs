import Link from "next/link";
import { ChevronLeft, ChevronRight, Disc3 } from "lucide-react";

import { Countdown } from "@/components/countdown";
import { buttonVariants } from "@/components/ui/button";
import { formatDayKey } from "@/lib/daily";
import { cn } from "@/lib/utils";

type Props = {
  dayKey: string;
  isToday: boolean;
  prevHref: string | null;
  nextHref: string | null;
  nextMidnightIso: string;
};

export function SiteHeader({ dayKey, isToday, prevHref, nextHref, nextMidnightIso }: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/6 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
          <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-background">
            <Disc3 className="size-4" />
          </span>
          <span className="font-display text-xl leading-none tracking-tight">Günün Albümü</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Gün seçimi" className="flex items-center gap-1">
            {prevHref ? (
              <Link href={prevHref} className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "rounded-full")} aria-label="Önceki gün">
                <ChevronLeft className="size-4" />
              </Link>
            ) : (
              <span className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "pointer-events-none rounded-full opacity-30")}>
                <ChevronLeft className="size-4" />
              </span>
            )}
            <span className="min-w-0 truncate text-xs text-muted-foreground sm:text-sm">
              {isToday ? "Bugün · " : ""}
              <span className="text-foreground">{formatDayKey(dayKey)}</span>
            </span>
            {nextHref ? (
              <Link href={nextHref} className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "rounded-full")} aria-label="Sonraki gün">
                <ChevronRight className="size-4" />
              </Link>
            ) : (
              <span className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "pointer-events-none rounded-full opacity-30")} aria-hidden>
                <ChevronRight className="size-4" />
              </span>
            )}
          </nav>
          <span className="hidden sm:inline-flex">
            <Countdown nextMidnightIso={nextMidnightIso} />
          </span>
        </div>
      </div>
    </header>
  );
}
