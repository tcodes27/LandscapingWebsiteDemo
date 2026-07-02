/**
 * ============================================================================
 * SITE CONFIG — Industry-agnostic content data
 * ============================================================================
 *
 * All copy, labels, services, pricing, FAQs, metrics, reviews, roadmap steps,
 * industry pills, contact info, and navigation live in this file.
 *
 * To retarget this template for a new industry (plumbers, HVAC, electricians,
 * roofers, cleaning, med spas, dentists, contractors, etc.), copy this file
 * and swap the values below. Components are structural and read from here —
 * they do not hardcode any industry-specific text.
 * ============================================================================
 */
import type { ComponentType } from "react";
import hdmLogo from "@/assets/hdm-logo.png.asset.json";
import {
  ArrowRight,
  BadgeCheck,
  Chrome,
  ClipboardCheck,
  ClipboardEdit,
  ClipboardList,
  Clock,
  Compass,
  Cpu,
  Eye,
  Facebook,
  FileCheck2,
  Globe,
  HandCoins,
  Hammer,
  HeartHandshake,
  Instagram,
  Key,
  LayoutDashboard,
  Leaf,
  Lightbulb,
  Lock,
  Mail,
  Map,
  MapPin,
  MapPinned,
  Megaphone,
  Mic,
  MousePointerClick,
  Palette,
  Phone,
  Rocket,
  Scissors,
  Search,
  ShieldCheck,
  Smartphone,
  Sprout,
  Star,
  Target,
  TreeDeciduous,
  TrendingUp,
  User,
  UserCog,
  Users,
  Wrench,
  Youtube,
  Zap,
} from "lucide-react";

export type Icon = ComponentType<{ className?: string }>;

export type LabeledIcon = { icon: Icon; label: string };
export type Service = { icon: Icon; title: string; blurb: string; detail: string };
export type Metric = {
  icon: Icon;
  label: string;
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  sparkline: number[];
};
export type CompareRow = { label: string; ours: string; theirs: string };
export type ProcessStep = { icon: Icon; title: string; copy: string };
export type RoadmapStep = { icon: Icon; title: string; detail: string };
export type FAQItem = { q: string; a: string };
export type Review = { name: string; role: string; quote: string; stars: number };

export const brand = {
  name: "Her Digital Media",
  logoIcon: Leaf as Icon,
  logoImage: hdmLogo.url,
  tagline:
    "Helping local businesses build their digital presence with fast, professional websites.",
  email: "HerDigitalPath@gmail.com",
  website: "herdigitalmedia.com",
  websiteUrl: "https://herdigitalmedia.com",
  socials: [
    { icon: Facebook as Icon, label: "Facebook", href: "#" },
    { icon: Instagram as Icon, label: "Instagram", href: "#" },
    { icon: Youtube as Icon, label: "YouTube", href: "#" },
  ],
};

export const industry = {
  /** Short label for hero eyebrow (e.g. "For local landscapers", "For local plumbers"). */
  eyebrow: "For local landscapers",
  /** Used in schema.org description. */
  metaDescription:
    "Professional websites for landscaping and lawn care businesses. Delivered in 2–3 days.",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#why", label: "Why" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const availabilityBanner = {
  emphasis: "Limited Availability:",
  message: "Only accepting 10 landscaping businesses during this promotional period.",
};

export const hero = {
  headline: "When customers search…",
  headlineHighlight: "make sure they find you.",
  subhead:
    "Your customers are searching online every day. If they can't find you, they're hiring someone else. We build fast, professional landscaping websites in 2–3 days.",
  ctaPrimary: { label: "Get My Website", href: "#contact" },
  ctaSecondary: { label: "See Live Results", href: "#results" },
  ratingLabel: "Built for growth",
  deliveryNote: "Delivered in 2–3 business days · No contracts",
  browserUrl: "yourbusiness.com",
  floatingChips: [
    { icon: Star as Icon, primary: "4.9 Google Reviews", secondary: "Updated today", tone: "gold" as const },
    { icon: Zap as Icon, primary: "Loads in 1.2s", tone: "primary" as const },
    { icon: MapPin as Icon, primary: "Local SEO ready", tone: "grass" as const },
  ],
  searches: [
    "Lawn Care Near Me",
    "Landscaping Company",
    "Mulch Installation",
    "Tree Trimming",
    "Yard Cleanup",
  ],
  urgencyLead: "Right now people are searching:",
  urgencyTail: "If your business isn't online, they're hiring someone else.",
  trustBar: [
    { icon: Smartphone as Icon, label: "Mobile Friendly" },
    { icon: Search as Icon, label: "Google Search Ready" },
    { icon: Zap as Icon, label: "Fast Loading" },
    { icon: Mail as Icon, label: "Professional Email" },
    { icon: Wrench as Icon, label: "Easy to Update" },
    { icon: Compass as Icon, label: "Locally Focused" },
  ] as LabeledIcon[],
};

