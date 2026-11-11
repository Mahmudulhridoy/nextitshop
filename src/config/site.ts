// ============================================================
// nextITshop — Central Site & SEO Configuration
// Centralized for maintainability, search verification, and canonical indexing
// ============================================================

export const siteConfig = {
  name: "nextITshop",
  legalName: "nextITshop Digital Services",
  tagline: "Everything Digital. One Marketplace.",
  description:
    "Institutional-grade digital asset marketplace. Verified, aged, and residential PVA accounts for Gmail, Google Voice, Telegram, WhatsApp, GitHub, and 15+ global platforms with instant dispatch.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nextitshop.com",
  defaultOgImage: "/og-image.jpg",

  // Search engines are only allowed to index PRODUCTION builds.
  // Cloudflare Pages provides CF_PAGES_BRANCH ("main" for production) and CF_PAGES=1
  // at build time. For local dev or standard environments, fallback is allowed unless
  // explicitly disabled via NEXT_PUBLIC_ALLOW_INDEXING=false.
  indexable:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false" &&
    (
      // If running inside Cloudflare Pages build:
      process.env.CF_PAGES === "1"
        ? (process.env.CF_PAGES_BRANCH === "main" || process.env.CF_PAGES_BRANCH === "master")
        : (
            // For custom build variables or local dev:
            !process.env.NEXT_PUBLIC_CF_PAGES_BRANCH ||
            process.env.NEXT_PUBLIC_CF_PAGES_BRANCH === "main" ||
            process.env.NEXT_PUBLIC_CF_PAGES_BRANCH === "master"
          )
    ),

  // Date used as <lastmod> for pages whose content lives in /src/config.
  // Update it (or set NEXT_PUBLIC_CONTENT_UPDATED=YYYY-MM-DD) when you change content.
  contentUpdated: process.env.NEXT_PUBLIC_CONTENT_UPDATED || "2026-11-09",
  locale: "en_US",

  // ── Search Engine Verification ─────────────────────────────
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },

  // ── Contact & Socials ──────────────────────────────────────
  contact: {
    telegram: "@nextitshop",
    telegramUrl: "https://t.me/nextitshop",
    whatsapp: "+1 (984) 266-5953",
    whatsappUrl: "https://wa.me/19842665953",
    email: "nexitshop1@gmail.com",
    emailUrl: "mailto:nexitshop1@gmail.com",
    gmailUrl: "mailto:nexitshop1@gmail.com",
  },


  // ── SEO Master Keywords ────────────────────────────────────
  keywords: [
    "PVA accounts",
    "buy Gmail PVA",
    "aged Gmail accounts",
    "Google Voice US numbers",
    "Telegram TData accounts",
    "Telegram session json",
    "WhatsApp hash accounts",
    "GitHub developer accounts",
    "GitHub student pack accounts",
    "edu mail accounts",
    "Twitter X aged accounts",
    "Facebook marketplace accounts",
    "LinkedIn phone verified accounts",
    "Reddit karma accounts",
    "Naver verified accounts",
    "digital asset marketplace",
    "residential IP accounts",
    "nextITshop",
  ],
};

export type SiteConfig = typeof siteConfig;
