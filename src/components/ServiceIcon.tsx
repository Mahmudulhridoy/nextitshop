import React from "react";

interface ServiceIconProps {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
}

export default function ServiceIcon({
  icon,
  color,
  size = 24,
  className = "",
}: ServiceIconProps) {
  const normIcon = icon.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Render authentic SVG vector logos directly
  switch (normIcon) {
    case "gmail":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      );

    case "googlevoice":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#34A853" />
          <path
            d="M6.5 9.5c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1-7.7 0-14-6.3-14-14 0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.5 9.5z"
            fill="white"
          />
        </svg>
      );

    case "yahoo":
    case "yahoomail":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#6001D2" />
          <path
            d="M13.4 12.8L17.5 5h-2.6l-2.7 5.7L9.4 5H6.8l4.2 8v6h2.4v-6.2zM18.8 17.5c0 .8-.6 1.5-1.5 1.5s-1.5-.7-1.5-1.5.6-1.5 1.5-1.5 1.5.7 1.5 1.5z"
            fill="white"
          />
        </svg>
      );

    case "microsoftoutlook":
    case "hotmail":
    case "outlook":
    case "edumail":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#0078D4" />
          <path
            d="M5 8.5L12 13l7-4.5v8c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-8z"
            fill="#ffffff"
            fillOpacity="0.85"
          />
          <path
            d="M19 7c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1l7 4.5L19 7z"
            fill="#ffffff"
          />
        </svg>
      );

    case "naver":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#03C75A" />
          <path d="M7 6h3.4l3.8 5.7V6H17v12h-3.4L9.8 12.3V18H7V6z" fill="white" />
        </svg>
      );

    case "telegram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#26A5E4" className={className}>
          <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2 .773-7.028 2.666-9.081 3.44-.737.28-.984 1.067-.176 1.504.782.423 1.953.83 1.953.83s1.08.347 1.617.52c.537.172.57.588.57.588l1.073 6.723c.128.798 1.11.86 1.514.476l2.268-2.126s.953-.903 1.522-.358l3.284 2.39c.724.52 1.453.315 1.604-.553l2.905-16.12c.236-1.064-.37-1.59-.997-1.876a2.24 2.24 0 0 0-.425-.003Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" className={className}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      );

    case "discord":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#5865F2" className={className}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );

    case "x":
    case "twitter":
    case "twitterx":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2" className={className}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );

    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#E4405F" />
          <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.8" />
          <path
            d="M9 4.5h6A4.5 4.5 0 0 1 19.5 9v6a4.5 4.5 0 0 1-4.5 4.5H9A4.5 4.5 0 0 1 4.5 15V9A4.5 4.5 0 0 1 9 4.5z"
            stroke="white"
            strokeWidth="1.8"
          />
          <circle cx="16.5" cy="7.5" r="1" fill="white" />
        </svg>
      );

    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            d="M6.5 9.5H9V18H6.5V9.5zm1.25-4c.8 0 1.45.65 1.45 1.45 0 .8-.65 1.45-1.45 1.45S6.3 7.75 6.3 6.95c0-.8.65-1.45 1.45-1.45zM10.8 9.5h2.4v1.2h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.83V18h-2.5v-3.95c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08V18h-2.48V9.5z"
            fill="white"
          />
        </svg>
      );

    case "snapchat":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#FFFC00" />
          <path
            d="M12 5.5c-2.3 0-3.5 1.5-3.5 3.2 0 .8.3 1.6.4 2-.4.1-.9.4-1 .8-.1.4.2.8.5.9-.2.8-.7 1.4-1.4 1.6-.3.1-.4.4-.2.6.5.7 1.5.8 2.2.5.5.9 1.5 1.4 3 1.4s2.5-.5 3-1.4c.7.3 1.7.2 2.2-.5.2-.2.1-.5-.2-.6-.7-.2-1.2-.8-1.4-1.6.3-.1.6-.5.5-.9-.1-.4-.6-.7-1-.8.1-.4.4-1.2.4-2 0-1.7-1.2-3.2-3.5-3.2z"
            fill="black"
          />
        </svg>
      );

    case "reddit":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#FF4500" />
          <circle cx="12" cy="13" r="5" fill="white" />
          <circle cx="9.5" cy="12.5" r="1.1" fill="#FF4500" />
          <circle cx="14.5" cy="12.5" r="1.1" fill="#FF4500" />
          <path d="M10 15c.6.6 1.4.9 2 .9s1.4-.3 2-.9" stroke="#FF4500" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="13" r="1.4" fill="white" />
          <circle cx="18" cy="13" r="1.4" fill="white" />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    default:
      return (
        <div
          className={`flex items-center justify-center rounded-lg font-black text-white ${className}`}
          style={{ width: size, height: size, background: color || "#06b6d4", fontSize: size * 0.4 }}
        >
          {icon.charAt(0).toUpperCase()}
        </div>
      );
  }
}
