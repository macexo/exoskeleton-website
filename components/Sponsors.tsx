import React from "react";
import Image from "next/image";
import PageHero from "./ui/PageHero";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";
import SponsorTiers from "./SponsorTiers";
import { sponsors, SponsorProps } from "@/data/sponsorsData";
import SponsorLogo from "./SponsorLogo";
import { FUNDING_USES } from "@/data/sponsorship";
import { SITE, SPONSORSHIP_PACKAGE } from "@/data/site";

const AFFILIATES = [
  {
    name: "McMaster Engineering Society",
    logo: "/MES_logo.png",
    website: "https://www.macengsociety.ca/",
    role: "Our governing student society",
  },
];

function LogoGrid({
  items,
  size = "md",
}: {
  items: readonly SponsorProps[];
  size?: "md" | "lg";
}) {
  return (
    <ul
      className={`grid gap-3 ${
        size === "lg"
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      }`}
    >
      {items.map((sponsor) => (
        <li key={sponsor.name}>
          <SponsorLogo sponsor={sponsor} size={size} />
        </li>
      ))}
    </ul>
  );
}

export default function Sponsors() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Our sponsors put"
        accent="the suit on the course."
        image="/ace_2026/sponsors.jpg"
        imageAlt="McMaster Exoskeleton team members working on the suit with sponsor logos displayed."
        focal="center 35%"
        actions={
          <>
            <Button href={`mailto:${SITE.email}?subject=Sponsorship%20enquiry`} external>
              Talk to us about sponsoring
            </Button>
            <Button href={SPONSORSHIP_PACKAGE} external variant="ghost">
              Download the full package (PDF)
            </Button>
          </>
        }
      >
        We are a student team with no institutional budget for parts. Actuators,
        custom PCBs, machined aluminium and competition travel are all funded by
        sponsors.
      </PageHero>

      {/* Where the money goes — makes the ask concrete rather than abstract. */}
      <Section tone="charcoal" size="sm">
        <SectionHeader align="left" eyebrow="What sponsorship funds" title="Where the money goes" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUNDING_USES.map((use, i) => (
            <Reveal key={use.label} delay={i * 80}>
              <div className="h-full card p-5">
                <p className="font-semibold text-softWhite">{use.label}</p>
                <p className="mt-1.5 text-sm text-softWhite/60 leading-relaxed">
                  {use.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The tiers, on the page. */}
      <Section tone="jet" divider id="tiers">
        <SectionHeader
          eyebrow="Sponsorship tiers"
          title="What you get"
          accent="at each level"
        >
          Gold sponsors have their logo on the exoskeleton itself — it travels to
          competition and appears in every photo and every piece of coverage.
        </SectionHeader>
        <div className="mt-12">
          <SponsorTiers />
        </div>
        <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            href={`mailto:${SITE.email}?subject=Sponsorship%20enquiry`}
            external
            trailing={<ArrowRight />}
          >
            Start a conversation
          </Button>
          <Button href={SPONSORSHIP_PACKAGE} external variant="secondary">
            Full package (PDF)
          </Button>
          <p className="text-sm text-softWhite/50">
            In-kind support — parts, machining time, software licences — is just
            as welcome as cash.
          </p>
        </Reveal>
      </Section>

      <Section tone="charcoal" id="our-sponsors">
        <SectionHeader eyebrow="Thank you" title="The people backing us" />

        <div className="mt-12 space-y-12">
          <Reveal>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-ashGold mb-5">
              Gold
            </h3>
            <LogoGrid items={sponsors.gold} size="lg" />
          </Reveal>
          <Reveal>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-slate-300 mb-5">
              Silver
            </h3>
            <LogoGrid items={sponsors.silver} />
          </Reveal>
          <Reveal>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-orange-300/90 mb-5">
              Bronze
            </h3>
            <LogoGrid items={sponsors.bronze} />
          </Reveal>
          <Reveal>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-softWhite/50 mb-5">
              Affiliates
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {AFFILIATES.map((a) => (
                <li key={a.name}>
                  <a
                    href={a.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 tile p-4"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/[0.92] p-1.5">
                      <Image
                        src={a.logo}
                        alt=""
                        width={64}
                        height={64}
                        unoptimized={a.logo.endsWith(".svg")}
                        className="max-h-full w-auto object-contain"
                      />
                    </span>
                    <span>
                      <span className="block font-medium text-softWhite group-hover:text-ashGold transition-colors">
                        {a.name}
                      </span>
                      <span className="block text-sm text-softWhite/55">
                        {a.role}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
