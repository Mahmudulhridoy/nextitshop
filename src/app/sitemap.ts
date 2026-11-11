import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";
import { products } from "@/config/catalog";
import { blogPosts } from "@/config/blog";
import { categories, services } from "@/config/services";

// Required for `output: "export"` (static hosting) — generated once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is a real, maintained date — NOT "now" on every build.
  const updated = new Date(siteConfig.contentUpdated);

  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/catalog", priority: 0.9 },
    { path: "/categories", priority: 0.7 },
    { path: "/blog", priority: 0.8 },
    { path: "/feedback", priority: 0.6 },
    { path: "/faq", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/terms", priority: 0.2 },
    { path: "/privacy", priority: 0.2 },
    { path: "/refund", priority: 0.2 },
  ].map((r) => ({ url: absoluteUrl(r.path), lastModified: updated, priority: r.priority }));

  const productRoutes = products.map((p) => ({
    url: absoluteUrl(`/product/${p.id}`),
    lastModified: updated,
    priority: 0.9,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: absoluteUrl(`/categories/${c.id}`),
    lastModified: updated,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: absoluteUrl(`/services/${s.id}`),
    lastModified: updated,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => {
    const d = new Date(post.isoDate);
    return {
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: isNaN(d.getTime()) ? updated : d,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...productRoutes, ...categoryRoutes, ...serviceRoutes, ...blogRoutes];
}
