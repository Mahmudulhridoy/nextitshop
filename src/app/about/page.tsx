import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/config/schema";
import Link from "next/link";
import { Shield, Eye, Users, Award, Send, CheckCircle, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services, categories } from "@/config/services";

export const metadata: Metadata = buildMetadata({
  title: "About nextITshop",
  path: "/about",
  description:
    "Who runs nextITshop, how orders are handled directly over Telegram and WhatsApp, and the principles behind our digital account services.",
});

const values = [
  {
    icon: Shield,
    color: "#a855f7",
    title: "Transparency",
    desc: "No hidden fees. No vague promises. Clear pricing, clear policies, and clear communication — always.",
  },
  {
    icon: CheckCircle,
    color: "#10b981",
    title: "Legitimacy",
    desc: "Every service we provide involves your own authorized accounts. We never offer or accept unauthorized credentials.",
  },
  {
    icon: Eye,
    color: "#06b6d4",
    title: "Professionalism",
    desc: "We approach every service with expertise and care. Your digital setup is handled with professional attention to detail.",
  },
  {
    icon: Users,
    color: "#ec4899",
    title: "Customer First",
    desc: "Your satisfaction drives everything we do. We stay with you through the process and beyond.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.05] mb-16">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/[0.07] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-600/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Everything Digital.
              <br />
              <span className="gradient-text">One Marketplace.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-2xl">
              nextITshop was built with a simple idea: navigating digital services and account setups shouldn't be overwhelming. We bring expert guidance, professional support, and transparent pricing to one trusted marketplace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-700 text-sm shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
              >
                Browse Services
              </Link>
              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-600 text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {[
            { label: "Services Available", value: `${services.length}+`, color: "#a855f7" },
            { label: "Categories", value: `${categories.length}`, color: "#06b6d4" },
            { label: "Support Channels", value: "3", color: "#ec4899" },
            { label: "Satisfaction", value: "100%", color: "#10b981" },
          ].map(({ label, value, color }) => (
            <div key={label} className="p-6 rounded-2xl border border-white/[0.07] bg-[#0e0e1a] text-center">
              <div className="text-3xl font-black mb-1" style={{ color }}>{value}</div>
              <div className="text-white/40 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="glass rounded-3xl border border-white/[0.08] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/[0.08] rounded-full blur-[60px] pointer-events-none" />
          <div className="relative max-w-2xl">
            <Zap className="w-10 h-10 text-purple-400 mb-5" fill="currentColor" />
            <h2 className="text-3xl font-black text-white mb-4">Our Mission</h2>
            <p className="text-white/55 leading-relaxed mb-4">
              We believe everyone deserves access to professional digital setup services without the confusion, overpricing, or uncertainty that often comes with the territory.
            </p>
            <p className="text-white/55 leading-relaxed">
              nextITshop provides expert assistance for digital account setup and management — from Gmail and Google Voice to GitHub profiles and Discord servers. All services are legitimate, transparent, and delivered by real professionals.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center mb-3">Our principles</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-white/[0.07] bg-[#0e0e1a] hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center border" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-800 text-white mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service commitment */}
        <div className="p-8 rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] mb-10">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-800 text-white mb-2">Our Service Commitment</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                All services provided by nextITshop involve authorized, customer-owned accounts only. We provide setup assistance, configuration guidance, and optimization services. We never offer transferred credentials, unauthorized account access, session files, or fake verification. Customer satisfaction and service legitimacy are non-negotiable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-800 shadow-xl shadow-purple-500/25 hover:scale-105 transition-all"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
