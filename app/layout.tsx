import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from "@/data/site";

/**
 * Three faces, three jobs.
 *
 * Body text was previously Exo 2 — a techno display face — applied to every
 * paragraph on the site. A condensed/techno face is fine as a *display* choice
 * but reads as costume when it sets body copy. Geist is neutral and does the
 * reading work; Rajdhani stays for headlines, where the category signal is
 * wanted; Geist Mono sets numerals, spec values and eyebrow labels so figures
 * line up and read as measurements.
 *
 * Both Geist files were already sitting unused in app/fonts/, so this costs no
 * extra network request.
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/**
 * metadataBase is required for the relative OG image path below to resolve to
 * an absolute URL. Without it, every link shared to LinkedIn, Instagram, Slack
 * or Discord previewed as a bare grey box — the old site had no openGraph block
 * at all, and this was the only metadata export in the entire app.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "McMaster Exoskeleton",
    "McMaster University",
    "exoskeleton",
    "ACE competition",
    "Applied Collegiate Exoskeleton",
    "student engineering team",
    "robotics",
    "wearable robotics",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "A pilot wearing the McMaster Exoskeleton lower-limb suit.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/exo_white_scalable.svg", type: "image/svg+xml" },
      { url: "/exo_white_scalable.ico", sizes: "any" },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable}`}
    >
      <head>
        {/*
          Scroll reveals start at opacity-0 and are un-hidden by an
          IntersectionObserver. Without JavaScript that leaves most of the page
          invisible, so force the final state when scripting is off.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased bg-jet text-softWhite">
        {/* Keyboard and screen-reader users can jump the nav. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ashGold focus:px-4 focus:py-2 focus:font-semibold focus:text-jet"
        >
          Skip to content
        </a>
        <Header />
        {/* A real <main> landmark. Eight of eleven routes previously had none. */}
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
