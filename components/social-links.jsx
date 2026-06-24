"use client";

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/harkaniinteriors",
    icon: "telegram"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/harkaniinteriors",
    icon: "facebook"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/harkaniinteriors?igsh=MXM4d2w0cm90cnV3ZQ==",
    icon: "instagram"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@harkaniinteriors?_r=1&_t=ZS-97Pu1r1T5Pg",
    icon: "tiktok"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/harkani-interiors/",
    icon: "linkedin"
  }
];

function SocialIcon({ type }) {
  const commonProps = {
    "aria-hidden": "true",
    className: "h-5 w-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  };

  if (type === "facebook") {
    return (
      <svg {...commonProps}>
        <path d="M14.2 8.1V6.7c0-.7.5-.9 1-.9h1.8V2.7l-2.5-.1c-2.8 0-4.4 1.7-4.4 4.7v.8H7.5v3.5h2.6v9.8h4.1v-9.8h2.8l.5-3.5h-3.3Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...commonProps}>
        <path d="M7.6 2.8h8.8c2.7 0 4.8 2.1 4.8 4.8v8.8c0 2.7-2.1 4.8-4.8 4.8H7.6a4.78 4.78 0 0 1-4.8-4.8V7.6c0-2.7 2.1-4.8 4.8-4.8Zm0 1.8c-1.7 0-3 1.3-3 3v8.8c0 1.7 1.3 3 3 3h8.8c1.7 0 3-1.3 3-3V7.6c0-1.7-1.3-3-3-3H7.6Zm4.4 3.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.6-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg {...commonProps}>
        <path d="M5.1 8.8h3.7v11.7H5.1V8.8Zm1.9-5.7a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm4.2 5.7h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.7v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7h-3.7V8.8Z" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg {...commonProps}>
        <path d="M15.7 2.8c.4 3 2.1 4.8 5 5v3.4a8 8 0 0 1-4.9-1.6v5.8c0 3.7-2.3 6.3-5.8 6.3a5.5 5.5 0 0 1-5.7-5.5c0-3.3 2.7-5.8 6.2-5.5v3.5c-1.6-.2-2.8.6-2.8 2 0 1.2 1 2 2.2 2 1.4 0 2.2-.8 2.2-2.7V2.8h3.6Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M21.7 3.6 18.3 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.7 13.5.8 12c-1.1-.3-1.1-1.1.2-1.6L20.1 3c.9-.3 1.7.2 1.6.6Z" />
    </svg>
  );
}

export default function SocialLinks({ className = "" }) {
  return (
    <div
      aria-label="Harkani Interiors social media links"
      className={["flex flex-wrap gap-3", className].filter(Boolean).join(" ")}
    >
      {socialLinks.map((social) => (
        <a
          key={social.label}
          aria-label={"Open Harkani Interiors on " + social.label}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/78 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#e9c99d]/42 hover:bg-[#e9c99d]/12 hover:text-[#f6dfbd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c99d]"
          href={social.href}
          rel="noreferrer"
          target="_blank"
          title={social.label}
        >
          <SocialIcon type={social.icon} />
        </a>
      ))}
    </div>
  );
}
