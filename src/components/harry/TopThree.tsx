"use client";

import Image from "next/image";
import type { HarryPhoto } from "@/data/harryData";

type TopThreeProps = {
  photos: HarryPhoto[];
};

export function TopThree({ photos }: TopThreeProps) {
  return (
    <div className="mt-8">
      <h3 className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#8a7a6c]">
        Your Top 3
      </h3>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {photos.map((photo, index) => (
          <div key={photo.id} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#efe6d8] shadow-[0_8px_20px_-14px_rgba(40,28,20,0.5)] ring-1 ring-[#2a2118]/10">
              <Image
                src={photo.image}
                alt={photo.label}
                fill
                sizes="30vw"
                className="object-cover"
                unoptimized={photo.image.endsWith(".svg")}
              />
              <div className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center bg-[#1f1712]/85 font-sans text-[10px] text-[#f7f1e7]">
                #{index + 1}
              </div>
            </div>
            <p className="mt-1.5 line-clamp-2 font-sans text-[11px] leading-snug text-[#5c4d42]">
              {photo.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
