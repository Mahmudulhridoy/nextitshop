import Link from "next/link";
import { Zap, Send, Mail, MessageCircle, Heart, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { products } from "@/config/catalog";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#05060a] border-t border-white/[0.06] text-white">
      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/[0.06] py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            Direct Instant Dispatch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Deploy Institutional Digital Assets Today
          </h2>
          <p className="text-base text-white/55 max-w-md mx-auto mb-8 leading-relaxed">
            No registration or account sign-up needed. Select your package and
            confirm directly with our specialist team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/catalog"
              className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-white/5"
            >
              Browse 17 Account Tiers
            </Link>
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0088cc]/15 border border-[#0088cc]/30 text-white hover:bg-[#0088cc] font-bold text-xs transition-all"
            >
              <Send className="w-3.5 h-3.5 fill-current text-[#26A5E4]" />
              Telegram Desk
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-white hover:bg-[#25D366] font-bold text-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
              WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* ── 4-COLUMN FOOTER NAVIGATION ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                next<span className="gradient-text">IT</span>shop
              </span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              Institutional-grade digital asset marketplace. Verified, aged, and
              residential PVA accounts for marketers, developers, and global
              automation stacks.
            </p>
            <div className="space-y-2">
              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/50 hover:text-cyan-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#26A5E4]" />
                {siteConfig.contact.telegram}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/50 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                {siteConfig.contact.whatsapp}
              </a>
              <a
                href={siteConfig.contact.emailUrl}
                className="flex items-center gap-2 text-xs text-white/50 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Popular Inventory */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Popular Assets
            </h3>
            <ul className="space-y-2.5">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/product/${p.id}`}
                    className="text-xs text-white/45 hover:text-white transition-colors block"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Full Catalog", href: "/catalog" },
                { label: "Guides & Blog", href: "/blog" },
                { label: "Customer Reviews & Feedback", href: "/feedback" },
                { label: "Frequently Asked Questions", href: "/faq" },
                { label: "About nextITshop", href: "/about" },
                { label: "Contact Support", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/45 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Developer Credit */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Compliance & Guarantee
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "7-Day Replacement Policy", href: "/refund" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR WITH DEVELOPER SIGNATURE ─────────────── */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-white/35">
            © {year} nextITshop. All rights reserved. Everything Digital. One
            Marketplace.
          </p>

          {/* Developer Tag Credit linked to portfolio */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 hover:border-cyan-500/30 transition-colors">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              Engineered by{" "}
              <a
                href="https://mahmudulhridoy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-cyan-400 underline decoration-cyan-400/40 underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Mahmudul Hasan Hridoy
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
