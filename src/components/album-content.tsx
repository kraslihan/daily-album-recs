import { DailyAlbumView } from "@/components/daily-album-view";
import { resolveAlbum } from "@/lib/resolve";
import type { Album, AlbumLane } from "@/lib/types";

type Props = {
  album: Album;
  lane: AlbumLane;
  isToday: boolean;
  nextMidnightIso: string;
};

/** Async server component so the page shell (and any redirect/404) resolves before data loads. */
export async function AlbumContent({ album, lane, isToday, nextMidnightIso }: Props) {
  const data = await resolveAlbum(album);
  return <DailyAlbumView data={data} lane={lane} isToday={isToday} nextMidnightIso={nextMidnightIso} />;
}
