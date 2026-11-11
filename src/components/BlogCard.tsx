import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import BlogCover from "@/components/BlogCover";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl bg-[#0b0d14] border border-white/[0.07] hover:border-white/[0.2] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/[0.05] hover:-translate-y-1"
    >
      <div className="border-b border-white/[0.06]">
        <BlogCover category={post.category} image={post.image} title={post.title} className="h-44" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
            style={{ color: post.tagColor, borderColor: `${post.tagColor}40`, background: `${post.tagColor}14` }}
          >
            {post.tag}
          </span>
          <span className="text-white/35 text-xs flex items-center gap-1 font-medium">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white leading-snug mb-2.5 group-hover:text-cyan-300 transition-colors">{post.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 mb-6 flex-1">{post.description}</p>
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
          <span className="text-white/35 font-mono text-[11px]">{post.date}</span>
          <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">Read →</span>
        </div>
      </div>
    </Link>
  );
}
