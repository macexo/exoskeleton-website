import React from "react";
import Image from "next/image";
import PageHero from "./ui/PageHero";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";
import { ACE_EVENTS, ACE_RESULTS, type AceYear } from "@/data/competitions";

/**
 * One component for every ACE year.
 *
 * app/ace2025/page.tsx and app/ace2026/page.tsx were 314-line files that were
 * 93% identical — same hero, same "What is ACE?" copy, same six event cards,
 * same gallery grid, same closing CTA. Only one sentence genuinely differed.
 * Adding ACE 2027 now means adding an entry to data/competitions.ts.
 *
 * The routes stay at /ace2025 and /ace2026 so existing links and the nav keep
 * working.
 */
export default function AceYearPage({ year }: { year: AceYear }) {
  const others = ACE_RESULTS.filter((r) => r.year !== year.year);

  return (
    <>
      <PageHero
        eyebrow={`Competition · ${year.year}`}
        title={`ACE ${year.year}`}
        accent={`${year.placement} overall.`}
        image={year.gallery[0]?.src}
        imageAlt={year.gallery[0]?.alt ?? ""}
        focal="center 40%"
        actions={
          <Button href="/design" variant="ghost" trailing={<ArrowRight />}>
            How we built it
          </Button>
        }
      >
        {year.summary}
      </PageHero>

      {/* Result strip — the facts, immediately, in mono so they read as data. */}
      <Section tone="charcoal" size="sm">
        <Reveal>
          <dl className="grid grid-cols-2 sm:grid-cols-4 grid-hairlines">
            {[
              { k: "Placement", v: year.placement },
              { k: "Year", v: String(year.year) },
              { k: "Host", v: year.hostLong },
              { k: "Events", v: `${ACE_EVENTS.length}` },
            ].map((item) => (
              <div key={item.k} className="bg-charcoal p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-softWhite/45">
                  {item.k}
                </dt>
                <dd className="mt-2 font-medium text-softWhite text-pretty">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section tone="jet" divider>
        <SectionHeader
          align="left"
          eyebrow="What is ACE"
          title="The Applied Collegiate"
          accent="Exoskeleton competition"
        >
          Undergraduate teams build a wearable exoskeleton and run it through
          first-responder tasks with a pilot inside. A suit has to clear a design
          review and a safety inspection before it is allowed onto the course.
        </SectionHeader>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACE_EVENTS.map((event, i) => (
            <Reveal key={event.name} delay={i * 70}>
              <div className="h-full card p-5">
                <span className="font-mono text-[11px] text-ashGold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold text-softWhite">
                  {event.name}
                </h3>
                <p className="mt-1.5 text-sm text-softWhite/60 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gallery — real captions, varied sizes so it isn't six identical tiles. */}
      <Section tone="charcoal">
        <SectionHeader eyebrow="Gallery" title={`ACE ${year.year}`} accent="in photos" />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {year.gallery.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 80}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <figure
                className={`group relative overflow-hidden rounded-2xl border border-hairline/10 bg-jet ${
                  i === 0 ? "aspect-[4/3] lg:aspect-[3/2]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    photo.position ?? "object-center"
                  }`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cross-link to the other years instead of a generic CTA. */}
      <Section tone="jet" divider size="sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-softWhite">
              Our other seasons
            </h2>
            <p className="mt-1 text-softWhite/60">
              We have placed 5th at ACE two years running.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {others.map((other) => (
              <Button
                key={other.year}
                href={`/${other.slug}`}
                variant="secondary"
                trailing={<ArrowRight />}
              >
                ACE {other.year}
              </Button>
            ))}
            <Button href="/recruiting">Join the team</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
