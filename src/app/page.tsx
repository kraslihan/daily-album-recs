import type { Metadata } from "next";

import { DailyAlbumView } from "@/components/daily-album-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAlbumForDay, getNextMidnight, getTodayKey, shiftDayKey } from "@/lib/daily";
import { resolveAlbum } from "@/lib/resolve";

// The album depends on the current date in Europe/Istanbul, so the page renders per request.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const album = getAlbumForDay(getTodayKey());
  return {
    title: `${album.artist} – ${album.title}`,
    description: album.why,
  };
}

export default async function TodayPage() {
  const now = new Date();
  const dayKey = getTodayKey();
  const album = getAlbumForDay(dayKey);
  const data = await resolveAlbum(album);
  const nextMidnightIso = getNextMidnight(now).toISOString();

  return (
    <>
      <SiteHeader dayKey={dayKey} isToday prevHref={`/gun/${shiftDayKey(dayKey, -1)}`} nextHref={null} nextMidnightIso={nextMidnightIso} />
      <main className="flex-1">
        <DailyAlbumView data={data} isToday nextMidnightIso={nextMidnightIso} />
      </main>
      <SiteFooter />
    </>
  );
}
