"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, to, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = formatNumber(latest, decimals, separator);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix, decimals, separator]);

  const formatNumber = (num: number, decimals: number, separator: string): string => {
    const fixed = num.toFixed(decimals);
    const [whole, decimal] = fixed.split(".");
    const withSeparator = whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimal ? `${withSeparator}.${decimal}` : withSeparator;
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(from, decimals, separator)}{suffix}
    </span>
  );
}
