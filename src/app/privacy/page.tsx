import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
  description: "How nextITshop handles the information you share when you contact us or place an order.",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: November 2026</p>
        </div>
        <div className="space-y-6">
          {[
            { title: "Information We Collect", content: "We collect only the information necessary to provide your requested service: contact details, service requirements, and communication history via Telegram/WhatsApp/Email." },
            { title: "How We Use Information", content: "Information is used solely to deliver and improve our services. We do not sell, share, or distribute your personal information to third parties." },
            { title: "Data Retention", content: "We retain service-related information only as long as necessary. You may request deletion of your data by contacting our support team." },
            { title: "Security", content: "We take reasonable measures to protect your information. However, no method of transmission is 100% secure. We never store account passwords or sensitive credentials." },
            { title: "Third-Party Links", content: "Our website may link to third-party platforms (Telegram, WhatsApp, etc.). Their privacy practices are governed by their respective privacy policies." },
            { title: "Contact", content: "For privacy-related inquiries, contact us via the information on our Contact page." },
          ].map(({ title, content }) => (
            <div key={title} className="p-6 rounded-2xl border border-white/[0.07] bg-[#0e0e1a]">
              <h2 className="text-lg font-800 text-white mb-3">{title}</h2>
              <p className="text-white/50 text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
