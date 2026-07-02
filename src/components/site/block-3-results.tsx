import { useState } from "react";
import { TrendingUp, Monitor, Smartphone } from "lucide-react";
import { Section, Reveal } from "./section";
import { Counter } from "./counter";
import { PhotoPlaceholder } from "./photo-placeholder";
import { cn } from "@/lib/utils";
import { results } from "@/data/site";

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
      eyebrow={results.eyebrow}
      title={<>{results.title}</>}
      lead={results.lead}
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Results dashboard */}
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-lg sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {results.dashboardLabel}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{results.timeframe}</div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[var(--grass)]/15 px-3 py-1 text-xs font-semibold text-[var(--forest)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--grass)]" />
                {results.liveLabel}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {results.metrics.map((m) => (
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
                  {results.visibility.label}
                </div>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div className="font-display text-4xl font-bold tracking-tight">
                    <Counter to={results.visibility.to} prefix={results.visibility.prefix} suffix={results.visibility.suffix} />
                  </div>
                  <p className="max-w-[16rem] text-xs opacity-80">{results.visibility.copy}</p>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-[var(--gold)]"
                    style={{ width: `${results.visibility.barPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
              {results.disclaimer}
            </p>
          </div>
        </Reveal>

        {/* Device preview */}
        <Reveal delay={100}>
          <div className="flex h-full flex-col">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              {results.device.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{results.device.copy}</p>

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