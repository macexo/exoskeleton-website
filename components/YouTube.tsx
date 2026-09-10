import React from "react";
import { Section, SectionHeader } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { FaYoutube } from "react-icons/fa";
import { SOCIALS } from "@/data/site";

/** The team's build/competition film. */
const FEATURED_VIDEO_ID = "hGSUYuB6uGI";

/**
 * The old version of this section was a heading, a paragraph promising
 * "behind-the-scenes development to competition highlights", and a single
 * button — an entire homepage section that showed no video at all. The footage
 * already existed; it was referenced by an unused BackgroundVideo component.
 *
 * The iframe uses youtube-nocookie and lazy loading so it costs nothing until
 * it scrolls into view.
 */
export default function YouTube() {
  return (
    <Section tone="charcoal" id="film">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <SectionHeader
          align="left"
          eyebrow="Watch"
          title="See the suit"
          accent="actually move."
        >
          Photos only get you so far with a walking machine. This is the build
          and the competition run, start to finish.
        </SectionHeader>

        <Reveal from="right">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-hairline/10 bg-jet">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1`}
              title="McMaster Exoskeleton — build and competition film"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-5">
            <Button
              href={SOCIALS.youtube}
              external
              variant="secondary"
              trailing={<FaYoutube className="text-lg" />}
            >
              More on @McMasterExo
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
