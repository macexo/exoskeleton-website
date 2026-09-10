import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/data/site";

const ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
} as const;

/**
 * Server component. This previously carried "use client" — and therefore
 * shipped react-icons to the browser on every page — for no reason beyond
 * calling `new Date().getFullYear()`, which is fine on the server.
 */
export default function Footer() {
  return (
    <footer className="relative bg-jet text-softWhite border-t border-hairline/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/exo_logo_gold_black.png"
                alt="McMaster Exoskeleton"
                width={180}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-softWhite/60 max-w-sm leading-relaxed">
              {SITE.description}
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICONS[social.key];
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-hairline/[0.045] border border-hairline/10 text-softWhite/60 hover:text-ashGold hover:border-ashGold/40 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href={`mailto:${SITE.email}`}
                className="p-3 rounded-xl bg-hairline/[0.045] border border-hairline/10 text-softWhite/60 hover:text-ashGold hover:border-ashGold/40 transition-colors"
                aria-label={`Email ${SITE.email}`}
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Sitemap — every nav link, not a truncated slice. The old footer
              sliced to the first four, which silently dropped /sponsors. */}
          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="text-sm font-semibold uppercase tracking-wider text-softWhite mb-5"
            >
              Explore
            </h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-softWhite/60 hover:text-ashGold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-softWhite mb-5">
              Get in Touch
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-softWhite/60 hover:text-ashGold transition-colors"
                >
                  <FaEnvelope className="text-ashGold shrink-0" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICONS[social.key];
                return (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-softWhite/60 hover:text-ashGold transition-colors"
                    >
                      <Icon className="text-ashGold shrink-0" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-hairline/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* text-softWhite/60 rather than /40 — /40 on this ground measures
              about 3.4:1, below the 4.5:1 AA minimum. */}
          <p className="text-sm text-softWhite/60">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-softWhite/60">{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
