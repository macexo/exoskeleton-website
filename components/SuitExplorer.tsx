"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Button";
import { SUIT_PARTS, SUIT_RESPONSE } from "@/data/suitParts";

// Select before navigating, including when the URL already ends in #software.
export function SoftwareJumpLink() {
  return <a href="#software" className="home-text-link" onClick={() => document.getElementById("software-control")?.click()}>See how the software connects <ArrowRight /></a>;
}

export default function SuitExplorer() {
  const [activeId, setActiveId] = useState("waist");
  const active = SUIT_PARTS.find(part => part.id === activeId)!;

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === "#software") setActiveId("software");
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <section className="suit-experience" id="the-suit" aria-labelledby="suit-experience-title">
      <header className="suit-experience-heading">
        <div>
          <p className="eyebrow">Inside the suit</p>
          <h2 id="suit-experience-title">Explore what makes it move.</h2>
        </div>
        <p>Select a part to see how it works.</p>
      </header>

      <div className="suit-experience-layout">
        <div className="suit-experience-visual">
          <figure className="suit-figure" aria-label="The exoskeleton with interactive hardware annotations">
            <div className="suit-photo">
              <Image
                src="/design/suit-leg.jpg"
                alt="The McMaster exoskeleton worn outdoors, showing its waist module, hip and knee actuators, wiring and leg structure."
                fill
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1100px) 45vw, 34vw"
              />
            </div>

            {SUIT_PARTS.map(part => {
              const point = part.photoAnnotation;
              if (!point) return null;
              const isActive = part.id === activeId;
              // Desktop reserves a quarter of the figure on each side for labels.
              // Mobile uses the same uncropped photo with labels over its outer edges.
              const desktopX = 25 + point.x / 2;
              const lineStart = point.side === "left" ? 220 : 780;
              const mobileStart = point.side === "left" ? 30 : 70;
              return (
                <div key={part.id} className={`suit-annotation ${isActive ? "is-active" : ""}`}>
                  <svg className="suit-leader suit-leader--wide" viewBox="0 0 1000 750" fill="none" aria-hidden="true">
                    <path d={`M ${lineStart} ${point.labelY * 7.5} H ${point.side === "left" ? 235 : 765} L ${desktopX * 10} ${point.y * 7.5}`} />
                  </svg>
                  <svg className="suit-leader suit-leader--mobile" viewBox="0 0 100 150" fill="none" aria-hidden="true">
                    <path d={`M ${mobileStart} ${point.labelY * 1.5} L ${point.x} ${point.y * 1.5}`} />
                  </svg>
                  <button
                    type="button"
                    className={`suit-label suit-label--${point.side}`}
                    style={{ top: `${point.labelY}%` }}
                    onClick={() => setActiveId(part.id)}
                    aria-pressed={isActive}
                    aria-controls="suit-detail"
                  >
                    <span>{part.name}</span>
                  </button>
                  <button
                    type="button"
                    className="suit-anchor"
                    style={{ "--anchor-x": `${desktopX}%`, "--mobile-anchor-x": `${point.x}%`, top: `${point.y}%` } as CSSProperties}
                    onClick={() => setActiveId(part.id)}
                    aria-label={part.name}
                    aria-pressed={isActive}
                    aria-controls="suit-detail"
                    tabIndex={-1}
                  ><span aria-hidden="true" /></button>
                </div>
              );
            })}
          </figure>

          <div className="suit-response" id="software">
            <p className="suit-response-heading">From movement to assistance</p>
            <div className="suit-response-flow" role="group" aria-label="How the suit responds">
              {SUIT_RESPONSE.map((step, index) => (
                <div key={step.id} className="suit-response-step">
                  <button
                    id={step.id === "software" ? "software-control" : undefined}
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    aria-pressed={activeId === step.id}
                    aria-controls="suit-detail"
                  >
                    <span className="suit-response-node" aria-hidden="true" />
                    <strong>{step.name}</strong>
                    <span className="suit-response-hint">{step.hint}</span>
                  </button>
                  {index < SUIT_RESPONSE.length - 1 && <ArrowRight className="suit-response-arrow" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="suit-detail" id="suit-detail">
          <span className="sr-only" role="status" aria-atomic="true">Selected system: {active.name}</span>
          {SUIT_PARTS.map(part => (
            <div key={part.id} className={`suit-detail-panel ${activeId === part.id ? "is-active" : ""}`} aria-hidden={activeId !== part.id}>
              <p className="suit-detail-eyebrow">{part.hint}</p>
              <h3>{part.name}</h3>
              <p className="suit-detail-description">{part.detail}</p>
              <Link href={part.learnMore.href} className="suit-detail-link">{part.learnMore.label}<ArrowRight /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
