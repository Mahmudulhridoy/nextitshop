import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { products } from "@/config/catalog";
import FeedbackForm from "@/components/FeedbackForm";
import ReviewsSection from "@/components/ReviewsSection";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/config/schema";
import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Customer Feedback & Reviews",
  path: "/feedback",
  description: "Read what nextITshop customers say, or share your own experience with our services in under a minute.",
});

export default function FeedbackPage() {
  const services = products.map((p) => p.name);
  return (
    <div className="min-h-screen pt-24 pb-10">
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Feedback", url: "/feedback" }])} />

      <div className="relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/[0.07] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative text-center">
          <p className="eyebrow justify-center mb-4">Your Voice Matters</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Share Your <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-white/45 max-w-lg mx-auto leading-relaxed">Tell us how the service worked for you. Your feedback helps other customers decide and helps us get better.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0 pt-14 grid lg:grid-cols-[1fr_280px] gap-10">
        <div className="rounded-3xl bg-[#0b0d14] border border-white/[0.08] p-6 sm:p-9">
          <FeedbackForm services={services} />
        </div>
        <aside className="space-y-4">
          {[
            { icon: Clock, title: "Under a minute", desc: "Pick a rating, write a few lines, done." },
            { icon: ShieldCheck, title: "Your contact stays private", desc: "Email or Telegram is only used if we need to follow up." },
            { icon: HeartHandshake, title: "We act on it", desc: "Every message is read by our team." },
          ].map((it) => (
            <div key={it.title} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <it.icon className="w-5 h-5 text-cyan-400 mb-3" />
              <div className="text-sm font-bold text-white mb-1">{it.title}</div>
              <div className="text-xs text-white/45 leading-relaxed">{it.desc}</div>
            </div>
          ))}
        </aside>
      </div>

      <div className="mt-16">
        <ReviewsSection limit={12} />
      </div>
    </div>
  );
}
