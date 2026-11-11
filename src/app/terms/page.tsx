import { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
  description: "The terms that apply when you order digital accounts and services from nextITshop.",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: November 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {[
            {
              title: "1. Services Provided",
              content: "nextITshop provides digital account setup and management services. All services involve authorized, customer-owned accounts only. We provide guidance, configuration, and optimization services — not unauthorized access.",
            },
            {
              title: "2. Customer Responsibilities",
              content: "By ordering a service, you confirm that you are the authorized owner of the account(s) involved. You must provide accurate information and cooperate throughout the service delivery process.",
            },
            {
              title: "3. Payment & Pricing",
              content: "Pricing is communicated via our Telegram/WhatsApp support before order confirmation. Payment is required before service delivery unless otherwise agreed. We accept payment methods communicated by our support team.",
            },
            {
              title: "4. Service Delivery",
              content: "Estimated delivery times are provided per service and begin after payment confirmation and receipt of all required information. Delivery times may vary based on complexity and requirements.",
            },
            {
              title: "5. Prohibited Uses",
              content: "You may not use our services to gain unauthorized access to accounts, violate platform terms of service, engage in fraud, spam, harassment, or any illegal activities. We reserve the right to refuse any order.",
            },
            {
              title: "6. Limitation of Liability",
              content: "nextITshop is not responsible for account actions taken by third-party platforms after service delivery. We are not liable for indirect or consequential damages arising from service use.",
            },
            {
              title: "7. Changes to Terms",
              content: "We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of updated terms.",
            },
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
