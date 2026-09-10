import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { roleAccent, type Person } from "@/data/people";

/**
 * Server component — this was previously a client component despite having no
 * state, no effects and no handlers.
 *
 * Headshot images are served at 320px for a 160px circle (2x for retina). They
 * were previously raw <img> tags pointing at files up to 2.2 MB rendered into
 * an 80px circle.
 */
export default function Headshot({
  person,
  size = "md",
}: {
  person: Person;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "w-24 h-24" : "w-32 h-32 sm:w-36 sm:h-36";
  const px = size === "sm" ? 192 : 288;

  return (
    <div className="group flex flex-col items-center card p-5 text-center card-interactive">
      {/*
        White, not the card colour. Eight of the ten roster photos are cutouts
        with a white background baked in and two are genuinely transparent, so a
        dark circle rendered those two dark and the rest white. White matches
        the majority and makes all ten read as one set.
      */}
      <div
        className={`relative ${dim} shrink-0 overflow-hidden rounded-full border-2 ${roleAccent(
          person.title
        )} bg-white`}
      >
        <Image
          src={person.image_url}
          alt=""
          width={px}
          height={px}
          sizes="144px"
          className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 font-semibold text-softWhite">{person.name}</h3>
      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-softWhite/55">
        {person.title}
      </p>
      {person.tenure && (
        <p className="mt-1 text-xs text-softWhite/40">{person.tenure}</p>
      )}

      <a
        href={person.linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 rounded-lg border border-hairline/10 bg-hairline/[0.045] p-2.5 text-softWhite/60 transition-colors hover:border-ashGold/40 hover:text-ashGold"
        aria-label={`${person.name} on LinkedIn`}
      >
        <FaLinkedin size={17} />
      </a>
    </div>
  );
}
