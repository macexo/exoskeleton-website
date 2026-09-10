import React from "react";
import Image from "next/image";
import Button, { ArrowRight } from "./ui/Button";
import { SITE } from "@/data/site";
import { HOME_STATS } from "@/data/team";

/**
 * Homepage hero.
 *
 * The previous hero used `team/team_photo.png` — a 7.2 MB group shot taken
 * against a whiteboard — as a full-bleed CSS background. The headline landed on
 * people's faces, the frame was washed out, and the exoskeleton itself was a
 * dark shape at the bottom edge.
 *
 * This version splits the frame: the pitch on the left over flat dark ground,
 * and the suit itself on the right, which is what a sponsor or a prospective
 * member actually came to see. It is also a server component now — the old one
 * ran a scroll listener on every frame to drive a parallax offset.
 */
export default function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden bg-jet">
      {/* Warm wash behind the copy, and a grid that fades out before it reaches
          the text so it reads as texture rather than decoration. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(75%_60%_at_15%_15%,rgba(189,169,104,0.13),transparent_65%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(70%_60%_at_20%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(189,169,104,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,104,0.16) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-start lg:items-center lg:min-h-[calc(100svh-5rem)] lg:max-h-[54rem] pt-28 pb-16 lg:py-24">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ashGold/30 bg-ashGold/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ashGold">
              <span className="w-1.5 h-1.5 rounded-full bg-ashGold" />
              McMaster University
            </p>

            <h1 className="mt-6 text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-7xl font-bold tracking-tight text-softWhite text-balance">
              We build
              <span className="block text-gradient-gold">exoskeletons</span>
              <span className="block">that walk.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-softWhite/70 leading-relaxed text-pretty">
              A student-run team of 50+ engineers designing, machining and coding
              a powered lower-limb exoskeleton from scratch every year — then
              putting it on a pilot and competing with it.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/recruiting" size="lg" trailing={<ArrowRight />}>
                Join the Team
              </Button>
              <Button href="/design" variant="ghost" size="lg">
                See how it works
              </Button>
            </div>

            {/* Proof, immediately. These were previously buried in the second
                section behind a scroll. */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-hairline/10 pt-7">
              {HOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-mono text-3xl sm:text-4xl font-semibold text-ashGold tabular-nums tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs sm:text-sm text-softWhite/55 leading-snug">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* The suit */}
          <div className="relative lg:h-[36rem]">
            <div className="relative h-[24rem] sm:h-[32rem] lg:h-full rounded-3xl overflow-hidden border border-hairline/10 bg-charcoal">
              <Image
                src="/ace_2025/full_suit_image.png"
                alt="A team pilot wearing the McMaster Exoskeleton lower-limb suit, showing the powered hip and knee actuators and the back-mounted control pack."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[52%_38%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-jet/70 via-transparent to-transparent"
              />

              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="rounded-lg bg-jet/80 backdrop-blur-md border border-hairline/10 px-3 py-2 text-xs text-softWhite/80">
                  Our 2026 suit at ACE
                </span>
              </figcaption>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="hairline absolute bottom-0 inset-x-0" />
      <span className="sr-only">{SITE.tagline}</span>
    </section>
  );
}
