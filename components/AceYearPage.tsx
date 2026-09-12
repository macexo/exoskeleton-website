import Link from "next/link";
import PageHero from "./ui/PageHero";
import { PageSection, SectionIntro, PageNav, PageCTA } from "./ui/Interior";
import { ArrowRight } from "./ui/Button";
import CompetitionPhotoGallery from "./CompetitionPhotoGallery";
import { ACE_EVENTS, ACE_RESULTS, type AceYear } from "@/data/competitions";

export default function AceYearPage({ year }: { year: AceYear }) {
  const image = year.year === 2026 ? "/ace_2026/IMG_4369.jpg" : "/ace_2025/vineet_obstacle.JPG";
  return <div className="home-page inner-page competition-year-page">
    <PageHero eyebrow={`The competition journal / ${year.year}`} title={`ACE ${year.year}.`} accent={year.year === 2026 ? "On home ground." : "Our first steps."} image={image} imageAlt={`A McMaster pilot navigating a balance obstacle in the powered suit at ACE ${year.year}.`} focal="52% 50%" imageCaption={`${year.host} / ${year.note}`} actions={<><a href="#gallery" className="home-button">See the season <ArrowRight /></a><Link href="/design" className="home-text-link">Inside the engineering <ArrowRight /></Link></>}>
      {year.summary}
    </PageHero>
    <div className="competition-facts"><div className="home-container"><div className="competition-placing"><strong>{year.placement}</strong><span>Overall finish</span></div><div><p className="eyebrow">Host university</p><strong>{year.hostLong}</strong></div><div><p className="eyebrow">The challenge</p><strong>{ACE_EVENTS.length} events. One suit.</strong></div></div></div>
    <PageNav items={[{href:"#challenge",label:"The competition"},{href:"#gallery",label:"Photo journal"},{href:"#seasons",label:"Other seasons"}]} />
    <PageSection id="challenge" tone="light"><SectionIntro eyebrow="01 / What is ACE?" title="An entire year. Put to the test.">At the Applied Collegiate Exoskeleton competition, university teams put their wearable machines through first-responder tasks. Engineering and safety are part of the challenge, alongside the physical course.</SectionIntro><div className="event-grid">{ACE_EVENTS.map((event,i)=><article key={event.name}><span>0{i+1}</span><div><h3>{event.name}</h3><p>{event.description}</p></div></article>)}</div></PageSection>
    <PageSection id="gallery"><SectionIntro eyebrow="02 / The photo journal" title={year.year===2026 ? "The moments behind the result." : "A first season to remember."}>The suit, the people and the work that brought us here. Open any photograph for a closer look.</SectionIntro><CompetitionPhotoGallery photos={year.gallery} year={year.year} /></PageSection>
    <PageSection id="seasons" tone="surface" className="other-seasons"><p className="eyebrow">03 / Keep exploring</p>{ACE_RESULTS.filter(other=>other.year!==year.year).map(other=><Link key={other.year} href={`/${other.slug}`}><div><span className="eyebrow">{other.note} / {other.host}</span><h2>ACE {other.year}</h2></div><span>{other.placement} overall</span><ArrowRight /></Link>)}</PageSection>
    <PageCTA title="Be part of the next chapter.">Help take the next suit from the workshop to the course.</PageCTA>
  </div>;
}
