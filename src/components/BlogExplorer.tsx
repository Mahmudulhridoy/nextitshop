"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import { blogCategories } from "@/config/blogCategories";
import BlogCard from "@/components/BlogCard";
import BlogCover from "@/components/BlogCover";

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  // Allow deep links like /blog#whatsapp
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && blogCategories.some((c) => c.id === hash)) setActive(hash);
  }, []);

  const tabs = useMemo(() => {
    const used = blogCategories
      .map((c) => ({ ...c, count: posts.filter((p) => p.category === c.id).length }))
      .filter((c) => c.count > 0);
    return [{ id: "all", label: "All", count: posts.length, color: "#22d3ee" }, ...used];
  }, [posts]);

  const filtered = posts.filter((p) => {
    const inCat = active === "all" || p.category === active;
    const q = query.trim().toLowerCase();
    const inText = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return inCat && inText;
  });

  const showFeatured = active === "all" && !query.trim();
  const featured = showFeatured ? posts.find((p) => p.featured) ?? posts[0] : undefined;
  const rest = featured ? filtered.filter((p) => p.id !== featured.id) : filtered;

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="Blog categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => {
                setActive(t.id);
                history.replaceState(null, "", t.id === "all" ? "/blog" : `/blog#${t.id}`);
              }}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === t.id
                  ? "bg-white text-black border-white"
                  : "bg-white/[0.03] text-white/65 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {t.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active === t.id ? "bg-black/10" : "bg-white/10"}`}>{t.count}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-white/35 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/50"
          />
        </div>
      </div>

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 rounded-3xl overflow-hidden bg-[#0b0d14] border border-white/[0.08] hover:border-white/[0.22] transition-all mb-8"
        >
          <BlogCover category={featured.category} image={featured.image} title={featured.title} className="h-56 md:h-full md:min-h-[320px]" iconSize={44} />
          <div className="p-7 sm:p-10 flex flex-col justify-center">
            <span className="eyebrow mb-4">Featured · {featured.tag}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 group-hover:text-cyan-300 transition-colors">{featured.title}</h2>
            <p className="text-white/55 leading-relaxed mb-6">{featured.description}</p>
            <div className="flex items-center gap-4 text-xs text-white/40 font-medium">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              <span className="font-mono">{featured.date}</span>
              <span className="ml-auto text-cyan-400 inline-flex items-center gap-1 font-bold">Read article <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => <BlogCard key={p.id} post={p} />)}
        </div>
      ) : !featured ? (
        <div className="text-center py-20 rounded-2xl border border-dashed border-white/10 text-white/45">
          No articles match your search. Try another category or keyword.
        </div>
      ) : null}
    </div>
  );
}
