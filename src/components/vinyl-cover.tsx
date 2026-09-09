import Image from "next/image";
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
              <Image src={labelUrl} alt="" fill sizes="120px" className="object-cover" />
            ) : null}
          </div>
        </div>
      </div>
      <div className="vinyl-sleeve">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 420px, 75vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
