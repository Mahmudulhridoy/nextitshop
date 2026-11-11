import { Product, products } from "@/config/catalog";

export type ProductDetail = {
  productId: string;
  rating: number;
  reviewsCount: number;
  overview: string;
  specs: {
    creationIp: string;
    verification: string;
    accessProtocol: string;
    recoveryEmail: string;
    deliveryEta: string;
    warranty: string;
  };
  features: string[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; role: string; text: string; rating: number; initials: string }[];
};

export const productDetailsMap: Record<string, ProductDetail> = {
  gmail: {
    productId: "gmail",
    rating: 4.9,
    reviewsCount: 380,
    overview:
      "Enterprise-grade Gmail accounts verified on residential mobile carriers with authentic device fingerprints. Perfect for high-volume cold email outreach, Google Workspace setups, developer tooling, and API integrations. Each account includes clean SMTP/IMAP access, dedicated recovery email, and zero spam-trap history.",
    specs: {
      creationIp: "Clean Residential IP",
      verification: "Real Mobile SIM",
      accessProtocol: "POP3 / IMAP / Webmail",
      recoveryEmail: "Included & Configured",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Residential IP Registration",
      "Full IMAP / SMTP Credentials",
      "POP3 Forwarding Enabled",
      "Clean Inbox History (Never Flagged)",
      "Dedicated Recovery Mail Access",
      "Compatible with All Cold Email Tools",
      "Google 2FA Secret Key Included",
      "Zero Warmup Penalty on Creation",
    ],
    faqs: [
      {
        q: "Are these Gmail accounts phone-verified with real SIMs?",
        a: "Yes. Every Gmail account is registered through physical carrier SIM cards, ensuring they withstand Google's automated security sweeps.",
      },
      {
        q: "Can I connect them to Lemlist, Instantly, or Smartlead?",
        a: "Absolutely. All accounts support custom App Passwords and direct SMTP/IMAP connections for seamless integration into outreach tools.",
      },
      {
        q: "What is the replacement policy?",
        a: "We offer a 7-day free replacement guarantee for any account that encounters login issues upon initial delivery.",
      },
    ],
    reviews: [
      {
        name: "Marcus T.",
        role: "Email Marketing Agency Founder",
        text: "Ordered 100 aged Gmail accounts for client outreach. Delivered in Telegram in under 3 minutes. Clean IPs and 100% login success rate.",
        rating: 5,
        initials: "MT",
      },
      {
        name: "David K.",
        role: "SaaS Growth Specialist",
        text: "The 1+ year aged PVA accounts have insane deliverability. Connected them to Instantly and warming has been flawless for 3 weeks.",
        rating: 5,
        initials: "DK",
      },
    ],
  },
  "google-voice": {
    productId: "google-voice",
    rating: 4.9,
    reviewsCount: 295,
    overview:
      "Dedicated US phone numbers linked to verified Gmail accounts. Permanent US presence for OTP verification, WhatsApp registration, Telegram authorization, and business calling. Includes direct call and SMS forwarding to your device.",
    specs: {
      creationIp: "USA Residential IP",
      verification: "US Physical Carrier",
      accessProtocol: "Voice Web / Android / iOS",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Permanent US Area Code Number",
      "SMS & Call Forwarding Capable",
      "Linked Gmail Credentials Included",
      "Receive 2FA Codes from Banking & Social",
      "Free Calling & Texting to US/Canada",
      "Compatible with Desktop & Mobile Voice Apps",
    ],
    faqs: [
      {
        q: "Can I use Google Voice to receive WhatsApp and Telegram verification codes?",
        a: "Yes, our aged and standard Google Voice accounts are fully compatible with major social and messaging apps.",
      },
      {
        q: "Do I need a US VPN to log in?",
        a: "While a US IP is recommended for optimal longevity, once logged in the voice forwarding works globally without restrictions.",
      },
    ],
    reviews: [
      {
        name: "Alex V.",
        role: "Affiliate Marketer",
        text: "The aged 60+ days Google Voice numbers are bulletproof. Verified 4 separate platforms without any carrier flags.",
        rating: 5,
        initials: "AV",
      },
    ],
  },
  "edu-mail": {
    productId: "edu-mail",
    rating: 4.8,
    reviewsCount: 210,
    overview:
      "Legitimate university student email accounts (.edu) with active webmail access. Unlocks the GitHub Student Developer Pack ($200k+ in perks), Amazon Prime Student, Spotify 50% discount, Notion AI, JetBrains licenses, and Microsoft Office 365.",
    specs: {
      creationIp: "US University Network",
      verification: "Academic Domain Active",
      accessProtocol: "Outlook / Gmail Webmail",
      recoveryEmail: "Student Portal Credentials",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "GitHub Student Developer Pack Eligible",
      "Free JetBrains All Products License",
      "Amazon Prime Student (6 Months Free)",
      "Microsoft 365 Education Access",
      "Notion Plus with Unlimited AI",
      "Full Webmail & Portal Login",
    ],
    faqs: [
      {
        q: "How long does the .edu email remain active?",
        a: "All accounts are guaranteed active for at least 1-2 academic years with webmail portal access.",
      },
      {
        q: "Can I claim the GitHub Student Pack immediately?",
        a: "Yes, you receive the direct school portal link and email to complete verification instantly.",
      },
    ],
    reviews: [
      {
        name: "Rohan P.",
        role: "Computer Science Student",
        text: "Got the Ivy League tier account. Claimed GitHub Copilot, JetBrains PyCharm, and DigitalOcean credits in less than 10 minutes.",
        rating: 5,
        initials: "RP",
      },
    ],
  },
  snapchat: {
    productId: "snapchat",
    rating: 4.9,
    reviewsCount: 184,
    overview:
      "Aged and phone-verified Snapchat accounts with complete avatars, verified email, and clean device footprints. High-score variations (1000+ score) allow immediate friend requests and community outreach without algorithmic shadowbanning.",
    specs: {
      creationIp: "Residential Mobile Proxy",
      verification: "Real SIM Verified",
      accessProtocol: "Mobile App Login",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Physical SIM Carrier Registration",
      "Aged & Warmed Device Fingerprint",
      "High Snap Score Tiers Available",
      "Pre-configured Bitmoji & Profile",
      "No Captcha or Quick-Lock Issues",
      "Ready for Organic Marketing & Ads",
    ],
    faqs: [
      {
        q: "What format are the credentials delivered in?",
        a: "Format is Username : Password : Email : Recovery details delivered straight to your chat.",
      },
      {
        q: "Are these accounts safe from instant ban?",
        a: "Yes, accounts are created on residential 4G/5G mobile carriers and rested before delivery.",
      },
    ],
    reviews: [
      {
        name: "Sofia L.",
        role: "Traffic Arbitrageur",
        text: "The 1000+ score accounts work seamlessly for story promotions. Will be ordering bulk weekly.",
        rating: 5,
        initials: "SL",
      },
    ],
  },
  telegram: {
    productId: "telegram",
    rating: 5.0,
    reviewsCount: 520,
    overview:
      "Premium Telegram accounts supplied in TData (Telegram Desktop folder) and Session + JSON API formats. Sourced from physical SIM carriers with 2FA password keys included. Ready for desktop portable clients and automated Telethon/Pyrogram scripts.",
    specs: {
      creationIp: "Tier-1 Carrier SIM",
      verification: "SMS Real SIM",
      accessProtocol: "TData (.zip) / Session+JSON",
      recoveryEmail: "2FA Password Attached",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "TData Folder for 1-Click Desktop Login",
      "Session + JSON File for Python Automation",
      "Pre-configured 2FA Secret Key",
      "Aged 30+ Days & 1 Year+ Stock",
      "Zero Spam-Block Standing",
      "Channel & Supergroup Administrator Capable",
    ],
    faqs: [
      {
        q: "How do I log into TData?",
        a: "Unzip the tdata folder into your Telegram Desktop directory and launch. No SMS code required.",
      },
      {
        q: "Can I use Telethon with the session file?",
        a: "Yes, our Session+JSON files contain app_id, app_hash, and session string formatted for Telethon/Pyrogram.",
      },
    ],
    reviews: [
      {
        name: "Elena B.",
        role: "Bot Developer & Marketer",
        text: "Best TData seller on the web. None of the batches received flood wait or spam blocks. Fast delivery.",
        rating: 5,
        initials: "EB",
      },
    ],
  },
  whatsapp: {
    productId: "whatsapp",
    rating: 4.9,
    reviewsCount: 310,
    overview:
      "Enterprise WhatsApp accounts provided as Hash authentication strings and real SIM-registered numbers. Capable of channel broadcasting, group moderation, and high-throughput messaging via WhatsApp business APIs.",
    specs: {
      creationIp: "Physical SIM Carrier",
      verification: "SMS Real Device",
      accessProtocol: "6-Digit Hash / Web / Mobile",
      recoveryEmail: "Carrier Metadata",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Real SIM Registered (Never Virtual VoIP)",
      "Channel & Community Capable",
      "Anti-Ban Warming Protocols",
      "API & Automation Ready Hash Files",
      "High Daily Outbound Limit",
    ],
    faqs: [
      {
        q: "What is a WhatsApp Hash file?",
        a: "It is an authentication token allowing API tools and software to run WhatsApp sessions without scanning QR codes.",
      },
    ],
    reviews: [
      {
        name: "Tariq M.",
        role: "Customer Support Director",
        text: "The real SIM 90+ days accounts are rock solid for our WhatsApp customer dispatch bot.",
        rating: 5,
        initials: "TM",
      },
    ],
  },
  "twitter-x": {
    productId: "twitter-x",
    rating: 4.8,
    reviewsCount: 270,
    overview:
      "Aged Twitter / X accounts with clean follower profiles, authentic posts, and permanent mobile phone verification. Resistant to algorithm shadowbans and ready for crypto marketing, web3 community management, and brand outreach.",
    specs: {
      creationIp: "Residential IP Proxy",
      verification: "Real Mobile Phone",
      accessProtocol: "Web & Official App",
      recoveryEmail: "Included & Linked",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Real Phone Number Linked & Verified",
      "Aged 30+ Days and 1 Year+ Variations",
      "Warm Algorithm standing (Clean Shadowban check)",
      "Avatars and Bios Pre-configured",
      "API & 2FA Secret Key Included",
    ],
    faqs: [
      {
        q: "Are the X accounts shadowbanned?",
        a: "No. Every account is checked via Shadowban test before listing and rested on clean IPs.",
      },
    ],
    reviews: [
      {
        name: "Kevin S.",
        role: "Web3 Community Lead",
        text: "Aged 1 Year+ accounts are worth every penny. Never had a single phone lockout during our token launch.",
        rating: 5,
        initials: "KS",
      },
    ],
  },
  facebook: {
    productId: "facebook",
    rating: 4.9,
    reviewsCount: 290,
    overview:
      "Aged Facebook personal accounts equipped with 2FA secret keys, cookie session files (JSON), and Marketplace/Ads Manager access. Built to withstand Facebook's checkpoint algorithms for media buyers and advertisers.",
    specs: {
      creationIp: "Residential USA / EU IP",
      verification: "SMS + 2FA Authentication",
      accessProtocol: "Cookies (JSON) + User/Pass",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Marketplace & Business Manager Enabled",
      "Full Cookie Session (.JSON) for Antidetect Browsers",
      "2FA Secret Key Included for Instant Login",
      "Aged 60+ Days with Active Activity History",
      "High Daily Ad Spend Limit Potential",
    ],
    faqs: [
      {
        q: "How should I log into Facebook accounts?",
        a: "Import the provided cookies into an antidetect browser (e.g. AdsPower, Dolphin, Multilogin) with a residential proxy matching the account location.",
      },
    ],
    reviews: [
      {
        name: "Dmitry N.",
        role: "Facebook Media Buyer",
        text: "Top tier Facebook PVA. The Marketplace + Ads ready accounts bonded straight to our Business Manager without checkpoint issues.",
        rating: 5,
        initials: "DN",
      },
    ],
  },
  github: {
    productId: "github",
    rating: 4.9,
    reviewsCount: 195,
    overview:
      "Developer-ready GitHub accounts with active commit histories, green contribution graphs, and clean repository backgrounds. Sourced with full 2FA recovery credentials, ideal for open-source contributions and automation.",
    specs: {
      creationIp: "Developer Clean IP",
      verification: "Email + 2FA Recovery",
      accessProtocol: "Web + SSH + Git CLI",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Green Commit Heatmap on Profile",
      "No Bot Flagging or Repository Restrictions",
      "SSH Keys & Personal Access Tokens (PAT) Ready",
      "2FA Recovery Codes Included",
      "GitHub Copilot & Actions Capable",
    ],
    faqs: [
      {
        q: "Can I use Git CLI and SSH keys immediately?",
        a: "Yes, you have full administrative control to add your own SSH keys and configure tokens.",
      },
    ],
    reviews: [
      {
        name: "Samuel O.",
        role: "Full-Stack Engineer",
        text: "The 1 year aged commit profile looks completely organic. Seamless for our client repository handovers.",
        rating: 5,
        initials: "SO",
      },
    ],
  },
  "github-student-pack": {
    productId: "github-student-pack",
    rating: 5.0,
    reviewsCount: 340,
    overview:
      "Pre-verified GitHub Student Developer Pack accounts. Instant activation of $200k+ in developer perks including GitHub Copilot, JetBrains All Products, DigitalOcean cloud vouchers, Namecheap domains, and Canva Pro.",
    specs: {
      creationIp: "Accredited University Network",
      verification: "GitHub Student Verified",
      accessProtocol: "GitHub Login + University Mail",
      recoveryEmail: "Full School Webmail Login",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "GitHub Copilot Free Access",
      "JetBrains All Products License (IntelliJ, PyCharm, etc.)",
      "$200 DigitalOcean & Azure Cloud Credits",
      "Free .me Domain + SSL Certificate",
      "Termius, Datadog, Bootstrap Studio Included",
    ],
    faqs: [
      {
        q: "Is the student pack already approved?",
        a: "Yes! The badge is already verified on the profile. You can claim developer licenses immediately.",
      },
    ],
    reviews: [
      {
        name: "Liam W.",
        role: "Startup Founder",
        text: "The 5-pack bundle saved our startup thousands in developer tooling and cloud servers. Highly recommended.",
        rating: 5,
        initials: "LW",
      },
    ],
  },
  naver: {
    productId: "naver",
    rating: 4.8,
    reviewsCount: 125,
    overview:
      "100% safe South Korean Naver portal accounts. Verified with legitimate Korean phone numbers. Unlocks full access to Naver Cafe, Naver Blog, Naver Pay, and Korean gaming platforms without identity blockage.",
    specs: {
      creationIp: "Korean Residential IP",
      verification: "Korean Mobile Phone Verified",
      accessProtocol: "Naver Web & Mobile App",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: [
      "Korean Real Phone Verification",
      "Naver Cafe Writing Permissions Enabled",
      "Naver Blog & Web Services Accessible",
      "Clean IP Footprint",
      "Full Recovery Credentials Provided",
    ],
    faqs: [
      {
        q: "Can I post in Naver Cafes immediately?",
        a: "Yes, our number-verified Naver accounts have complete standard permissions to participate in Korean community cafes.",
      },
    ],
    reviews: [
      {
        name: "Min-ho J.",
        role: "K-Market Researcher",
        text: "Hard to find working Naver accounts, but nextITshop delivered in minutes. Works on all domestic cafes.",
        rating: 5,
        initials: "MJ",
      },
    ],
  },
};

export function getProductDetail(id: string): ProductDetail {
  if (productDetailsMap[id]) return productDetailsMap[id];

  // Fallback generator for other products
  const product = products.find((p) => p.id === id);
  return {
    productId: id,
    rating: 4.9,
    reviewsCount: 150,
    overview: `Premium verified ${product?.name || "accounts"} engineered for institutional reliability. Created on residential IP proxies with genuine verification credentials, full warranty, and instant delivery.`,
    specs: {
      creationIp: "Residential IP Proxy",
      verification: "Real Mobile Phone / SIM",
      accessProtocol: product?.format || "Web & API Access",
      recoveryEmail: "Included",
      deliveryEta: "~120 Seconds",
      warranty: "7-Day Replacement",
    },
    features: product?.highlights || [
      "Phone Verified & Clean Standing",
      "Residential Network Creation",
      "Full Replacement Warranty",
      "Instant Delivery via Telegram & WhatsApp",
    ],
    faqs: [
      {
        q: "What format are the credentials delivered in?",
        a: `Delivered formatted as ${product?.format || "Username : Password : Recovery"} directly to your chat.`,
      },
      {
        q: "What is your replacement warranty?",
        a: "All accounts include a 7-day replacement guarantee against initial login failures.",
      },
    ],
    reviews: [
      {
        name: "Alex M.",
        role: "Verified Buyer",
        text: "Accounts worked right out of the box with zero flags. Support was fast on Telegram.",
        rating: 5,
        initials: "AM",
      },
    ],
  };
}
