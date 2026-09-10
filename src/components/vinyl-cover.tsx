import { Disc3 } from "lucide-react";

type Props = {
  coverUrl: string | null;
  labelUrl: string | null;
  alt: string;
  href: string;
};

export function VinylCover({ coverUrl, labelUrl, alt, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="vinyl-scene group block outline-none focus-visible:ring-3 focus-visible:ring-ring/60 rounded-lg"
      aria-label={`${alt} — Spotify'da aç`}
      title="Spotify'da aç"
    >
      <div className="vinyl-disc" aria-hidden>
        <div className="vinyl-disc-inner">
          <div className="vinyl-label bg-neutral-800">
            {labelUrl ? (
              // Native img: Vercel image optimizer cannot reach every CDN.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={labelUrl} alt="" className="absolute inset-0 size-full object-cover" />
            ) : null}
          </div>
        </div>
      </div>
      <div className="vinyl-sleeve">
        {coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={alt}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-800 to-neutral-900 text-muted-foreground">
            <Disc3 className="size-12" />
            <span className="text-xs">Kapak yüklenemedi</span>
          </div>
        )}
      </div>
    </a>
  );
}
