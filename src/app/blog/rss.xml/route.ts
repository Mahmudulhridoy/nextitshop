import { blogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = blogPosts
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${absoluteUrl(`/blog/${p.slug}`)}</link>
<guid>${absoluteUrl(`/blog/${p.slug}`)}</guid>
<pubDate>${new Date(p.isoDate).toUTCString()}</pubDate>
<category>${esc(p.tag)}</category>
<description>${esc(p.description)}</description>
</item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${esc(siteConfig.name)} Blog</title>
<link>${absoluteUrl("/blog")}</link>
<description>${esc("Guides on Gmail, Telegram, WhatsApp, Google Voice and social accounts from " + siteConfig.name)}</description>
<language>en</language>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
