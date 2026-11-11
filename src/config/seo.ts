// ============================================================
// nextITshop — Centralized SEO helpers
// One place that builds canonical URLs, Open Graph, Twitter Card and robots
// metadata so every page stays consistent and duplicate-free.
// ============================================================
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const SITE_URL = siteConfig.url.replace(/\/$/, "");

/** Absolute URL for a path ("/" → "https://domain/"). */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Trim to a search-snippet-friendly length without cutting words. */
export function trimDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–—]+$/, "")}…`;
}

type PageSeo = {
  /** Page title WITHOUT the site name — the layout template appends " | nextITshop". */
  title: string;
  description: string;
  /** Route path, e.g. "/catalog" or "/product/gmail". Used for the canonical URL. */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Use the title exactly as given (no site-name suffix). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);
  const description = trimDescription(page.description);
  const image = absoluteUrl(page.image ?? siteConfig.defaultOgImage);
  const socialTitle = page.absoluteTitle ? page.title : `${page.title} | ${siteConfig.name}`;
  const index = siteConfig.indexable && !page.noIndex;

  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description,
    ...(page.keywords?.length ? { keywords: page.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: page.type ?? "website",
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: socialTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: page.imageAlt ?? `${siteConfig.name} — ${page.title}` }],
      ...(page.publishedTime ? { publishedTime: page.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
      creator: "@nextitshop",
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
  };
}
