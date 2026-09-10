import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button, { ArrowRight } from "@/components/ui/Button";
import { SUBTEAMS } from "@/data/subteams";
import { SUIT_SPECS, SUIT_SYSTEMS, BUILD_CYCLE } from "@/data/suit";
import SuitExplorer from "@/components/SuitExplorer";

export const metadata: Metadata = {
  title: "Design",
  description:
    "How McMaster Exoskeleton designs and builds a powered lower-limb exoskeleton: the subsystems on the suit, what each subteam owns, and how a season runs from blank CAD to competition.",
};

/**
 * The design page.
 *
 * The previous version was a stub: three one-sentence cards, an off-palette
 * green "Safety Integration" box, a 33-word philosophy paragraph and no images
 * at all — on the page a sponsor and a prospective engineer are both most
 * likely to open.
 */
export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering"
        title="How the suit"
        accent="comes together."
        image="/team/obstacle_course.jpg"
        imageAlt="A pilot in the McMaster Exoskeleton suit being supported by team members during an obstacle course run."
        focal="30% 52%"
      >
        Four subteams, one machine. Every part is specified, machined and wired
        by students, then put on a person and tested until it holds.
      </PageHero>

      {/* The artifact, annotated. */}
      <Section tone="charcoal">
        <SectionHeader
          align="left"
          eyebrow="The suit"
          title="Every part of this"
          accent="was made by a student."
        >
          The suit carries load through a rigid aluminium structure and adds
          torque at the hip and knee, so a pilot can climb stairs and clear
          obstacles wearing it. Pick a callout to see what each subsystem does
          and which subteam builds it.
        </SectionHeader>

        <div className="mt-12">
          <SuitExplorer />
        </div>

        <Reveal delay={150} className="mt-10">
          <dl className="grid grid-cols-2 lg:grid-cols-3 grid-hairlines">
            {SUIT_SPECS.map((spec) => (
              <div key={spec.label} className="bg-charcoal p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-softWhite/45">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 font-medium text-softWhite">
                  {spec.value}
                  {spec.note && (
                    <span className="block text-sm font-normal text-softWhite/50">
                      {spec.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* Grouped capability panel — what is actually on the machine. */}
      <Section tone="jet" divider>
        <SectionHeader
          eyebrow="Subsystems"
          title="What's on"
          accent="the machine"
        >
          Every one of these is specified, sourced and integrated by a student
          subteam. Nothing here arrives as a kit.
        </SectionHeader>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUIT_SYSTEMS.map((system, i) => (
            <Reveal key={system.group} delay={i * 80}>
              <div className="h-full card p-5">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ashGold">
                  {system.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {system.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-hairline/10 bg-hairline/[0.045] px-2.5 py-1.5 text-[13px] text-softWhite/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Subteams — real depth, linked to their own pages. */}
      <Section tone="charcoal" id="subteams">
        <SectionHeader
          eyebrow="Subteams"
          title="Who owns"
          accent="what"
        >
          Four groups, each responsible for a slice of the machine end to end.
        </SectionHeader>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {SUBTEAMS.map((team, i) => (
            <Reveal key={team.slug} delay={i * 80}>
              <Link
                href={`/design/${team.slug}`}
                className="group flex h-full flex-col card p-6 card-interactive"
              >
                <span
                  className={`grid place-items-center w-11 h-11 rounded-xl ${team.bg} ${team.text}`}
                  aria-hidden
                >
                  <team.icon size={19} />
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-xl font-semibold text-softWhite group-hover:text-ashGold transition-colors">
                  {team.name}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-2 text-softWhite/65 leading-relaxed text-pretty">
                  {team.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-hairline/10 pt-5">
                  {team.work.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-softWhite/70"
                    >
                      <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${team.text} bg-current`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How a season runs. */}
      <Section tone="jet" divider>
        <SectionHeader
          align="left"
          eyebrow="Process"
          title="One season,"
          accent="blank CAD to competition."
        >
          The team rebuilds from scratch every year. Here is what that actually
          looks like.
        </SectionHeader>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 grid-hairlines">
          {BUILD_CYCLE.map((phase, i) => (
            <Reveal as="li" key={phase.phase} delay={i * 90} className="bg-jet">
              <div className="h-full p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ashGold">
                  {String(i + 1).padStart(2, "0")} · {phase.window}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-softWhite">
                  {phase.phase}
                </h3>
                <p className="mt-2 text-sm text-softWhite/60 leading-relaxed">
                  {phase.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          <Button href="/recruiting" trailing={<ArrowRight />}>
            Work on this with us
          </Button>
          <Button href="/ace2026" variant="secondary">
            See it at competition
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