export const services: Service[] = [
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

export const perfectFor = {
  copy: "Local service businesses that live and die by their phone.",
  industries: [
    "Lawn Care",
    "Landscaping",
    "Tree Services",
    "Mulch Installation",
    "Hardscaping",
    "Irrigation",
    "Outdoor Lighting",
    "Pressure Washing",
    "Junk Removal",
  ],
};

export const results = {
  eyebrow: "Real Results",
  title: "What a great website actually does for your business.",
  lead:
    "More phone calls. More estimate requests. Better Google ranking. Everything visible in one place.",
  dashboardLabel: "Business Dashboard",
  timeframe: "Last 30 days",
  liveLabel: "Live sample data",
  disclaimer: "Demo data for illustration only · Your business metrics will vary",
  metrics: [
    { icon: Phone, label: "Calls this month", to: 48, sparkline: [4, 6, 5, 8, 7, 10, 12, 14, 13, 16, 18, 20] },
    { icon: ClipboardList, label: "Estimate requests", to: 27, sparkline: [2, 3, 3, 5, 4, 6, 7, 6, 8, 9, 10, 12] },
    { icon: MousePointerClick, label: "Website visitors", to: 1246, sparkline: [40, 60, 55, 75, 80, 92, 110, 130, 155, 180, 210, 240] },
    { icon: Star, label: "Google rating", to: 4.9, decimals: 1, sparkline: [4.6, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.9, 4.9, 4.9, 4.9, 4.9], suffix: "★" },
  ] as Metric[],
  visibility: {
    label: "Search visibility",
    to: 62,
    prefix: "+",
    suffix: "%",
    copy: "Ranking higher on Google for local searches month over month.",
    barPercent: 72,
  },
  device: {
    title: "Your website will look great on every device.",
    copy:
      "Over half of local service searches happen on a phone. Your site is designed to look polished on any screen — from a truck cab to a desktop.",
  },
};

export const proof = {
  eyebrow: "Proof",
  title: "Show what your best work looks like.",
  lead:
    "Real before-and-after photos and honest reviews are the fastest way to earn a customer's trust before they even pick up the phone.",
  whyTitle: "Every reason a neighbor picks you.",
  whyCopy:
    "These are the things landscaping customers actually look for — laid out clearly so nobody has to guess.",
  why: [
    { icon: BadgeCheck as Icon, label: "Licensed" },
    { icon: HeartHandshake as Icon, label: "Reliable" },
    { icon: Clock as Icon, label: "Fast Response" },
    { icon: MapPin as Icon, label: "Locally Owned" },
    { icon: ClipboardCheck as Icon, label: "Free Estimates" },
    { icon: Wrench as Icon, label: "Professional Equipment" },
    { icon: Phone as Icon, label: "Easy to Contact" },
  ] as LabeledIcon[],
  reviewsTitle: "Verified reviews, front and center.",
  reviewsNote: "Replace with verified Google reviews",
  reviews: [
    {
      name: "Customer Name",
      role: "Verified Google Review",
      quote:
        "Customer Review Placeholder — replace with a verified Google review from your own customers.",
      stars: 5,
    },
    {
      name: "Customer Name",
      role: "Verified Google Review",
      quote:
        "Customer Review Placeholder — replace with a verified Google review from your own customers.",
      stars: 5,
    },
    {
      name: "Customer Name",
      role: "Verified Google Review",
      quote:
        "Customer Review Placeholder — replace with a verified Google review from your own customers.",
      stars: 5,
    },
  ] as Review[],
};

export const online = {
  eyebrow: "Why online presence matters",
  title: "Your customers don't just use Facebook.",
  subhead:
    "They search on Google, tap into Maps, ask Siri, and open Chrome. If they can't find your business anywhere but Facebook, they'll hire someone they can.",
  channels: [
    { icon: Search as Icon, label: "Google" },
    { icon: Map as Icon, label: "Google Maps" },
    { icon: Compass as Icon, label: "Safari" },
    { icon: Chrome as Icon, label: "Chrome" },
    { icon: Globe as Icon, label: "Bing" },
    { icon: Mic as Icon, label: "Voice Search" },
  ] as LabeledIcon[],
  flowTitle: "How a customer actually finds you",
  flow: [
    { icon: User as Icon, label: "Customer" },
    { icon: Search as Icon, label: "Google search" },
    { icon: Globe as Icon, label: "Your website" },
    { icon: Phone as Icon, label: "Phone call" },
    { icon: ClipboardList as Icon, label: "Estimate" },
    { icon: HandCoins as Icon, label: "New customer" },
  ] as LabeledIcon[],
  mistakesTitle: "Avoid these common mistakes",
  mistakes: [
    "Only using Facebook",
    "A Yahoo or Gmail address",
    "Having no website",
    "Slow-loading pages",
    "No Google Business Profile",
    "No clear call-to-action",
  ],
  mistakesReassure: "We'll help you fix every one of these.",
  emailTitle: "A professional email builds trust",
  emailCopy: "Same inbox. Different first impression.",
  emailBad: "johnlandscape@yahoo.com",
  emailGood: "john@yourbusiness.com",
};

export const offer = {
  eyebrow: "The offer",
  title: "You own it. We build it. It launches in days.",
  lead:
    "No monthly rental. No holding your website hostage. One clear price, delivered fast, yours to keep.",
  ownership: {
    title: "You own everything.",
    body:
      "No subscriptions. No rental fees. No website hostage. You own the code, the design, and your content. The only ongoing costs are your domain and hosting.",
  },
  compareOursLabel: "Her Digital Media",
  compareTheirsLabel: "DIY Builder",
  compare: [
    { label: "Built for you", ours: "Custom design", theirs: "You build it yourself" },
    { label: "SEO", ours: "Optimized for local search", theirs: "Basic settings" },
    { label: "Speed", ours: "Fast every time", theirs: "Depends on your build" },
    { label: "Mobile experience", ours: "Designed mobile-first", theirs: "Sometimes works" },
    { label: "Design", ours: "Professional & custom", theirs: "Template look" },
    { label: "Launch time", ours: "2–3 days", theirs: "Weeks of setup" },
  ] as CompareRow[],
  processTitle: "Five simple steps from hello to live.",
  processEyebrow: "What happens after you buy",
  steps: [
    { icon: ClipboardEdit, title: "Tell us about your business", copy: "Fill out a short form so we know what you do and who you serve." },
    { icon: Hammer, title: "We build your website", copy: "Our team designs and writes your site in 2–3 business days." },
    { icon: Eye, title: "You review it", copy: "We share a private link so you can look it over and give feedback." },
    { icon: Rocket, title: "We launch it", copy: "We connect your domain, set up hosting, and take you live." },
    { icon: TrendingUp, title: "Customers start finding you", copy: "Your site is search-ready from day one so calls can come in." },
  ] as ProcessStep[],
  pricing: {
    promoLabel: "30-Day Special",
    packageName: "Signature Launch Package",
    priceDisplay: "$350",
    priceAmount: 350,
    priceNote: "one-time · you own it",
    promoRationale:
      "We're helping local businesses build their online presence. For the next 30 days, this professionally built launch package is $350. Normally it costs much more. This offer won't last forever.",
    deliveryNote: "Delivered in 2–3 business days. Domain and hosting help included. No contracts.",
    primary: { label: "Claim This Offer", href: "#contact" },
    secondary: { label: "Read the FAQ", href: "#faq" },
  },
  included: [
    "One-page professional website",
    "Mobile responsive design",
    "Contact form with email delivery",
    "Google Maps embed",
    "Basic SEO setup",
    "Full service sections",
    "Clear call-to-action buttons",
    "Fast page loading",
    "Delivery in 2–3 business days",
  ],
  optional: [
    "Google Ads",
    "Facebook Ads",
    "Monthly maintenance",
    "SEO management",
    "CRM setup",
    "Customer portal",
    "Online booking",
    "Automations",
    "AI assistant",
  ],
};

export const growth = {
  eyebrow: "Grow when you're ready",
  title: "One website today. A growing business tomorrow.",
  lead:
    "Start with a fast, professional site — then layer on marketing, automation, and custom tools as your business grows.",
  roi: {
    eyebrow: "ROI Calculator",
    title: "How much would one extra job a month be worth?",
    subhead:
      "Slide the values that match your business. See how quickly a website pays for itself.",
    jobValueLabel: "Average job value",
    jobCountLabel: "New jobs per month",
    defaultJobValue: 500,
    defaultJobs: 2,
    minJobValue: 250,
    maxJobValue: 5000,
    jobValueStep: 50,
    maxJobs: 10,
    resultLead: "Your website could bring in",
    example:
      "One new $500 landscaping job pays for this website. Everything after is profit.",
  },
  roadmapEyebrow: "This is only the beginning",
  roadmapTitle: "Grow when you're ready.",
  roadmap: [
    { icon: Rocket, title: "Website", detail: "Your professional one-page launch package." },
    { icon: Search, title: "SEO", detail: "Ongoing search optimization so more people find you." },
    { icon: MapPinned, title: "Google Business", detail: "Claim and optimize your Google Business Profile." },
    { icon: Target, title: "Google Ads", detail: "Paid campaigns that put you at the top for the right searches." },
    { icon: Megaphone, title: "Facebook Ads", detail: "Local ad campaigns to keep your name in front of neighbors." },
    { icon: Zap, title: "Automation", detail: "Follow up with leads automatically by text and email." },
    { icon: Users, title: "CRM", detail: "One place to track every lead, quote, and customer." },
    { icon: LayoutDashboard, title: "Business Dashboard", detail: "See calls, jobs, and revenue in one clean view." },
    { icon: UserCog, title: "Customer Portal", detail: "Let customers book, pay, and message you online." },
    { icon: Cpu, title: "Custom Software", detail: "Build anything your business needs — we're software engineers." },
  ] as RoadmapStep[],
  whyEyebrow: "Why business owners choose us",
  whyTitle: "Built for small businesses that want to grow.",
  whyCopy:
    "We build fast, own-it-forever websites for local service businesses. When you're ready to grow into ads, automation, or custom software — we can build that too.",
  benefits: [
    "Built by a professional software engineer",
    "Fast turnaround, delivered in 2–3 days",
    "You own your website",
    "No monthly website rental",
    "Easy to grow as your business grows",
    "Local business focused",
    "Built to be found on Google",
    "Friendly support after launch",
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Everything landscaping owners ask us.",
  lead: "Short, honest answers. No fine print.",
  items: [
    { q: "Do I own the website?", a: "Yes. You own the code, the design, and your content. It's not rented — it's yours to keep." },
    { q: "Can I edit it myself?", a: "Absolutely. We hand off a site you can update, and we're happy to help with edits any time." },
    { q: "How long does it take?", a: "Most one-page sites go live in 2–3 business days after we get your info." },
    { q: "What do I need to buy?", a: "Just the $350 launch package plus your own domain and hosting (about $15–25/month total). We'll help you set it up." },
    { q: "Can you help with updates?", a: "Yes. Ongoing maintenance is available as an optional monthly add-on if you want us to handle it for you." },
    { q: "Can you add more pages later?", a: "Yes. We can grow your site into a multi-page website whenever you're ready." },
    { q: "Can you build customer portals?", a: "Yes. We're software engineers — we build custom portals, booking systems, and CRMs." },
    { q: "Can I add online booking later?", a: "Yes. Booking, payments, and automations can all be added as your business grows." },
  ] as FAQItem[],
};

export const finalCta = {
  title: "Ready to put your business online?",
  subhead: "Let's build a website your customers will actually find.",
  primary: { label: "Request My Website", href: "#contact" },
  secondary: { label: "View more services", href: "#services" },
};

export const contact = {
  threeStepsEyebrow: "Ready in 3 simple steps",
  threeSteps: [
    { icon: ClipboardEdit as Icon, label: "Fill out the inquiry" },
    { icon: Hammer as Icon, label: "We build your website" },
    { icon: Eye as Icon, label: "You review and launch" },
  ] as LabeledIcon[],
  title: "Request your demo website",
  copy: "Tell us about your business. We'll reply within one business day.",
  submitLabel: "Request My Demo Website",
  submittingLabel: "Sending…",
  successTitle: "Request received",
  successBody:
    "This is a demo form. In your live site, we'd email you back within a day.",
  fields: {
    name: { label: "Your name", placeholder: "Jane Smith" },
    business: { label: "Business name", placeholder: "Smith Landscaping" },
    email: { label: "Email", placeholder: "you@yourbusiness.com" },
    phone: { label: "Phone", placeholder: "(555) 123-4567" },
    message: {
      label: "Tell us about your business",
      placeholder: "What services do you offer? Any specific goals?",
    },
  },
  trustBadges: [
    { icon: FileCheck2 as Icon, label: "No contracts" },
    { icon: HeartHandshake as Icon, label: "You own your website" },
    { icon: Rocket as Icon, label: "Fast turnaround" },
    { icon: Lock as Icon, label: "Secure setup" },
    { icon: ShieldCheck as Icon, label: "Friendly support" },
    { icon: TrendingUp as Icon, label: "Grows with your business" },
  ] as LabeledIcon[],
};

export const footer = {
  contactHeader: "Get in touch",
  followHeader: "Follow",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

// Re-export a single object for convenience
export const site = {
  brand,
  industry,
  nav,
  availabilityBanner,
  hero,
  services,
  perfectFor,
  results,
  proof,
  online,
  offer,
  growth,
  faq,
  finalCta,
  contact,
  footer,
};

// Icon re-export so components don't need lucide-react directly for arrows etc.
export { ArrowRight };

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
type _EnsureAllReferenced = ProcessStep | RoadmapStep | Metric;