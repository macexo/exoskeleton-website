import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button, { ArrowRight } from "@/components/ui/Button";
import Headshot from "@/components/Headshot";
import { EXECS, ARCHIVED_EXECS, FACULTY } from "@/data/people";
import { SOCIALS } from "@/data/site";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The students behind McMaster Exoskeleton — team leads, past directors and the faculty who support the team.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="50+ students,"
        accent="one machine."
        image="/ace_2026/DSCF0584.jpeg"
        imageAlt="The full McMaster Exoskeleton team gathered on campus, with pilots wearing the suits at the centre."
        focal="center 42%"
        actions={
          <>
            <Button href="/recruiting" trailing={<ArrowRight />}>
              Join the team
            </Button>
            <Button
              href={SOCIALS.instagram}
              external
              variant="ghost"
              trailing={<FaInstagram />}
            >
              Follow our journey
            </Button>
          </>
        }
      >
        Mechanical, electrical, software and safety — undergraduates from across
        McMaster Engineering who design, build and test the suit together.
      </PageHero>

      <Section tone="charcoal" id="leads">
        <SectionHeader eyebrow="Leadership" title="Team" accent="leads">
          The directors running each side of the team this season.
        </SectionHeader>
        <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {EXECS.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 70}>
              <Headshot person={person} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="jet" divider id="alumni">
        <SectionHeader eyebrow="Alumni" title="Past" accent="directors">
          The people who built this team from nothing, including our founder.
        </SectionHeader>
        {/*
          Flex rather than grid so a trailing partial row centres instead of
          orphaning left. There are 6 alumni in a 4-across layout, so the last
          row holds 2. Widths mirror the grid: 50% minus half the gap at two
          across, 25% minus three-quarters of the gap at four across.
        */}
        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {ARCHIVED_EXECS.map((person, i) => (
            <Reveal
              as="li"
              key={person.name}
              delay={(i % 4) * 70}
              className="w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <Headshot person={person} size="sm" />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="charcoal" id="faculty">
        <SectionHeader eyebrow="Support" title="Faculty" accent="advisors">
          McMaster faculty who advise the team on the engineering.
        </SectionHeader>
        {/* Same treatment as the alumni row: 5 advisors across 3 columns leaves
            2 on the last row, which centre rather than orphan left. */}
        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {FACULTY.map((person, i) => (
            <Reveal
              as="li"
              key={person.name}
              delay={(i % 3) * 70}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-4 card p-4 card-interactive"
              >
                <Image
                  src={person.headshot}
                  alt=""
                  width={128}
                  height={128}
                  sizes="64px"
                  className="h-16 w-16 shrink-0 rounded-full border border-hairline/15 object-cover object-[center_15%]"
                />
                <span className="min-w-0 pr-5">
                  <span className="block font-medium text-softWhite group-hover:text-ashGold transition-colors">
                    {person.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-softWhite/55">
                    {person.department}
                  </span>
                </span>
                {/* Pinned to the corner so it sits in the same place on every
                    card, rather than drifting with the length of the name. */}
                <FaExternalLinkAlt
                  aria-hidden
                  size={11}
                  className="absolute right-3.5 top-3.5 text-softWhite/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-ashGold"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
