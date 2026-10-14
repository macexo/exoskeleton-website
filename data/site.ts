import type { Metadata } from "next";

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
  "/McMaster Exoskeleton Sponsorship Package 2026_2027.pdf";

/**
 * Per-route metadata. Every page used to inherit the layout's single Open Graph
 * block, so an ACE recap or a subteam page shared to LinkedIn previewed as the
 * homepage. Next merges metadata shallowly — a page that declares `openGraph`
 * does not inherit the parent's images — so the card is built in full here,
 * along with the canonical URL no route was declaring.
 */
export function pageMetadata({ title, description, path, image = "/og.jpg" }: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const card = { title: `${title} — ${SITE.name}`, description };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...card,
      type: "website",
      locale: "en_CA",
      url: path,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: "A pilot wearing the McMaster Exoskeleton lower-limb suit." }],
    },
    twitter: { ...card, card: "summary_large_image", images: [image] },
  };
}
