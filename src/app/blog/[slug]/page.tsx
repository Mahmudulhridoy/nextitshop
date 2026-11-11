import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, blogPosts } from "@/config/blog";
import { getBlogCategory } from "@/config/blogCategories";
import { siteConfig } from "@/config/site";
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from "@/config/schema";
import { getProductById } from "@/config/catalog";
import ServiceIcon from "@/components/ServiceIcon";
import Markdown from "@/components/Markdown";
import BlogCover from "@/components/BlogCover";
import BlogCard from "@/components/BlogCard";
import { Clock, ArrowLeft, Send, MessageCircle, Mail, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: false } };

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    path: `/blog/${post.slug}`,
    description: post.description,
    type: "article",
    publishedTime: new Date(post.isoDate).toISOString(),
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = getBlogCategory(post.category);
  const product = post.product ? getProductById(post.product) : undefined;
  const related = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#07080d] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(post.faqs)) }} />
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to All Guides
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href={`/blog#${post.category}`}
            className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border"
            style={{ color: cat.color, borderColor: `${cat.color}40`, background: `${cat.color}14` }}
          >
            {post.tag}
          </Link>
          <span className="text-white/40 text-xs flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
          <span className="text-white/25 text-xs font-mono">• {post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">{post.title}</h1>
        <p className="text-lg text-white/50 leading-relaxed mb-10">{post.description}</p>

        <div className="rounded-2xl overflow-hidden border border-white/[0.08] mb-12">
          <BlogCover category={post.category} image={post.image} title={post.title} className="h-56 sm:h-72" iconSize={44} />
        </div>

        {post.toc.length > 2 && (
          <nav aria-label="Table of contents" className="mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
            <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">In this article</div>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {post.toc.map((t, i) => (
                <li key={t.id} className="flex gap-2.5">
                  <span className="text-cyan-400/70 font-mono text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="text-white/65 hover:text-cyan-300 transition-colors">{t.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Markdown source={post.body} />

        {product && (
          <Link
            href={`/product/${product.id}`}
            className="group mt-12 flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-white/[0.1] hover:border-cyan-400/40 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#07080d] border border-white/10 flex items-center justify-center flex-shrink-0">
              <ServiceIcon icon={product.icon} color={product.iconColor} size={30} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-0.5">Ready to order?</div>
              <div className="text-base font-bold text-white truncate">{product.name} <span className="text-white/40 font-medium">· from ${product.basePrice.toFixed(2)}</span></div>
              <div className="text-xs text-white/45">{product.delivery} delivery · 7-day replacement policy</div>
            </div>
            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0b0d14] border border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-1">Need help with {post.tag === "Other Services" ? "your account" : `${post.tag}`}?</h2>
          <p className="text-sm text-white/50 mb-6">Message us for a quick answer or a custom quote. We reply within minutes on Telegram and WhatsApp.</p>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link href={cat.link} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-cyan-300 transition-all">
              {cat.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href={siteConfig.contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0088cc] text-white font-bold text-xs hover:bg-[#0077b5] transition-all">
              <Send className="w-3.5 h-3.5 fill-current" /> Telegram
            </a>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-all">
              <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
            </a>
            <a href={siteConfig.contact.emailUrl} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h2 className="text-2xl font-bold text-white mb-8">Keep reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>
        </div>
      )}
    </article>
  );
}
