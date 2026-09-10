"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Direction the content travels in from. */
  from?: "up" | "left" | "right" | "none";
  /** Stagger in ms. Any value is safe here — this is inline style, not a Tailwind class. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * One scroll-reveal for the whole site.
 *
 * This replaces ten hand-copied IntersectionObserver blocks that lived inside
 * About, Competition, YouTube, PoweredBy, TeamLeads, ArchivedTeam, Faculty,
 * Sponsors, ace2025 and ace2026 — each of which forced its host component to
 * be a client component purely to run a fade-in.
 *
 * Delays are applied as inline styles rather than `delay-*` classes on purpose:
 * the previous code used `delay-400`, `delay-600` and `delay-900`, none of which
 * exist in Tailwind's transition-delay scale, so 22 staggered reveals silently
 * fired early.
 */
export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect the user's motion preference: skip straight to the final state.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    none: "opacity-0",
  }[from];

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        shown ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
