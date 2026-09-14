"use client";

import { useId, useState } from "react";
import type { EngineeringOverview } from "@/data/engineering";

export default function DisciplineOverview({ name, overview }: {
  name: string;
  overview: EngineeringOverview;
}) {
  const [selected, setSelected] = useState(0);
  const detailId = useId();
  const isFlow = overview.kind === "flow";

  return (
    <div className="discipline-overview">
      <div className="architecture-toolbar">
        <p className="eyebrow">{name} / {isFlow ? "System flow" : "Design areas"}</p>
        <span className="architecture-hint">Select {isFlow ? "a stage" : "an area"} to explore</span>
      </div>
      <div className="architecture-intro">
        <h3>{overview.title}</h3>
        <p>{overview.introduction}</p>
      </div>
      <ul className={`architecture-flow ${isFlow ? "is-flow" : "is-areas"}`} aria-label={`${name} ${isFlow ? "system flow" : "design areas"}`}>
        {overview.stages.map((item, index) => (
          <li key={item.name}>
            <button type="button" aria-label={item.name} aria-pressed={selected === index} aria-controls={detailId} onClick={() => setSelected(index)}>
              <span className="flow-step" aria-hidden="true">{isFlow ? `0${index + 1}` : "Design area"}<span>{selected === index ? "−" : "+"}</span></span>
              <strong>{item.name}</strong><span className="flow-device">{item.device}</span><span className="flow-summary">{item.summary}</span>
            </button>
          </li>
        ))}
      </ul>
      <div id={detailId} className="architecture-detail" aria-live="polite" aria-atomic="true">
        {overview.stages.map((item, index) => (
          <div key={item.name} className={`architecture-detail-panel ${selected === index ? "is-active" : ""}`} aria-hidden={selected !== index}>
            <div><span className="eyebrow">{isFlow ? `Inside the flow / 0${index + 1}` : "Inside the design area"}</span><h4>{item.name}</h4></div>
            <div><p>{item.detail}</p><span className="architecture-work">{item.work}</span></div>
          </div>
        ))}
      </div>
      <noscript><p className="architecture-note">The subteam descriptions above explain the current member responsibilities.</p></noscript>
    </div>
  );
}
