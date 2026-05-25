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
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,201,157,0.18),rgba(88,129,255,0.12),transparent_72%)] blur-[85px] transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 1 : 0
        }}
      />
      <div
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_68%)] blur-2xl transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 0.9 : 0
        }}
      />
      <div
        className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          opacity: isActive ? 0.9 : 0
        }}
      />
    </div>
  );
}
