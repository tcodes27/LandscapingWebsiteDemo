import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Section, Reveal } from "./section";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, ArrowRight } from "lucide-react";
import { growth, offer, type RoadmapStep } from "@/data/site";

export function Block7Growth() {
  const roi = growth.roi;
  const [jobValue, setJobValue] = useState(roi.defaultJobValue);
  const [jobs, setJobs] = useState(roi.defaultJobs);
  const [active, setActive] = useState<RoadmapStep | null>(null);

  const monthly = jobValue * jobs;
  const yearly = monthly * 12;
  const paysFor = Math.max(1, Math.ceil(offer.pricing.priceAmount / jobValue));

  return (
    <Section
      eyebrow={growth.eyebrow}
      title={<>{growth.title}</>}
      lead={growth.lead}
      tone="muted"
    >
      {/* ROI calculator */}
      <Reveal>
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              {roi.eyebrow}
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              {roi.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{roi.subhead}</p>

            <div className="mt-8 space-y-7">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">{roi.jobValueLabel}</label>
                  <span className="font-display text-lg font-bold text-primary">
                    ${jobValue.toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={[jobValue]}
                  min={roi.minJobValue}
                  max={roi.maxJobValue}
                  step={roi.jobValueStep}
                  onValueChange={(v) => setJobValue(v[0])}
                />
                <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>${roi.minJobValue.toLocaleString()}</span>
                  <span>${roi.maxJobValue.toLocaleString()}</span>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">{roi.jobCountLabel}</label>
                  <span className="font-display text-lg font-bold text-primary">{jobs}</span>
                </div>
                <Slider
                  value={[jobs]}
                  min={1}
                  max={roi.maxJobs}
                  step={1}
                  onValueChange={(v) => setJobs(v[0])}
                />
                <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>1</span>
                  <span>{roi.maxJobs}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[var(--forest)] to-[var(--forest-deep)] p-6 text-primary-foreground sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-soft)]">
              {roi.resultLead}
            </div>
            <div className="mt-3 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              ${monthly.toLocaleString()}
            </div>
            <div className="mt-1 text-sm text-white/75">per month</div>
            <div className="my-6 h-px bg-white/15" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-white/60">Per year</div>
                <div className="mt-1 font-display text-xl font-bold">
                  ${yearly.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-white/60">Pays for site in</div>
                <div className="mt-1 font-display text-xl font-bold">
                  {paysFor} {paysFor === 1 ? "job" : "jobs"}
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-white/10 p-3 text-xs text-white/85">{roi.example}</div>
          </div>
        </div>
      </Reveal>

      {/* Growth roadmap */}
      <Reveal className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              {growth.roadmapEyebrow}
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {growth.roadmapTitle}
            </h3>
          </div>
        </div>
        <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {growth.roadmap.map((r, i) => (
            <li key={r.title}>
              <button
                onClick={() => setActive(r)}
                className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-xs font-semibold text-muted-foreground">
                    Step {i + 1}
                  </span>
                </div>
                <div className="mt-3 text-sm font-semibold">{r.title}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Why HDM */}
      <Reveal className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                {growth.whyEyebrow}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
                {growth.whyTitle}
              </h3>
              <p className="mt-3 text-muted-foreground">{growth.whyCopy}</p>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {growth.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 rounded-xl border border-border bg-background p-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--grass)]/25 text-[var(--forest)]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-md">
          {active && (
            <>
              <DialogHeader>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <active.icon className="h-5 w-5" />
                </div>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.detail}</DialogDescription>
              </DialogHeader>
              <div className="rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
                Available as an upgrade after your website launches. Priced separately.
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}