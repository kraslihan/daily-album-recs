import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-12 lg:px-8 lg:py-12">
      <div>
        <div className="max-w-[560px]">
          <Skeleton className="aspect-[1.34/1] w-full rounded-lg bg-white/6" />
        </div>
        <Skeleton className="mt-8 h-5 w-40 rounded-full bg-white/6" />
        <Skeleton className="mt-4 h-16 w-3/4 bg-white/6" />
        <Skeleton className="mt-3 h-7 w-1/2 bg-white/6" />
        <div className="mt-8 space-y-3">
          <Skeleton className="h-4 w-full bg-white/6" />
          <Skeleton className="h-4 w-11/12 bg-white/6" />
          <Skeleton className="h-4 w-4/5 bg-white/6" />
        </div>
      </div>
      <div className="rounded-2xl border border-white/8 bg-card/70 p-5">
        <div className="flex gap-4">
          <Skeleton className="size-20 rounded-md bg-white/6" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-16 bg-white/6" />
            <Skeleton className="h-6 w-2/3 bg-white/6" />
            <Skeleton className="h-4 w-1/2 bg-white/6" />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-full bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
