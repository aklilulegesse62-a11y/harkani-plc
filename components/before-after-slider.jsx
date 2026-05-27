"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BeforeAfterSlider({
  beforeImage = `${assetBasePath}/images/client/before.jpg`,
  afterImage = `${assetBasePath}/images/client/after.jpg`,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 54,
  accentColor = "#e9c99d",
  className = "",
  ariaLabel = "Compare project transformation",
  title,
  description
}) {
  const [position, setPosition] = useState(initialPosition);

  return (
    <div className={`glass-panel interactive-surface rounded-[2rem] p-4 md:p-6 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
        <div
          className="h-[420px] bg-cover bg-center md:h-[540px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.26), rgba(0,0,0,0.66)), url(${beforeImage})`,
            filter: "grayscale(1) brightness(0.7)"
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`
          }}
        >
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.16), rgba(0,0,0,0.58)), url(${afterImage})`
            }}
          />
        </div>

        <motion.div
          className="absolute inset-y-0 w-px bg-white/85"
          animate={{ left: `${position}%` }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 backdrop-blur-md">
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
        </motion.div>

        <div className="absolute left-4 top-4 rounded-full bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/75 backdrop-blur-md">
          {beforeLabel}
        </div>
        <div
          className="absolute right-4 top-4 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#130d08]"
          style={{ backgroundColor: accentColor }}
        >
          {afterLabel}
        </div>
      </div>

      <div className="mt-5 px-2">
        <input
          aria-label={ariaLabel}
          className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-white/10"
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.target.value))}
          style={{ accentColor }}
          type="range"
          value={position}
        />
      </div>

      {title || description ? (
        <div className="mt-5 px-2">
          {title ? <h3 className="text-xl font-semibold text-white">{title}</h3> : null}
          {description ? <p className="mt-2 text-sm leading-7 text-white/66">{description}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
