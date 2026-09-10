import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button, { ArrowRight } from "@/components/ui/Button";
import { SUBTEAMS, getSubteam } from "@/data/subteams";
import {
  APPLICATIONS_OPEN,
  APPLICATION_FORM_LINK,
} from "@/app/recruiting/constants";

/**
 * Subteam detail.
 *
 * Previously this file inlined ~430 words of copy that were duplicated
 * character-for-character from the three /recruiting/<subteam> pages, and it
 * imported `useParams` from next/navigation into a server component without
 * ever using it. Content now comes from data/subteams.ts, so it exists once.
 */

/** Statically generate all four pages rather than rendering each on demand. */
export function generateStaticParams() {
  return SUBTEAMS.map((team) => ({ slug: team.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const team = getSubteam(slug);
  if (!team) return { title: "Not found" };
  return { title: `${team.name} Subteam`, description: team.body };
}

export default async function SubteamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = getSubteam(slug);
  if (!team) notFound();

  const others = SUBTEAMS.filter((t) => t.slug !== team.slug);

  return (
    <>
      <header className="relative isolate overflow-hidden bg-jet pt-36 pb-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_0%,rgba(189,169,104,0.10),transparent_70%)]"
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Link
            href="/design"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-softWhite/50 transition-colors hover:text-ashGold"
          >
            <span aria-hidden>←</span> Design
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-start gap-5">
            <span
              className={`grid shrink-0 place-items-center w-14 h-14 rounded-2xl ${team.bg} ${team.text}`}
              aria-hidden
            >
              <team.icon size={24} />
            </span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-softWhite">
                {team.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-softWhite/70 leading-relaxed text-pretty">
                {team.body}
              </p>
            </div>
          </div>
        </div>
      </header>

      <Section tone="charcoal">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Reveal>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-ashGold">
              What you&rsquo;d work on
            </h2>
            <ul className="mt-6 space-y-3">
              {team.work.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-hairline/10 bg-hairline/[0.035] p-4 text-softWhite/80"
                >
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${team.text} bg-current`}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ashGold/25 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(189,169,104,0.12),transparent_60%)] p-7">
              <h2 className="text-2xl font-bold text-softWhite">
                {team.recruiting
                  ? `Join ${team.name}`
                  : `${team.name} is by invitation`}
              </h2>
              <p className="mt-2 text-softWhite/65 leading-relaxed">
                {team.recruiting
                  ? "No prior experience required — the leads teach the tools. One application covers every subteam."
                  : "This subteam is staffed from members already on the team. Join another subteam first and put your hand up."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {APPLICATIONS_OPEN && team.recruiting ? (
                  <Button
                    href={APPLICATION_FORM_LINK}
                    external
                    trailing={<ArrowRight />}
                  >
                    Apply now
                  </Button>
                ) : (
                  <Button href="/recruiting" trailing={<ArrowRight />}>
                    See all subteams
                  </Button>
                )}
                <Button href="/design" variant="secondary">
                  Back to the suit
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-softWhite/50">
                Other subteams
              </h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/design/${other.slug}`}
                      className="group flex items-center gap-3 tile p-4"
                    >
                      <span className={`shrink-0 ${other.text}`} aria-hidden>
                        <other.icon size={17} />
                      </span>
                      <span className="font-medium text-softWhite group-hover:text-ashGold transition-colors">
                        {other.name}
                      </span>
                      <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
