import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/config/seo";
import { blogPosts } from "@/config/blog";
import BlogExplorer from "@/components/BlogExplorer";
import { getBreadcrumbSchema } from "@/config/schema";
import { MessageSquareHeart } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Guides & Knowledge Base",
  path: "/blog",
  description:
    "Practical guides on Gmail, Telegram, WhatsApp, Google Voice and social account setup and security from the nextITshop team.",
});

export default function BlogPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#07080d] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow mb-3">Knowledge Base</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Guides, Tips & <span className="gradient-text">How-Tos</span>
          </h1>
          <p className="text-base text-white/50 leading-relaxed">
            Straightforward advice on setting up, securing and getting the most from your Gmail, Telegram, WhatsApp, Google Voice and social accounts.
          </p>
        </div>

        <BlogExplorer posts={blogPosts} />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Used our service? Tell us how it went.</h2>
            <p className="text-sm text-white/50">Your feedback helps other customers and helps us improve.</p>
          </div>
          <Link href="/feedback" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-cyan-300 transition-all flex-shrink-0">
            <MessageSquareHeart className="w-4 h-4" /> Share Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
