import Link from "next/link";
import { blogPosts } from "@/config/blog";
import BlogCard from "@/components/BlogCard";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="eyebrow mb-3">
              From the Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Latest from the Blog
            </h2>
            <p className="text-base text-white/55 mt-3 max-w-md">
              Practical guides on Gmail, Telegram, WhatsApp and more, written to help you get set up safely.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            View All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
