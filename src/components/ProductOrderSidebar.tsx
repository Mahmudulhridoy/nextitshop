"use client";

import { useState } from "react";
import { Product, Variation } from "@/config/catalog";
import { siteConfig } from "@/config/site";
import { Minus, Plus, Zap, MessageSquare } from "lucide-react";

interface ProductOrderSidebarProps {
  product: Product;
}

const PRESET_QUANTITIES = [1, 5, 10, 50, 100];

export default function ProductOrderSidebar({ product }: ProductOrderSidebarProps) {
  const [selectedVariation, setSelectedVariation] = useState<Variation>(
    product.variations[0] || { name: "Standard", price: product.basePrice }
  );
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const total = (selectedVariation.price * quantity).toFixed(2);

  const buildMessage = () => {
    let msg =
      `*NEW ORDER — nextITshop*\n\n` +
      `📦 *Product:* ${product.name}\n` +
      `⚡ *Variation:* ${selectedVariation.name}\n` +
      `🔢 *Quantity:* ${quantity} pack(s)\n` +
      `💰 *Total Price:* $${total}`;

    if (notes.trim()) {
      msg += `\n\n📝 *Special Instructions:* ${notes.trim()}`;
    }

    return encodeURIComponent(msg);
  };

  const handleTelegramOrder = () => {
    window.open(`${siteConfig.contact.telegramUrl}?text=${buildMessage()}`, "_blank");
  };

  const handleWhatsAppOrder = () => {
    window.open(`${siteConfig.contact.whatsappUrl}?text=${buildMessage()}`, "_blank");
  };

  return (
    <div className="sticky top-24 rounded-2xl bg-[#0b0e17] border border-cyan-500/20 p-6 sm:p-7 shadow-2xl shadow-cyan-950/40 text-white">
      {/* Title */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
          <Zap className="w-4 h-4 fill-current" />
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight">Configure Your Order</h3>
      </div>
      <p className="text-xs text-white/40 mb-6">
        Select package variation, set quantity, and send directly.
      </p>

      {/* Variation Selection */}
      <div className="mb-6">
        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-2">
          Select Variation
        </label>
        <div className="space-y-1.5">
          {product.variations.map((v) => {
            const isSelected = selectedVariation.name === v.name;
            return (
              <button
                key={v.name}
                type="button"
                onClick={() => setSelectedVariation(v)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all duration-200 border text-left ${
                  isSelected
                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "bg-white/[0.02] text-white/60 border-white/[0.06] hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <span className="truncate pr-2">{v.name}</span>
                <span className={`font-bold ${isSelected ? "text-cyan-400" : "text-white/80"}`}>
                  ${v.price.toFixed(2)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-white/50">
            Select Quantity
          </label>
          {quantity >= 50 && (
            <span className="text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
              ⚡ Bulk Tier
            </span>
          )}
        </div>

        {/* Preset Quantity Pills */}
        <div className="grid grid-cols-5 gap-1.5 mb-3">
          {PRESET_QUANTITIES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setQuantity(q)}
              className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                quantity === q
                  ? "bg-cyan-500/15 border-cyan-400 text-cyan-400 shadow-sm"
                  : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Quantity Stepper */}
        <div className="flex items-center h-11 rounded-xl bg-[#070910] border border-cyan-500/20 overflow-hidden">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-12 h-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <input
            type="number"
            min={1}
            max={999}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Math.min(999, parseInt(e.target.value) || 1)))
            }
            className="flex-1 h-full bg-transparent text-center font-bold text-white text-sm focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(999, q + 1))}
            className="w-12 h-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Special Instructions */}
      <div className="mb-6">
        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-2">
          Special Instructions (Optional)
        </label>
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Geo preference (USA, EU), format requirements..."
          className="w-full rounded-xl bg-[#070910] border border-white/[0.08] p-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-cyan-500/50 resize-none transition-colors"
        />
      </div>

      {/* Summary Box */}
      <div className="mb-6 p-4 rounded-xl bg-[#070910] border border-cyan-500/20">
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>Unit Rate</span>
          <span className="font-semibold text-white">${selectedVariation.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-white/50 mb-3">
          <span>Quantity</span>
          <span className="font-semibold text-white">{quantity}</span>
        </div>
        <div className="h-px bg-white/[0.06] mb-3" />
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-white/40">Total</span>
          <span className="text-2xl font-black text-white tracking-tight">${total}</span>
        </div>
      </div>

      {/* Order Buttons */}
      <div className="space-y-2.5">
        <button
          type="button"
          onClick={handleTelegramOrder}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0088cc] hover:bg-[#0077b5] transition-all shadow-lg shadow-[#0088cc]/20 active:scale-[0.99]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2 .773-7.028 2.666-9.081 3.44-.737.28-.984 1.067-.176 1.504.782.423 1.953.83 1.953.83s1.08.347 1.617.52c.537.172.57.588.57.588l1.073 6.723c.128.798 1.11.86 1.514.476l2.268-2.126s.953-.903 1.522-.358l3.284 2.39c.724.52 1.453.315 1.604-.553l2.905-16.12c.236-1.064-.37-1.59-.997-1.876a2.24 2.24 0 0 0-.425-.003Z" />
          </svg>
          Send Order via Telegram
        </button>

        <button
          type="button"
          onClick={handleWhatsAppOrder}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20 active:scale-[0.99]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Send Order via WhatsApp
        </button>
      </div>

      <p className="text-center text-[11px] text-white/35 mt-4">
        No payment upfront · Confirm details in chat
      </p>
    </div>
  );
}
