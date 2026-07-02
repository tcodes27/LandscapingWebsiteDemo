import { Key, Check, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Reveal } from "./section";
import { offer } from "@/data/site";

export function Block6Offer() {
  return (
    <Section
      id="pricing"
      eyebrow={offer.eyebrow}
      title={<>{offer.title}</>}
      lead={offer.lead}
    >
      {/* Ownership band */}
      <Reveal>
        <div className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/8 via-card to-[var(--gold-soft)]/25 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-8">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Key className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {offer.ownership.title}
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{offer.ownership.body}</p>
          </div>
        </div>
      </Reveal>

      {/* Vs Wix */}
      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
            <div className="p-4">Compare</div>
            <div className="border-l border-border p-4 text-primary">{offer.compareOursLabel}</div>
            <div className="border-l border-border p-4">{offer.compareTheirsLabel}</div>
          </div>
          {offer.compare.map((row, i) => (
            <div
              key={row.label}
              className={"grid grid-cols-[1fr_1fr_1fr] border-t border-border text-sm " + (i % 2 ? "bg-muted/20" : "")}
            >
              <div className="p-4 font-medium">{row.label}</div>
              <div className="flex items-center gap-2 border-l border-border p-4">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--grass)]/20 text-[var(--forest)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="min-w-0">{row.ours}</span>
              </div>
              <div className="flex items-center gap-2 border-l border-border p-4 text-muted-foreground">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                  <Minus className="h-3 w-3" />
                </span>
                <span className="min-w-0">{row.theirs}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Process timeline */}
      <Reveal className="mt-16">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            {offer.processEyebrow}
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {offer.processTitle}
          </h3>
        </div>
        <div className="relative grid gap-4 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          {offer.steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <s.icon className="h-4 w-4 text-[var(--gold)]" />
              </div>
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Pricing card */}
      <Reveal className="mt-16">
        <div className="mb-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">
            <Sparkles className="h-3.5 w-3.5" />
            Why this special exists
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground text-balance">
            {offer.pricing.promoRationale}
          </p>
        </div>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-card to-primary/5 p-8 shadow-xl sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--gold)]/25 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                {offer.pricing.promoLabel}
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              <div className="text-xs text-muted-foreground">{offer.pricing.packageName}</div>
            </div>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-6xl font-extrabold tracking-tight text-foreground">
                {offer.pricing.priceDisplay}
              </span>
              <span className="pb-2 text-sm text-muted-foreground">{offer.pricing.priceNote}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              {offer.pricing.deliveryNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={offer.pricing.primary.href}>{offer.pricing.primary.label}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={offer.pricing.secondary.href}>{offer.pricing.secondary.label}</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Included / Optional */}
      <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Included with {offer.pricing.priceDisplay}
          </div>
          <h4 className="mt-1 font-display text-xl font-bold">Everything you need to launch</h4>
          <ul className="mt-5 grid gap-2.5">
            {offer.included.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--grass)]/25 text-[var(--forest)]">
                  <Check className="h-3 w-3" />
                </span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Optional upgrades
          </div>
          <h4 className="mt-1 font-display text-xl font-bold">Add these when you're ready</h4>
          <ul className="mt-5 flex flex-wrap gap-2">
            {offer.optional.map((i) => (
              <li
                key={i}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium"
              >
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">
            Priced separately · Grow into these on your timeline.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}