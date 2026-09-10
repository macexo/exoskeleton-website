/**
 * Single source of truth for site-wide identity, navigation and social links.
 * Previously these were duplicated across Header, Footer, Team_Hero, YouTube
 * and the contact page — and had already drifted apart.
 */

export const SITE = {
  name: "McMaster Exoskeleton",
  shortName: "McMaster Exo",
  url: "https://macexo.com",
  tagline: "Innovation Through Movement",
  description:
    "A student-run technical team at McMaster University designing, building and competing with lower-limb powered exoskeletons.",
  email: "exo@mcmaster.ca",
  location: "McMaster University, Hamilton, ON",
} as const;

export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/recruiting", label: "Join the Team" },
  {
    href: "/ace2026",
    label: "ACE 2026",
    children: [{ href: "/ace2025", label: "ACE 2025" }],
  },
  { href: "/team", label: "Team" },
  { href: "/design", label: "Design" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/mcmasterexo/",
  linkedin: "https://www.linkedin.com/company/mcmasterexo/",
  youtube: "https://www.youtube.com/@McMasterExo",
} as const;

export const SOCIAL_LINKS = [
  { key: "instagram", href: SOCIALS.instagram, label: "@mcmasterexo" },
  { key: "linkedin", href: SOCIALS.linkedin, label: "McMaster Exoskeleton" },
  { key: "youtube", href: SOCIALS.youtube, label: "@McMasterExo" },
] as const;

/** Typed once so the filename (which contains spaces) is never retyped. */
export const SPONSORSHIP_PACKAGE =
  "/2526 McMaster Exoskeleton Sponsorship Proposal.pdf";
