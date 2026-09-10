import React from "react";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";
import { sponsors } from "@/data/sponsorsData";
import SponsorLogo from "./SponsorLogo";

/**
 * Homepage sponsor strip.
 *
 * Two changes worth noting. The old version filtered gold sponsors against a
 * hardcoded list of five names, so adding a gold sponsor to the data file did
 * nothing until someone also edited this component. It now simply shows the
 * gold tier.
 *
 * It also now carries a direct sponsorship CTA. The old strip's only link went
 * to /sponsors, which buried the actual ask one click deeper.
 */
export default function PoweredBy() {
  return (
    <Section tone="jet" divider size="sm">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <SectionHeader align="left" eyebrow="Powered by" title="Our sponsors">
          Every actuator, PCB and machined part on the suit is paid for by people
          who decided a student team was worth backing.
        </SectionHeader>
        <Reveal delay={100} className="shrink-0">
          <Button href="/sponsors" variant="secondary" trailing={<ArrowRight />}>
            Sponsor the team
          </Button>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-12">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {sponsors.gold.map((sponsor) => (
            <li key={sponsor.name}>
              <SponsorLogo sponsor={sponsor} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
