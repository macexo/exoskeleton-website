import React from "react";
import { Section } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button, { ArrowRight } from "./ui/Button";

/**
 * Closing CTA. Every page previously ended with a bespoke gold-button block;
 * this is the one implementation, with the audience split made explicit so
 * students and sponsors are not sent down the same funnel.
 */
export default function CallToAction() {
  return (
    <Section tone="gradient" divider>
      <Reveal className="relative overflow-hidden rounded-3xl border border-ashGold/20 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(189,169,104,0.14),transparent_60%)] px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-softWhite tracking-tight">
              Build it with us
            </h2>
            <p className="mt-3 text-softWhite/65 leading-relaxed">
              No experience required — we teach. If you want to machine parts,
              lay out boards or write control code, there is a place for you.
            </p>
            <div className="mt-6">
              <Button href="/recruiting" trailing={<ArrowRight />}>
                Join the team
              </Button>
            </div>
          </div>
          <div className="md:border-l md:border-hairline/10 md:pl-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-softWhite tracking-tight">
              Back the build
            </h2>
            <p className="mt-3 text-softWhite/65 leading-relaxed">
              Sponsors fund the actuators, PCBs and machined parts — and get in
              front of 50+ engineering students in return.
            </p>
            <div className="mt-6">
              <Button href="/sponsors" variant="secondary" trailing={<ArrowRight />}>
                Sponsorship tiers
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
