import React from "react";
import Reveal from "./Reveal";

type Tone = "jet" | "charcoal" | "gradient";

const TONES: Record<Tone, string> = {
  jet: "bg-jet",
  charcoal: "bg-charcoal",
  gradient: "bg-gradient-to-b from-jet to-charcoal",
};

/**
 * The standard page section.
 *
 * Every section on the old site hand-rolled `relative py-20 bg-jet
 * overflow-hidden` plus a top hairline plus a radial-gradient wash plus a
 * bottom hairline. That block was pasted roughly eighteen times, which is why
 * every section boundary looked identical and the page read as one flat texture.
 *
 * Here the hairline is opt-in (`divider`) so it can be used to mark a genuine
 * break rather than every single seam.
 */
export function Section({
  children,
  tone = "jet",
  divider = false,
  size = "md",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  divider?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}) {
  const pad = { sm: "py-14", md: "py-20 sm:py-24", lg: "py-24 sm:py-32" }[size];

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${TONES[tone]} ${pad} ${className}`}
    >
      {divider && (
        <div
          aria-hidden
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ashGold/30 to-transparent"
        />
      )}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/**
 * The centred section heading. The literal
 * `mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-ashGold to-transparent`
 * appeared thirteen times across the old codebase.
 *
 * `align="left"` exists so not every section has to be centred — the uniform
 * centring was a large part of why the site felt repetitive.
 */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  children,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  /** Trailing words rendered in gold, e.g. title="Our Design" accent="Approach". */
  accent?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "text-center mx-auto" : "text-left"} ${
        centered ? "max-w-3xl" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-ashGold/90 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-softWhite tracking-tight text-balance">
        {title}
        {accent && <span className="text-ashGold"> {accent}</span>}
      </h2>
      <div
        aria-hidden
        className={`mt-5 h-px w-20 bg-gradient-to-r from-ashGold to-transparent ${
          centered ? "mx-auto from-transparent via-ashGold" : ""
        }`}
      />
      {children && (
        <div
          className={`mt-5 text-base sm:text-lg text-softWhite/65 leading-relaxed ${
            centered ? "mx-auto" : "max-w-2xl"
          }`}
        >
          {children}
        </div>
      )}
    </Reveal>
  );
}
