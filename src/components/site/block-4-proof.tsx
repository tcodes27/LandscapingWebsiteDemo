import { BadgeCheck, Clock, MapPin, ClipboardCheck, Wrench, Phone, HeartHandshake, Star, Quote } from "lucide-react";
import { Section, Reveal } from "./section";
import { BeforeAfter } from "./before-after";

const WHY = [
  { icon: BadgeCheck, label: "Licensed" },
  { icon: HeartHandshake, label: "Reliable" },
  { icon: Clock, label: "Fast Response" },
  { icon: MapPin, label: "Locally Owned" },
  { icon: ClipboardCheck, label: "Free Estimates" },
  { icon: Wrench, label: "Professional Equipment" },
  { icon: Phone, label: "Easy to Contact" },
];

export function Block4Proof() {
  return (
    <Section
      eyebrow="Proof"
      title={<>Show what your best work looks like.</>}
      lead="Real before-and-after photos and honest reviews are the fastest way to earn a customer's trust before they even pick up the phone."
      tone="muted"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <BeforeAfter />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Every reason a neighbor picks you.
            </h3>
            <p className="mt-3 text-muted-foreground">
              These are the things landscaping customers actually look for — laid out clearly so
              nobody has to guess.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {WHY.map((w) => (
                <span
                  key={w.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <w.icon className="h-3.5 w-3.5" />
                  </span>
                  {w.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Reviews</div>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Verified reviews, front and center.
            </h3>
          </div>
          <div className="hidden text-right text-sm text-muted-foreground sm:block">
            Replace with verified Google reviews
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-6 w-6 text-[var(--gold)]/40" />
              <div className="flex items-center gap-0.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                "Customer Review Placeholder — replace with a verified Google review from your
                own customers."
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[var(--forest)] to-[var(--grass)]" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">Customer Name</div>
                  <div className="text-xs text-muted-foreground">Verified Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}