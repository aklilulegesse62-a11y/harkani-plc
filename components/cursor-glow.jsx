"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const handleMove = (event) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
        setIsActive(true);
      });
    };

    const handleLeave = () => setIsActive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,193,138,0.12),rgba(216,193,138,0.045),transparent_72%)] blur-[96px] transition-opacity duration-500"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 1 : 0
        }}
      />
      <div
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(241,234,220,0.08),transparent_68%)] blur-2xl transition-opacity duration-500"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 0.9 : 0
        }}
      />
      <div
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 border border-[#d8c18a]/18 bg-black/10 backdrop-blur-md transition-opacity duration-500"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 0.9 : 0
        }}
      />
    </div>
  );
}
