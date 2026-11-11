// ============================================================
// nextITshop — Complete Service Data
// Static data — extend with a CMS/DB later if needed
// ============================================================

export type ServiceVariant = {
  label: string;
  price: number;
  description?: string;
};

export type Service = {
  id: string;
  categoryId: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;          // simpleicons slug or emoji fallback
  iconColor: string;     // hex
  accentColor: "cyan" | "purple" | "pink" | "blue" | "orange" | "red" | "green";
  features: string[];
  requirements: string[];
  deliveryTime: string;
  basePrice: number;
  priceLabel: string;    // e.g. "Starting at"
  variants?: ServiceVariant[];
  featured?: boolean;
  badge?: string;        // "Popular" | "New" | "Hot"
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  serviceCount?: number;
};

// ── Categories ──────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: "email",
    name: "Email Services",
    description: "Professional email account setup and configuration",
    icon: "mail",
    accentColor: "#EA4335",
    gradientFrom: "rgba(234,67,53,0.15)",
    gradientTo: "rgba(234,67,53,0.03)",
  },
  {
    id: "google",
    name: "Google Services",
    description: "Google account setup and security configuration",
    icon: "google",
    accentColor: "#4285F4",
    gradientFrom: "rgba(66,133,244,0.15)",
    gradientTo: "rgba(66,133,244,0.03)",
  },
  {
    id: "social",
    name: "Social Media Services",
    description: "Profile setup and optimization across all platforms",
    icon: "share2",
    accentColor: "#a855f7",
    gradientFrom: "rgba(168,85,247,0.15)",
    gradientTo: "rgba(168,85,247,0.03)",
  },
  {
    id: "communication",
    name: "Communication Services",
    description: "Messaging app setup and professional configuration",
    icon: "messageCircle",
    accentColor: "#06b6d4",
    gradientFrom: "rgba(6,182,212,0.15)",
    gradientTo: "rgba(6,182,212,0.03)",
  },
  {
    id: "developer",
    name: "Developer Services",
    description: "Developer profile and repository configuration",
    icon: "code2",
    accentColor: "#8b5cf6",
    gradientFrom: "rgba(139,92,246,0.15)",
    gradientTo: "rgba(139,92,246,0.03)",
  },
  {
    id: "academic",
    name: "Academic Services",
    description: "University email and student benefits guidance",
    icon: "graduationCap",
    accentColor: "#f97316",
    gradientFrom: "rgba(249,115,22,0.15)",
    gradientTo: "rgba(249,115,22,0.03)",
  },
  {
    id: "additional",
    name: "Additional Services",
    description: "Specialized email and professional configuration",
    icon: "settings",
    accentColor: "#10b981",
    gradientFrom: "rgba(16,185,129,0.15)",
    gradientTo: "rgba(16,185,129,0.03)",
  },
];

