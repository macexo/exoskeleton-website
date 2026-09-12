import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import HomeSystems from "@/components/HomeSystems";
import HomeCompetitionGallery from "@/components/HomeCompetitionGallery";
import { ArrowRight } from "@/components/ui/Button";
import { sponsors } from "@/data/sponsorsData";
import { SITE, SPONSORSHIP_PACKAGE } from "@/data/site";
import { APPLICATIONS_OPEN } from "./recruiting/constants";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      <section id="mission" className="home-section mission-section" aria-labelledby="mission-title">
        <div className="home-container">
          <div className="mission-layout">
            <p className="eyebrow">01 / Engineering with purpose</p>
            <div>
              <h2 id="mission-title" className="mission-heading">A little ambition.<br />A lot of engineering.<br /><span className="muted-heading">A real step forward.</span></h2>
              <div className="mission-description">
                <p>We design and build powered lower-limb exoskeletons at McMaster University. That means a wearable machine with actuated hips and knees, built to help a pilot move through the world.</p>
                <div><p>Our students connect mechanical structures, motion sensing and control software in one wearable system. The Applied Collegiate Exoskeleton competition brings that work out of the workshop and onto the course.</p><Link href="/team" className="home-text-link">Meet the people behind it <ArrowRight /></Link></div>
              </div>
            </div>
          </div>
          <div className="mission-footnote"><span>Designed. Machined. Wired. Programmed.</span><span>Student-built, from the ground up.</span></div>
        </div>
      </section>

      <section className="home-section engineering-section" aria-label="Explore our engineering"><div className="home-container"><HomeSystems /></div></section>

      <section className="home-section competition-section" aria-labelledby="competition-title">
        <div className="home-container">
          <div className="section-topline"><p className="eyebrow">03 / Beyond the workshop</p><Link href="/ace2026" className="home-text-link">Our competition story <ArrowRight /></Link></div>
          <div className="competition-layout">
            <div className="competition-copy"><h2 id="competition-title" className="home-heading">The real test<br />is out there.</h2><p>A pilot. A powered suit. Stairs, obstacles and a clock. At ACE, the work of an entire year meets the real world.</p><div className="competition-result"><strong>5<sup>th</sup></strong><div><span>OVERALL AT ACE</span><p>2025 & 2026<br />Two builds. Two top-five finishes.</p></div></div><Link href="/ace2026" className="home-text-link">ACE 2026 at McMaster <ArrowRight /></Link></div>
            <HomeCompetitionGallery />
          </div>
        </div>
      </section>

      <section className="home-section people-section" aria-labelledby="people-title">
        <div className="home-container">
          <div className="section-topline"><p className="eyebrow">04 / Your people. Your next challenge.</p><span className="section-note">Six subteams. Three divisions.</span></div>
          <div className="people-layout">
            <div className="people-copy"><h2 id="people-title" className="home-heading">Bring your curiosity.<br />Find your challenge.<br /><span className="muted-heading">Build with us.</span></h2><p>From 3D-printed waist modules to embedded firmware and predictive models, there are different ways to contribute. Explore the responsibilities and experience expected for each subteam.</p><Link href="/recruiting" className="home-button">Build with us <ArrowRight /></Link><span className="recruitment-note">{APPLICATIONS_OPEN ? "Explore the subteams and apply" : "Get in touch about the next intake"}</span></div>
            <figure className="people-photo"><Image src="/ace_2026/background_image.jpg" alt="McMaster Exoskeleton students gathered with their pilot and suit outside the engineering building at ACE 2026." fill sizes="(max-width: 760px) 100vw, 55vw" className="object-cover" /><figcaption><span>More than a design team.</span><span>McMaster Exo / ACE 2026</span></figcaption></figure>
          </div>
          <div className="join-values"><div><span>01</span><p><strong>Learn by building</strong>CAD, circuits, code and model development.</p></div><div><span>02</span><p><strong>Find your community</strong>Work alongside students who share your curiosity.</p></div><div><span>03</span><p><strong>See your work move</strong>Connect your work to a wearable machine.</p></div></div>
        </div>
      </section>

      <section className="home-section partners-section" aria-labelledby="partners-title">
        <div className="home-container">
          <div className="partners-heading"><div><p className="eyebrow">05 / Made possible together</p><h2 id="partners-title" className="home-heading">Big ideas need<br />people behind them.</h2></div><div className="partners-description"><p>Our partners help turn student ambition into working hardware. Their support puts actuators on the suit, tools in our hands and the team on the competition floor.</p><Link href="/sponsors" className="home-text-link">Meet all our sponsors <ArrowRight /></Link></div></div>
          <p className="sponsor-tier-label">With the support of our gold sponsors</p>
          <ul className="home-sponsor-grid">{sponsors.gold.map(sponsor => <li key={sponsor.name}><a href={sponsor.website} target="_blank" rel="noopener noreferrer"><Image src={sponsor.logo} alt={sponsor.name} width={180} height={Math.round(180 / (sponsor.aspect ?? 2.5))} unoptimized={sponsor.logo.endsWith(".svg")} className={sponsor.invert ? "invert" : ""} /></a></li>)}<li className="sponsor-grid-invite"><Link href="/sponsors">Your next partnership<br />starts here. <ArrowRight /></Link></li></ul>
          <div className="partner-invitation"><div><h3>Help build what comes next.</h3><p>Support the team through funding, components or manufacturing expertise.</p></div><div className="partner-actions"><Link href="/sponsors" className="home-button">Become a partner <ArrowRight /></Link><a href={SPONSORSHIP_PACKAGE} className="home-text-link" target="_blank" rel="noopener noreferrer">Sponsorship package <span className="pdf-label">PDF ↗</span></a></div></div>
        </div>
      </section>

      <section className="home-contact"><div className="home-container"><p className="eyebrow">The next step starts with a conversation.</p><a href={`mailto:${SITE.email}`}>{SITE.email}<ArrowRight /></a></div></section>
    </div>
  );
}
