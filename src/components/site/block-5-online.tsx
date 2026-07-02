import { Search, Map, Compass, Chrome, Globe, Mic, ArrowRight, Check, X, User, Phone, ClipboardList, HandCoins } from "lucide-react";
import { Section, Reveal } from "./section";

const CHANNELS = [
  { icon: Search, label: "Google" },
  { icon: Map, label: "Google Maps" },
  { icon: Compass, label: "Safari" },
  { icon: Chrome, label: "Chrome" },
  { icon: Globe, label: "Bing" },
  { icon: Mic, label: "Voice Search" },
];

const FLOW = [
  { icon: User, label: "Customer" },
  { icon: Search, label: "Google search" },
  { icon: Globe, label: "Your website" },
  { icon: Phone, label: "Phone call" },
  { icon: ClipboardList, label: "Estimate" },
  { icon: HandCoins, label: "New customer" },
];

const MISTAKES = [
  "Only using Facebook",
  "A Yahoo or Gmail address",
  "Having no website",
  "Slow-loading pages",
  "No Google Business Profile",
  "No clear call-to-action",
];

export function Block5Online() {
  return (
    <section id="why" className="relative overflow-hidden bg-[var(--forest-deep)] text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--grass) 40%, transparent), transparent 60%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            Why online presence matters
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-balance">
            Your customers don't just use Facebook.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-balance">
            They search on Google, tap into Maps, ask Siri, and open Chrome. If they can't find
            your business anywhere but Facebook, they'll hire someone they can.
          </p>
        </Reveal>

        {/* Channels */}
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {CHANNELS.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/20 text-[var(--gold-soft)]">
                <c.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 truncate text-sm font-medium">{c.label}</span>
            </div>
          ))}
        </Reveal>

        {/* SEO flow */}
        <Reveal className="mt-16">
          <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-soft)]">
            How a customer actually finds you
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {FLOW.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 md:contents">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-col md:items-center md:text-center">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[var(--gold-soft)]">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold">{step.label}</div>
                </div>
                {i < FLOW.length - 1 && (
                  <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-white/40 md:rotate-0 md:self-center" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mistakes + email swap */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-soft)]">
                Avoid these common mistakes
              </div>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {MISTAKES.map((m) => (
                  <div key={m} className="flex items-center gap-2.5 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-300">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 text-white/85">{m}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[var(--grass)]/15 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--grass)]/40 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-white">
                  We'll help you fix every one of these.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-soft)]">
                  A professional email builds trust
                </div>
                <p className="mt-3 text-sm text-white/75">
                  Same inbox. Different first impression.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm">
                  <span className="line-through opacity-70">johnlandscape@yahoo.com</span>
                  <X className="h-4 w-4 text-red-300" />
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[var(--grass)]/40 bg-[var(--grass)]/20 px-4 py-3 text-sm font-semibold">
                  <span>john@yourbusiness.com</span>
                  <Check className="h-4 w-4 text-[var(--gold-soft)]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}