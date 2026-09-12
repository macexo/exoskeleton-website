import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./ui/Button";
import { HOME_STATS } from "@/data/team";

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-photograph">
        <Image
          src="/ace_2026/IMG_4369.jpg"
          alt="A McMaster pilot navigating a balance obstacle in the powered exoskeleton at ACE 2026, with teammates alongside."
          fill priority sizes="(max-width: 760px) 100vw, 75vw"
          className="object-cover"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="home-container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> McMaster University · Student design team</p>
          <h1 id="hero-title">Built to<br />move us<br /><span>forward.</span></h1>
          <p className="hero-description">We’re McMaster Exoskeleton. Students designing wearable robotics through mechanical engineering, electronics, embedded controls and machine learning.</p>
          <div className="hero-actions">
            <Link className="home-button" href="/recruiting">Find your place <ArrowRight /></Link>
            <Link className="home-text-link" href="/sponsors">Partner with us <ArrowRight /></Link>
          </div>
        </div>
        <div className="hero-caption"><span className="caption-cross" aria-hidden="true">+</span><div><strong>Built here. Put to the test.</strong><span>ACE 2026 / McMaster University</span></div></div>
      </div>
      <div className="hero-bottom">
        <div className="home-container hero-bottom-inner">
          <dl className="hero-stats">
            {HOME_STATS.map(stat => <div key={stat.value}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
          </dl>
          <a href="#mission" className="hero-scroll">Meet McMaster Exo <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
