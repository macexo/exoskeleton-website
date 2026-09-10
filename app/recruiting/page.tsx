import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button, { ArrowRight } from "@/components/ui/Button";
import { SUBTEAMS } from "@/data/subteams";
import { SITE } from "@/data/site";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "./constants";

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Join McMaster Exoskeleton. Mechanical, electrical, software and safety subteams are open to McMaster students — no prior experience required.",
};

const REASONS = [
  {
    title: "You build real hardware",
    body: "Not a simulation and not a class project. Parts you design get machined, wired and worn by a person at competition.",
  },
  {
    title: "You learn by doing",
    body: "No experience required. Leads teach the tools — CAD, PCB design, embedded C — and you learn them on a machine that has to work.",
  },
  {
    title: "You meet industry",
    body: "Our sponsors are robotics, motion and manufacturing companies, and Silver and Gold sponsors get our team resume book.",
  },
];

export default function RecruitingPage() {
  return (
    <>
      <PageHero
        eyebrow={APPLICATIONS_OPEN ? "Applications open" : "Recruiting"}
        title="Build a walking machine"
        accent="with us."
        image="/team/juan_aura_farm.JPG"
        imageAlt="Team members gathered around the exoskeleton in the workspace, working on the suit together."
        focal="40% 55%"
        actions={
          APPLICATIONS_OPEN ? (
            <>
              <Button
                href={APPLICATION_FORM_LINK}
                external
                size="lg"
                trailing={<ArrowRight />}
              >
                Apply now
              </Button>
              <Button href="#subteams" variant="ghost" size="lg">
                See the subteams
              </Button>
            </>
          ) : (
            <Button href={`mailto:${SITE.email}`} external size="lg">
              Email us about openings
            </Button>
          )
        }
      >
        We take McMaster students from every year and every program. If you want
        to machine parts, lay out boards or write control code, there is a spot
        for you.
      </PageHero>

      <Section tone="charcoal" id="subteams">
        <SectionHeader eyebrow="Subteams" title="Where you'd" accent="fit">
          Pick the one that sounds like you. Each page lists exactly what you
          would work on.
        </SectionHeader>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {SUBTEAMS.map((team, i) => (
            <Reveal key={team.slug} delay={i * 80}>
              <Link
                href={`/design/${team.slug}`}
                className="group flex h-full flex-col card p-6 card-interactive"
              >
                <span className="flex items-center justify-between">
                  <span
                    className={`grid place-items-center w-11 h-11 rounded-xl ${team.bg} ${team.text}`}
                    aria-hidden
                  >
                    <team.icon size={19} />
                  </span>
                  {!team.recruiting && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-softWhite/40">
                      By invitation
                    </span>
                  )}
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-xl font-semibold text-softWhite group-hover:text-ashGold transition-colors">
                  {team.name}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-2 text-softWhite/65 leading-relaxed text-pretty">
                  {team.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-hairline/10 pt-5">
                  {team.work.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-softWhite/70"
                    >
                      <span
                        className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${team.text} bg-current`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="jet" divider>
        <SectionHeader eyebrow="Why join" title="What you get" accent="out of it" />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="h-full card p-6">
                <span className="font-mono text-[11px] text-ashGold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-softWhite">
                  {reason.title}
                </h3>
                <p className="mt-2 text-softWhite/65 leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="rounded-2xl border border-ashGold/25 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(189,169,104,0.12),transparent_60%)] p-8">
            <h2 className="text-2xl font-bold text-softWhite">
              {APPLICATIONS_OPEN ? "Applications are open" : "Applications are closed right now"}
            </h2>
            <p className="mt-2 text-softWhite/65 max-w-xl">
              {APPLICATIONS_OPEN
                ? "Fill out one form — you pick your subteam preferences inside it."
                : "Email us and we will let you know when the next round opens."}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {APPLICATIONS_OPEN ? (
                <Button
                  href={APPLICATION_FORM_LINK}
                  external
                  size="lg"
                  trailing={<ArrowRight />}
                >
                  Apply now
                </Button>
              ) : (
                <Button href={`mailto:${SITE.email}`} external size="lg">
                  Email {SITE.email}
                </Button>
              )}
              <Button href="/design" variant="secondary">
                See what we build
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
