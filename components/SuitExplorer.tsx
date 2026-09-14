"use client";

import { useEffect, useId, useState, type CSSProperties, type PointerEvent, type FocusEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Button";
import { SUIT_PARTS, SUIT_RESPONSE } from "@/data/suitParts";
import { SUIT_REGIONS, SUIT_PHOTO_VIEWBOX, CONTROL_WIRE_PATHS } from "@/data/suitGeometry";
import { TEAM_ROLES } from "@/data/teamRoles";

// Select before navigating, including when the URL already ends in #software.
export function SoftwareJumpLink() {
  return <a href="#software" className="home-text-link" onClick={() => document.getElementById("software-control")?.click()}>See how the software connects <ArrowRight /></a>;
}

export default function SuitExplorer() {
  const [activeId, setActiveId] = useState("waist");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const displayedId = hoveredId ?? focusedId ?? activeId;
  const active = SUIT_PARTS.find(part => part.id === displayedId)!;
  const maskId = useId();
  const routeActive = displayedId === "control";
  const regions = active.regions.flatMap(id => SUIT_REGIONS[id].paths);

  // Hover and keyboard focus preview a part; click/tap keeps that selection.
  const selectionProps = (id: string) => ({
    onPointerEnter: (event: PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType !== "touch") {
        setFocusedId(null);
        setHoveredId(id);
      }
    },
    onPointerLeave: () => setHoveredId(null),
    onFocus: (event: FocusEvent<HTMLButtonElement>) => {
      if (event.currentTarget.matches(":focus-visible")) {
        setHoveredId(null);
        setFocusedId(id);
      }
    },
    onBlur: () => setFocusedId(null),
    onClick: () => setActiveId(id),
    "aria-pressed": activeId === id,
    "aria-controls": "suit-detail",
    "data-preview": displayedId === id,
  });

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === "#software") setActiveId("prediction");
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
        <p><span className="suit-pointer-instruction">Hover to explore. Select to keep a part in view.</span><span className="suit-touch-instruction">Tap a part or a stage of the loop to explore.</span></p>
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
              <svg className="suit-regions" viewBox={SUIT_PHOTO_VIEWBOX} fill="none" aria-hidden="true">
                <defs>
                  <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="1920">
                    <rect width="1280" height="1920" fill="white" />
                    <g fill="black">{regions.map((d, i) => <path key={i} d={d} />)}</g>
                    {routeActive && <g fill="none" stroke="black" strokeWidth="18">{CONTROL_WIRE_PATHS.map((d, i) => <path key={i} d={d} />)}</g>}
                  </mask>
                </defs>
                <rect className="suit-region-shade" width="1280" height="1920" mask={`url(#${maskId})`} />
                {active.regions.map(id => <g key={id} data-region={id} className="suit-region is-active">
                  {SUIT_REGIONS[id].paths.map((d, i) => <path key={i} d={d} />)}
                </g>)}
                <g className={`suit-route ${routeActive ? "is-active" : ""}`}>
                  {CONTROL_WIRE_PATHS.map((d, i) => <g key={i}>
                    <path className="suit-route-base" d={d} />
                    <path className="suit-route-line" d={d} pathLength="100" />
                  </g>)}
                </g>
              </svg>
            </div>

            {SUIT_PARTS.map(part => {
              const point = part.photoAnnotation;
              if (!point) return null;
              const isActive = part.id === displayedId;
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
                    {...selectionProps(part.id)}
                  >
                    <span>{part.name}</span>
                  </button>
                  <button
                    type="button"
                    className="suit-anchor"
                    style={{ "--anchor-x": `${desktopX}%`, "--mobile-anchor-x": `${point.x}%`, top: `${point.y}%` } as CSSProperties}
                    {...selectionProps(part.id)}
                    aria-label={part.name}
                    tabIndex={-1}
                  ><span aria-hidden="true" /></button>
                </div>
              );
            })}
          </figure>

          <div className="suit-response" id="software">
            <p className="suit-response-heading">
              The control loop
              <span>Movement becomes data, commands become torque, and the next movement is measured again.</span>
            </p>
            <div className="suit-response-flow" role="group" aria-label="How the suit responds">
              {SUIT_RESPONSE.map((step, index) => (
                <div key={step.id} className="suit-response-step">
                  <button
                    id={step.id === "prediction" ? "software-control" : undefined}
                    type="button"
                    {...selectionProps(step.id)}
                  >
                    <span className="suit-response-node" aria-hidden="true" />
                    <strong>{step.name}</strong>
                    <span className="suit-response-hint">{step.hint}</span>
                  </button>
                  {index < SUIT_RESPONSE.length - 1 && <ArrowRight className="suit-response-arrow" />}
                </div>
              ))}
            </div>
            <div className="suit-response-return" aria-hidden="true"><span>Movement feedback</span></div>
          </div>

        </div>

        <div className="suit-detail" id="suit-detail">
          <span className="sr-only" role="status" aria-atomic="true">Showing {active.name}</span>
          {SUIT_PARTS.map(part => (
            <div key={part.id} className={`suit-detail-panel ${displayedId === part.id ? "is-active" : ""}`} aria-hidden={displayedId !== part.id}>
              <p className="suit-detail-eyebrow">{part.hint}</p>
              <h3>{part.name}</h3>
              <p className="suit-detail-description">{part.detail}</p>
              {/* Every subteam that builds this part. Most of the suit is
                  shared work, and a single link hid that — software especially. */}
              <p className="suit-detail-contrib-label">Built by</p>
              <ul className="suit-detail-contrib">
                {part.contributors.map(ref => {
                  const role = TEAM_ROLES[ref.division].find(item => item.id === ref.id);
                  if (!role) return null;
                  return (
                    <li key={`${ref.division}-${ref.id}`}>
                      <Link href={`/design/${ref.division}#${ref.id}`}>
                        <span className="suit-detail-contrib-division">{ref.division}</span>
                        <span className="suit-detail-contrib-name">{role.name}</span>
                        <ArrowRight />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
