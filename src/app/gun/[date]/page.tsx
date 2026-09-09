import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

import { AlbumContent } from "@/components/album-content";
import { AlbumSkeleton } from "@/components/album-skeleton";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogSize, dayKeyToNumber, getAlbumForDay, getNextMidnight, getTodayKey, isValidDayKey, shiftDayKey } from "@/lib/daily";

export const dynamic = "force-dynamic";

type Props = PageProps<"/gun/[date]">;

/** Only the archive is browsable: future days stay a surprise. */
function classifyDay(date: string, todayKey: string): "today" | "future" | "too-old" | "invalid" | "ok" {
  if (!isValidDayKey(date)) return "invalid";
  const n = dayKeyToNumber(date);
  const today = dayKeyToNumber(todayKey);
  if (n === today) return "today";
  if (n > today) return "future";
  if (today - n >= catalogSize) return "too-old";
  return "ok";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  if (!isValidDayKey(date)) return { title: "Bulunamadı" };
  const album = getAlbumForDay(date);
  return { title: `${album.artist} – ${album.title}`, description: album.why };
}

export default async function ArchiveDayPage({ params }: Props) {
  const { date } = await params;
  const todayKey = getTodayKey();
  const state = classifyDay(date, todayKey);

  if (state === "today" || state === "future") redirect("/");
  if (state === "invalid" || state === "too-old") notFound();

  const album = getAlbumForDay(date);
  const nextMidnightIso = getNextMidnight(new Date()).toISOString();

  const prevKey = shiftDayKey(date, -1);
  const nextKey = shiftDayKey(date, 1);
  const prevHref = dayKeyToNumber(todayKey) - dayKeyToNumber(prevKey) < catalogSize ? `/gun/${prevKey}` : null;
  const nextHref = nextKey === todayKey ? "/" : `/gun/${nextKey}`;

  return (
    <>
      <SiteHeader dayKey={date} isToday={false} prevHref={prevHref} nextHref={nextHref} nextMidnightIso={nextMidnightIso} />
      <main className="flex-1">
        <Suspense fallback={<AlbumSkeleton />}>
          <AlbumContent album={album} isToday={false} nextMidnightIso={nextMidnightIso} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
