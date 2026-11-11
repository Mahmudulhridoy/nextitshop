import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/config/catalog";
import ProductCard from "@/components/ProductCard";
import ServiceMarquee from "@/components/ServiceMarquee";
import BlogSection from "@/components/BlogSection";
import ReviewsSection from "@/components/ReviewsSection";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getFaqSchema } from "@/config/schema";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Send,
  MessageCircle,
  HelpCircle,
  Headphones,
  Clock,
  CheckCircle2,
  Server,
  Lock,
  Share2,
  Mail,
  Search,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "nextITshop — Verified Digital Assets & PVA Accounts",
  absoluteTitle: true,
  path: "/",
  description:
    "Aged, phone-verified PVA accounts for Gmail, Telegram, WhatsApp, GitHub and more. Order directly on Telegram or WhatsApp with a 7-day replacement warranty.",
  imageAlt: "nextITshop secure digital asset infrastructure",
});

const homeFaqs = [
  {
    q: "How does purchasing work without customer registration?",
    a: "We believe in direct, frictionless service. Pick your account variation and quantity, click 'Buy Now', and send your pre-filled order via Telegram or WhatsApp. Our operators verify details and dispatch your credentials immediately.",
  },
  {
    q: "How fast is delivery?",
    a: "Standard stock orders are dispatched within ~120 seconds of payment confirmation. Custom aged batches or massive bulk packs take 15 to 45 minutes.",
  },
  {
    q: "What verification method is used on your accounts?",
    a: "Every account is created using authentic mobile carrier SIM cards on residential connections. We never use recycled numbers or temporary VoIP providers.",
  },
  {
    q: "What is your replacement warranty?",
    a: "All purchases include a 7-day replacement warranty. If you experience an initial login challenge or password issue, our support desk replaces it instantly.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-2xl text-center"
          : "mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      }
    >
      <div>
        <span className="eyebrow mb-3">{eyebrow}</span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/55">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#06070b] text-white selection:bg-cyan-500/20">
      <JsonLd data={getFaqSchema(homeFaqs)} />
      {/* ── 1. FULL-BLEED HERO WITH INFRASTRUCTURE ARTWORK ───── */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/infrastructure.jpg"
          alt="nextITshop secure digital asset infrastructure"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 -z-10 bg-[#06070b]/60 lg:bg-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06070b] via-[#06070b]/85 to-[#06070b]/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#06070b] to-transparent" />

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Institutional-Grade Digital Assets & PVA Infrastructure
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Verified Digital Assets.{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Delivered in Minutes.
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Aged, residential-verified accounts for Gmail, Telegram, WhatsApp, GitHub, and 15+ global platforms. Tailored for agencies, media buyers, and automated workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black shadow-xl shadow-white/10 transition-all hover:bg-cyan-300 active:scale-95"
              >
                Explore All 17 Categories
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-[#0088cc] hover:border-transparent"
              >
                <Send className="h-4 w-4 fill-current text-[#26A5E4]" />
                Telegram
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-[#25D366] hover:border-transparent"
              >
                <MessageCircle className="h-4 w-4 fill-current text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#06070b]/60 py-5 backdrop-blur-xl">
            <div className="px-3 sm:px-5">
              <div className="text-2xl font-bold text-white sm:text-3xl">Instant</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/45">Delivery in Minutes</div>
            </div>
            <div className="px-3 sm:px-5">
              <div className="text-2xl font-bold text-cyan-300 sm:text-3xl">17+</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/45">Platforms, One Shop</div>
            </div>
            <div className="px-3 sm:px-5">
              <div className="text-2xl font-bold text-violet-300 sm:text-3xl">7-Day</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/45">Replacement Cover</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TICKER MARQUEE ───────────────────────────────── */}
      <ServiceMarquee />

      {/* ── 3. FEATURED PRODUCTS GRID ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Live Verified Stock"
          title="Featured Accounts & Assets"
          action={
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              View all 17 categories <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── 3b. GROWTH / DIGITAL MARKETING SHOWCASE ──────────── */}
      <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#090b11] py-24 sm:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-300/[0.06] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="eyebrow mb-3">Growth Ready</span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built for Marketers Who Move Fast
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              From social profiles to verified email and messaging accounts, get the foundations of every campaign set up in minutes.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Share2, t: "Social Media", d: "Profile setup and optimization for Instagram, X, Facebook and more.", href: "/categories/social", c: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
                { icon: Mail, t: "Email Accounts", d: "Gmail, Outlook and Yahoo setups ready for outreach.", href: "/categories/email", c: "text-orange-200 bg-orange-300/10 border-orange-300/20" },
                { icon: MessageCircle, t: "Messaging", d: "Telegram and WhatsApp business configuration.", href: "/categories/communication", c: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
                { icon: Search, t: "Google Services", d: "Voice, security and account configuration done right.", href: "/categories/google", c: "text-violet-300 bg-violet-500/10 border-violet-500/20" },
              ].map(({ icon: Icon, t, d, href, c }) => (
                <Link
                  key={t}
                  href={href}
                  className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.04]"
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${c}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 flex items-center gap-1.5 text-[15px] font-semibold text-white">
                      {t}
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-white/0 transition-all group-hover:translate-x-0 group-hover:text-white/70" />
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{d}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/catalog"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-cyan-300 active:scale-95"
            >
              Browse the Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Poster (portrait 736x1307) */}
          <div className="order-first mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:order-none lg:col-span-5 lg:max-w-[400px] lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/25 via-transparent to-orange-300/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-1.5 shadow-2xl shadow-black/60 ring-1 ring-white/5 bg-white/[0.03]">
                <Image
                  src="/digital-marketing.jpg"
                  alt="Digital marketing — SEO, content, social, analytics and growth"
                  width={736}
                  height={1307}
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
                  className="h-auto w-full rounded-[1.35rem]"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY NEXTITSHOP — IMAGE + VALUE PROPS ─────────── */}
      <section className="border-t border-white/[0.05] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/15 via-transparent to-violet-500/15 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/partnership.jpg"
                alt="nextITshop client partnership and dedicated support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[52%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070b]/70 via-transparent to-transparent" />

              {/* Floating specialist badge */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#06070b]/80 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">Dedicated Account Specialist</div>
                    <div className="text-xs text-white/50">1-on-1 Direct Support on Telegram & WhatsApp</div>
                  </div>
                </div>
                <span className="hidden rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300 sm:inline">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Copy + features */}
          <div>
            <span className="eyebrow mb-3">Why nextITshop</span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered for Enterprise Stability
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/55">
              Clean protocols, authentic phone verification, and zero bloat.
            </p>

            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Zap className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-white">Instant Dispatch Pipeline</h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    Direct order-to-chat delivery. Receive your account credentials within ~120s on Telegram or WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                  <ShieldCheck className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-white">Aged Residential Footprint</h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    Every asset passes quality checks. Clean residential IP history with full cookies, 2FA backup keys, and recovery email attached.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10">
                  <Headphones className="h-5 w-5 text-rose-300" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-white">Live Specialist Support</h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    No tickets or robots. Direct access to specialist operators on Telegram & WhatsApp for replacements, bulk quotes, and custom configurations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ─────────────────────────────────── */}
      <section className="border-t border-white/[0.05] bg-[#090b11] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" eyebrow="Direct Ordering" title="3 Steps. Zero Registration." />

          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
            {[
              { n: "01", t: "Pick Variation", d: "Select tier, age, or pack size from the catalog or product page.", c: "text-white" },
              { n: "02", t: "Send Order", d: "Click Buy Now to auto-generate a pre-filled Telegram or WhatsApp message.", c: "text-cyan-300" },
              { n: "03", t: "Instant Delivery", d: "Receive your accounts with 7-day replacement warranty and login guide.", c: "text-violet-300" },
            ].map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center">
                <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#06070b] font-mono text-2xl font-bold ${step.c}`}>
                  {step.n}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.t}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. LATEST FROM THE BLOG ─────────────────────────── */}
      <BlogSection />
      <ReviewsSection limit={3} />

      {/* ── 7. HOMEPAGE FAQ SECTION ─────────────────────────── */}
      <section className="border-t border-white/[0.05] bg-[#090b11] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                <HelpCircle className="h-3.5 w-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything You Need to Know
              </h2>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                View Full FAQ & Warranty Terms <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-8">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0e17] transition-all duration-200 open:border-cyan-500/30"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between p-6 text-base font-semibold text-white transition-colors group-hover:text-cyan-300">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-xs text-white/40 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="border-t border-white/[0.05] px-6 pb-6 pt-5 text-sm leading-relaxed text-white/60">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CLEAN BOTTOM CTA ─────────────────────────────── */}
      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-[#0b0e17] to-cyan-600/20 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[90px]" />
          <h2 className="relative mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Bulk Orders or Custom Specifications?
          </h2>
          <p className="relative mx-auto mb-9 max-w-lg text-base text-white/60">
            Reach out to our specialist support desk for volume discounts and custom account aging batches.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black shadow-xl transition-all hover:bg-cyan-300"
            >
              <Send className="h-4 w-4 fill-current" />
              Telegram Support
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#25D366]/20 transition-all hover:bg-[#20ba59]"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
