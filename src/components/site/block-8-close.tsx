import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Leaf, Mail, Globe, Facebook, Instagram, Youtube, ShieldCheck, FileCheck2, Rocket, Lock, HeartHandshake, TrendingUp, ArrowRight, ClipboardEdit, Hammer, Eye } from "lucide-react";
import { Section, Reveal } from "./section";

export const FAQ_ITEMS = [
  { q: "Do I own the website?", a: "Yes. You own the code, the design, and your content. It's not rented — it's yours to keep." },
  { q: "Can I edit it myself?", a: "Absolutely. We hand off a site you can update, and we're happy to help with edits any time." },
  { q: "How long does it take?", a: "Most one-page sites go live in 2–3 business days after we get your info." },
  { q: "What do I need to buy?", a: "Just the $350 launch package plus your own domain and hosting (about $15–25/month total). We'll help you set it up." },
  { q: "Can you help with updates?", a: "Yes. Ongoing maintenance is available as an optional monthly add-on if you want us to handle it for you." },
  { q: "Can you add more pages later?", a: "Yes. We can grow your site into a multi-page website whenever you're ready." },
  { q: "Can you build customer portals?", a: "Yes. We're software engineers — we build custom portals, booking systems, and CRMs." },
  { q: "Can I add online booking later?", a: "Yes. Booking, payments, and automations can all be added as your business grows." },
];

const THREE_STEPS = [
  { icon: ClipboardEdit, label: "Fill out the inquiry" },
  { icon: Hammer, label: "We build your website" },
  { icon: Eye, label: "You review and launch" },
];

const TRUST = [
  { icon: FileCheck2, label: "No contracts" },
  { icon: HeartHandshake, label: "You own your website" },
  { icon: Rocket, label: "Fast turnaround" },
  { icon: Lock, label: "Secure setup" },
  { icon: ShieldCheck, label: "Friendly support" },
  { icon: TrendingUp, label: "Grows with your business" },
];

export function Block8Close() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received", {
        description: "This is a demo form. In your live site, we'd email you back within a day.",
      });
    }, 700);
  };

  return (
    <>
      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title={<>Everything landscaping owners ask us.</>}
        lead="Short, honest answers. No fine print."
      >
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      {/* Final CTA band */}
      <section className="relative overflow-hidden bg-[var(--forest-deep)] text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 40% at 20% 100%, color-mix(in oklab, var(--grass) 45%, transparent), transparent 60%), radial-gradient(45% 40% at 100% 0%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl text-balance">
              Ready to put your business online?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80 text-balance">
              Let's build a website your customers will actually find.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-[var(--gold)] text-[var(--forest-deep)] hover:bg-[var(--gold-soft)]">
                <a href="#contact">Request My Website</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <a href="#services">View more services</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <Section
        id="contact"
        containerClassName="max-w-4xl"
      >
        <Reveal className="mb-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Ready in 3 simple steps
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {THREE_STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  {s.label}
                </div>
                {i < THREE_STEPS.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-10">
            <div className="mb-6 text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Request your demo website
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your business. We'll reply within one business day.
              </p>
            </div>
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" required placeholder="Jane Smith" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="business">Business name</Label>
                <Input id="business" name="business" required placeholder="Smith Landscaping" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@yourbusiness.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="message">Tell us about your business</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What services do you offer? Any specific goals?"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full">
                  {submitting ? "Sending…" : "Request My Demo Website"}
                </Button>
              </div>
            </form>

            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-3">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <t.icon className="h-3 w-3" />
                  </span>
                  <span className="min-w-0 truncate font-medium text-foreground">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Her Digital Media
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Helping local businesses build their digital presence with fast, professional websites.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get in touch
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="mailto:HerDigitalPath@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-3.5 w-3.5" /> HerDigitalPath@gmail.com
                </a>
              </li>
              <li>
                <a href="https://herdigitalmedia.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Globe className="h-3.5 w-3.5" /> herdigitalmedia.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Follow
            </div>
            <div className="mt-3 flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
            <div>© {new Date().getFullYear()} Her Digital Media. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}