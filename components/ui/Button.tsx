import React from "react";
import Link from "next/link";

/**
 * The one button.
 *
 * The old site declared `.btn-primary`, `.btn-secondary`, `.btn-ghost`,
 * `.btn-lg` and `.btn-sm` in globals.css and then used `.btn-primary` exactly
 * once — immediately overriding its padding, background, colour, weight and
 * radius inline. The hand-rolled gold button appeared nine more times, and on
 * the three recruiting subpages it hovered to `yellow-400` instead of
 * `goldLight`, so gold changed colour depending on which page you were on.
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  // The only element on the site allowed a real glow. Alpha rises with radius,
  // capped at 18% — the ambient washes elsewhere sit near 4%.
  primary: "bg-ashGold text-jet font-bold hover:bg-goldLight shadow-halo",
  secondary:
    "border border-ashGold/45 text-ashGold font-semibold hover:bg-ashGold/10 hover:border-ashGold",
  ghost:
    "border border-hairline/20 text-softWhite font-semibold hover:border-ashGold hover:text-ashGold backdrop-blur-sm",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5",
};

const BASE =
  "inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ashGold";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  /** Rendered after the label, e.g. an arrow. */
  trailing?: React.ReactNode;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  trailing,
}: Props) {
  const cls = `group ${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {children}
      {trailing}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

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
      className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
