"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function NavLink({ item, onClick }) {
  const className = "underlined-nav text-sm text-white/72";

  if (item.href.startsWith("/")) {
    return (
      <Link className={className} href={item.href} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a className={className} href={item.href} onClick={onClick}>
      {item.label}
    </a>
  );
}

export default function SiteHeader({ links, homeHref = "/" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "px-2 pt-2 md:px-4" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center rounded-full px-4 py-3 transition-all duration-300 md:px-7 ${
          isScrolled ? "glass-panel border border-white/10" : "border border-transparent bg-transparent"
        }`}
      >
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {links.slice(0, 3).map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex w-full items-center justify-between lg:w-auto lg:justify-center">
          <div className="w-10 lg:hidden" />
          <Link
            className="brand-wordmark absolute left-1/2 -translate-x-1/2 text-center text-xl text-white"
            href={homeHref}
          >
            Harkani.Plc
          </Link>
          <button
            aria-label="Toggle navigation"
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          {links.slice(3).map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-2 mt-3 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 backdrop-blur-2xl lg:hidden"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <NavLink key={item.label} item={item} onClick={() => setIsMenuOpen(false)} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
