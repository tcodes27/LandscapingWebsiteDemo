
# Her Digital Media — Landscaping Demo Site (v4)

Same full v3 content — but architected as **8 major visual blocks**, not 27 equal-weight sections. Each block combines related ideas with alternating layouts (full-bleed bands, card grids, compact rows, split hero-style panels) so the page scans like a premium agency site. Never use the word "template" externally.

## Design System

`src/styles.css` (oklch): deep forest green primary, fresh grass secondary, warm gold accent, soft off-white bg, charcoal text. Rounded corners, soft shadows, subtle gradients. Poppins (headings) + Inter (body) loaded via `<link>` in `__root.tsx`, mapped in `@theme`.

## Global UI (fixed / persistent)

- **Sticky Nav** — logo, links (Services, Results, Why, Pricing, FAQ, Contact), scroll-spy, mobile Sheet.
- **Availability banner** (dismissible strip): "Only accepting 10 landscaping businesses during this promotional period."
- **Floating DEMO badge** (dismissible): "DEMO WEBSITE — Built by Her Digital Media."
- **Floating "Request My Website" CTA** on mobile.
- **Back-to-top** button.

## The 8 Blocks

### Block 1 — Hero + Urgency + Trust  *(full-bleed intro)*
- **Hero**: headline *"When Customers Search... Make Sure They Find You."* Subhead about being invisible = losing jobs. Primary "Get My Website" + secondary "See Live Results". Right side: layered device mockup with floating feature chips (Google Reviews, Online Booking, Fast Loading, Mobile Friendly, SEO Ready).
- **Inline urgency ribbon** directly under hero (compact, one row of animated live-search phrases): "Right now people are searching: Lawn Care Near Me · Landscaping Company · Mulch Installation · Tree Trimming · Yard Cleanup" — one-line, subtle counter, then a closer sentence + secondary CTA.
- **Trust bar** compact icon row (Mobile Friendly, Google Search Ready, Fast, Professional Email, Easy to Update, Locally Focused).

### Block 2 — Services + Perfect Fit  *(card grid + pill row)*
- **Services grid**: 6 cards (Lawn Maintenance, Landscape Design, Mulch Installation, Tree Trimming, Seasonal Cleanup, Outdoor Lighting). Hover lift, Learn More opens Dialog.
- **Perfect For** pill row across the bottom of the block: Lawn care, Landscaping, Tree services, Mulch installation, Hardscaping, Irrigation, Outdoor lighting, Pressure washing, Junk removal.

### Block 3 — Results Dashboard + Every Device  *(split, two-panel band)*
- **Left / top: Results Dashboard** — business-dashboard card cluster with sample metrics (Calls 48, Estimate Requests 27, Visitors 1,246, Reviews 4.9★, Search Visibility +62%), tiny sparklines. Disclaimer: "Demo data for illustration only."
- **Right / bottom: Device Preview** — headline "Your Website Will Look Great On Every Device." Desktop/Mobile toggle swapping mockup frames.

### Block 4 — Proof  *(alternating rows, quiet section)*
- **Before & After** interactive drag slider ("Replace with real client photos").
- **Why Customers Choose You** — 7 compact icon chips (Licensed, Reliable, Fast Response, Locally Owned, Free Estimates, Professional Equipment, Easy to Contact).
- **Reviews** — 3 elegant placeholder cards (5★ "Customer Review Placeholder — Replace with verified Google Review").

### Block 5 — Why Online Presence Matters  *(full-bleed dark band, storytelling)*
Combined narrative on forest-green background with light text, arranged as three compact sub-panels:
- **Beyond Facebook** — icon grid (Google, Google Maps, Safari, Chrome, Bing, Voice Search) + closer line.
- **Local SEO flow** — horizontal (desktop) / vertical (mobile) diagram: Customer → Google Search → Your Website → Calls → Estimate → New Customer.
- **Common Mistakes vs Fix** — two mini-columns: ❌ Only Facebook / Yahoo or Gmail address / No website / Slow pages / No Google Business Profile / No clear CTA — then ✅ "We'll help you fix every one of these." Includes an inline **Professional Email swap card**: `johnlandscape@yahoo.com` → `john@yourbusiness.com`.

### Block 6 — Ownership + Process + Pricing  *(the money block)*
- **You Own Everything** — compact intro band with key icon: no subscriptions, no rental fees, no website hostage, you own the code / design / content.
- **Vs Wix comparison** — two-column table (Built for you, SEO optimized, Fast loading, Mobile optimized, Professional design, Launch in 2–3 days) — checks vs muted dashes.
- **5-step process timeline** — Tell us about your business → We build → You review → We launch → Customers start finding you.
- **Pricing card — Signature Launch Package $350** — "Why this special exists" explainer above the card; delivery 2–3 business days; below the card a two-column **Included / Optional Upgrades** clarity block (Included: one-page site, mobile responsive, contact form, Google Maps, basic SEO setup, service sections, CTAs, fast loading, delivery 2–3 days. Optional: Google Ads, Facebook Ads, monthly maintenance, SEO management, CRM, customer portal, online booking, automations, AI assistant).

