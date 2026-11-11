"use client";

import { type Service } from "@/config/services";
import { siteConfig } from "@/config/site";
import { ShoppingCart } from "lucide-react";

interface Props {
  service: Service;
  accent: string;
}

export default function OrderButton({ service, accent }: Props) {
  const handleOrder = () => {
    const msg = encodeURIComponent(
      `Hi! I'd like to order the following service from nextITshop:\n\n` +
      `📦 Service: ${service.name}\n` +
      `💰 Starting Price: $${service.basePrice.toFixed(2)}\n` +
      `⏱ Estimated Delivery: ${service.deliveryTime}\n\n` +
      `Please let me know the requirements and payment details.`
    );
    window.open(`${siteConfig.contact.telegramUrl}?text=${msg}`, "_blank");
  };

  return (
    <button
      onClick={handleOrder}
      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-800 text-sm text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      style={{
        background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
        boxShadow: `0 8px 24px ${accent}30`,
      }}
    >
      <ShoppingCart className="w-4 h-4" />
      Order Now
    </button>
  );
}
