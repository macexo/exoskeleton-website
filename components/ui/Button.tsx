import React from "react";

/**
 * Shared iconography.
 *
 * This file also exported a `Button` component. Every live call site styles its
 * own anchors with the semantic `.home-button` / `.home-text-link` classes, so
 * the component was only ever imported by the five components that are now
 * deleted. The arrow is the part that is genuinely shared — 19 call sites.
 */

/** The rightward arrow used on most CTAs, extracted so it is drawn one way. */
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      // The slide lives in CSS on .home-button / .home-text-link / .directory-arrow.
      // It used to be `group-hover:translate-x-1`, which requires an ancestor
      // carrying Tailwind's `group` class — no element on the site has one, so
      // every arrow on the site sat still.
      className={`nav-arrow ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
