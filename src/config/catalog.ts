// ============================================================
// nextITshop — Exact Client Catalog & Pricing Structure
// Minimal, High-End Luxury Digital Asset Marketplace
// ============================================================

export type Variation = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: "email" | "social" | "dev" | "chat";
  icon: string;
  iconColor: string;
  basePrice: number;
  badge?: "HOT" | "POPULAR" | "AGED" | "NEW";
  variations: Variation[];
  highlights: string[];
  delivery: string;
  format: string;
};

export const products: Product[] = [
  {
    id: "gmail",
    name: "Gmail Accounts",
    subtitle: "Aged & Phone Verified",
    category: "email",
    icon: "gmail",
    iconColor: "#EA4335",
    basePrice: 0.99,
    badge: "POPULAR",
    delivery: "Instant (~120s)",
    format: "Email : Password : Recovery",
    highlights: ["Clean Residential IPs", "POP3/IMAP Activated", "Full Replacement Warranty"],
    variations: [
      { name: "Fresh PVA Account", price: 0.99 },
      { name: "Aged 1+ Year+ PVA", price: 2.50 },
      { name: "Aged 5 Year+ PVA", price: 3.50 },
    ],
  },
  {
    id: "google-voice",
    name: "Google Voice Accounts",
    subtitle: "US Number + Gmail Linked",
    category: "email",
    icon: "googlevoice",
    iconColor: "#34A853",
    basePrice: 1.49,
    badge: "HOT",
    delivery: "Instant (~120s)",
    format: "Email : Password : Recovery : GV Number",
    highlights: ["Permanent US Number", "SMS & Call Forwarding", "Ready to Receive OTPs"],
    variations: [
      { name: "Standard US Number + Gmail", price: 1.49 },
      { name: "Aged 60+ Days US Number", price: 3.25 },
      { name: "Aged 1 Year+ US Number", price: 4.50 },
    ],
  },
  {
    id: "edu-mail",
    name: "Edu Mail (.edu) Accounts",
    subtitle: "University Email Access",
    category: "email",
    icon: "microsoftoutlook",
    iconColor: "#0078D4",
    basePrice: 3.99,
    badge: "HOT",
    delivery: "Instant (~120s)",
    format: "Student Email : Password : Portal URL",
    highlights: ["Prime Student & Perks Access", "Active Academic Domain", "Full Webmail Login"],
    variations: [
      { name: "Standard .edu Email", price: 3.99 },
      { name: "High-Trust Ivy .edu Email", price: 6.50 },
      { name: "Portal + Admin Access .edu", price: 9.99 },
    ],
  },
  {
    id: "yahoo-mail",
    name: "Yahoo Mail Accounts",
    subtitle: "Aged & Verified",
    category: "email",
    icon: "yahoo",
    iconColor: "#6001D2",
    basePrice: 0.79,
    delivery: "Instant (~120s)",
    format: "Email : Password : App Password",
    highlights: ["Warm Inbox Footprint", "SMTP/IMAP Ready", "Full Recovery Attached"],
    variations: [
      { name: "Standard Yahoo PVA", price: 0.79 },
      { name: "Aged 30+ Days Yahoo", price: 1.20 },
      { name: "Aged 1 Year+ Yahoo", price: 2.50 },
    ],
  },
  {
    id: "hotmail-outlook",
    name: "Hotmail / Outlook Accounts",
    subtitle: "Aged & Verified",
    category: "email",
    icon: "microsoftoutlook",
    iconColor: "#0078D4",
    basePrice: 0.69,
    delivery: "Instant (~120s)",
    format: "Email : Password",
    highlights: ["Zero Lock History", "POP3/SMTP Enabled", "High Delivery Rate"],
    variations: [
      { name: "Standard Outlook PVA", price: 0.69 },
      { name: "Aged 30+ Days Outlook", price: 1.10 },
      { name: "Aged 1 Year+ Outlook", price: 1.99 },
    ],
  },
  {
    id: "naver",
    name: "Naver Accounts – 100% Safe",
    subtitle: "Korean Portal & Services",
    category: "email",
    icon: "naver",
    iconColor: "#03C75A",
    basePrice: 9.69,
    badge: "AGED",
    delivery: "Instant (~120s)",
    format: "ID : Password : Recovery",
    highlights: ["Korean Real Number Verified", "Cafe & Blog Accessible", "100% Safe Clean IP"],
    variations: [
      { name: "Number verified", price: 9.69 },
      { name: "Old Number verified", price: 18.69 },
    ],
  },
  {
    id: "telegram",
    name: "Telegram Accounts",
    subtitle: "Session + TData",
    category: "chat",
    icon: "telegram",
    iconColor: "#26A5E4",
    basePrice: 1.29,
    badge: "POPULAR",
    delivery: "Instant (~120s)",
    format: "TData Folder (.zip) + Session File",
    highlights: ["2FA Configured (Key Included)", "Clean Real SIM Carrier", "Desktop & API Compatible"],
    variations: [
      { name: "Session + JSON File", price: 1.29 },
      { name: "TData Aged 30+ Days", price: 3.49 },
      { name: "TData Aged 1 Year+", price: 6.49 },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Accounts",
    subtitle: "Channels & Hash",
    category: "chat",
    icon: "whatsapp",
    iconColor: "#25D366",
    basePrice: 1.49,
    badge: "HOT",
    delivery: "Instant (~120s)",
    format: "6-Digit Hash / Session Auth",
    highlights: ["Channel & Community Ready", "Real SIM Registered", "Anti-Ban Warming"],
    variations: [
      { name: "Hash File API Account", price: 1.49 },
      { name: "Aged Channel Capable WA", price: 2.99 },
      { name: "Real SIM Aged 90+ Days", price: 4.99 },
    ],
  },
  {
    id: "discord",
    name: "Discord Accounts",
    subtitle: "Token + Aged",
    category: "chat",
    icon: "discord",
    iconColor: "#5865F2",
    basePrice: 1.89,
    delivery: "Instant (~120s)",
    format: "Token / Email : Pass : Token",
    highlights: ["Email + Phone Verified", "Never Flagged on Join", "Custom Avatars"],
    variations: [
      { name: "Token Verified Discord", price: 1.89 },
      { name: "Aged 30+ Days Discord", price: 3.49 },
      { name: "Aged 6 Months+ (Nitro)", price: 5.99 },
    ],
  },
  {
    id: "twitter-x",
    name: "Twitter / X Accounts",
    subtitle: "Aged & Phone Verified",
    category: "social",
    icon: "x",
    iconColor: "#FFFFFF",
    basePrice: 3.49,
    badge: "POPULAR",
    delivery: "Instant (~120s)",
    format: "User : Pass : Email : 2FA",
    highlights: ["Real Phone Linked", "Warm Algorithm Standing", "Instant API/Web Access"],
    variations: [
      { name: "Standard Phone Verified X", price: 3.49 },
      { name: "Aged 30+ Days (with Posts)", price: 5.49 },
      { name: "Aged 1 Year+ High Trust", price: 9.99 },
    ],
  },
  {
    id: "facebook",
    name: "Facebook Accounts",
    subtitle: "Aged & Profile Ready",
    category: "social",
    icon: "facebook",
    iconColor: "#1877F2",
    basePrice: 3.49,
    badge: "HOT",
    delivery: "Instant (~120s)",
    format: "Email : Pass : 2FA : Cookies (JSON)",
    highlights: ["2FA Secret Key Included", "Marketplace & Ads Enabled", "High Daily Spend Limit"],
    variations: [
      { name: "Profile Complete PVA", price: 3.49 },
      { name: "Aged 60+ Days (Friends Ready)", price: 5.49 },
      { name: "Marketplace + Ads Ready FB", price: 9.99 },
    ],
  },
  {
    id: "instagram",
    name: "Instagram Accounts",
    subtitle: "Phone Verified & Aged",
    category: "social",
    icon: "instagram",
    iconColor: "#E4405F",
    basePrice: 2.99,
    delivery: "Instant (~120s)",
    format: "Username : Password : 2FA : Email",
    highlights: ["Aged Bio & Avatars", "Organic Interaction History", "No Shadowban"],
    variations: [
      { name: "Phone Verified Instagram", price: 2.99 },
      { name: "Aged 30+ Days Instagram", price: 4.49 },
      { name: "Aged 1 Year+ (Posts Ready)", price: 8.99 },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn Accounts",
    subtitle: "Phone Verified & Aged",
    category: "social",
    icon: "linkedin",
    iconColor: "#0A66C2",
    basePrice: 9.99,
    badge: "AGED",
    delivery: "Instant (~120s)",
    format: "Email : Pass : Cookies",
    highlights: ["Professional Industry Info", "Clean Recruiter Score", "Sales Navigator Eligible"],
    variations: [
      { name: "Phone Verified LinkedIn", price: 9.99 },
      { name: "Aged 90+ Days LinkedIn", price: 29.99 },
      { name: "500+ Connections LinkedIn", price: 59.99 },
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat Accounts",
    subtitle: "Phone Verified & Aged",
    category: "social",
    icon: "snapchat",
    iconColor: "#FFFC00",
    basePrice: 9.49,
    delivery: "Instant (~120s)",
    format: "Username : Password : Email",
    highlights: ["High Score Variations", "Active Bitmoji Profile", "Permanent Phone Verify"],
    variations: [
      { name: "Phone Verified Snapchat", price: 9.49 },
      { name: "Aged 30+ Days Snapchat", price: 19.49 },
      { name: "Score 1000+ Snapchat", price: 29.49 },
    ],
  },
  {
    id: "reddit",
    name: "Reddit Accounts",
    subtitle: "High Karma & Aged",
    category: "social",
    icon: "reddit",
    iconColor: "#FF4500",
    basePrice: 2.69,
    delivery: "Instant (~120s)",
    format: "Username : Password",
    highlights: ["Post to Major Subreddits", "Organic Karma History", "Instant Post Approval"],
    variations: [
      { name: "New Reddit", price: 2.69 },
      { name: "500+ karma", price: 9.99 },
      { name: "10k Karma", price: 18.69 },
    ],
  },
  {
    id: "github",
    name: "GitHub Accounts",
    subtitle: "Developer Ready",
    category: "dev",
    icon: "github",
    iconColor: "#FFFFFF",
    basePrice: 10.99,
    badge: "AGED",
    delivery: "Instant (~120s)",
    format: "Username : Pass : 2FA : Recovery",
    highlights: ["Green Commit Heatmap", "No Bot Flagging", "API / Copilot Ready"],
    variations: [
      { name: "Standard Developer GitHub", price: 10.99 },
      { name: "Aged 1 Year+ Commit Profile", price: 29.99 },
    ],
  },
  {
    id: "github-student-pack",
    name: "GitHub Student Pack Accounts",
    subtitle: "Student Benefits Bundle",
    category: "dev",
    icon: "github",
    iconColor: "#FFFFFF",
    basePrice: 4.99,
    badge: "HOT",
    delivery: "Instant (~120s)",
    format: "GitHub Login + University Email Access",
    highlights: ["$200k+ Dev Tools & Cloud Credits", "JetBrains + Copilot + DigitalOcean", "Verified Academic Status"],
    variations: [
      { name: "1 Account", price: 4.99 },
      { name: "5 Accounts", price: 22.99 },
      { name: "10 Accounts", price: 44.99 },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
