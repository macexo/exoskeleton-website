import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { PageSection, SectionIntro, PageCTA, PageNav, SubteamDirectory } from "@/components/ui/Interior";
import Headshot from "@/components/Headshot";
import { ArrowRight } from "@/components/ui/Button";
import { EXECS, ARCHIVED_EXECS, FACULTY } from "@/data/people";
import { SOCIALS } from "@/data/site";

export const metadata: Metadata = { title: "Team", description: "Meet the students, team leads, alumni and faculty advisors behind McMaster Exoskeleton." };
export default function TeamPage() {
  return <div className="home-page inner-page">
    <PageHero eyebrow="The people / McMaster Exo" title="Different minds." accent="Shared ambition." variant="wide" image="/ace_2026/background_image.jpg" imageAlt="McMaster Exoskeleton students gathered outside the engineering building with the suit at ACE 2026." focal="50% 57%" imageCaption="The team at ACE 2026 / McMaster University" actions={<Link href="/recruiting" className="home-button">Build with us <ArrowRight /></Link>}>
      More than 50 students learning, building and figuring it out together. Three engineering divisions bring together six specialist subteams: Waist, Linkages, Power Architecture, Actuation & Sensing, Embedded & Controls, and AI & Machine Learning.
    </PageHero>
    <PageNav items={[{href:"#divisions",label:"Our subteams"},{href:"#leads",label:"Team leads"},{href:"#alumni",label:"Past directors"},{href:"#faculty",label:"Faculty advisors"}]} />
    <PageSection id="divisions"><SectionIntro eyebrow="The organisation / 2026–27" title="Three divisions. Six specialist subteams.">Each division has two focused teams. Explore their responsibilities, tools and current member roles.</SectionIntro><SubteamDirectory /></PageSection>
    <PageSection id="leads" tone="light"><SectionIntro eyebrow="01 / Leadership" title="Meet the team leads.">The people coordinating the build and helping members turn ideas into working systems.</SectionIntro><ul className="roster-grid">{EXECS.map(person=><li key={person.name}><Headshot person={person} /></li>)}</ul></PageSection>
    <PageSection id="alumni"><SectionIntro eyebrow="02 / The people who started it" title="Built on their work.">Our founder and past directors helped turn a new student team into a machine on the competition floor.</SectionIntro><ul className="alumni-grid">{ARCHIVED_EXECS.map(person=><li key={person.name}><Headshot person={person} size="sm" /></li>)}</ul></PageSection>
    <PageSection id="faculty" tone="surface"><SectionIntro eyebrow="03 / Experience in our corner" title="Our faculty advisors.">McMaster faculty who support the team with engineering guidance and perspective.</SectionIntro><ul className="faculty-list">{FACULTY.map((person,i)=><li key={person.name}><a href={person.link} target="_blank" rel="noopener noreferrer"><span className="faculty-index">0{i+1}</span><Image src={person.headshot} alt="" width={96} height={96} className="faculty-photo" /><span className="faculty-name"><strong>{person.name}</strong><span>{person.department}</span></span><ArrowRight /></a></li>)}</ul></PageSection>
    <section className="team-social"><div className="home-container"><p className="eyebrow">Between the milestones</p><h2>Follow the work in progress.</h2><a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="home-text-link">@mcmasterexo on Instagram <ArrowRight /></a></div></section>
    <PageCTA title="There’s a place for your curiosity.">Get to know the subteams and find your next challenge.</PageCTA>
  </div>;
}
