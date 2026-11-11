import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/config/schema";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Send, MessageCircle, HelpCircle, ShieldCheck, Zap, RotateCcw } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "FAQ: Ordering, Delivery & Warranty",
  path: "/faq",
  description:
    "Answers to common questions about ordering without an account, delivery times, how accounts are verified, payment methods and the 7-day replacement warranty.",
});

const faqs = [
  {
    category: "Ordering & Delivery",
    items: [
      {
        q: "How does the ordering process work without an account?",
        a: "We believe in zero-friction purchasing. Simply pick your account variation and quantity, click 'Buy Now', and send your pre-filled request via Telegram or WhatsApp. Our automated operator confirms your order and dispatches credentials directly in chat.",
      },
      {
        q: "How fast is delivery?",
        a: "Standard inventory is dispatched in ~120 seconds after payment confirmation. Bulk orders (>500 accounts) or custom geolocation warmups typically take 15 to 45 minutes.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Cryptocurrencies (USDT TRC20/BEP20, BTC, ETH, LTC, SOL), Binance Pay, and international digital wallets confirmed directly with our support specialist.",
      },
    ],
  },
  {
    category: "Account Quality & Security",
    items: [
      {
        q: "What makes nextITshop accounts different from cheap marketplace accounts?",
        a: "Most budget sellers use temporary virtual VoIP numbers and datacenter proxies that get flagged within 24 hours. nextITshop provisions exclusively through authentic physical SIM cards and warmed residential IP connections.",
      },
      {
        q: "What information and format will I receive upon purchase?",
        a: "You receive clean, organized credentials. For example: Email : Password : Recovery Email : 2FA Key. For Telegram: TData (.zip) or Session+JSON file. For Facebook: Cookie session JSON + User/Pass + 2FA Secret Key.",
      },
      {
        q: "How should I log into social media and Gmail accounts safely?",
        a: "We strongly recommend using antidetect browsers (such as AdsPower, Dolphin{anty}, or Multilogin) paired with high-quality residential proxies that match the account's original registration geolocation.",
      },
    ],
  },
  {
    category: "Warranty & Replacements",
    items: [
      {
        q: "What is your replacement warranty policy?",
        a: "Every account is backed by our 7-Day Replacement Guarantee. If any account encounters a login challenge, password invalidity, or initial checkpoint block, our support team will replace it immediately.",
      },
      {
        q: "What if I need custom accounts or bulk discounts?",
        a: "Contact our dedicated specialist desk on Telegram or WhatsApp. We offer tier volume discounts starting at 100+ accounts and can prepare custom aged batches on request.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#07080d] text-white">
      <JsonLd data={[getFaqSchema(faqs.flatMap((c) => c.items)), getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }])]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-white/50 leading-relaxed">
            Everything you need to know about our verified digital accounts, residential delivery, formats, and replacement guarantee.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#0b0e17] border border-cyan-500/20 flex items-center gap-3.5">
            <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">~120s Dispatch</div>
              <div className="text-[11px] text-white/40">Direct chat fulfillment</div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0b0e17] border border-purple-500/20 flex items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Real SIM PVA</div>
              <div className="text-[11px] text-white/40">No VoIP flags</div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0b0e17] border border-green-500/20 flex items-center gap-3.5">
            <RotateCcw className="w-6 h-6 text-green-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">7-Day Guarantee</div>
              <div className="text-[11px] text-white/40">Free replacements</div>
            </div>
          </div>
        </div>

        {/* Categorized FAQs */}
        <div className="space-y-12">
          {faqs.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl bg-[#0b0e17] border border-white/[0.07] overflow-hidden transition-all duration-200 open:border-cyan-500/30"
                  >
                    <summary className="p-5 font-bold text-sm text-white cursor-pointer flex justify-between items-center group-hover:text-cyan-400 transition-colors select-none">
                      <span>{item.q}</span>
                      <span className="text-white/40 text-xs group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                        ▼
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/[0.04] pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#0c1322] to-[#080d18] border border-cyan-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still Have Questions?</h3>
          <p className="text-xs text-white/50 max-w-md mx-auto mb-6">
            Our live account specialists are on standby 24/7 to answer custom questions or assist with volume discounts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0088cc] text-white font-bold text-xs hover:bg-[#0077b5] transition-all shadow-lg shadow-[#0088cc]/20"
            >
              <Send className="w-4 h-4 fill-current" />
              Ask on Telegram
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
