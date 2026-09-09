"use client";

import { Disc3 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-white/6 text-muted-foreground">
        <Disc3 className="size-6" />
      </span>
      <h1 className="font-display text-3xl">Plak takıldı</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        Günün albümü yüklenirken bir sorun oluştu. Tekrar denediğinde aynı albümü görürsün; seçim tarihe bağlıdır.
      </p>
      <Button onClick={reset} className="rounded-full">
        Tekrar dene
      </Button>
    </main>
  );
}
