export function formatDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

export function formatLongDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.round((s % 3600) / 60);
  if (h > 0) return `${h} sa ${m} dk`;
  return `${m} dk`;
}

/** "• Song 1 • Song 2 • Song 3" — one line, easy to split on the bullet. */
export function bulletTracklist(titles: string[]): string {
  return titles.map((t) => `• ${t}`).join(" ");
}
