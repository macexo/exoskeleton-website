import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { PageSection, SectionIntro } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";

// Without this file a mistyped URL rendered Next's default 404 between our
// header and footer, with its own page title and no link back to anything.
export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not here. Find the team, the engineering and how to join.",
  robots: { index: false, follow: true },
};

const WAYS_BACK = [
  { href: "/design", label: "The engineering" },
  { href: "/team", label: "The people" },
  { href: "/recruiting", label: "Join the team" },
  { href: "/sponsors", label: "Partner with us" },
];

export default function NotFound() {
  return <div className="home-page inner-page">
    <PageHero
      eyebrow="404 / Page not found"
      title="This page isn’t here."
      accent="The rest of the team is."
      actions={<><Link href="/" className="home-button">Back to the start <ArrowRight /></Link><Link href="/design" className="home-text-link">See what we build <ArrowRight /></Link></>}
    >
      The link may be out of date, or the page may have moved. Everything below is still where it should be.
    </PageHero>
    <PageSection tone="light"><SectionIntro eyebrow="Where to next" title="Pick up where you left off.">Four places worth a look, whichever brought you here.</SectionIntro><div className="related-subteams">{WAYS_BACK.map((way, i) => <Link key={way.href} href={way.href}><span>0{i + 1}</span><h2>{way.label}</h2><ArrowRight /></Link>)}</div></PageSection>
  </div>;
}
