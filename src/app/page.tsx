import type { Metadata } from "next";
import { Suspense } from "react";

import { AlbumContent } from "@/components/album-content";
import { AlbumSkeleton } from "@/components/album-skeleton";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAlbumForDay, getLaneForDay, getNextMidnight, getTodayKey, shiftDayKey } from "@/lib/daily";

// The album depends on the current date in Europe/Istanbul, so the page renders per request.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const album = getAlbumForDay(getTodayKey());
  return {
    title: `${album.artist} – ${album.title}`,
    description: album.why,
  };
}

export default function TodayPage() {
  const now = new Date();
  const dayKey = getTodayKey();
  const album = getAlbumForDay(dayKey);
  const nextMidnightIso = getNextMidnight(now).toISOString();

  return (
    <>
      <SiteHeader dayKey={dayKey} isToday prevHref={`/gun/${shiftDayKey(dayKey, -1)}`} nextHref={null} nextMidnightIso={nextMidnightIso} />
      <main className="flex-1">
        <Suspense fallback={<AlbumSkeleton />}>
          <AlbumContent album={album} lane={getLaneForDay(dayKey)} isToday nextMidnightIso={nextMidnightIso} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
