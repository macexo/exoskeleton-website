"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SUIT_PARTS, OWNER_STYLES } from "@/data/suitParts";

/**
 * An annotated, interactive view of the actual suit.
 *
 * Across roughly 75 student engineering team sites surveyed — Formula Student,
 * solar, rocketry, robotics, exoskeleton — not one publishes an interactive or
 * exploded diagram of the machine they build. Every one of them shows a photo
 * gallery and prose. This is the cheapest way for the team to be the only one
 * in the field doing something, and it uses photography they already have.
 *
 * Accessibility and robustness:
 *  - Hotspots are real <button>s, so they are tabbable and operable by keyboard.
 *  - The full part list is rendered as text alongside the diagram, so the
 *    content is readable without JavaScript, by screen readers, and by crawlers.
 *  - Markers are positioned as percentages of the photo's natural 3:4 frame, so
 *    the image must render un-cropped for them to line up.
 */
export default function SuitExplorer() {
  const [activeId, setActiveId] = useState(SUIT_PARTS[0].id);
  const active = SUIT_PARTS.find((p) => p.id === activeId) ?? SUIT_PARTS[0];

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
      {/* Diagram */}
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-hairline/10 bg-charcoal">
          <Image
            src="/ace_2025/full_suit_image.png"
            alt="The McMaster Exoskeleton suit worn by a pilot, annotated with its major subsystems."
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          {/* Darken the photo slightly so gold markers stay legible on it. */}
          <div aria-hidden className="absolute inset-0 bg-jet/25" />

          {SUIT_PARTS.map((part, i) => {
            const isActive = part.id === active.id;
            return (
              <button
                key={part.id}
                type="button"
                onClick={() => setActiveId(part.id)}
                onMouseEnter={() => setActiveId(part.id)}
                onFocus={() => setActiveId(part.id)}
                aria-pressed={isActive}
                style={{ left: `${part.x}%`, top: `${part.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                aria-label={`${part.name} — ${part.owner}`}
              >
                {/* Pulse ring on the active marker. */}
                <span
                  aria-hidden
                  className={`absolute inset-0 -m-2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-ashGold/70 scale-125 opacity-100"
                      : "border-transparent scale-100 opacity-0"
                  }`}
                />
                <span
                  className={`relative grid h-7 w-7 place-items-center rounded-full font-mono text-[11px] font-semibold tabular-nums transition-all duration-300 ${
                    isActive
                      ? "bg-ashGold text-jet shadow-[0_0_0_4px_rgba(189,169,104,0.25)] scale-110"
                      : "bg-jet/85 text-softWhite/90 ring-1 ring-hairline/30 backdrop-blur-sm group-hover:ring-ashGold/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active-part readout, pinned under the image on small screens. */}
        <div
          className="mt-4 card p-5 lg:hidden"
          aria-live="polite"
        >
          <p className={`font-mono text-[11px] uppercase tracking-[0.12em] ${OWNER_STYLES[active.owner]}`}>
            {active.owner}
          </p>
          <p className="mt-1.5 font-semibold text-softWhite">{active.name}</p>
          <p className="mt-1.5 text-sm text-softWhite/65 leading-relaxed">
            {active.detail}
          </p>
        </div>
      </div>

      {/* Part list — also the no-JS and screen-reader path. */}
      <ul className="space-y-2">
        {SUIT_PARTS.map((part, i) => {
          const isActive = part.id === active.id;
          return (
            <li key={part.id}>
              <button
                type="button"
                onClick={() => setActiveId(part.id)}
                onMouseEnter={() => setActiveId(part.id)}
                onFocus={() => setActiveId(part.id)}
                aria-pressed={isActive}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-300 ${
                  isActive
                    ? "border-ashGold/50 bg-hairline/[0.065]"
                    : "border-hairline/10 bg-hairline/[0.035] hover:border-hairline/25"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[10px] font-semibold tabular-nums transition-colors ${
                      isActive
                        ? "bg-ashGold text-jet"
                        : "bg-hairline/10 text-softWhite/70"
                    }`}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-softWhite">
                    {part.name}
                  </span>
                  <span
                    className={`ml-auto font-mono text-[10px] uppercase tracking-[0.12em] ${OWNER_STYLES[part.owner]}`}
                  >
                    {part.owner}
                  </span>
                </span>
                {/* Detail stays in the DOM for every part so it is always
                    readable without JS; only the visual collapse is conditional. */}
                <span
                  className={`block overflow-hidden text-sm text-softWhite/65 leading-relaxed transition-all duration-300 ${
                    isActive ? "mt-2.5 max-h-40 opacity-100" : "max-h-0 opacity-0 lg:opacity-0"
                  }`}
                >
                  {part.detail}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
