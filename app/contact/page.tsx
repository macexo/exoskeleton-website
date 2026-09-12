import type { Metadata } from "next";
import Link from "next/link";
import { PageSection, SectionIntro } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";
import { SITE, SOCIALS, SPONSORSHIP_PACKAGE } from "@/data/site";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = { title: "Contact", description: "Talk to McMaster Exoskeleton about joining, sponsorship, media or collaboration. Email exo@mcmaster.ca or follow the team." };
const CHANNELS = [
  { name: "Instagram", label: "@mcmasterexo", href: SOCIALS.instagram, icon: FaInstagram },
  { name: "LinkedIn", label: "McMaster Exoskeleton", href: SOCIALS.linkedin, icon: FaLinkedin },
  { name: "YouTube", label: "@McMasterExo", href: SOCIALS.youtube, icon: FaYoutube },
];

export default function ContactPage() {
  return <div className="home-page inner-page">
    <header className="contact-hero"><div className="home-container"><p className="eyebrow"><span className="eyebrow-rule" />Contact / McMaster Exo</p><h1>Good things start<br />with <span>a conversation.</span></h1><div className="contact-intro"><p>Interested in joining, backing the build or working together? We’d like to hear from you.</p><a href={`mailto:${SITE.email}`} className="contact-email">{SITE.email}<ArrowRight /></a></div></div></header>
    <PageSection tone="light"><SectionIntro eyebrow="01 / What brings you here?" title="Let’s connect you with the team." /><div className="contact-intents"><article><span className="eyebrow">For future teammates</span><h3>I want to build<br />with you.</h3><p>Explore the subteams and application process. Students from every year and program are welcome.</p><Link href="/recruiting" className="home-text-link">Find your place <ArrowRight /></Link><a href={`mailto:${SITE.email}?subject=Question%20about%20joining`} className="contact-secondary">Ask a recruiting question ↗</a></article><article><span className="eyebrow">For potential partners</span><h3>I want to back<br />the build.</h3><p>Funding, parts, manufacturing support or software. Let’s talk about what we can build together.</p><a href={`mailto:${SITE.email}?subject=Sponsorship%20enquiry`} className="home-text-link">Start a partnership conversation <ArrowRight /></a><Link href="/sponsors" className="contact-secondary">Explore sponsorship levels ↗</Link></article><article><span className="eyebrow">For collaborators & media</span><h3>I have something<br />in mind.</h3><p>A story, a research question or another student team’s idea. Tell us what you’re thinking.</p><a href={`mailto:${SITE.email}?subject=Collaboration%20enquiry`} className="home-text-link">Email the team <ArrowRight /></a><Link href="/design" className="contact-secondary">Get to know the engineering ↗</Link></article></div></PageSection>
    <PageSection><div className="contact-details"><div><p className="eyebrow">02 / Follow the work</p><h2 className="home-heading">Find us out there.</h2><ul className="contact-channels">{CHANNELS.map(channel=><li key={channel.name}><a href={channel.href} target="_blank" rel="noopener noreferrer"><channel.icon size={22} /><span><strong>{channel.name}</strong><span>{channel.label}</span></span><ArrowRight /></a></li>)}</ul></div><div className="campus-details"><p className="eyebrow">03 / Where we build</p><h2>Made at<br />McMaster.</h2><p>Faculty of Engineering</p><address>1280 Main Street West<br />Hamilton, ON L8S 4L8<br />Canada</address><p className="visit-note">Get in touch to arrange a visit or learn more about the team.</p><a href="https://www.google.com/maps/search/?api=1&query=McMaster+University+Faculty+of+Engineering+Hamilton+ON" target="_blank" rel="noopener noreferrer" className="home-text-link">Find the campus <ArrowRight /></a></div></div></PageSection>
    <section className="page-bottom-link"><div className="home-container"><span>Want to share the team with someone?</span><a href={SPONSORSHIP_PACKAGE} target="_blank" rel="noopener noreferrer" className="home-text-link">Sponsorship package <span className="pdf-label">PDF ↗</span></a></div></section>
  </div>;
}
