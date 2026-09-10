import React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";
import { ACE_EVENTS, ACE_RESULTS } from "@/data/competitions";

/**
 * The competition section.
 *
 * The old version listed five event names as unexplained chips and put a single
 * "5th Place" badge on a photo. The results are the team's strongest credential
 * and were the least legible thing on the page, so they lead here as a record.
 */
export default function Competition() {
  return (
    <Section tone="jet" divider id="competition">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Competition"
            title="ACE —"
            accent="Applied Collegiate Exoskeleton"
          >
            A cross-university competition where undergraduate teams put the
            exoskeletons they built onto a pilot and run them through first
            responder tasks. Suits are judged on engineering design and safety
            before they are allowed on the course at all.
          </SectionHeader>

          {/* Results as a record, not a badge. */}
          <Reveal delay={120} className="mt-10">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-softWhite/50 mb-4">
              Our record
            </h3>
            <ol className="space-y-px overflow-hidden rounded-xl border border-hairline/10">
              {ACE_RESULTS.map((result) => (
                <li
                  key={result.year}
                  className="flex items-center gap-4 bg-hairline/[0.035] px-4 py-3.5"
                >
                  <span className="font-mono text-lg font-semibold text-ashGold tabular-nums w-14 shrink-0">
                    {result.placement}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium text-softWhite">
                      ACE {result.year}
                    </span>
                    <span className="block text-sm text-softWhite/55">
                      {result.host} · {result.note}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={200} className="mt-8">
            <Button href="/ace2026" trailing={<ArrowRight />}>
              How ACE 2026 went
            </Button>
          </Reveal>
        </div>

        <div>
          <Reveal from="right">
            <figure className="relative rounded-2xl overflow-hidden border border-hairline/10">
              <Image
                src="/team/pilots_p2.jpg"
                alt="Two McMaster Exoskeleton pilots in their suits at the ACE competition."
                width={1592}
                height={1061}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-jet/50 to-transparent"
              />
            </figure>
          </Reveal>

          {/* Events, each with what it actually tests — previously five bare
              chips that told a reader nothing. */}
          <Reveal delay={150} className="mt-6">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-softWhite/50 mb-4">
              The events
            </h3>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {ACE_EVENTS.map((event) => (
                <div key={event.name}>
                  <dt className="font-medium text-softWhite text-sm">
                    {event.name}
                  </dt>
                  <dd className="text-sm text-softWhite/55 leading-snug mt-0.5">
                    {event.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
