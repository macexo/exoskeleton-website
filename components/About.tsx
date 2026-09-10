import React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";
import { SUBTEAMS } from "@/data/subteams";

/**
 * "What we build" — replaces the old About section.
 *
 * The old section was a centred heading, a 30-word paragraph, a photo and three
 * stat tiles. The stats have moved up into the hero (where they act as proof
 * before the fold), which frees this section to do the job nothing on the site
 * was doing: explain what the machine actually is and who builds each part of it.
 */
export default function About() {
  return (
    <Section tone="charcoal" id="what-we-build">
      <SectionHeader
        align="left"
        eyebrow="What we build"
        title="A powered lower-limb exoskeleton,"
        accent="built from nothing each year."
      >
        Every season the team starts from a blank CAD file and ends with a suit a
        pilot can walk, climb stairs and run an obstacle course in. Four subteams
        own it end to end — no kits, no off-the-shelf chassis.
      </SectionHeader>

      <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal from="left" className="lg:sticky lg:top-28">
          <figure className="relative rounded-2xl overflow-hidden border border-hairline/10">
            <Image
              src="/team/statue.jpg"
              alt="A pilot standing in the McMaster Exoskeleton suit outdoors on campus."
              width={1080}
              height={1440}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="w-full h-auto object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-jet/60 to-transparent"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 text-sm text-softWhite/85">
              <span className="rounded-lg bg-jet/80 backdrop-blur-md border border-hairline/10 px-3 py-2 inline-block">
                Designed, machined and assembled on campus
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Subteams as an ordered list of responsibilities rather than a grid of
            equal cards — this reads as a system with parts, not four tiles. */}
        <ul className="space-y-3">
          {SUBTEAMS.map((team, i) => (
            <Reveal as="li" key={team.slug} delay={i * 90}>
              <a
                href={`/design/${team.slug}`}
                className="group flex gap-5 card p-5 sm:p-6 card-interactive"
              >
                <span
                  className={`shrink-0 grid place-items-center w-12 h-12 rounded-xl ${team.bg} ${team.text}`}
                  aria-hidden
                >
                  <team.icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-semibold text-lg text-softWhite group-hover:text-ashGold transition-colors">
                    {team.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="mt-1.5 block text-softWhite/65 leading-relaxed text-pretty">
                    {team.summary}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={200} className="mt-12 flex flex-wrap gap-3">
        <Button href="/design" trailing={<ArrowRight />}>
          Explore the design
        </Button>
        <Button href="/team" variant="secondary">
          Meet the team
        </Button>
      </Reveal>
    </Section>
  );
}
