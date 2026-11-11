import Link from "next/link";
import { products } from "@/config/catalog";
import ServiceIcon from "./ServiceIcon";

export default function ServiceMarquee() {
  const items = [...products, ...products];

  return (
    <div className="relative py-5 bg-[#07090e] border-y border-white/[0.05] marquee-container overflow-hidden select-none">
      <div className="flex animate-marquee gap-6 whitespace-nowrap">
        {items.map((p, idx) => (
          <Link
            key={`${p.id}-${idx}`}
            href={`/product/${p.id}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-sm font-medium text-white/60 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all cursor-pointer flex-shrink-0"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <ServiceIcon icon={p.icon} color={p.iconColor} size={15} />
            </div>
            <span>{p.name}</span>
            <span className="text-cyan-300/90 font-semibold ml-1">${p.basePrice.toFixed(2)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
