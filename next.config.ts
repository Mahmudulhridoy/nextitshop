import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployable on Cloudflare Pages (output dir: "out").
  // Every route is pre-rendered to HTML at build time (SSG).
  output: "export",

  // The default image optimizer needs a server. We use a custom loader that
  // points <Image> at pre-generated WebP files (see src/lib/image-loader.ts).
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },

  // NOTE: `cacheComponents` / `partialPrefetching` were removed. They rely on a server
  // runtime and are incompatible with `output: "export"` (static hosting) — a fully
  // static site gets the same (or better) result with plain pre-rendered HTML.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
