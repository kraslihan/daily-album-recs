import { catalogSize } from "@/lib/daily";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          Her gece 00:00&apos;da (Türkiye saati) yeni bir albüm. Seçim tarihe bağlı ve sabittir; hangi cihazdan girersen gir aynı günde aynı albümü görürsün.
        </p>
        <p className="shrink-0">
          {catalogSize} albümlük seçki · Kapaklar ve önizlemeler Deezer&apos;dan · Bağlantılar Spotify&apos;a
        </p>
      </div>
    </footer>
  );
}
