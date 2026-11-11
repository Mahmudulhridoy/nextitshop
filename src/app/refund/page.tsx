import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Replacement Policy",
  path: "/refund",
  description: "Read how the nextITshop 7-day replacement warranty works, what is covered, and how to request a replacement or refund through our support team.",
});

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="text-4xl font-black text-white mb-3">Refund Policy</h1>
          <p className="text-white/40 text-sm">Last updated: November 2026</p>
        </div>
        <div className="space-y-6">
          {[
            { title: "Eligibility for Refunds", content: "Refunds are issued if we are unable to deliver the agreed service. Refund eligibility is determined on a case-by-case basis." },
            { title: "Non-Refundable Cases", content: "Services that have been successfully delivered are non-refundable. If you provided incorrect information that prevented delivery, a refund may not apply." },
            { title: "How to Request a Refund", content: "Contact our support team on Telegram or WhatsApp within 48 hours of the agreed delivery date with your order details and reason for the request." },
            { title: "Refund Processing", content: "Approved refunds are processed within 3–7 business days via the original payment method." },
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
