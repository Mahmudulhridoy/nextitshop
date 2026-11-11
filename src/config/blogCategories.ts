// Blog categories — mirror the service list. Add a new line here to create a new category;
// it will automatically appear as a filter on /blog as soon as one post uses it.
export type BlogCategory = {
  id: string;
  label: string;
  icon: string; // ServiceIcon slug (or "shield")
  color: string; // hex
  gradient: string; // css gradient for cover art
  link: string; // where the post's "order" CTA points
  linkLabel: string;
};

export const blogCategories: BlogCategory[] = [
  { id: "gmail", label: "Gmail", icon: "gmail", color: "#EA4335", gradient: "linear-gradient(135deg, rgba(234,67,53,0.30), rgba(168,85,247,0.12))", link: "/product/gmail", linkLabel: "Browse Gmail accounts" },
  { id: "email", label: "Email Services", icon: "outlook", color: "#0078D4", gradient: "linear-gradient(135deg, rgba(0,120,212,0.28), rgba(168,85,247,0.14))", link: "/catalog", linkLabel: "Browse email accounts" },
  { id: "telegram", label: "Telegram", icon: "telegram", color: "#26A5E4", gradient: "linear-gradient(135deg, rgba(38,165,228,0.30), rgba(6,182,212,0.10))", link: "/product/telegram", linkLabel: "Browse Telegram accounts" },
  { id: "whatsapp", label: "WhatsApp", icon: "whatsapp", color: "#25D366", gradient: "linear-gradient(135deg, rgba(37,211,102,0.28), rgba(6,182,212,0.10))", link: "/product/whatsapp", linkLabel: "Browse WhatsApp accounts" },
  { id: "google-voice", label: "Google Voice", icon: "googlevoice", color: "#34A853", gradient: "linear-gradient(135deg, rgba(52,168,83,0.28), rgba(66,133,244,0.14))", link: "/product/google-voice", linkLabel: "Browse Google Voice numbers" },
  { id: "social", label: "Social Media", icon: "instagram", color: "#E1306C", gradient: "linear-gradient(135deg, rgba(225,48,108,0.28), rgba(168,85,247,0.16))", link: "/catalog", linkLabel: "Browse social accounts" },
  { id: "developer", label: "Developer", icon: "github", color: "#FFFFFF", gradient: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(168,85,247,0.16))", link: "/product/github", linkLabel: "Browse GitHub accounts" },
  { id: "other", label: "Other Services", icon: "shield", color: "#EC4899", gradient: "linear-gradient(135deg, rgba(236,72,153,0.26), rgba(6,182,212,0.12))", link: "/catalog", linkLabel: "View full catalog" },
];

export function getBlogCategory(id: string): BlogCategory {
  return blogCategories.find((c) => c.id === id) ?? blogCategories[blogCategories.length - 1];
}
