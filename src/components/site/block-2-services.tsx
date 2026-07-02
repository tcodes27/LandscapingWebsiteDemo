import { useState } from "react";
import { Scissors, Palette, Sprout, TreeDeciduous, Leaf, Lightbulb, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Section, Reveal } from "./section";
import { PhotoPlaceholder } from "./photo-placeholder";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  detail: string;
};

const SERVICES: Service[] = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    blurb: "Weekly mowing, edging, and trimming that keeps yards looking sharp.",
    detail: "Show a clear service schedule, before-and-after photos, and easy quote requests.",
  },
  {
    icon: Palette,
    title: "Landscape Design",
    blurb: "Custom outdoor spaces designed around each customer's home.",
    detail: "Highlight portfolio work, design consultations, and project timelines.",
  },
  {
    icon: Sprout,
    title: "Mulch Installation",
    blurb: "Fresh mulch that protects plants and lifts curb appeal fast.",
    detail: "Include square-footage pricing, color options, and seasonal packages.",
  },
  {
    icon: TreeDeciduous,
    title: "Tree Trimming",
    blurb: "Safe, professional pruning and removal for healthier trees.",
    detail: "Feature licensing, insurance, and safety credentials right on the page.",
  },
  {
    icon: Leaf,
    title: "Seasonal Cleanup",
    blurb: "Spring and fall cleanups that get properties ready in one visit.",
    detail: "Offer scheduled slots, add-on services, and easy online booking.",
  },
  {
    icon: Lightbulb,
    title: "Outdoor Lighting",
    blurb: "Landscape and pathway lighting that shows off finished work.",
    detail: "Show installation photos, product tiers, and warranty details.",
  },
];

const INDUSTRIES = [
  "Lawn Care",
  "Landscaping",
  "Tree Services",
  "Mulch Installation",
  "Hardscaping",
  "Irrigation",
  "Outdoor Lighting",
  "Pressure Washing",
  "Junk Removal",
];

export function Block2Services() {
  const [active, setActive] = useState<Service | null>(null);
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>Every service, in one clean layout.</>}
      lead="Each service gets its own space — with a clear description, photos, and a call-to-action button that turns interest into estimate requests."
      tone="muted"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 40}>
            <button
              onClick={() => setActive(s)}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <PhotoPlaceholder
                label={s.title}
                sublabel="Replace with client photo"
                aspect="aspect-[16/9]"
                className="mb-5"
              />
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Perfect for
            </div>
            <p className="mt-2 max-w-xs text-lg font-semibold tracking-tight">
              Local service businesses that live and die by their phone.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-sm font-medium"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <active.icon className="h-5 w-5" />
                </div>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription className="text-base">{active.blurb}</DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">{active.detail}</p>
              <div className="mt-2 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
                This is a demo popup. In your live website, this space can hold pricing, photo
                galleries, seasonal packages, or a booking form.
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}