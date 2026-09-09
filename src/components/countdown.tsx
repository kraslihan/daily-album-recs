"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";

type Props = {
  /** ISO timestamp of the next rollover (00:00 Europe/Istanbul). */
  nextMidnightIso: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown({ nextMidnightIso }: Props) {
  const router = useRouter();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(nextMidnightIso).getTime();
    let refreshed = false;
    const tick = () => {
      const diff = target - Date.now();
      setRemaining(Math.max(0, diff));
      if (diff <= 0 && !refreshed) {
        refreshed = true;
        // Midnight passed: pull the new day's album without a full reload.
        router.refresh();
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [nextMidnightIso, router]);

  if (remaining === null) {
    return (
      <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="size-3.5" />
        <span className="tabular-nums">--:--:--</span>
      </span>
    );
  }

  const total = Math.floor(remaining / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  return (
    <span
      className="inline-flex items-center gap-2 text-xs text-muted-foreground"
      title="Yeni albüm her gece 00:00'da (Türkiye saati) gelir"
    >
      <Clock className="size-3.5" />
      <span>
        Yeni albüme <span className="tabular-nums font-medium text-foreground">{pad(h)}:{pad(m)}:{pad(s)}</span>
      </span>
    </span>
  );
}
