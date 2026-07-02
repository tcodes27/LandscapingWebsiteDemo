import { Key, Check, Minus, ClipboardEdit, Hammer, Eye, Rocket, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Reveal } from "./section";

const COMPARE = [
  { label: "Built for you", hdm: "Custom design", wix: "You build it yourself" },
  { label: "SEO", hdm: "Optimized for local search", wix: "Basic settings" },
  { label: "Speed", hdm: "Fast every time", wix: "Depends on your build" },
  { label: "Mobile experience", hdm: "Designed mobile-first", wix: "Sometimes works" },
  { label: "Design", hdm: "Professional & custom", wix: "Template look" },
  { label: "Launch time", hdm: "2–3 days", wix: "Weeks of setup" },
];

const STEPS = [
  { icon: ClipboardEdit, title: "Tell us about your business", copy: "Fill out a short form so we know what you do and who you serve." },
  { icon: Hammer, title: "We build your website", copy: "Our team designs and writes your site in 2–3 business days." },
  { icon: Eye, title: "You review it", copy: "We share a private link so you can look it over and give feedback." },
  { icon: Rocket, title: "We launch it", copy: "We connect your domain, set up hosting, and take you live." },
  { icon: TrendingUp, title: "Customers start finding you", copy: "Your site is search-ready from day one so calls can come in." },
];

const INCLUDED = [
  "One-page professional website",
  "Mobile responsive design",
  "Contact form with email delivery",
  "Google Maps embed",
  "Basic SEO setup",
  "Full service sections",
  "Clear call-to-action buttons",
  "Fast page loading",
  "Delivery in 2–3 business days",
];

const OPTIONAL = [
  "Google Ads",
  "Facebook Ads",
  "Monthly maintenance",
  "SEO management",
  "CRM setup",
  "Customer portal",
  "Online booking",
  "Automations",
  "AI assistant",
];

export function Block6Offer() {
  return (
    <Section
      id="pricing"
      eyebrow="The offer"
      title={<>You own it. We build it. It launches in days.</>}
      lead="No monthly rental. No holding your website hostage. One clear price, delivered fast, yours to keep."
    >
      {/* Ownership band */}
      <Reveal>
        <div className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/8 via-card to-[var(--gold-soft)]/25 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-8">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Key className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              You own everything.
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              No subscriptions. No rental fees. No website hostage. You own the code, the design,
              and your content. The only ongoing costs are your domain and hosting.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Vs Wix */}
      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
            <div className="p-4">Compare</div>
            <div className="border-l border-border p-4 text-primary">Her Digital Media</div>
            <div className="border-l border-border p-4">DIY Builder</div>
          </div>
          {COMPARE.map((row, i) => (
            <div
              key={row.label}
              className={"grid grid-cols-[1fr_1fr_1fr] border-t border-border text-sm " + (i % 2 ? "bg-muted/20" : "")}
            >
              <div className="p-4 font-medium">{row.label}</div>
              <div className="flex items-center gap-2 border-l border-border p-4">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--grass)]/20 text-[var(--forest)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="min-w-0">{row.hdm}</span>
              </div>
              <div className="flex items-center gap-2 border-l border-border p-4 text-muted-foreground">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                  <Minus className="h-3 w-3" />
                </span>
                <span className="min-w-0">{row.wix}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Process timeline */}
      <Reveal className="mt-16">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            What happens after you buy
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Five simple steps from hello to live.
          </h3>
        </div>
        <div className="relative grid gap-4 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          {STEPS.map((s, i) => (
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
            We're helping local businesses build their online presence. For the next 30 days,
            this professionally built launch package is $350. Normally it costs much more. This
            offer won't last forever.
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
                30-Day Special
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              <div className="text-xs text-muted-foreground">Signature Launch Package</div>
            </div>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-6xl font-extrabold tracking-tight text-foreground">
                $350
              </span>
              <span className="pb-2 text-sm text-muted-foreground">one-time · you own it</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Delivered in 2–3 business days. Domain and hosting help included. No contracts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Claim This Offer</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#faq">Read the FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Included / Optional */}
      <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Included with $350
          </div>
          <h4 className="mt-1 font-display text-xl font-bold">Everything you need to launch</h4>
          <ul className="mt-5 grid gap-2.5">
            {INCLUDED.map((i) => (
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
            {OPTIONAL.map((i) => (
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