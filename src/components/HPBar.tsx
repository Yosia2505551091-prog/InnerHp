import { Heart } from "lucide-react";

export function HPBar({ value, max = 100, size = "md" }: { value: number; max?: number; size?: "sm" | "md" | "lg" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const heights = { sm: "h-3", md: "h-5", lg: "h-7" }[size];
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Heart className="h-3.5 w-3.5 fill-[var(--hp)] text-[var(--hp)]" />
          Mental HP
        </div>
        <div className="font-display text-sm font-semibold">
          <span className="text-foreground">{value}</span>
          <span className="text-muted-foreground"> / {max}</span>
        </div>
      </div>
      <div className={`relative ${heights} w-full overflow-hidden rounded-full border border-white/60 bg-white/40 backdrop-blur`}>
        <div
          className="gradient-hp animate-pulse-glow relative h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        >
          <div className="hp-shimmer absolute inset-0 rounded-full opacity-70" />
        </div>
      </div>
    </div>
  );
}