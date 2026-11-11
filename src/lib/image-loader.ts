/**
 * Custom image loader for Cloudflare Pages static hosting (`output: "export"`).
 *
 * The default Next.js image optimizer needs a server, so for a static export
 * we ship pre-generated WebP variants in /public/img (how-to in SEO.md) and let <Image> build its normal responsive srcset from them.
 *
 * To add a new optimized image: generate `/public/img/<name>-<width>.webp`
 * files and register the available widths below. Anything not registered
 * (e.g. SVGs) is served untouched.
 */
const variants: Record<string, number[]> = {
  "/infrastructure.jpg": [640, 960, 1376],
  "/partnership.jpg": [640, 960, 1376],
  "/digital-marketing.jpg": [368, 552, 736],
};

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const widths = variants[src];
  if (!widths) return src;
  const name = src.replace(/^\//, "").replace(/\.[a-z]+$/i, "");
  const best = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `/img/${name}-${best}.webp`;
}
