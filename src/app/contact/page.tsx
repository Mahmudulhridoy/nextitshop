import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/config/schema";
import Link from "next/link";
import { Send, Mail, MessageCircle, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Support",
  path: "/contact",
  description:
    "Contact nextITshop support on Telegram, WhatsApp or email for orders, replacements, bulk quotes and custom requests.",
});

const contactMethods = [
  {
    icon: Send,
    title: "Telegram",
    desc: "Fastest response. Connect with our team directly on Telegram for real-time support.",
    value: siteConfig.contact.telegram,
    href: siteConfig.contact.telegramUrl,
    color: "#26A5E4",
    colorSubtle: "rgba(38,165,228,0.1)",
    cta: "Open Telegram",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Contact us on WhatsApp for order assistance and service inquiries.",
    value: siteConfig.contact.whatsapp,
    href: siteConfig.contact.whatsappUrl,
    color: "#25D366",
    colorSubtle: "rgba(37,211,102,0.1)",
    cta: "Open WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Send us an email for detailed inquiries, partnerships, or non-urgent support.",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailUrl,
    color: "#EA4335",
    colorSubtle: "rgba(234,67,53,0.1)",
    cta: "Send Email",
  },
];

const faqs = [
  { q: "How fast do you respond?", a: "We typically respond within 15–30 minutes on Telegram and WhatsApp. Email responses may take up to 24 hours." },
  { q: "What information should I include?", a: "Please include the service name, any specific requirements, and your preferred delivery timeline." },
  { q: "Can I get a custom quote?", a: "Yes! Contact us on Telegram or WhatsApp with your requirements and we'll provide a custom quote." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])} />
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.05] mb-16">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/[0.07] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative text-center">
          <p className="eyebrow justify-center mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact <span className="gradient-text">Support</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            Our team is available 24/7 to help you with service inquiries, order placement, and support.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className="relative p-6 rounded-2xl border border-white/[0.07] bg-[#0e0e1a] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none" style={{ background: method.color }} />
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center border"
                  style={{ background: method.colorSubtle, borderColor: `${method.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: method.color }} />
                </div>
                <h2 className="font-800 text-white text-lg mb-1">{method.title}</h2>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{method.desc}</p>
                <p className="text-white/60 text-xs font-mono mb-4">{method.value}</p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-700 transition-all hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${method.color}90, ${method.color}50)` }}
                >
                  <Icon className="w-4 h-4" />
                  {method.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust row */}
        <div className="glass rounded-2xl border border-white/[0.08] p-6 mb-16">
          <h2 className="text-white font-800 text-center mb-6">Why Contact Us?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, color: "#06b6d4", title: "Fast Response", desc: "15–30 min average response time on Telegram" },
              { icon: Shield, color: "#a855f7", title: "Professional Team", desc: "Expert support for all digital service needs" },
              { icon: Star, color: "#ec4899", title: "No Registration", desc: "Order directly without creating an account" },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color }} />
                <div>
                  <div className="font-700 text-white text-sm">{title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact FAQs */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6 text-center">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl border border-white/[0.07] bg-[#0e0e1a]">
                <p className="font-700 text-white text-sm mb-2">{faq.q}</p>
                <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-700 text-sm shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
          >
            Browse Services First
          </Link>
        </div>
      </div>
    </div>
  );
}
