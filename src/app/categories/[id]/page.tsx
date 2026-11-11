import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, getServicesByCategory, getCategoryById } from "@/config/services";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getCollectionSchema } from "@/config/schema";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cat = getCategoryById(id);
  if (!cat) return { title: "Category Not Found", robots: { index: false, follow: false } };
  return buildMetadata({
    title: `${cat.name}: Setup & Management`,
    path: `/categories/${cat.id}`,
    description: `${cat.description.replace(/[.\s]+$/, "")}. Browse ${getServicesByCategory(cat.id).length} services: ${getServicesByCategory(cat.id)
      .slice(0, 3)
      .map((s) => s.name)
      .join(", ")} and more.`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = getCategoryById(id);
  if (!category) notFound();

  const categoryServices = getServicesByCategory(id);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Categories", url: "/categories" },
            { name: category.name, url: `/categories/${category.id}` },
          ]),
          getCollectionSchema(
            category.name,
            `/categories/${category.id}`,
            category.description,
            categoryServices.map((svc) => ({ name: svc.name, url: `/services/${svc.id}` }))
          ),
        ]}
      />
      {/* Header */}
      <div
        className="relative overflow-hidden border-b border-white/[0.05] mb-12"
        style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, transparent)` }}
      >
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ background: category.accentColor }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <Link href="/categories" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-2xl border flex items-center justify-center"
              style={{ background: `${category.accentColor}15`, borderColor: `${category.accentColor}30` }}
            >
              <span className="text-2xl">
                {id === "email" ? "✉️" : id === "google" ? "🔍" : id === "social" ? "📱" :
                 id === "communication" ? "💬" : id === "developer" ? "💻" : id === "academic" ? "🎓" : "⚙️"}
              </span>
            </div>
            <div>
              <p className="text-xs font-700 uppercase tracking-widest mb-1" style={{ color: category.accentColor }}>
                {categoryServices.length} services
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-white">{category.name}</h1>
            </div>
          </div>
          <p className="text-white/45 max-w-xl leading-relaxed">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categoryServices.length > 0 ? (
          <>
          <h2 className="mb-6 text-xl font-bold text-white">Available {category.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categoryServices.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
          </>
        ) : (
          <div className="text-center py-24 glass rounded-2xl border border-white/[0.07]">
            <p className="text-white/50 text-lg font-700">No services in this category yet</p>
            <Link href="/catalog" className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors">
              Browse all services →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
