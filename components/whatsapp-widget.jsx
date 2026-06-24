"use client";

import { useState } from "react";

const whatsappMessage =
  "Hello, I found your website and would like to learn more about your services.";
const whatsappHref = `https://wa.me/251951108127?text=${encodeURIComponent(whatsappMessage)}`;

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.02 3.2A12.74 12.74 0 0 0 5.08 22.45L3.5 28.8l6.5-1.52A12.74 12.74 0 1 0 16.02 3.2Zm0 23.12c-2.05 0-4.05-.6-5.75-1.74l-.42-.28-3.35.78.8-3.25-.3-.44a10.3 10.3 0 1 1 9.02 4.93Zm5.86-7.72c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.7.16-.21.32-.81 1.04-.99 1.25-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.7-1.69-.96-2.32-.25-.61-.51-.52-.7-.53h-.6c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.22 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.25 1.47.21 2.03.13.62-.09 1.88-.77 2.14-1.51.27-.75.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`whatsapp-widget ${isOpen ? "is-open" : ""}`}>
      <div
        aria-hidden={!isOpen}
        className="whatsapp-card"
      >
        <button
          aria-label="Close WhatsApp chat card"
          className="whatsapp-close"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="whatsapp-card-icon">
          <WhatsAppIcon className="h-6 w-6" />
        </div>

        <div>
          <h2>Chat With Us</h2>
          <p>We're here to help. Send us a message on WhatsApp.</p>
        </div>

        <a
          aria-label="Start a WhatsApp chat with Harkani PLC"
          className="whatsapp-start"
          href={whatsappHref}
          rel="noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Start Chat
        </a>
      </div>

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close WhatsApp chat card" : "Open WhatsApp chat card"}
        className="whatsapp-fab"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
