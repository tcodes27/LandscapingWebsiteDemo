import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SiteNav } from "@/components/site/nav";
import { AvailabilityBanner } from "@/components/site/availability-banner";
import { DemoBadge } from "@/components/site/demo-badge";
import { FloatingCTA } from "@/components/site/floating-cta";
import { Block1Hero } from "@/components/site/block-1-hero";
import { Block2Services } from "@/components/site/block-2-services";
import { Block3Results } from "@/components/site/block-3-results";
import { Block4Proof } from "@/components/site/block-4-proof";
import { Block5Online } from "@/components/site/block-5-online";
import { Block6Offer } from "@/components/site/block-6-offer";
import { Block7Growth } from "@/components/site/block-7-growth";
import { Block8Close } from "@/components/site/block-8-close";
import { brand, industry, faq } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: brand.name,
          description: industry.metaDescription,
          email: brand.email,
          url: brand.websiteUrl,
          areaServed: "United States",
          priceRange: "$$",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <AvailabilityBanner />
      <SiteNav />
      <Block1Hero />
      <Block2Services />
      <Block3Results />
      <Block4Proof />
      <Block5Online />
      <Block6Offer />
      <Block7Growth />
      <Block8Close />
      <DemoBadge />
      <FloatingCTA />
      <Toaster position="top-center" richColors />
    </main>
  );
}
