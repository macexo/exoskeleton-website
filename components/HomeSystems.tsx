"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./ui/Button";
import { getSubteam } from "@/data/subteams";

/**
 * Presentation only. The division name and its prose come from data/subteams.ts
 * — this component used to keep its own `name` + `description` per division,
 * which had already drifted from the canonical copy word for word.
 */
const PANELS = [
  { id: "mechanical", title: "Fit the person. Guide the movement.", tags: ["Waist", "Linkages"], x: 66, y: 61, label: "Knee assembly" },
  { id: "electrical", title: "Connect power, sensing and actuation.", tags: ["Power Architecture", "Actuation & Sensing"], x: 68, y: 20, label: "Electronics enclosure" },
  { id: "software", title: "The code behind the movement.", tags: ["Embedded & Controls", "AI & Machine Learning"], x: 44, y: 38, label: "Onboard prediction & control" },
] as const;

const SYSTEMS = PANELS.map(panel => {
  const subteam = getSubteam(panel.id);
  return { ...panel, name: subteam?.name ?? panel.id, description: subteam?.body ?? "" };
});

export default function HomeSystems() {
  const [active, setActive] = useState(0);
  const system = SYSTEMS[active];
  return (
    <div className="systems-layout">
      <figure className="systems-photo">
        <Image src="/ace_2025/full_suit_image.png" alt="The 2025 McMaster exoskeleton showing its control pack, wiring and powered leg joints." fill sizes="(max-width: 760px) 100vw, 40vw" className="object-cover" />
        <span className="photo-index">EXO / 2025</span>
        <span className="system-marker" style={{ left: `${system.x}%`, top: `${system.y}%` }} aria-hidden="true"><span>+</span></span>
        <figcaption><span>{String(active + 1).padStart(2, "0")} / {system.label}</span><span>Actual team hardware</span></figcaption>
      </figure>
      <div className="systems-content">
        <p className="eyebrow">02 / Inside the exoskeleton</p>
        <h2 className="home-heading">One suit.<br /><span className="muted-heading">Every discipline.</span></h2>
        <div className="system-selectors" role="group" aria-label="Explore the engineering subteams">
          {SYSTEMS.map((item, i) => <button key={item.id} type="button" aria-pressed={i === active} aria-controls="system-detail" onClick={() => setActive(i)}><span className="system-number">0{i + 1}</span>{item.name}<span aria-hidden="true">{i === active ? "−" : "+"}</span></button>)}
        </div>
        <div className="system-detail" id="system-detail" aria-live="polite" aria-atomic="true">
          <h3>{system.title}</h3><p>{system.description}</p>
          <ul className="system-tags" aria-label="Current subteams">{system.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <Link href={`/design/${system.id}`} className="home-text-link">Explore {system.name.toLowerCase()} <ArrowRight /></Link>
        </div>
        <noscript><p className="system-noscript-note"><Link href="/design" className="home-text-link">Read about all six subteams <ArrowRight /></Link></p></noscript>
      </div>
    </div>
  );
}
