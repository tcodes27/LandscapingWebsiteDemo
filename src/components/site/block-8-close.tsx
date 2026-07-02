import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Globe, ArrowRight } from "lucide-react";
import { Section, Reveal } from "./section";
import { brand, contact, faq, finalCta, footer } from "@/data/site";

export const FAQ_ITEMS = faq.items;

export function Block8Close() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(contact.successTitle, { description: contact.successBody });
    }, 700);
  };

  return (
    <>
      {/* FAQ */}
      <Section
        id="faq"
        eyebrow={faq.eyebrow}
        title={<>{faq.title}</>}
        lead={faq.lead}
      >
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, i) => (
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
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80 text-balance">
              {finalCta.subhead}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-[var(--gold)] text-[var(--forest-deep)] hover:bg-[var(--gold-soft)]">
                <a href={finalCta.primary.href}>{finalCta.primary.label}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <a href={finalCta.secondary.href}>{finalCta.secondary.label}</a>
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
            {contact.threeStepsEyebrow}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {contact.threeSteps.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  {s.label}
                </div>
                {i < contact.threeSteps.length - 1 && (
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
                {contact.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{contact.copy}</p>
            </div>
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="name">{contact.fields.name.label}</Label>
                <Input id="name" name="name" required placeholder={contact.fields.name.placeholder} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="business">{contact.fields.business.label}</Label>
                <Input id="business" name="business" required placeholder={contact.fields.business.placeholder} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">{contact.fields.email.label}</Label>
                <Input id="email" name="email" type="email" required placeholder={contact.fields.email.placeholder} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">{contact.fields.phone.label}</Label>
                <Input id="phone" name="phone" type="tel" required placeholder={contact.fields.phone.placeholder} />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="message">{contact.fields.message.label}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={contact.fields.message.placeholder}
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full">
                  {submitting ? contact.submittingLabel : contact.submitLabel}
                </Button>
              </div>
            </form>

            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-3">
              {contact.trustBadges.map((t) => (
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
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-border">
                <img src={brand.logoImage} alt={`${brand.name} logo`} className="h-10 w-10 object-contain" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{brand.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {footer.contactHeader}
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-3.5 w-3.5" /> {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.websiteUrl} className="inline-flex items-center gap-2 hover:text-primary">
                  <Globe className="h-3.5 w-3.5" /> {brand.website}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {footer.followHeader}
            </div>
            <div className="mt-3 flex gap-2">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
            <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            <div className="flex gap-5">
              {footer.legal.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-foreground">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}