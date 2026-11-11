"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Send, ShoppingCart, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/feedback" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#06070b]/80 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                next<span className="gradient-text">IT</span>shop
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-white bg-white/[0.08]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Dual Telegram & WhatsApp Quick Support + Order Now Button */}
            <div className="flex items-center gap-2.5">
              {/* Telegram Support Button */}
              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram Support"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/80 hover:bg-[#0088cc] hover:text-white hover:border-transparent text-xs font-semibold transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#26A5E4]" />
                <span className="hidden xl:inline">Telegram</span>
              </a>

              {/* WhatsApp Support Button */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Support"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/80 hover:bg-[#25D366] hover:text-white hover:border-transparent text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              {/* Order Now Button */}
              <Link
                href="/catalog"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-cyan-300 font-semibold text-sm transition-all duration-200 shadow-md shadow-white/5 active:scale-95"
              >
                <ShoppingCart className="w-3.5 h-3.5 fill-current" />
                <span>Order Now</span>
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="absolute top-[72px] left-0 right-0 bg-[#0b0d14] border-b border-white/[0.08] p-5 space-y-2 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all",
                  pathname === link.href
                    ? "text-white bg-white/[0.08]"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2">
              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#0088cc] text-white font-bold text-xs"
              >
                <Send className="w-3.5 h-3.5 fill-current" />
                Telegram
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                WhatsApp
              </a>
            </div>

            <Link
              href="/catalog"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-extrabold text-xs mt-2"
            >
              <ShoppingCart className="w-4 h-4 fill-current" />
              Order Now — View Catalog
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
