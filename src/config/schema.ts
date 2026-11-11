import { siteConfig } from "@/config/site";
import { Product } from "@/config/catalog";
import { BlogPost } from "@/config/blog";
import { ProductDetail } from "@/config/productDetails";
import type { Service, Category } from "@/config/services";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const ogImage = `${baseUrl}${siteConfig.defaultOgImage}`;

/**
 * Organization Schema (Knowledge Graph identity)
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    image: ogImage,
    sameAs: [siteConfig.contact.telegramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: siteConfig.contact.email,
        url: `${baseUrl}/contact`,
        availableLanguage: ["English"],
      },
    ],
  };
}

/**
 * WebSite Schema with SearchAction
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: siteConfig.name, url: baseUrl },
    // NOTE: no SearchAction on purpose — /catalog does not read a ?q= URL parameter.
    // Add one only if URL-driven search is implemented.
  };
}

/**
 * BreadcrumbList Schema for hierarchical navigation
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Product Schema for individual product pages
 */
export function getProductSchema(product: Product, detail: ProductDetail) {
  const minPrice = Math.min(...product.variations.map((v) => v.price));
  const maxPrice = Math.max(...product.variations.map((v) => v.price));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: detail.overview || product.subtitle,
    image: ogImage,
    sku: product.id,
    url: `${baseUrl}/product/${product.id}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: minPrice.toFixed(2),
      highPrice: maxPrice.toFixed(2),
      offerCount: product.variations.length,
      // No "availability" and no ratings/reviews: stock level can't be verified from static data.
      url: `${baseUrl}/product/${product.id}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

/**
 * FAQPage Schema
 */
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * BlogPosting Schema
 */
export function getArticleSchema(post: BlogPost) {
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [post.image ? `${baseUrl}${post.image}` : ogImage],
    datePublished: post.isoDate,
    dateModified: post.updatedIso,
    inLanguage: "en",
    articleSection: post.tag,
    wordCount: post.wordCount,
    ...(post.keywords.length ? { keywords: post.keywords.join(", ") } : {}),
    author: { "@type": "Organization", name: siteConfig.name, url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${baseUrl}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

/**
 * Service Schema for service detail pages (no prices/ratings — descriptive only).
 */
export function getServiceSchema(service: Service, category?: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: `${baseUrl}/services/${service.id}`,
    serviceType: category?.name ?? "Digital account setup",
    provider: { "@type": "Organization", name: siteConfig.name, url: baseUrl },
  };
}

/**
 * CollectionPage + ItemList for listing pages (catalog, categories).
 */
export function getCollectionSchema(
  name: string,
  path: string,
  description: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${baseUrl}${path}`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: baseUrl },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
      })),
    },
  };
}
