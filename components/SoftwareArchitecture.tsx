"use client";

import { useId, useState } from "react";
import { SOFTWARE_ARCHITECTURE } from "@/data/engineering";

export default function SoftwareArchitecture() {
  const [stage, setStage] = useState(0);
  const detailId = useId();
  const architecture = SOFTWARE_ARCHITECTURE;
  const active = architecture.stages[stage];

  return (
    <div className="software-architecture">
      <div className="architecture-toolbar">
        <p className="eyebrow">From sensing to actuation</p>
        <span className="architecture-hint">Select a stage to explore</span>
      </div>
      <div className="architecture-intro">
        <h3>{architecture.title}</h3>
        <p>{architecture.introduction}</p>
      </div>
      <ol className="architecture-flow" aria-label="Software overview from sensing to actuation">
        {architecture.stages.map((item, index) => (
          <li key={item.name}>
            <button type="button" aria-pressed={stage === index} aria-controls={detailId} onClick={() => setStage(index)}>
              <span className="flow-step">0{index + 1}<span aria-hidden="true">{index === architecture.stages.length - 1 ? "↗" : "→"}</span></span>
              <strong>{item.name}</strong><span className="flow-device">{item.device}</span><span className="flow-summary">{item.summary}</span>
            </button>
          </li>
        ))}
      </ol>
      <div id={detailId} className="architecture-detail" aria-live="polite" aria-atomic="true">
        <div><span className="eyebrow">Inside step 0{stage + 1}</span><h4>{active.name}</h4></div>
        <div><p>{active.detail}</p><span className="architecture-work">{active.work}</span></div>
      </div>
      <noscript><p className="architecture-note">Read the software team page to explore the current member roles.</p></noscript>
    </div>
  );
}
