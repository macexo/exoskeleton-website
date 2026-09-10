import React from "react";
import Image from "next/image";

/**
 * The standard interior-page hero.
 *
 * Five pages (team, sponsors, ace2025, ace2026 and the homepage) each hand-built
 * the same full-bleed-image hero, and three more (design, contact, recruiting)
 * hand-built the same image-less one — eight near-identical implementations.
 *
 * Two things are fixed here beyond deduplication:
 *  - The image is rendered through next/image with `priority`, so it is the
 *    preloaded LCP element. Previously these were CSS `backgroundImage` values,
 *    which the browser cannot discover until CSS has parsed.
 *  - The content sits at the bottom-left over a bottom-weighted scrim rather
 *    than dead-centre over faces, and heroes are no longer a full 100vh of
 *    mostly-empty photo.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  children,
  image,
  imageAlt = "",
  /** CSS object-position, e.g. "center 30%" — lets each page frame its own photo. */
  focal = "center",
  actions,
  size = "md",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  focal?: string;
  actions?: React.ReactNode;
  size?: "sm" | "md";
}) {
  const height =
    size === "sm"
      ? "min-h-[46vh] pt-32 pb-14"
      : "min-h-[62vh] pt-36 pb-20 sm:min-h-[68vh]";

  return (
    <header className={`relative isolate flex items-end overflow-hidden bg-jet ${height}`}>
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: focal }}
            className="object-cover"
          />
          {/* Bottom-weighted scrim keeps the headline on dark pixels regardless
              of what the photo is doing behind it. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-jet via-jet/80 to-jet/25"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-jet/85 via-jet/25 to-transparent"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(189,169,104,0.10),transparent_70%)]"
        />
      )}

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-ashGold mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-softWhite text-balance">
            {title}
            {accent && <span className="block text-ashGold">{accent}</span>}
          </h1>
          {children && (
            <div className="mt-5 text-lg text-softWhite/75 max-w-2xl leading-relaxed">
              {children}
            </div>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </header>
  );
}
