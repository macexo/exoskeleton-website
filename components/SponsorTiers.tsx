import React from "react";
import { TIERS, TIER_BENEFITS } from "@/data/sponsorship";
import Reveal from "./ui/Reveal";

const TIER_ACCENT = {
  bronze: "text-orange-300/90",
  silver: "text-slate-300",
  gold: "text-ashGold",
} as const;

const TIER_RING = {
  bronze: "ring-orange-300/20",
  silver: "ring-slate-300/20",
  gold: "ring-ashGold/40",
} as const;

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 mx-auto"
      role="img"
      aria-label="Included"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Value({ value }: { value: string | boolean }) {
  if (value === true) return <Check />;
  if (value === false)
    return (
      <span className="text-softWhite/25" aria-label="Not included">
        —
      </span>
    );
  return <span>{value}</span>;
}

/**
 * The sponsorship benefits matrix.
 *
 * This information existed only on page 6 of a 5.9 MB PDF, behind a download.
 * A prospective sponsor could not find out what a tier cost or included without
 * committing to that download, which is a hard stop for the site's single
 * highest-value audience.
 *
 * Rendered twice: as a real <table> on desktop (correct semantics for a
 * comparison matrix, and screen-reader navigable) and as per-tier cards on
 * mobile, where a 4-column table is unreadable.
 */
export default function SponsorTiers() {
  return (
    <>
      {/* Desktop */}
      <Reveal className="hidden md:block overflow-hidden rounded-2xl border border-hairline/10">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            Sponsorship tiers and the benefits included at each level
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[28%] bg-hairline/[0.035] px-5 py-5 text-left align-bottom font-mono text-xs font-medium uppercase tracking-wider text-softWhite/60"
              >
                Benefits
              </th>
              {TIERS.map((tier) => (
                <th
                  key={tier.id}
                  scope="col"
                  className={`bg-hairline/[0.035] px-5 py-5 text-left align-bottom ring-1 ring-inset ${
                    TIER_RING[tier.id]
                  }`}
                >
                  <span
                    className={`block text-xl font-bold ${TIER_ACCENT[tier.id]}`}
                  >
                    {tier.name}
                  </span>
                  <span className="mt-1 block font-mono text-softWhite font-semibold tabular-nums">
                    {tier.amount}
                  </span>
                  <span className="mt-2 block text-xs font-normal leading-snug text-softWhite/55">
                    {tier.blurb}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIER_BENEFITS.map((benefit) => (
              <tr
                key={benefit.label}
                className="border-t border-hairline/10 align-middle"
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-left font-medium text-softWhite/80"
                >
                  {benefit.label}
                </th>
                <td className="px-5 py-4 text-center text-softWhite/70">
                  <Value value={benefit.bronze} />
                </td>
                <td className="px-5 py-4 text-center text-softWhite/70">
                  <Value value={benefit.silver} />
                </td>
                <td className="px-5 py-4 text-center text-ashGold/90">
                  <Value value={benefit.gold} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.id} delay={i * 90}>
            <div
              className={`card p-5 ring-1 ring-inset ${
                TIER_RING[tier.id]
              }`}
            >
              <p className={`text-xl font-bold ${TIER_ACCENT[tier.id]}`}>
                {tier.name}
              </p>
              <p className="mt-0.5 font-mono font-semibold text-softWhite tabular-nums">
                {tier.amount}
              </p>
              <p className="mt-2 text-sm text-softWhite/55 leading-snug">
                {tier.blurb}
              </p>
              <dl className="mt-4 space-y-2.5 border-t border-hairline/10 pt-4">
                {TIER_BENEFITS.map((benefit) => {
                  const value = benefit[tier.id];
                  if (value === false) return null;
                  return (
                    <div
                      key={benefit.label}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <dt className="text-softWhite/60">{benefit.label}</dt>
                      <dd className="text-right font-medium text-softWhite/90 shrink-0 max-w-[55%]">
                        {value === true ? "Included" : value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
