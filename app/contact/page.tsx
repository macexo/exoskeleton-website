import type { Metadata } from "next";
import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button, { ArrowRight } from "@/components/ui/Button";
import { SITE, SOCIALS, SPONSORSHIP_PACKAGE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with McMaster Exoskeleton about sponsorship, joining the team, media or collaboration.",
};

/**
 * Contact.
 *
 * Routed by intent rather than by channel. The old page was three identical
 * cards labelled Email / Instagram / LinkedIn, which told a sponsor and a
 * prospective member exactly the same thing.
 */
const ROUTES = [
  {
    label: "Sponsorship",
    body: "Funding, parts, machining time or software licences — and what your company gets back.",
    action: "Email us about sponsoring",
    href: `mailto:${SITE.email}?subject=Sponsorship%20enquiry`,
    secondary: { label: "Sponsorship tiers", href: "/sponsors" },
  },
  {
    label: "Joining the team",
    body: "McMaster students from any year or program. No prior experience required.",
    action: "See open subteams",
    href: "/recruiting",
    secondary: { label: "What we build", href: "/design" },
  },
  {
    label: "Media & collaboration",
    body: "Press, other student teams, research groups, or anyone who wants to talk exoskeletons.",
    action: `Email ${SITE.email}`,
    href: `mailto:${SITE.email}`,
    secondary: null,
  },
];

const CHANNELS = [
  { icon: FaEnvelope, label: SITE.email, href: `mailto:${SITE.email}`, name: "Email" },
  { icon: FaInstagram, label: "@mcmasterexo", href: SOCIALS.instagram, name: "Instagram" },
  { icon: FaLinkedin, label: "McMaster Exoskeleton", href: SOCIALS.linkedin, name: "LinkedIn" },
  { icon: FaYoutube, label: "@McMasterExo", href: SOCIALS.youtube, name: "YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to"
        accent="the team."
        size="sm"
      >
        We read everything that comes to {SITE.email}. Tell us which of these
        you are and we will get back to you.
      </PageHero>

      <Section tone="charcoal" size="sm">
        <div className="grid md:grid-cols-3 gap-4">
          {ROUTES.map((route, i) => (
            <Reveal key={route.label} delay={i * 80}>
              <div className="flex h-full flex-col card p-6">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ashGold">
                  {route.label}
                </h2>
                <p className="mt-3 flex-1 text-softWhite/70 leading-relaxed">
                  {route.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Button
                    href={route.href}
                    external={route.href.startsWith("mailto:")}
                    size="sm"
                    trailing={<ArrowRight />}
                  >
                    {route.action}
                  </Button>
                  {route.secondary && (
                    <Button
                      href={route.secondary.href}
                      variant="secondary"
                      size="sm"
                    >
                      {route.secondary.label}
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="jet" divider>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader align="left" eyebrow="Channels" title="Find us" />
            <ul className="mt-8 space-y-2">
              {CHANNELS.map((channel, i) => (
                <Reveal as="li" key={channel.name} delay={i * 60}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 tile p-4"
                  >
                    <channel.icon className="text-ashGold shrink-0" size={18} />
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-softWhite/45">
                        {channel.name}
                      </span>
                      <span className="block text-softWhite group-hover:text-ashGold transition-colors break-all">
                        {channel.label}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader align="left" eyebrow="Where" title="Find the lab" />
            <Reveal delay={100} className="mt-8">
              <div className="card p-6">
                <p className="text-lg font-semibold text-softWhite">
                  McMaster University
                </p>
                <p className="mt-1 text-softWhite/65">Faculty of Engineering</p>
                <address className="mt-3 not-italic text-softWhite/55">
                  1280 Main Street West
                  <br />
                  Hamilton, ON L8S 4L8
                  <br />
                  Canada
                </address>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Button
                    href="https://www.google.com/maps/search/?api=1&query=McMaster+University+Faculty+of+Engineering+Hamilton+ON"
                    external
                    variant="secondary"
                    size="sm"
                  >
                    Open in Maps
                  </Button>
                  <Button
                    href={SPONSORSHIP_PACKAGE}
                    external
                    variant="secondary"
                    size="sm"
                  >
                    Sponsorship package (PDF)
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
