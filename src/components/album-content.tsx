import { DailyAlbumView } from "@/components/daily-album-view";
import { resolveAlbum } from "@/lib/resolve";
import type { Album } from "@/lib/types";

type Props = {
  album: Album;
  isToday: boolean;
  nextMidnightIso: string;
};

/** Async server component so the page shell (and any redirect/404) resolves before data loads. */
export async function AlbumContent({ album, isToday, nextMidnightIso }: Props) {
  const data = await resolveAlbum(album);
  return <DailyAlbumView data={data} isToday={isToday} nextMidnightIso={nextMidnightIso} />;
}
