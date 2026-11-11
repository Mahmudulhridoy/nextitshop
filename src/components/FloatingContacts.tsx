"use client";

import { siteConfig } from "@/config/site";

// SVG icons for each platform
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2 .773-7.028 2.666-9.081 3.44-.737.28-.984 1.067-.176 1.504.782.423 1.953.83 1.953.83s1.08.347 1.617.52c.537.172.57.588.57.588l1.073 6.723c.128.798 1.11.86 1.514.476l2.268-2.126s.953-.903 1.522-.358l3.284 2.39c.724.52 1.453.315 1.604-.553l2.905-16.12c.236-1.064-.37-1.59-.997-1.876a2.24 2.24 0 0 0-.425-.003Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const contacts = [
  {
    icon: <TelegramIcon />,
    label: "Telegram",
    href: "",
    bgColor: "bg-[#26A5E4]",
    shadowColor: "shadow-[#26A5E4]/40",
    hoverScale: "hover:scale-110",
    getHref: () => siteConfig.contact.telegramUrl,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    href: "",
    bgColor: "bg-[#25D366]",
    shadowColor: "shadow-[#25D366]/40",
    hoverScale: "hover:scale-110",
    getHref: () => siteConfig.contact.whatsappUrl,
  },
  {
    icon: <GmailIcon />,
    label: "Gmail",
    href: "",
    bgColor: "bg-[#EA4335]",
    shadowColor: "shadow-[#EA4335]/40",
    hoverScale: "hover:scale-110",
    getHref: () => siteConfig.contact.gmailUrl,
  },
];

export default function FloatingContacts() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      role="complementary"
      aria-label="Quick contact options"
    >
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.getHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contact via ${c.label}`}
          title={`Contact via ${c.label}`}
          className={`
            group relative w-12 h-12 rounded-2xl ${c.bgColor} 
            flex items-center justify-center text-white
            shadow-lg ${c.shadowColor}
            ${c.hoverScale} hover:rounded-xl
            transition-all duration-300
          `}
        >
          {c.icon}
          {/* Tooltip */}
          <span className="
            absolute right-14 top-1/2 -translate-y-1/2 
            bg-[#0e0e1a] border border-white/10 text-white text-xs font-600 
            px-2.5 py-1 rounded-lg whitespace-nowrap
            opacity-0 group-hover:opacity-100 pointer-events-none
            transition-all duration-200 translate-x-2 group-hover:translate-x-0
          ">
            {c.label}
          </span>
        </a>
      ))}
    </div>
  );
}