// ── Services ────────────────────────────────────────────────
export const services: Service[] = [
  // ── EMAIL ─────────────────────────────────────────────────
  {
    id: "gmail-setup",
    categoryId: "email",
    name: "Gmail Setup",
    shortDescription: "Professional Gmail account setup with full security configuration",
    fullDescription:
      "Get expert assistance setting up your personal or business Gmail account. We help you configure security settings, 2FA, recovery options, filters, labels, and signature — all tailored to your workflow. This is a legitimate setup assistance service for your own authorized account.",
    icon: "gmail",
    iconColor: "#EA4335",
    accentColor: "red",
    features: [
      "Account creation guidance",
      "2-Factor Authentication setup",
      "Recovery options configuration",
      "Email filters & labels setup",
      "Professional email signature",
      "Google Workspace compatibility",
    ],
    requirements: [
      "Valid phone number for verification",
      "Recovery email address",
      "Personal identification for account",
    ],
    deliveryTime: "1–3 hours",
    basePrice: 9.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Basic Setup", price: 9.99, description: "Account creation + basic security" },
      { label: "Full Configuration", price: 19.99, description: "Full setup + filters, labels, signature" },
      { label: "Business Optimized", price: 34.99, description: "Business-grade setup with workspace config" },
    ],
    featured: true,
    badge: "Popular",
  },
  {
    id: "yahoo-setup",
    categoryId: "email",
    name: "Yahoo Mail Setup",
    shortDescription: "Complete Yahoo Mail configuration for personal and business use",
    fullDescription:
      "Professional Yahoo Mail account setup including security hardening, spam filters, forwarding rules, and inbox organization. Perfect for users migrating from other platforms or starting fresh.",
    icon: "yahoo",
    iconColor: "#6001D2",
    accentColor: "purple",
    features: [
      "Account creation & verification",
      "Spam filter configuration",
      "Email forwarding setup",
      "Folder organization",
      "Security & privacy settings",
      "Mobile app sync guidance",
    ],
    requirements: [
      "Valid phone number",
      "Backup email address",
    ],
    deliveryTime: "1–2 hours",
    basePrice: 7.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Basic", price: 7.99 },
      { label: "Complete", price: 14.99 },
    ],
    featured: false,
  },
  {
    id: "outlook-setup",
    categoryId: "email",
    name: "Outlook Setup",
    shortDescription: "Microsoft Outlook & Hotmail account setup and configuration",
    fullDescription:
      "Expert Outlook setup for personal or business accounts. Includes Microsoft account creation, Outlook calendar sync, Teams integration guidance, and security hardening.",
    icon: "microsoftoutlook",
    iconColor: "#0078D4",
    accentColor: "blue",
    features: [
      "Microsoft account creation",
      "Outlook calendar setup",
      "Teams integration guidance",
      "OneDrive configuration",
      "Security & 2FA setup",
      "Mobile & desktop sync",
    ],
    requirements: [
      "Phone number for verification",
      "Preferred username/email",
    ],
    deliveryTime: "1–3 hours",
    basePrice: 9.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Personal", price: 9.99 },
      { label: "Business", price: 24.99 },
    ],
    featured: false,
    badge: "New",
  },

  // ── GOOGLE ────────────────────────────────────────────────
  {
    id: "google-voice-setup",
    categoryId: "google",
    name: "Google Voice Setup",
    shortDescription: "Google Voice number assignment and call forwarding configuration",
    fullDescription:
      "Complete Google Voice setup assistance including number selection, call forwarding configuration, voicemail setup, and integration with your existing Google account. Ideal for professionals needing a dedicated business line.",
    icon: "googlevoice",
    iconColor: "#34A853",
    accentColor: "green",
    features: [
      "Google Voice number setup",
      "Call forwarding configuration",
      "Voicemail greeting setup",
      "SMS integration",
      "Google account linking",
      "Privacy settings guide",
    ],
    requirements: [
      "Active Google account",
      "US-based phone number for linking",
      "Google Voice eligible location",
    ],
    deliveryTime: "2–4 hours",
    basePrice: 14.99,
    priceLabel: "Starting at",
    featured: true,
    badge: "Popular",
  },
  {
    id: "google-security-config",
    categoryId: "google",
    name: "Google Account Security Configuration",
    shortDescription: "Comprehensive Google account security hardening and 2FA setup",
    fullDescription:
      "Full Google account security audit and configuration. We configure 2-Step Verification, review connected apps, set up passkeys, enable advanced protection features, and create a recovery plan.",
    icon: "google",
    iconColor: "#4285F4",
    accentColor: "blue",
    features: [
      "2-Step Verification setup",
      "Passkey configuration",
      "Connected apps audit",
      "Advanced Protection Program guidance",
      "Recovery codes generation",
      "Security checkup walkthrough",
    ],
    requirements: [
      "Active Google account credentials",
      "Phone number for 2FA",
    ],
    deliveryTime: "1–2 hours",
    basePrice: 12.99,
    priceLabel: "Starting at",
    featured: false,
  },

  // ── ACADEMIC ──────────────────────────────────────────────
  {
    id: "university-email-setup",
    categoryId: "academic",
    name: "University Email Setup",
    shortDescription: "Guidance on claiming and configuring your .edu email address",
    fullDescription:
      "Step-by-step assistance in setting up your official university email account. We guide you through the verification process, Microsoft 365 / Google Workspace for Education setup, and accessing student benefits.",
    icon: "microsoftoutlook",
    iconColor: "#0078D4",
    accentColor: "blue",
    features: [
      "University email activation guidance",
      "Microsoft 365 Education setup",
      "Google Workspace for Education",
      "Student portal configuration",
      "Email forwarding setup",
      "Access to student benefits",
    ],
    requirements: [
      "Active student enrollment",
      "Student ID number",
      "Official university registration confirmation",
    ],
    deliveryTime: "2–6 hours",
    basePrice: 19.99,
    priceLabel: "Starting at",
    featured: true,
    badge: "Popular",
  },
  {
    id: "student-developer-benefits",
    categoryId: "academic",
    name: "Student Developer Benefits Guidance",
    shortDescription: "Unlock GitHub Student Pack, JetBrains, and other student perks",
    fullDescription:
      "Expert guidance on claiming and activating student developer benefits including GitHub Student Developer Pack, JetBrains All Products, Namecheap domains, and more. We walk you through the verification process.",
    icon: "github",
    iconColor: "#ffffff",
    accentColor: "purple",
    features: [
      "GitHub Student Pack activation",
      "JetBrains license guidance",
      "Namecheap free domain",
      "Azure for Students setup",
      "AWS Educate guidance",
      "50+ benefits unlocked",
    ],
    requirements: [
      "Active university email",
      "Student ID or enrollment proof",
    ],
    deliveryTime: "1–4 hours",
    basePrice: 24.99,
    priceLabel: "Starting at",
    badge: "Hot",
  },

  // ── SOCIAL MEDIA ──────────────────────────────────────────
  {
    id: "facebook-setup",
    categoryId: "social",
    name: "Facebook Profile Setup",
    shortDescription: "Professional Facebook personal or business profile configuration",
    fullDescription:
      "Complete Facebook profile setup including privacy settings, profile optimization, page creation for businesses, and security configuration. We ensure your profile looks professional and is properly secured.",
    icon: "facebook",
    iconColor: "#1877F2",
    accentColor: "blue",
    features: [
      "Profile creation & optimization",
      "Privacy settings configuration",
      "Business page setup (optional)",
      "Profile photo & cover guidance",
      "Security settings hardening",
      "2FA setup",
    ],
    requirements: [
      "Valid phone number",
      "Government-issued ID (for verification if needed)",
    ],
    deliveryTime: "1–3 hours",
    basePrice: 9.99,
    priceLabel: "Starting at",
    featured: false,
  },
  {
    id: "x-twitter-setup",
    categoryId: "social",
    name: "X (Twitter) Profile Setup",
    shortDescription: "X/Twitter account creation and professional profile optimization",
    fullDescription:
      "Professional X/Twitter profile setup including username selection, bio optimization, header and profile image guidance, security settings, and notification configuration. Build your personal brand from day one.",
    icon: "x",
    iconColor: "#ffffff",
    accentColor: "cyan",
    features: [
      "Account creation guidance",
      "Username & bio optimization",
      "Profile & header image setup",
      "Security & 2FA configuration",
      "Notification settings",
      "Following recommendations",
    ],
    requirements: [
      "Phone number or email for verification",
    ],
    deliveryTime: "1–2 hours",
    basePrice: 9.99,
    priceLabel: "Starting at",
    featured: true,
    badge: "New",
  },
  {
    id: "instagram-optimization",
    categoryId: "social",
    name: "Instagram Profile Optimization",
    shortDescription: "Instagram account setup and profile optimization for maximum reach",
    fullDescription:
      "Full Instagram profile setup and optimization. We configure your profile for maximum discoverability, set up business or creator accounts, configure contact options, and ensure privacy settings match your goals.",
    icon: "instagram",
    iconColor: "#E1306C",
    accentColor: "pink",
    features: [
      "Profile creation & bio optimization",
      "Business/Creator account setup",
      "Contact & action button setup",
      "Story highlights setup",
      "Privacy & security settings",
      "Link-in-bio configuration",
    ],
    requirements: [
      "Phone number for verification",
      "Profile photos/assets ready",
    ],
    deliveryTime: "2–4 hours",
    basePrice: 12.99,
    priceLabel: "Starting at",
    featured: true,
    badge: "Popular",
  },
  {
    id: "snapchat-setup",
    categoryId: "social",
    name: "Snapchat Profile Setup",
    shortDescription: "Snapchat account creation and profile configuration",
    fullDescription:
      "Complete Snapchat account setup including profile optimization, Bitmoji configuration, privacy settings, and friend discovery settings. Ideal for personal users and businesses exploring Snapchat marketing.",
    icon: "snapchat",
    iconColor: "#FFFC00",
    accentColor: "orange",
    features: [
      "Account creation guidance",
      "Bitmoji setup",
      "Privacy settings configuration",
      "Friend discovery settings",
      "Notification preferences",
      "Story settings",
    ],
    requirements: [
      "Phone number for verification",
      "Date of birth (must be 13+)",
    ],
    deliveryTime: "1–2 hours",
    basePrice: 7.99,
    priceLabel: "Starting at",
  },
  {
    id: "linkedin-optimization",
    categoryId: "social",
    name: "LinkedIn Profile Optimization",
    shortDescription: "Professional LinkedIn profile setup and optimization for career growth",
    fullDescription:
      "Transform your LinkedIn presence with a professionally optimized profile. We help craft your headline, summary, experience sections, and configure all settings for maximum visibility to recruiters and connections.",
    icon: "linkedin",
    iconColor: "#0A66C2",
    accentColor: "blue",
    features: [
      "Profile creation & headline optimization",
      "Professional summary writing guidance",
      "Experience & skills section setup",
      "Open to Work configuration",
      "Connection strategy guidance",
      "Privacy & visibility settings",
    ],
    requirements: [
      "Resume or work history details",
      "Professional headshot (optional)",
    ],
    deliveryTime: "2–5 hours",
    basePrice: 19.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Basic Profile", price: 19.99 },
      { label: "Premium Optimization", price: 39.99 },
    ],
    featured: true,
    badge: "Popular",
  },
  {
    id: "reddit-optimization",
    categoryId: "social",
    name: "Reddit Profile Optimization",
    shortDescription: "Reddit account setup and community engagement configuration",
    fullDescription:
      "Reddit account setup with profile customization, subreddit recommendations, karma building strategy, and privacy configuration. Ideal for individuals and brands looking to build a Reddit presence.",
    icon: "reddit",
    iconColor: "#FF4500",
    accentColor: "orange",
    features: [
      "Account creation guidance",
      "Profile customization",
      "Subreddit recommendations",
      "Privacy settings",
      "Post & comment karma strategy",
      "Reddit Premium guidance",
    ],
    requirements: [
      "Email for verification",
    ],
    deliveryTime: "1–2 hours",
    basePrice: 7.99,
    priceLabel: "Starting at",
  },

  // ── COMMUNICATION ─────────────────────────────────────────
  {
    id: "telegram-configuration",
    categoryId: "communication",
    name: "Telegram Configuration",
    shortDescription: "Telegram account setup, security, and channel/group configuration",
    fullDescription:
      "Complete Telegram account setup and configuration. Includes privacy settings, two-step verification, channel/group creation, bot setup guidance, and username configuration. Perfect for businesses and community builders.",
    icon: "telegram",
    iconColor: "#26A5E4",
    accentColor: "cyan",
    features: [
      "Account setup & username configuration",
      "Two-step verification",
      "Privacy & security settings",
      "Channel or group creation",
      "Bot integration guidance",
      "Username & profile optimization",
    ],
    requirements: [
      "Phone number for registration",
    ],
    deliveryTime: "1–3 hours",
    basePrice: 12.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Personal Account", price: 12.99 },
      { label: "Business Channel", price: 29.99 },
      { label: "Community Group", price: 24.99 },
    ],
    featured: true,
    badge: "Popular",
  },
  {
    id: "whatsapp-business-setup",
    categoryId: "communication",
    name: "WhatsApp Business Setup",
    shortDescription: "WhatsApp Business account configuration for professional use",
    fullDescription:
      "Full WhatsApp Business setup including business profile creation, automated greeting & away messages, quick replies, catalog setup, and label organization for efficient customer management.",
    icon: "whatsapp",
    iconColor: "#25D366",
    accentColor: "green",
    features: [
      "Business profile creation",
      "Automated greeting messages",
      "Away message configuration",
      "Quick replies setup",
      "Product catalog setup",
      "Label & contact organization",
    ],
    requirements: [
      "Business phone number",
      "Business name & description",
      "Business logo/profile image",
    ],
    deliveryTime: "2–4 hours",
    basePrice: 17.99,
    priceLabel: "Starting at",
    featured: false,
    badge: "New",
  },
  {
    id: "discord-server-config",
    categoryId: "communication",
    name: "Discord Server Configuration",
    shortDescription: "Professional Discord server setup with roles, channels, and bots",
    fullDescription:
      "Complete Discord server setup and configuration. We create a professional channel structure, configure roles and permissions, set up moderation bots, verification systems, and community engagement tools.",
    icon: "discord",
    iconColor: "#5865F2",
    accentColor: "purple",
    features: [
      "Server creation & branding",
      "Channel structure setup",
      "Role & permission configuration",
      "Moderation bot setup",
      "Verification system",
      "Welcome & rules channels",
    ],
    requirements: [
      "Discord account",
      "Server purpose & requirements brief",
    ],
    deliveryTime: "3–6 hours",
    basePrice: 24.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Basic Server", price: 24.99 },
      { label: "Community Server", price: 49.99 },
      { label: "Professional/Business", price: 79.99 },
    ],
    featured: true,
    badge: "Hot",
  },

  // ── DEVELOPER ─────────────────────────────────────────────
  {
    id: "github-profile-setup",
    categoryId: "developer",
    name: "GitHub Developer Profile Setup",
    shortDescription: "Professional GitHub profile with README, pinned repos, and bio",
    fullDescription:
      "Create a stunning GitHub developer profile that attracts employers and collaborators. We set up your profile README, configure pinned repositories, craft your bio, and optimize your profile for discoverability.",
    icon: "github",
    iconColor: "#ffffff",
    accentColor: "purple",
    features: [
      "Profile README creation",
      "Bio & skills optimization",
      "Pinned repositories setup",
      "Profile photo guidance",
      "GitHub Pages configuration",
      "Contribution graph optimization",
    ],
    requirements: [
      "GitHub account",
      "Portfolio/project details",
      "Skills and experience info",
    ],
    deliveryTime: "2–5 hours",
    basePrice: 19.99,
    priceLabel: "Starting at",
    featured: true,
    badge: "Popular",
  },
  {
    id: "github-repo-config",
    categoryId: "developer",
    name: "GitHub Repository Configuration",
    shortDescription: "Professional repository setup with README, CI/CD, and documentation",
    fullDescription:
      "Transform your GitHub repository into a professional open-source project. We create comprehensive README files, set up GitHub Actions CI/CD, configure branch protection rules, and add essential documentation.",
    icon: "github",
    iconColor: "#ffffff",
    accentColor: "cyan",
    features: [
      "Professional README creation",
      "GitHub Actions CI/CD setup",
      "Branch protection rules",
      "Issue & PR templates",
      "Contributing guidelines",
      "License & Code of Conduct",
    ],
    requirements: [
      "GitHub repository access",
      "Project description & tech stack",
    ],
    deliveryTime: "3–8 hours",
    basePrice: 29.99,
    priceLabel: "Starting at",
    variants: [
      { label: "README Only", price: 14.99 },
      { label: "Full Repository Setup", price: 29.99 },
      { label: "Enterprise Config", price: 59.99 },
    ],
    featured: false,
  },
  {
    id: "developer-portfolio-setup",
    categoryId: "developer",
    name: "Developer Portfolio Setup",
    shortDescription: "Personal developer portfolio site setup and deployment guidance",
    fullDescription:
      "Complete developer portfolio setup using modern frameworks. We help you choose the right template, configure GitHub Pages or Vercel deployment, optimize for SEO, and structure your projects, skills, and contact sections.",
    icon: "vercel",
    iconColor: "#ffffff",
    accentColor: "purple",
    features: [
      "Portfolio template selection",
      "GitHub Pages / Vercel deployment",
      "Project showcase setup",
      "Skills & experience sections",
      "Contact form integration",
      "SEO optimization",
    ],
    requirements: [
      "GitHub account",
      "Project list & descriptions",
      "Skills & experience details",
    ],
    deliveryTime: "4–10 hours",
    basePrice: 39.99,
    priceLabel: "Starting at",
    featured: false,
    badge: "New",
  },

  // ── ADDITIONAL ────────────────────────────────────────────
  {
    id: "naver-email-setup",
    categoryId: "additional",
    name: "Naver Email Setup",
    shortDescription: "Naver email account creation and configuration for Korean services",
    fullDescription:
      "Professional setup of Naver email accounts for accessing Korean digital services. Includes account creation, security configuration, and guidance on using Naver's integrated ecosystem.",
    icon: "naver",
    iconColor: "#03C75A",
    accentColor: "green",
    features: [
      "Naver account creation",
      "Email configuration",
      "Security settings",
      "Korean service access guidance",
      "Mobile app setup",
      "Recovery options",
    ],
    requirements: [
      "Phone number for verification",
      "Korean phone number may be required",
    ],
    deliveryTime: "2–4 hours",
    basePrice: 14.99,
    priceLabel: "Starting at",
  },
  {
    id: "professional-email-config",
    categoryId: "additional",
    name: "Professional Email Configuration",
    shortDescription: "Custom domain email setup with professional configuration",
    fullDescription:
      "Setup a professional email address using your own domain. Includes DNS configuration, email hosting setup (Google Workspace, Zoho, or similar), signature templates, and email client configuration.",
    icon: "mail",
    iconColor: "#06b6d4",
    accentColor: "cyan",
    features: [
      "Custom domain email setup",
      "DNS record configuration",
      "Email hosting configuration",
      "Professional signature template",
      "Email client setup (Outlook, Gmail)",
      "SPF, DKIM, DMARC configuration",
    ],
    requirements: [
      "Domain name ownership",
      "Domain registrar access",
      "Hosting preference",
    ],
    deliveryTime: "3–6 hours",
    basePrice: 34.99,
    priceLabel: "Starting at",
    variants: [
      { label: "Single Email", price: 34.99 },
      { label: "Team (5 emails)", price: 59.99 },
      { label: "Business (20 emails)", price: 99.99 },
    ],
    featured: true,
    badge: "Hot",
  },
];

// ── Helpers ──────────────────────────────────────────────────
export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.categoryId === categoryId);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function searchServices(query: string): Service[] {
  const q = query.toLowerCase();
  return services.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.fullDescription.toLowerCase().includes(q)
  );
}

// All services marquee list
export const marqueeServices = services.map((s) => ({
  id: s.id,
  name: s.name,
  icon: s.icon,
  iconColor: s.iconColor,
}));
