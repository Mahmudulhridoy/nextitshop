"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/config/catalog";
import ServiceIcon from "@/components/ServiceIcon";
import OrderModal from "@/components/OrderModal";
import { Check, Zap, ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVarIndex, setSelectedVarIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeVar = product.variations[selectedVarIndex];

  const handleBuyNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="group relative flex flex-col justify-between rounded-2xl bg-[#0b0d14] border border-white/[0.07] hover:border-cyan-400/30 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/[0.08] hover:-translate-y-1 block h-full"
      >
        {/* Subtle hover gradient illumination */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        <div>
          {/* Header: Icon, Title & Badge */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-3 flex-shrink-0 group-hover:border-cyan-500/30 transition-colors">
                <ServiceIcon icon={product.icon} color={product.iconColor} size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-[15px] tracking-tight leading-snug group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  {product.name}
                  <ExternalLink className="w-3.5 h-3.5 text-white/0 group-hover:text-cyan-300 transition-colors" />
                </h3>
                <p className="text-white/45 text-xs">
                  {product.subtitle}
                </p>
              </div>
            </div>

            {product.badge && (
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md tracking-wider border ${
                  product.badge === "HOT"
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    : product.badge === "POPULAR"
                    ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Variations Selector Tabs */}
          <div className="space-y-2 my-5" onClick={(e) => e.preventDefault()}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35 block mb-2">
              Select Variation
            </span>
            <div className="flex flex-col gap-1.5">
              {product.variations.map((v, idx) => {
                const isSelected = selectedVarIndex === idx;
                return (
                  <button
                    key={v.name}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedVarIndex(idx);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left ${
                      isSelected
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-400/30"
                        : "bg-white/[0.02] text-white/55 border border-transparent hover:bg-white/[0.05] hover:text-white/85"
                    }`}
                  >
                    <span className="truncate pr-2">{v.name}</span>
                    <span className={`font-bold ${isSelected ? "text-cyan-400" : "text-white/60"}`}>
                      ${v.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimal Feature Highlights */}
          <div className="pt-4 border-t border-white/[0.05] space-y-2">
            {product.highlights.slice(0, 2).map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Clean Action Button */}
        <div className="pt-5 mt-4 border-t border-white/[0.05] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-white/30 uppercase tracking-wider block font-semibold">
              Price
            </span>
            <div className="text-2xl font-bold text-white tracking-tight">
              ${activeVar.price.toFixed(2)}
              <span className="text-xs font-normal text-white/30 ml-1">/ea</span>
            </div>
          </div>

          <button
            onClick={handleBuyNowClick}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 hover:text-black transition-all active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Buy Now
          </button>
        </div>
      </Link>

      {/* Embedded Pixel-Perfect Order Modal for Instant Buy Now */}
      <OrderModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialVariationIndex={selectedVarIndex}
      />
    </>
  );
}
