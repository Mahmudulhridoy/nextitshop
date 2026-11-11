import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getServiceSchema } from "@/config/schema";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Clock, CheckCircle2, AlertCircle, Send, MessageCircle,
  ArrowRight, Shield, Star
} from "lucide-react";
import { services, categories, getServicesByCategory, getServiceById, getCategoryById } from "@/config/services";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";
import OrderButton from "./OrderButton";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: "Service Not Found", robots: { index: false, follow: false } };
  return buildMetadata({
    title: service.name,
    path: `/services/${service.id}`,
    description: `${service.shortDescription.replace(/[.\s]+$/, "")}. Includes ${service.features
      .slice(0, 3)
      .join(", ")
      .toLowerCase()}. Typical delivery: ${service.deliveryTime}.`,
  });
}

const accentColors: Record<string, string> = {
  cyan: "#06b6d4",
  purple: "#a855f7",
  pink: "#ec4899",
  blue: "#3b82f6",
  green: "#10b981",
  orange: "#f97316",
  red: "#ef4444",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const category = getCategoryById(service.categoryId);
  const related = getServicesByCategory(service.categoryId)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const accent = accentColors[service.accentColor] ?? "#06b6d4";

  const badgeStyle = {
    Popular: "bg-purple-500/10 text-purple-400 border border-purple-500/25",
    Hot: "bg-pink-500/10 text-pink-400 border border-pink-500/25",
    New: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25",
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <JsonLd
        data={[
          getServiceSchema(service, category),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Catalog", url: "/catalog" },
            ...(category ? [{ name: category.name, url: `/categories/${category.id}` }] : []),
            { name: service.name, url: `/services/${service.id}` },
          ]),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/30 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-white/60 transition-colors">Catalog</Link>
          <span>/</span>
          {category && (
            <>
              <Link href={`/categories/${category.id}`} className="hover:text-white/60 transition-colors">{category.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-white/60">{service.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Header card */}
            <div
              className="relative rounded-3xl border p-7 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${accent}08, rgba(14,14,26,0.95))`, borderColor: `${accent}20` }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: accent }} />

              <div className="relative flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}15`, borderColor: `${accent}30` }}
                >
                  <ServiceIcon icon={service.icon} color={service.iconColor} size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      {category && (
                        <Link href={`/categories/${category.id}`} className="text-xs font-700 uppercase tracking-widest mb-1.5 block hover:opacity-80 transition-opacity" style={{ color: accent }}>
                          {category.name}
                        </Link>
                      )}
                      <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">{service.name}</h1>
                    </div>
                    {service.badge && (
                      <span className={`badge ${badgeStyle[service.badge as keyof typeof badgeStyle] || badgeStyle.New}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{service.deliveryTime}</span>
                    <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" />Authorized Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0e0e1a] p-6">
              <h2 className="font-800 text-white mb-3 text-lg">About This Service</h2>
              <p className="text-white/55 leading-relaxed text-sm">{service.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0e0e1a] p-6">
              <h2 className="font-800 text-white mb-4 text-lg">What&#39;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accent }} />
                    <span className="text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0e0e1a] p-6">
              <h2 className="font-800 text-white mb-4 text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Requirements
              </h2>
              <ul className="space-y-2.5">
                {service.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-amber-400/80 leading-relaxed">
                ⚠️ All services are for your own authorized accounts only. We never request unauthorized credentials.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Pricing card */}
            <div
              className="sticky top-24 rounded-2xl border p-6"
              style={{ background: `linear-gradient(135deg, ${accent}06, rgba(14,14,26,0.95))`, borderColor: `${accent}20` }}
            >
              <p className="text-white/40 text-xs mb-1">{service.priceLabel}</p>
              <div className="text-4xl font-black text-white mb-1">
                <span className="text-xl" style={{ color: accent }}>\$</span>
                {service.basePrice.toFixed(2)}
              </div>
              <p className="text-white/30 text-xs mb-5">Contact us for exact pricing</p>

              {/* Variants */}
              {service.variants && service.variants.length > 0 && (
                <div className="mb-5 space-y-2">
                  <p className="text-white/50 text-xs font-700 uppercase tracking-wider mb-3">Packages</p>
                  {service.variants.map((v) => (
                    <div key={v.label} className="flex items-center justify-between p-3 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                      <div>
                        <div className="text-sm font-700 text-white">{v.label}</div>
                        {v.description && <div className="text-xs text-white/35 mt-0.5">{v.description}</div>}
                      </div>
                      <div className="text-sm font-800" style={{ color: accent }}>\${v.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order button */}
              <OrderButton service={service} accent={accent} />

              {/* Contact options */}
              <div className="mt-4 space-y-2.5">
                <a
                  href={siteConfig.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/[0.1] text-white/60 hover:text-white hover:border-white/20 text-sm font-600 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Order via Telegram
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/[0.1] text-white/60 hover:text-white hover:border-white/20 text-sm font-600 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>

              {/* Trust items */}
              <div className="mt-5 pt-4 border-t border-white/[0.07] space-y-2.5">
                {[
                  { icon: Shield, text: "Secure & legitimate service" },
                  { icon: Clock, text: `Delivery: ${service.deliveryTime}` },
                  { icon: Star, text: "Professional support included" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-white/35">
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Back to catalog */}
            <Link
              href="/catalog"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </div>
        </div>

        {/* Related services */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/[0.05]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white">Related Services</h2>
              {category && (
                <Link href={`/categories/${category.id}`} className="flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors">
                  View all in {category.name} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
