// ============================================================
// Blog loader — posts are plain Markdown files in /content/blog/*.md
// Read at BUILD time (static export), so there is no database or server.
// See BLOG-GUIDE.md for how to add a post.
// ============================================================
import fs from "node:fs";
import path from "node:path";
import { getBlogCategory } from "@/config/blogCategories";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  /** Optional shorter <title> for search results. */
  seoTitle?: string;
  /** Category id from blogCategories.ts */
  category: string;
  /** Display label (e.g. "Gmail") */
  tag: string;
  tagColor: string;
  readTime: string;
  /** Human date, e.g. "Nov 9, 2026" */
  date: string;
  /** ISO date YYYY-MM-DD (used for sorting + schema) */
  isoDate: string;
  icon: string;
  iconColor: string;
  description: string;
  /** Optional cover image path in /public, e.g. /blog/my-cover.jpg */
  image?: string;
  featured?: boolean;
  /** SEO keywords (comma separated in the header) */
  keywords: string[];
  /** Catalog product id this post is about (drives the CTA card + product-page link) */
  product?: string;
  /** ISO date of last update */
  updatedIso: string;
  wordCount: number;
  /** Table of contents built from "##" headings */
  toc: { id: string; text: string }[];
  /** FAQ pairs parsed from the "## Frequently Asked Questions" section → FAQPage schema */
  faqs: { q: string; a: string }[];
  /** Raw markdown body */
  body: string;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/\*\*|`|\[|\]\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripMd(t: string): string {
  return t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, "").replace(/\s+/g, " ").trim();
}

function parseToc(body: string) {
  return body
    .split("\n")
    .map((l) => l.match(/^##\s+(.*)$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ id: slugifyHeading(m[1]), text: stripMd(m[1]) }));
}

function parseFaqs(body: string): { q: string; a: string }[] {
  const m = body.match(/^##\s+Frequently Asked Questions\s*\n([\s\S]*?)(?=^##\s|$(?![\s\S]))/m);
  if (!m) return [];
  const faqs: { q: string; a: string }[] = [];
  const parts = m[1].split(/^###\s+/m).slice(1);
  for (const part of parts) {
    const [q, ...rest] = part.split("\n");
    const a = stripMd(rest.join(" "));
    if (q && a) faqs.push({ q: stripMd(q), a });
  }
  return faqs;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: text };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    data[m[1]] = v;
  }
  return { data, body: match[2].trim() };
}

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function loadPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const posts: BlogPost[] = [];
  for (const file of fs.readdirSync(BLOG_DIR)) {
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"));
    if (!data.title) continue;
    if (data.draft === "true") continue; // drafts are not published
    const slug = data.slug || file.replace(/\.md$/, "");
    const cat = getBlogCategory(data.category || "other");
    const words = body.split(/\s+/).filter(Boolean).length;
    const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(data.date || "") ? data.date : new Date().toISOString().slice(0, 10);
    posts.push({
      id: slug,
      slug,
      title: data.title,
      seoTitle: data.seoTitle || undefined,
      category: cat.id,
      tag: cat.label,
      tagColor: cat.color,
      readTime: `${Math.max(1, Math.round(words / 200))} min read`,
      date: formatDate(isoDate),
      isoDate,
      icon: cat.icon,
      iconColor: cat.color,
      description: data.description || "",
      image: data.image || undefined,
      featured: data.featured === "true",
      keywords: (data.keywords || "").split(",").map((k) => k.trim()).filter(Boolean),
      product: data.product || undefined,
      updatedIso: /^\d{4}-\d{2}-\d{2}$/.test(data.updated || "") ? data.updated : isoDate,
      wordCount: words,
      toc: parseToc(body),
      faqs: parseFaqs(body),
      body,
    });
  }
  return posts.sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1)); // newest first
}

export const blogPosts: BlogPost[] = loadPosts();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
