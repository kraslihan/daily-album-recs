"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Pause, Play, Volume2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SpotifyIcon } from "@/components/spotify-icon";
import { formatDuration, formatLongDuration } from "@/lib/format";
import type { ResolvedAlbum, Track } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  data: ResolvedAlbum;
};

export function TrackPanel({ data }: Props) {
  const { album, tracks, coverSmallUrl, totalDuration, spotifyAlbumUrl, spotifyAlbumId, tracksUnavailable } = data;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const previewable = useMemo(() => tracks.filter((t) => t.previewUrl), [tracks]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    setCurrent(null);
    setIsPlaying(false);
    setProgress(0);
  }, []);

  const playTrack = useCallback((track: Track) => {
    const audio = audioRef.current;
    if (!audio || !track.previewUrl) return;
    if (audio.src !== track.previewUrl) {
      audio.src = track.previewUrl;
      setProgress(0);
    }
    setCurrent(track);
    void audio.play().then(
      () => setIsPlaying(true),
      () => setIsPlaying(false),
    );
  }, []);

  const toggle = useCallback(
    (track: Track) => {
      const audio = audioRef.current;
      if (!audio) return;
      if (current?.position === track.position) {
        if (audio.paused) {
          void audio.play().then(() => setIsPlaying(true));
        } else {
          audio.pause();
          setIsPlaying(false);
        }
        return;
      }
      playTrack(track);
    },
    [current, playTrack],
  );

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audioRef.current = audio;

    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    audio.addEventListener("timeupdate", onTime);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Auto-advance to the next track that has a preview.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      if (!current) return;
      const idx = previewable.findIndex((t) => t.position === current.position);
      const next = previewable[idx + 1];
      if (next) playTrack(next);
      else stop();
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [current, previewable, playTrack, stop]);

  return (
    <TooltipProvider>
      <section
        aria-label="Şarkı listesi"
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <header className="flex items-start gap-4 border-b border-white/8 p-4 sm:p-5">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-neutral-800 shadow-lg sm:size-20">
            {coverSmallUrl ? (
              <Image src={coverSmallUrl} alt="" fill sizes="80px" className="object-cover" />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Albüm</p>
            <h2 className="truncate text-lg font-semibold leading-tight sm:text-xl">{album.title}</h2>
            <p className="truncate text-sm text-muted-foreground">
              {album.artist} · {album.year}
              {tracks.length ? ` · ${tracks.length} şarkı` : ""}
              {totalDuration ? `, ${formatLongDuration(totalDuration)}` : ""}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={spotifyAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "bg-spotify text-spotify-foreground hover:bg-spotify/90 rounded-full px-4 font-semibold",
                )}
              >
                <SpotifyIcon className="size-4" />
                Spotify&apos;da aç
              </a>
              {previewable.length > 0 ? (
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => toggle(current ?? previewable[0])}
                >
                  {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                  {isPlaying ? "Duraklat" : "Önizlemeyi çal"}
                </Button>
              ) : null}
            </div>
          </div>
        </header>

        {tracksUnavailable ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <Volume2 className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Şarkı listesi şu an yüklenemedi. Albümü Spotify&apos;da açarak dinleyebilirsin.
            </p>
          </div>
        ) : (
          <ol className="flex-1 divide-y divide-white/5 overflow-y-auto">
            <li className="grid grid-cols-[2rem_1fr_auto_2rem] items-center gap-3 px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground sm:px-5">
              <span className="text-center">#</span>
              <span>Başlık</span>
              <span className="text-right">Süre</span>
              <span className="sr-only">Spotify</span>
            </li>
            {tracks.map((track) => {
              const isCurrent = current?.position === track.position;
              const active = isCurrent && isPlaying;
              return (
                <li
                  key={track.position}
                  className={cn(
                    "group grid grid-cols-[2rem_1fr_auto_2rem] items-center gap-3 px-4 py-2.5 transition-colors sm:px-5",
                    isCurrent ? "bg-white/6" : "hover:bg-white/4",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => (track.previewUrl ? toggle(track) : window.open(track.spotifyUrl, "_blank", "noopener"))}
                    className="flex size-8 items-center justify-center rounded-full text-sm tabular-nums text-muted-foreground outline-none transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={
                      track.previewUrl
                        ? active
                          ? `${track.title} önizlemesini duraklat`
                          : `${track.title} önizlemesini çal`
                        : `${track.title} Spotify'da çal`
                    }
                  >
                    {active ? (
                      <span className="flex h-3.5 items-end gap-0.5" aria-hidden>
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                      </span>
                    ) : (
                      <>
                        <span className={cn("group-hover:hidden", isCurrent && "hidden")}>{track.position}</span>
                        <Play className={cn("hidden size-4 fill-current group-hover:block", isCurrent && "block")} />
                      </>
                    )}
                  </button>

                  <div className="min-w-0">
                    <p className={cn("truncate text-sm font-medium", isCurrent && "text-spotify")}>{track.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {track.explicit ? (
                        <span className="mr-1.5 inline-flex size-4 items-center justify-center rounded-[3px] bg-muted-foreground/30 text-[10px] font-bold leading-none text-foreground">
                          E
                        </span>
                      ) : null}
                      {album.artist}
                    </p>
                  </div>

                  <span className="text-xs tabular-nums text-muted-foreground">{formatDuration(track.duration)}</span>

                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${track.title} — Spotify'da çal`}
                          className="flex size-8 items-center justify-center rounded-full text-muted-foreground outline-none transition hover:text-spotify focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      }
                    >
                      <SpotifyIcon className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent side="left">Spotify&apos;da çal</TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ol>
        )}

        {current ? (
          <footer className="border-t border-white/8 bg-black/30 p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                className="rounded-full bg-spotify text-spotify-foreground hover:bg-spotify/90"
                onClick={() => toggle(current)}
                aria-label={isPlaying ? "Duraklat" : "Devam et"}
              >
                {isPlaying ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
              </Button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{current.title}</p>
                <p className="text-xs text-muted-foreground">30 saniyelik önizleme</p>
              </div>
              <a
                href={current.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "rounded-full text-spotify hover:text-spotify")}
              >
                Tam sürüm
                <ExternalLink className="size-3.5" />
              </a>
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10" aria-hidden>
              <div className="h-full bg-spotify transition-[width] duration-200" style={{ width: `${Math.round(progress * 100)}%` }} />
            </div>
          </footer>
        ) : null}

        {spotifyAlbumId ? (
          <div className="border-t border-white/8 p-3">
            <iframe
              title={`${album.artist} – ${album.title} Spotify oynatıcı`}
              src={`https://open.spotify.com/embed/album/${spotifyAlbumId}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        ) : null}
      </section>
    </TooltipProvider>
  );
}
