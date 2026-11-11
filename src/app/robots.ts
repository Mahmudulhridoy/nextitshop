import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { SITE_URL } from "@/config/seo";

// Required for `output: "export"` (static hosting).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Non-production builds (Cloudflare Pages deploy previews, branch deploys) must not be indexed.
  if (!siteConfig.indexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    // /_next/ is intentionally NOT blocked: Google needs the CSS/JS to render pages.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
