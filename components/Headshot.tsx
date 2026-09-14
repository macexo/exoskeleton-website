import Image from "next/image";
import { ArrowRight } from "./ui/Button";
import type { Person } from "@/data/people";

export default function Headshot({ person, size = "md" }: { person: Person; size?: "sm" | "md" }) {
  return <article className={`person-profile person-profile--${size}`}>
    <a href={person.linkedin_url} target="_blank" rel="noopener noreferrer" className="person-photo-link" aria-label={`${person.name} on LinkedIn`}>
      <div className="person-photo"><Image src={person.image_url} alt={person.name} fill sizes={size === "sm" ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 640px) 100vw, 25vw"} className="object-contain" /></div>
      <span className="profile-link-icon" aria-hidden="true">in <ArrowRight /></span>
    </a>
    <h3>{person.name}</h3><p>{person.title}</p>{person.tenure && <span className="person-tenure">{person.tenure}</span>}
  </article>;
}
