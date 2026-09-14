import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Button";
import { SUBTEAMS } from "@/data/subteams";
import { getTeamRoles } from "@/data/teamRoles";

export function PageSection({ children, id, tone = "dark", className = "" }: {
  children: ReactNode; id?: string; tone?: "dark" | "surface" | "light"; className?: string;
}) {
  return <section id={id} className={`page-section page-section--${tone} ${className}`}><div className="home-container">{children}</div></section>;
}

export function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="page-section-intro"><p className="eyebrow">{eyebrow}</p><div><h2 className="home-heading">{title}</h2>{children && <div className="section-intro-body">{children}</div>}</div></div>;
}

export function PageNav({ items }: { items: { href: string; label: string }[] }) {
  return <nav className="page-index" aria-label="On this page"><div className="home-container"><span className="eyebrow">Explore this page</span><div>{items.map((item, i) => <a href={item.href} key={item.href}><span>0{i + 1}</span>{item.label}<span aria-hidden="true">↓</span></a>)}</div></div></nav>;
}

export function PageCTA({ eyebrow = "Build what comes next", title, children, href = "/recruiting", label = "Join the team" }: {
  eyebrow?: string; title: string; children?: ReactNode; href?: string; label?: string;
}) {
  return <section className="page-cta"><div className="home-container"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p>{children}</p>}</div><Link href={href} className="home-button">{label}<ArrowRight /></Link></div></section>;
}

/**
 * Safety sits across all three divisions, so both the subteam directory and the
 * design index close with this line. It was pasted character-for-character in
 * each; this is the single copy.
 */
export function SafetyLink() {
  return (
    <div className="directory-safety">
      <span>Protection spans mechanical, electrical and software design.</span>
      <Link href="/design/safety" className="home-text-link">
        Health &amp; safety <ArrowRight />
      </Link>
    </div>
  );
}

export function SubteamDirectory({ recruiting = false }: { recruiting?: boolean }) {
  return <div className="subteam-directory">{SUBTEAMS.filter(team => team.slug !== "safety").map((team, i) => <Link key={team.slug} href={`/design/${team.slug}`} className="subteam-row">
    <span className="directory-number">0{i + 1}</span>
    <div className="directory-name"><h3>{team.name}</h3><span>{getTeamRoles(team.slug).map(role => role.name).join(" / ")}</span></div>
    <div className="directory-description"><p>{team.summary}</p>{recruiting && <span className="directory-status">View both subteams and their application expectations</span>}</div>
    <span className="directory-arrow" aria-hidden="true"><ArrowRight /></span>
  </Link>)}<SafetyLink /></div>;
}
