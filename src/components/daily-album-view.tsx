import { Compass, Library, Lightbulb, MapPin, Sparkles, Users } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { Countdown } from "@/components/countdown";
import { SpotifyIcon } from "@/components/spotify-icon";
import { TrackPanel } from "@/components/track-panel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { VinylCover } from "@/components/vinyl-cover";
import { bulletTracklist } from "@/lib/format";
import type { AlbumLane, ResolvedAlbum } from "@/lib/types";

type Props = {
  data: ResolvedAlbum;
  lane: AlbumLane;
  isToday: boolean;
  nextMidnightIso: string;
};

function formatReleaseDate(iso: string | null): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}

export function DailyAlbumView({ data, lane, isToday, nextMidnightIso }: Props) {
  const { album, coverUrl, coverSmallUrl, tracks, spotifyAlbumUrl, releaseDate, label } = data;
  const tracklistText = bulletTracklist(tracks.map((t) => t.title));
  const release = formatReleaseDate(releaseDate);

  return (
    <>
      <div className="album-backdrop" style={coverUrl ? ({ "--backdrop-image": `url("${coverUrl}")` } as React.CSSProperties) : undefined} aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-12 lg:px-8 lg:py-12">
        {/* ── Left: vinyl, title, tracklist, story ─────────────────────── */}
        <article className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-3 sm:hidden">
            <span className="text-xs text-muted-foreground">{isToday ? "Bugünün albümü" : "Günün albümü"}</span>
            {isToday ? <Countdown nextMidnightIso={nextMidnightIso} /> : null}
          </div>

          <div className="max-w-[560px]">
            <VinylCover coverUrl={coverUrl} labelUrl={coverSmallUrl} alt={`${album.artist} – ${album.title} albüm kapağı`} href={spotifyAlbumUrl} />
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full border-white/15 bg-white/5 text-[11px] uppercase tracking-[0.16em]">
                {lane === "known" ? <Library className="size-3" /> : <Compass className="size-3" />}
                {lane === "known" ? "Kütüphanenden" : "Keşif"}
              </Badge>
              <Badge variant="outline" className="rounded-full border-white/15 bg-white/5 text-[11px] uppercase tracking-[0.16em]">
                <Sparkles className="size-3" />
                {isToday ? "Bugünün albümü" : "Günün albümü"}
              </Badge>
              {album.relatedTo.map((name) => (
                <Badge key={name} variant="secondary" className="rounded-full bg-white/8 text-[11px] text-muted-foreground">
                  {name} sevenlere
                </Badge>
              ))}
            </div>

            <h1 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">{album.title}</h1>
            <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
              <span className="text-foreground">{album.artist}</span> · {album.year}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {album.origin}
              </span>
              <span aria-hidden>·</span>
              {album.genres.map((g) => (
                <Badge key={g} variant="outline" className="rounded-full border-white/12 font-normal text-muted-foreground">
                  {g}
                </Badge>
              ))}
            </div>

            <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/90">{album.why}</p>

            <a
              href={spotifyAlbumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-spotify px-5 py-2.5 text-sm font-semibold text-spotify-foreground transition hover:bg-spotify/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-spotify/40"
            >
              <SpotifyIcon className="size-4" />
              Albümü Spotify&apos;da aç
            </a>
          </div>

          <Separator className="my-8 bg-white/8" />

          <section aria-labelledby="tracks-heading">
            <div className="flex items-center justify-between gap-3">
              <h2 id="tracks-heading" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Şarkılar
              </h2>
              {tracks.length ? <CopyButton text={tracklistText} label="Listeyi kopyala" /> : null}
            </div>
            {tracks.length ? (
              <p className="mt-3 text-[15px] leading-8 text-foreground/85">{tracklistText}</p>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">Şarkı listesi şu an yüklenemedi; sağdaki panelden Spotify&apos;da açabilirsin.</p>
            )}
          </section>

          <Separator className="my-8 bg-white/8" />

          <section aria-labelledby="story-heading" className="max-w-prose">
            <h2 id="story-heading" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Albümün hikâyesi
            </h2>
            <div className="mt-3 space-y-4 text-[15px] leading-7 text-foreground/85 sm:text-base sm:leading-8">
              {album.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="artist-heading" className="mt-10 max-w-prose">
            <h2 id="artist-heading" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Users className="size-3.5" />
              Sanatçı hakkında
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-foreground/85 sm:text-base sm:leading-8">{album.artistInfo}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {album.members.map((member) => {
                const [name, role] = member.split(" – ");
                return (
                  <li key={member} className="rounded-xl border border-white/8 bg-white/4 px-3.5 py-2.5">
                    <p className="text-sm font-medium">{name}</p>
                    {role ? <p className="text-xs text-muted-foreground">{role}</p> : null}
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="facts-heading" className="mt-10 max-w-prose">
            <h2 id="facts-heading" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Lightbulb className="size-3.5" />
              Bunları biliyor muydun?
            </h2>
            <ol className="mt-3 space-y-3">
              {album.funFacts.map((fact, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-white/8 bg-gradient-to-br from-white/6 to-transparent p-4">
                  <span className="font-display text-2xl leading-none text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-foreground/85">{fact}</p>
                </li>
              ))}
            </ol>
          </section>

          {(release || label) && (
            <p className="mt-10 text-xs text-muted-foreground">
              {release ? `Çıkış: ${release}` : null}
              {release && label ? " · " : null}
              {label ? `Etiket: ${label}` : null}
            </p>
          )}
        </article>

        {/* ── Right: Spotify-like player panel ──────────────────────────── */}
        <aside className="min-w-0 lg:sticky lg:top-20 lg:h-[calc(100dvh-6.5rem)] lg:self-start">
          <TrackPanel data={data} />
        </aside>
      </div>
    </>
  );
}
