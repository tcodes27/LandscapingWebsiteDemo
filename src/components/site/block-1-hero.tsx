import { ArrowRight, Search, Star, Zap, Smartphone, MapPin, Mail, Wrench, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./section";
import { PhotoPlaceholder } from "./photo-placeholder";

const SEARCHES = [
  "Lawn Care Near Me",
  "Landscaping Company",
  "Mulch Installation",
  "Tree Trimming",
  "Yard Cleanup",
];

const TRUST = [
  { icon: Smartphone, label: "Mobile Friendly" },
  { icon: Search, label: "Google Search Ready" },
  { icon: Zap, label: "Fast Loading" },
  { icon: Mail, label: "Professional Email" },
  { icon: Wrench, label: "Easy to Update" },
  { icon: Compass, label: "Locally Focused" },
];

export function Block1Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--forest) 18%, transparent), transparent 60%), radial-gradient(50% 40% at 100% 20%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-8 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pt-16 lg:pb-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            For local landscapers
          </div>
          <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            When customers search…{" "}
            <span className="relative inline-block text-primary">
              make sure they find you.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[var(--gold)]/40"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Your customers are searching online every day. If they can't find you, they're
            hiring someone else. We build fast, professional landscaping websites in 2–3 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full text-base">
              <a href="#contact">
                Get My Website <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base">
              <a href="#results">See Live Results</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-[var(--forest)] to-[var(--grass)]"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-foreground">Built for growth</span>
              </div>
              <p className="text-xs">Delivered in 2–3 business days · No contracts</p>
            </div>
          </div>
        </Reveal>

        {/* Device mockup composition */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-lg">
            {/* Desktop mockup */}
            <div className="rounded-2xl border border-border/70 bg-card p-2 shadow-xl">
              <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                <div className="ml-3 flex-1 rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  yourbusiness.com
                </div>
              </div>
              <PhotoPlaceholder
                label="Homepage Hero"
                sublabel="Replace with client project"
                aspect="aspect-[16/10]"
                tone="forest"
                className="rounded-xl"
              />
            </div>

            {/* Phone mockup */}
            <div className="absolute -bottom-6 -left-6 w-32 rotate-[-6deg] rounded-[1.8rem] border-[6px] border-foreground/85 bg-foreground/85 p-1 shadow-2xl sm:w-40">
              <PhotoPlaceholder
                label="Mobile View"
                aspect="aspect-[9/16]"
                tone="grass"
                className="rounded-[1.2rem] border-0"
              />
            </div>

            {/* Floating chips */}
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card p-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-semibold">4.9 Google Reviews</div>
                  <div className="text-[10px] text-muted-foreground">Updated today</div>
                </div>
              </div>
            </div>
            <div className="absolute -left-2 top-1/3 hidden rounded-2xl border border-border bg-card p-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="text-xs font-semibold">Loads in 1.2s</div>
              </div>
            </div>
            <div className="absolute -bottom-8 right-4 hidden rounded-2xl border border-border bg-card p-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--grass)]/20 text-[var(--forest)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-xs font-semibold">Local SEO ready</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Urgency ribbon */}
      <div className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--grass)] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--grass)]" />
            </span>
            Right now people are searching:
          </div>
          <div className="flex flex-wrap gap-2">
            {SEARCHES.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                <Search className="h-3 w-3" />
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground sm:ml-auto">
            If your business isn't online, they're hiring someone else.
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-5 py-10 sm:grid-cols-3 sm:px-8 md:grid-cols-6">
        {TRUST.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0 truncate font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}