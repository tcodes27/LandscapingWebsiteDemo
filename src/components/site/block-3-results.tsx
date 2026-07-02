import { useState } from "react";
import { Phone, ClipboardList, MousePointerClick, Star, TrendingUp, Monitor, Smartphone } from "lucide-react";
import { Section, Reveal } from "./section";
import { Counter } from "./counter";
import { PhotoPlaceholder } from "./photo-placeholder";
import { cn } from "@/lib/utils";

const METRICS = [
  { icon: Phone, label: "Calls this month", to: 48, sparkline: [4, 6, 5, 8, 7, 10, 12, 14, 13, 16, 18, 20] },
  { icon: ClipboardList, label: "Estimate requests", to: 27, sparkline: [2, 3, 3, 5, 4, 6, 7, 6, 8, 9, 10, 12] },
  { icon: MousePointerClick, label: "Website visitors", to: 1246, sparkline: [40, 60, 55, 75, 80, 92, 110, 130, 155, 180, 210, 240] },
  { icon: Star, label: "Google rating", to: 4.9, decimals: 1, sparkline: [4.6, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.9, 4.9, 4.9, 4.9, 4.9], suffix: "★" },
  { icon: TrendingUp, label: "Search visibility", to: 62, prefix: "+", suffix: "%", sparkline: [5, 10, 14, 18, 24, 30, 34, 40, 46, 52, 58, 62] },
];

function Sparkline({ values, positive = true }: { values: number[]; positive?: boolean }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = 30 - ((v - min) / range) * 26 - 2;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="mt-3 h-8 w-full" preserveAspectRatio="none">
      <polyline
        points={pts}
        fill="none"
        stroke={positive ? "var(--forest)" : "var(--muted-foreground)"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Block3Results() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  return (
    <Section
      id="results"
      eyebrow="Real Results"
      title={<>What a great website actually does for your business.</>}
      lead="More phone calls. More estimate requests. Better Google ranking. Everything visible in one place."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Results dashboard */}
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-lg sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Business Dashboard
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Last 30 days</div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[var(--grass)]/15 px-3 py-1 text-xs font-semibold text-[var(--forest)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--grass)]" />
                Live sample data
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {METRICS.slice(0, 4).map((m) => (
                <div key={m.label} className="rounded-2xl border border-border/70 bg-background p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <m.icon className="h-3.5 w-3.5" />
                    <span className="truncate">{m.label}</span>
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold tracking-tight">
                    <Counter to={m.to} decimals={m.decimals ?? 0} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
                  </div>
                  <Sparkline values={m.sparkline} />
                </div>
              ))}
              <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-[var(--forest)] to-[var(--forest-deep)] p-4 text-primary-foreground sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-medium opacity-80">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Search visibility
                </div>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div className="font-display text-4xl font-bold tracking-tight">
                    <Counter to={62} prefix="+" suffix="%" />
                  </div>
                  <p className="max-w-[16rem] text-xs opacity-80">
                    Ranking higher on Google for local searches month over month.
                  </p>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[72%] rounded-full bg-[var(--gold)]" />
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
              Demo data for illustration only · Your business metrics will vary
            </p>
          </div>
        </Reveal>

        {/* Device preview */}
        <Reveal delay={100}>
          <div className="flex h-full flex-col">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Your website will look great on every device.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Over half of local service searches happen on a phone. Your site is designed to look
              polished on any screen — from a truck cab to a desktop.
            </p>

            <div className="mt-6 inline-flex w-fit rounded-full border border-border bg-card p-1">
              {(["desktop", "mobile"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                    device === d ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {d === "desktop" ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                  {d === "desktop" ? "Desktop" : "Mobile"}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-1 items-center justify-center rounded-3xl border border-border bg-muted/40 p-6 sm:p-10">
              {device === "desktop" ? (
                <div className="w-full max-w-md rounded-xl border border-border/70 bg-card p-2 shadow-lg transition-all duration-500">
                  <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>
                  <PhotoPlaceholder label="Desktop View" tone="forest" aspect="aspect-[16/10]" className="rounded-lg" />
                </div>
              ) : (
                <div className="w-40 rounded-[1.8rem] border-[6px] border-foreground/85 bg-foreground/85 p-1 shadow-xl transition-all duration-500">
                  <PhotoPlaceholder label="Mobile View" tone="forest" aspect="aspect-[9/16]" className="rounded-[1.2rem] border-0" />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}