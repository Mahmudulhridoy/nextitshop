import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/config/schema";
import Link from "next/link";
import { categories, getServicesByCategory } from "@/config/services";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = buildMetadata({
  title: "Service Categories",
  path: "/categories",
  description:
    "Browse nextITshop service categories: email, Google, social media, messaging, developer and academic account setup, with clear scope and delivery for each service.",
});

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Categories", url: "/categories" }])} />
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.05] mb-14">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <p className="eyebrow mb-4">Service Categories</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Browse by <span className="gradient-text">Category</span>
          </h1>
          <p className="text-white/40 max-w-xl leading-relaxed">
            Find the right service category for your needs. Each category includes specialized setup and management services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-bold text-white">Choose a service category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              serviceCount={getServicesByCategory(cat.id).length}
              size="large"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
