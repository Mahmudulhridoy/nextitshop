# nextITshop — SEO guide

All SEO is centralized. Edit in these places only:

| What | File |
|---|---|
| Domain, indexing switch, verification tokens, contact | `src/config/site.ts` (+ env vars, see `.env.example`) |
| Titles / canonical / Open Graph / Twitter / robots meta | `src/config/seo.ts` → `buildMetadata()` (used by every page) |
| JSON-LD (Organization, WebSite, Breadcrumb, Product, Service, FAQ, Article, Collection) | `src/config/schema.ts` + `src/components/JsonLd.tsx` |
| `sitemap.xml` / `robots.txt` / `manifest.webmanifest` | `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` |
| Netlify build + caching headers | `netlify.toml` |
| Optimized images | `public/img/*.webp` + `src/lib/image-loader.ts` |

## Add a new page
```ts
export const metadata = buildMetadata({ title: "Short Title", path: "/new-page", description: "120–158 chars, unique." });
```
Titles: ≤ ~50 chars (site name is appended). One `<h1>` per page. Add the route to `src/app/sitemap.ts` if it is static.

## Add / replace an image
1. Make WebP copies at 2–3 widths, e.g. `public/img/hero-640.webp`, `hero-960.webp`, `hero-1376.webp`.
2. Register them in `src/lib/image-loader.ts`.
3. Use `<Image src="/hero.jpg" alt="Descriptive alt text" … />` (keep the original in `public/`).

## Verify before deploying
```bash
npm run build          # must finish with no errors; output is in ./out
npx serve out          # open http://localhost:3000
# then check: /robots.txt  /sitemap.xml  /manifest.webmanifest  and "View source" on a few pages
```
Online tools after deploy: Google Rich Results Test, Schema Markup Validator (validator.schema.org),
PageSpeed Insights, Search Console → URL Inspection / Sitemaps.
