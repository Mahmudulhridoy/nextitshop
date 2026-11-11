import { Metadata } from "next";
import CatalogClient from "./CatalogClient";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { products } from "@/config/catalog";
import { getBreadcrumbSchema, getCollectionSchema } from "@/config/schema";

export const metadata: Metadata = buildMetadata({
  title: "Digital Account Catalog & Pricing",
  path: "/catalog",
  description:
    "Browse the full nextITshop catalog: Gmail, Google Voice, Telegram, WhatsApp, GitHub, edu mail and social media accounts with listed variations and prices.",
});

export default function CatalogPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Catalog", url: "/catalog" },
  ]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#07080d] text-white">
      <JsonLd
        data={getCollectionSchema(
          "Digital Account Catalog",
          "/catalog",
          "Verified digital accounts and assets available from nextITshop.",
          products.map((p) => ({ name: p.name, url: `/product/${p.id}` }))
        )}
      />
      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] mb-12 bg-[#090b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Direct Inventory
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              All Digital Accounts & Assets
            </h1>
            <p className="text-sm text-white/50 leading-relaxed">
              Explore 17 verified account categories. Select your variation, review live pricing tiers, and place orders directly with our Telegram and WhatsApp dispatch desk.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CatalogClient />
      </div>
    </div>
  );
}
