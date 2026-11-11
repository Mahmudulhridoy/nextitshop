import Link from "next/link";
import {
  Mail, Share2, MessageCircle, Code2, GraduationCap, Settings,
  ArrowRight
} from "lucide-react";
import { type Category } from "@/config/services";
import clsx from "clsx";

interface CategoryCardProps {
  category: Category;
  serviceCount?: number;
  size?: "default" | "large";
}

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const iconComponents: Record<string, React.ComponentType<IconProps>> = {
  mail: Mail,
  google: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  share2: Share2,
  messageCircle: MessageCircle,
  code2: Code2,
  graduationCap: GraduationCap,
  settings: Settings,
};

export default function CategoryCard({ category, serviceCount, size = "default" }: CategoryCardProps) {
  const IconComponent = iconComponents[category.icon];

  return (
    <Link
      href={`/categories/${category.id}`}
      className={clsx(
        "group relative flex flex-col rounded-2xl border border-white/[0.07] overflow-hidden",
        "hover:border-white/[0.15] transition-all duration-300 service-card",
        size === "large" ? "p-7" : "p-5"
      )}
      style={{
        background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo}, rgba(14,14,26,0.95))`,
      }}
    >
      {/* Top shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(circle at top right, ${category.accentColor}25, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Icon */}
      <div
        className={clsx(
          "relative mb-4 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          size === "large" ? "w-14 h-14" : "w-11 h-11"
        )}
        style={{
          background: `${category.accentColor}15`,
          borderColor: `${category.accentColor}30`,
          boxShadow: `0 0 20px ${category.accentColor}15`,
        }}
      >
        {IconComponent && (
          category.icon === "google" ? (
            <IconComponent className={size === "large" ? "w-7 h-7" : "w-5 h-5"} />
          ) : (
            <IconComponent
              className={size === "large" ? "w-7 h-7" : "w-5 h-5"}
              style={{ color: category.accentColor } as React.CSSProperties}
            />
          )
        )}
      </div>

      {/* Text */}
      <h3
        className={clsx(
          "font-800 text-white mb-2 group-hover:opacity-100 transition-all leading-snug",
          size === "large" ? "text-lg" : "text-base"
        )}
      >
        {category.name}
      </h3>
      <p className="text-white/45 text-xs leading-relaxed flex-1">
        {category.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
        {serviceCount !== undefined && (
          <span className="text-xs text-white/30 font-600">
            {serviceCount} service{serviceCount !== 1 ? "s" : ""}
          </span>
        )}
        <span
          className="ml-auto flex items-center gap-1 text-xs font-700 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
          style={{ color: category.accentColor }}
        >
          Explore <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      <div className="card-glow-line" style={{ background: `linear-gradient(to right, transparent, ${category.accentColor}, transparent)` }} />
    </Link>
  );
}
