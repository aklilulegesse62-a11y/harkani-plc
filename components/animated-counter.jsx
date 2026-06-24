"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  className = "",
  valueClassName = "text-white",
  labelClassName = "text-white/65",
  viewAmount = 0.35
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: viewAmount });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || typeof value !== "number") {
      return undefined;
    }

    const duration = 1400;
    const start = window.performance.now();
    let animationFrame = 0;

    setDisplayValue(0);

    const tick = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className={`glass-panel interactive-surface rounded-[1.8rem] px-5 py-5 md:px-7 ${className}`}
    >
      <motion.div
        className={`text-[1.65rem] font-semibold md:text-[2rem] ${valueClassName}`}
        initial={{ opacity: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        {typeof value === "number" ? `${displayValue}${suffix}` : value}
      </motion.div>
      <p className={`mt-2 text-sm leading-6 ${labelClassName}`}>{label}</p>
    </div>
  );
}
