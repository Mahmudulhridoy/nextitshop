import Link from "next/link";
import { type Service } from "@/config/services";
import ServiceIcon from "./ServiceIcon";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import clsx from "clsx";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

const accentMap = {
  cyan:   { border: "hover:border-cyan-500/30",   glow: "hover:shadow-cyan-500/10",   badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",   btn: "text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/10",   iconBg: "bg-cyan-500/10 border-cyan-500/20" },
  purple: { border: "hover:border-purple-500/30", glow: "hover:shadow-purple-500/10", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", btn: "text-purple-400 border-purple-500/40 hover:bg-purple-500/10", iconBg: "bg-purple-500/10 border-purple-500/20" },
  pink:   { border: "hover:border-pink-500/30",   glow: "hover:shadow-pink-500/10",   badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",   btn: "text-pink-400 border-pink-500/40 hover:bg-pink-500/10",   iconBg: "bg-pink-500/10 border-pink-500/20" },
  blue:   { border: "hover:border-blue-500/30",   glow: "hover:shadow-blue-500/10",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   btn: "text-blue-400 border-blue-500/40 hover:bg-blue-500/10",   iconBg: "bg-blue-500/10 border-blue-500/20" },
  green:  { border: "hover:border-green-500/30",  glow: "hover:shadow-green-500/10",  badge: "bg-green-500/10 text-green-400 border-green-500/20",  btn: "text-green-400 border-green-500/40 hover:bg-green-500/10",  iconBg: "bg-green-500/10 border-green-500/20" },
  orange: { border: "hover:border-orange-500/30", glow: "hover:shadow-orange-500/10", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", btn: "text-orange-400 border-orange-500/40 hover:bg-orange-500/10", iconBg: "bg-orange-500/10 border-orange-500/20" },
  red:    { border: "hover:border-red-500/30",    glow: "hover:shadow-red-500/10",    badge: "bg-red-500/10 text-red-400 border-red-500/20",    btn: "text-red-400 border-red-500/40 hover:bg-red-500/10",    iconBg: "bg-red-500/10 border-red-500/20" },
};

const badgeStyle = {
  Popular: "badge badge-popular",
  Hot: "badge badge-hot",
  New: "badge badge-new",
};

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const accent = accentMap[service.accentColor] ?? accentMap.cyan;

  return (
    <Link
      href={`/services/${service.id}`}
      className={clsx(
        "group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0e0e1a]",
        "service-card overflow-hidden",
        "hover:shadow-xl",
        accent.border,
        accent.glow,
      )}
    >
      {/* Top glow accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Card glow line bottom */}
      <div className="card-glow-line" />

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Header: icon + badge */}
        <div className="flex items-start justify-between">
          <div className={clsx("w-12 h-12 rounded-xl border flex items-center justify-center", accent.iconBg)}>
            <ServiceIcon icon={service.icon} color={service.iconColor} size={24} />
          </div>
          {service.badge && (
            <span className={badgeStyle[service.badge as keyof typeof badgeStyle] || "badge badge-new"}>
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & description */}
        <div>
          <h3 className="font-800 text-white text-base mb-1.5 group-hover:text-white transition-colors leading-snug">
            {service.name}
          </h3>
          <p className="text-white/45 text-xs leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Features (top 2) */}
        <ul className="space-y-1.5">
          {service.features.slice(0, 2).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-white/50">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-current flex-shrink-0" style={{ color: service.iconColor }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Delivery */}
        <div className="flex items-center gap-1.5 text-xs text-white/35">
          <Clock className="w-3 h-3" />
          <span>{service.deliveryTime}</span>
        </div>
      </div>

      {/* Price + CTA footer */}
      <div className="px-5 pb-5 pt-0 mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div>
            <p className="text-xs text-white/30 mb-0.5">{service.priceLabel}</p>
            <p className="text-xl font-900 text-white">
              <span className="text-sm" style={{ color: service.iconColor }}>\$</span>
              {service.basePrice.toFixed(2)}
            </p>
          </div>
          <span className={clsx("inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-700 transition-all", accent.btn)}>
            View Details
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
