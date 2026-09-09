import Link from "next/link";
import { Disc3 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-white/6 text-muted-foreground">
        <Disc3 className="size-6" />
      </span>
      <h1 className="font-display text-3xl">Bu gün için kayıt yok</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        Arşivde sadece geçmiş günler bulunur; gelecek günlerin albümü gece 00:00&apos;a kadar sürpriz kalır.
      </p>
      <Link href="/" className={cn(buttonVariants(), "rounded-full")}>
        Bugünün albümüne dön
      </Link>
    </main>
  );
}
