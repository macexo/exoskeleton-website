"use client";

import { useState } from "react";
import Image from "next/image";
import { SUIT_PARTS } from "@/data/suitParts";

export default function SuitExplorer() {
  const [activeId, setActiveId] = useState(SUIT_PARTS[0].id);
  return <div className="suit-explorer">
    <figure className="suit-diagram">
      <div className="suit-diagram-image"><Image src="/ace_2025/full_suit_image.png" alt="The 2025 McMaster exoskeleton with numbered markers for the control pack, emergency stop, hip actuator, wiring, knee actuator and foot interface." fill sizes="(max-width: 760px) 100vw, 45vw" className="object-cover" /></div>
      <span className="photo-index">EXO / 2025</span>
      {SUIT_PARTS.map((part,i)=><button key={part.id} type="button" onClick={()=>setActiveId(part.id)} aria-label={`${part.name} — ${part.owner}`} aria-pressed={activeId===part.id} aria-controls={`part-${part.id}`} style={{left:`${part.x}%`,top:`${part.y}%`}} className="suit-hotspot">{String(i+1).padStart(2,"0")}</button>)}
    </figure>
    <div className="suit-parts"><p className="eyebrow">Select a part / Explore the hardware</p>{SUIT_PARTS.map((part,i)=><div key={part.id} className={`suit-part ${activeId===part.id?"is-active":""}`} id={`part-${part.id}`}>
      <button type="button" onClick={()=>setActiveId(part.id)} aria-pressed={activeId===part.id}><span>0{i+1}</span><span className="part-name">{part.name}</span><span className="part-owner">{part.owner}</span></button>
      <p>{part.detail}</p>
    </div>)}</div>
  </div>;
}
