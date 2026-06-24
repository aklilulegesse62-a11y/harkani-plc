"use client";

import { animate, motion, useInView } from "framer-motion";
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

    setDisplayValue(0);

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      }
    });

    return () => controls.stop();
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
