import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./interior.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from "@/data/site";

// Local fonts keep the site independent of an external font request.
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
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
