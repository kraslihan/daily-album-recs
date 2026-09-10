import { catalogTotal } from "@/lib/daily";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          Her gece 00:00&apos;da (Türkiye saati) yeni bir albüm. Üç günde bir senin grupların, sonraki iki gün punk ve alternatif keşif. Aynı gün her yerde aynı albüm.
        </p>
        <p className="shrink-0">
          Üç günlük döngü: 1. gün kütüphanen, 2. ve 3. gün keşif. {catalogTotal} albüm · Deezer kapakları · Spotify bağlantıları
        </p>
      </div>
    </footer>
  );
}
