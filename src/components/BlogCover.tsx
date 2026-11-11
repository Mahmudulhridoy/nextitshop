import ServiceIcon from "@/components/ServiceIcon";
import { Shield } from "lucide-react";
import { getBlogCategory } from "@/config/blogCategories";

/** Cover art for a post: uses the post's image if given, otherwise a branded gradient + service icon. */
export default function BlogCover({
  category,
  image,
  title,
  className = "h-48",
  iconSize = 32,
}: {
  category: string;
  image?: string;
  title: string;
  className?: string;
  iconSize?: number;
}) {
  const cat = getBlogCategory(category);
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={title} loading="lazy" className={`w-full object-cover ${className}`} />;
  }
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: cat.gradient }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-40" style={{ background: cat.color }} />
      <div className="relative w-16 h-16 rounded-2xl bg-[#07080d]/90 border border-white/[0.14] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
        {cat.icon === "shield" ? <Shield style={{ width: iconSize, height: iconSize, color: cat.color }} /> : <ServiceIcon icon={cat.icon} color={cat.color} size={iconSize} />}
      </div>
    </div>
  );
}
