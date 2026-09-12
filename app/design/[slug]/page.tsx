import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { PageSection, SectionIntro, PageNav } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";
import TeamRoles from "@/components/TeamRoles";
import SoftwareArchitecture from "@/components/SoftwareArchitecture";
import { SUBTEAMS, getSubteam } from "@/data/subteams";
import { SUBTEAM_PRESENTATION } from "@/data/subteamPresentation";
import { getTeamRoles } from "@/data/teamRoles";
import { SITE } from "@/data/site";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "@/app/recruiting/constants";

export function generateStaticParams() { return SUBTEAMS.map(team => ({ slug: team.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const team = getSubteam((await params).slug);
  return team ? { title: team.slug === "safety" ? "Health & Safety" : `${team.name} Team`, description: team.body } : { title: "Not found" };
}

export default async function SubteamPage({ params }: { params: Promise<{ slug: string }> }) {
  const team = getSubteam((await params).slug);
  if (!team) notFound();
  const page = SUBTEAM_PRESENTATION[team.slug];
  const roles = getTeamRoles(team.slug);
  const others = SUBTEAMS.filter(other => other.slug !== team.slug && other.slug !== "safety");
  const isSoftware = team.slug === "software";
  return (
    <div className="home-page inner-page">
      <PageHero eyebrow={`${roles.length ? "2026–27 team" : "Engineering"} / ${team.name}`} title={page.title} accent={page.accent} image={page.image} imageAlt={page.imageAlt} imageCaption="From the workshop to the competition floor" actions={<><a href="#the-work" className="home-button">{roles.length ? "Explore the subteams" : "Explore the work"} <ArrowRight /></a><Link href="/design" className="home-text-link">← Back to the design</Link></>}>
        {team.body}
      </PageHero>
      {roles.length > 0 && <PageNav items={[...roles.map(role => ({ href: `#${role.id}`, label: role.name })), { href: "#join", label: "How to join" }]} />}
      <PageSection id="the-work" tone="light">
        <SectionIntro eyebrow={roles.length ? "01 / Current member roles" : "01 / Protection across the system"} title={roles.length ? `Inside ${team.name.toLowerCase()}.` : "Safety spans every discipline."}>
          {roles.length ? "Responsibilities and expectations from the team’s 2026/27 application. Choose the area that fits your interests and experience." : team.body}
        </SectionIntro>
        {roles.length ? <TeamRoles division={team.slug} /> : <ol className="work-list">{team.work.map((work, i) => <li key={work}><span>0{i + 1}</span><p>{work}</p></li>)}</ol>}
      </PageSection>
      <PageSection id="engineering" tone="surface">
        <SectionIntro eyebrow="02 / Connecting the disciplines" title={isSoftware ? "From movement to assistance." : team.slug === "mechanical" ? "Where the person meets the machine." : team.slug === "electrical" ? "Power and signals, brought together." : "Protection across the whole suit."}>
          {isSoftware ? "Sensing, prediction and control connect the wearer’s movement to the powered joints. This overview shows how software contributes to the suit." : team.slug === "electrical" ? "Electrical work connects the power system, motion sensors and motor electronics. It also means fitting those systems into a wearable structure and working with software to bring them to life." : team.slug === "mechanical" ? "The waist and leg structure must accommodate both the pilot and the electronics. Joint geometry, attachment, packaging and assembly bring mechanical work into close contact with every other discipline." : "Pilot safety involves the structure, electrical protections and software behaviour together. Physical travel limits, an emergency stop and command limits are all part of that work."}
        </SectionIntro>
        {isSoftware ? <SoftwareArchitecture /> : <Link href="/design#the-suit" className="home-text-link">Explore the suit <ArrowRight /></Link>}
      </PageSection>
      <PageSection id="join">
        <div className="subteam-join">
          <div><p className="eyebrow">03 / Take the next step</p><h2 className="home-heading">{roles.length ? "Tell us where you want to contribute." : "Ask about safety work."}</h2><p>{roles.length ? "Review the responsibilities and experience expected for your preferred subteam. The application lets you share your interests, skills and projects." : "Contact the team to learn how you can contribute to safety reviews and testing."}</p></div>
          <div>{roles.length && APPLICATIONS_OPEN ? <a href={APPLICATION_FORM_LINK} className="home-button" target="_blank" rel="noopener noreferrer">Apply to the team <ArrowRight /></a> : <a href={`mailto:${SITE.email}?subject=Joining%20the%20team`} className="home-button">Ask the team <ArrowRight /></a>}<Link href="/recruiting#questions" className="home-text-link">Questions about joining? <ArrowRight /></Link></div>
        </div>
      </PageSection>
      <PageSection tone="light" className="related-section"><p className="eyebrow">Explore the engineering divisions</p><div className="related-subteams">{others.map(other => <Link key={other.slug} href={`/design/${other.slug}`}><span>{SUBTEAM_PRESENTATION[other.slug].index}</span><h2>{other.name}</h2><ArrowRight /></Link>)}</div></PageSection>
    </div>
  );
}
