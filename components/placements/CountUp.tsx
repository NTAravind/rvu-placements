"use client";

import { useEffect, useRef, useState } from "react";

function format(n: number, target: number) {
  if (Number.isInteger(target)) {
    return Math.round(n).toLocaleString("en-IN");
  }
  return n.toFixed(1);
}

/**
 * Count-up number. Starts from 0 and eases to `value` once the element enters
 * the viewport. Robust against observers that never fire:
 *  - starts immediately if the element is already on screen at mount,
 *  - snaps straight to the value under `prefers-reduced-motion`,
 *  - has a time-based fail-safe so the real number is always shown.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(raf);
    }

    const animate = () => {
      if (animated.current) return;
      animated.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(value * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const rect = node.getBoundingClientRect();
    const inView =
      rect.top <= window.innerHeight * 1.05 && rect.bottom >= 0 && rect.height > 0;

    if (!("IntersectionObserver" in window) || inView) {
      // Double-rAF so the initial "0" paints once and the count-up stays visible.
      const raf = requestAnimationFrame(() => requestAnimationFrame(animate));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.disconnect();
          }
        }),
      { threshold: 0 }
    );
    io.observe(node);

    // Fail-safe: force the final value if the observer never fires
    // (hidden ancestor, throttled tab, etc.).
    const failsafe = window.setTimeout(animate, Math.max(duration, 3200));

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [value, duration]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${format(value, value)}${suffix}`}
    >
      {prefix}
      {format(display, value)}
      {suffix}
    </span>
  );
}