### Block 7 — ROI + Future Growth  *(interactive + roadmap)*
- **ROI Calculator** — two shadcn Sliders (Average job value $250–$5,000, New jobs per month 1–10). Live-computed monthly revenue vs $350. Line: "One new $500 landscaping job pays for this website."
- **Grow When You're Ready roadmap** — vertical roadmap: Website → SEO → Google Business → Google Ads → Facebook Ads → Automation → CRM → Business Dashboard → Customer Portal → Custom Software. Nodes have Learn More Dialogs.
- **Why Business Owners Choose Her Digital Media** — client-benefit list: Built by a professional software engineer, Fast turnaround, You own your website, No monthly website rental, Easy to grow later, Local business focused, Built for Google Search, Friendly support after launch.

### Block 8 — FAQ + Contact  *(close)*
- **FAQ Accordion** — Do I own the website? Can I edit it? How long does it take? What do I need to buy? Help with updates? More pages later? Customer portals? Online booking later? (FAQPage JSON-LD emitted on this route.)
- **Final CTA band** — "Ready To Put Your Business Online?" + two buttons.
- **Ready in 3 Simple Steps** compact strip above the form: Fill out the inquiry → We build → You review and launch.
- **Contact form** — Name, Business Name, Email, Phone, Message. Client-side only, toast on submit.
- **Trust indicators row** directly under the button: No contracts · You own your website · Fast turnaround · Secure setup · Friendly support · Scalable as your business grows.
- **Footer** — Her Digital Media, tagline, email `HerDigitalPath@gmail.com`, site `herdigitalmedia.com`, socials, privacy/terms, copyright.

## Visual Rhythm

To keep 8 blocks from feeling equally heavy:
- Blocks 1, 5, 8 use **full-bleed bands** (light hero, dark storytelling, light close).
- Blocks 2, 4 use **card grids** on off-white.
- Block 3 uses a **split two-panel** composition.
- Block 6 stacks **compact strips** (ownership → comparison → timeline → pricing) so the money moment is the visual peak of the page.
- Block 7 is **interactive-forward** (sliders + roadmap) — active, not passive.
- Consistent section rhythm: eyebrow label · H2 · short lead · content. Alternating background: `bg-background` and a subtle `bg-muted` / green tinted band.

## Responsive Rules

- Any row mixing text + fixed widgets uses `grid-cols-[minmax(0,1fr)_auto]` on mobile → `sm:flex` at breakpoint, with `min-w-0` on text containers and `shrink-0` on icons/avatars. `truncate` on single-line headings.
- Roadmap and process timeline: horizontal on `md+`, vertical on mobile.
- Split blocks stack vertically below `md`.

## Copy Rules

- Never use "template" externally. Use Signature Launch Package / Business website package / Professionally built foundation / Starter website / Quick-start website.
- ~6th-grade reading level. Short lines. Outcome-oriented (calls, jobs, revenue), not tech-feature-oriented.

## Route & Metadata

Single route `src/routes/index.tsx`. `__root.tsx` head: real title, description, OG, Twitter, LocalBusiness JSON-LD, Google Fonts `<link>`s. Leaf route adds FAQPage JSON-LD.

## File Structure

```
src/
  routes/
    __root.tsx
    index.tsx
  components/site/
    availability-banner.tsx
    demo-badge.tsx
    nav.tsx
    floating-cta.tsx
    section.tsx                # eyebrow + heading + fade-in wrapper
    photo-placeholder.tsx
    counter.tsx
    block-1-hero.tsx           # hero + urgency ribbon + trust bar
    block-2-services.tsx       # services grid + perfect-for pills
    block-3-results.tsx        # dashboard + device preview split
    block-4-proof.tsx          # before/after + why-choose + reviews
    block-5-online.tsx         # beyond fb + seo flow + mistakes + pro email
    block-6-offer.tsx          # ownership + vs wix + process + pricing + included/optional
    block-7-growth.tsx         # ROI calc + roadmap + why HDM
    block-8-close.tsx          # FAQ + final CTA + 3 steps + contact + trust indicators + footer
  styles.css
```

## Out of Scope

- Real backend / auth / database — contact form is demo-only (toast).
- Real photography — `<PhotoPlaceholder>` labeled clearly throughout.
- Multi-page routing.
