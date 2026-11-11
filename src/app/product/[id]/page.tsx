import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getProductSchema } from "@/config/schema";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductById } from "@/config/catalog";
import { getProductDetail } from "@/config/productDetails";
import ServiceIcon from "@/components/ServiceIcon";
import ProductOrderSidebar from "@/components/ProductOrderSidebar";
import ProductCard from "@/components/ProductCard";
import { blogPosts } from "@/config/blog";
import BlogCard from "@/components/BlogCard";
import {
  ShieldCheck,
  Zap,
  RotateCcw,
  Star,
  CheckCircle2,
  ChevronRight,
  Globe,
  Smartphone,
  Server,
  Mail,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found", robots: { index: false, follow: false } };
  const detail = getProductDetail(id);
  const firstSentence = (detail?.overview ?? "").split(/(?<=[.!?])\s/)[0];
  return buildMetadata({
    title: `${product.name} — ${product.subtitle}`.length > 48 ? product.name : `${product.name} — ${product.subtitle}`,
    path: `/product/${product.id}`,
    description: firstSentence
      ? `${firstSentence} Delivery: ${product.delivery}. Order via Telegram or WhatsApp.`
      : `${product.name} (${product.subtitle}). Delivery: ${product.delivery}. Order via Telegram or WhatsApp.`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const details = getProductDetail(id);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#07080d] text-white">
      <JsonLd
        data={[
          getProductSchema(product, details),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Catalog", url: "/catalog" },
            { name: product.name, url: `/product/${product.id}` },
          ]),
        ]}
      />
      {/* ── BREADCRUMB ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs text-white/40 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <Link href="/catalog" className="hover:text-white transition-colors">
            Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <span className="text-white font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* ── MAIN PRODUCT SECTION (2-Column Grid) ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* LEFT: Product Information & In-Depth Technical Details */}
          <div>
            {/* Header Badge, Stars & Live Stock */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0b0e17] border border-white/[0.1] flex items-center justify-center p-3.5 shadow-xl shadow-cyan-950/20">
                  <ServiceIcon icon={product.icon} color={product.iconColor} size={36} />
                </div>
                <div>
                  {product.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-400 mb-1.5 inline-block">
                      {product.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-white">{details.rating}</span>
                    <span className="text-white/40">({details.reviewsCount}+ verified orders)</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                In Stock · Same-Day Dispatch
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-base text-white/40 font-medium mb-8">{product.subtitle}</p>

            {/* 6 Technical Specs Boxes (Matching PVANXT) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Globe className="w-4 h-4 text-cyan-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Creation IP
                </div>
                <div className="text-xs font-bold text-cyan-400 mt-0.5">
                  {details.specs.creationIp}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Smartphone className="w-4 h-4 text-green-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Verification
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {details.specs.verification}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Server className="w-4 h-4 text-purple-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Access Protocol
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {details.specs.accessProtocol}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Mail className="w-4 h-4 text-blue-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Recovery Email
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {details.specs.recoveryEmail}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Zap className="w-4 h-4 text-amber-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Delivery ETA
                </div>
                <div className="text-xs font-bold text-green-400 mt-0.5">
                  {details.specs.deliveryEta}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <ShieldCheck className="w-4 h-4 text-rose-400 mb-2" />
                <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Warranty
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {details.specs.warranty}
                </div>
              </div>
            </div>

            {/* Overview & Technical Details */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                Overview & Details
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">{details.overview}</p>
            </div>

            {/* Included Features & Specs */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                Included Features & Specs
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {details.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-white/70 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Variations & Unit Rates Table */}
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                Available Variations & Unit Rates
              </h2>
              <div className="space-y-2">
                {product.variations.map((v) => (
                  <div
                    key={v.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b0e17] border border-white/[0.06]"
                  >
                    <span className="text-xs font-semibold text-white/80">{v.name}</span>
                    <span className="text-sm font-black text-cyan-400">
                      ${v.price.toFixed(2)}
                      <span className="text-[11px] font-normal text-white/30 ml-1">/ea</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees 3-Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">100% Guaranteed</div>
                  <div className="text-[10px] text-white/40">No upfront payment needed</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/15 flex items-center gap-3">
                <Zap className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">~120s Dispatch</div>
                  <div className="text-[10px] text-white/40">Direct to chat delivery</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/15 flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">7-Day Warranty</div>
                  <div className="text-[10px] text-white/40">Free replacement policy</div>
                </div>
              </div>
            </div>

            {/* Verified Buyer Reviews */}
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                Verified Buyer Reviews
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {details.reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                          ✓ Verified Buyer
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed mb-4 italic">
                        &quot;{rev.text}&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-[10px] font-black text-white">
                        {rev.initials}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{rev.name}</div>
                        <div className="text-[10px] text-white/35">{rev.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-2.5">
                {details.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
                  >
                    <summary className="p-4 font-bold text-xs text-white cursor-pointer flex justify-between items-center group-hover:text-cyan-400 transition-colors">
                      <span>{faq.q}</span>
                      <span className="text-white/40 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs text-white/50 leading-relaxed border-t border-white/[0.04] pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Configurator & Order Panel */}
          <div>
            <ProductOrderSidebar product={product} />
          </div>
        </div>
      </section>

      {/* ── GUIDES ABOUT THIS PRODUCT (internal links help SEO + readers) ── */}
      {blogPosts.some((b) => b.product === product.id) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-white/[0.06]">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-8">
            Guides: {product.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter((b) => b.product === product.id).slice(0, 3).map((b) => (
              <BlogCard key={b.id} post={b} />
            ))}
          </div>
        </section>
      )}

      {/* ── RELATED PRODUCTS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-white/[0.06]">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((relProduct) => (
            <ProductCard key={relProduct.id} product={relProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
