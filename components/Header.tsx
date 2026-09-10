"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation, and lock body scroll while it is open.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    // translate-z-0 keeps the bar on its own compositing layer, so it repaints
    // cleanly instead of being re-rastered against the scrolling content.
    <header className="fixed top-0 inset-x-0 z-50 transform-gpu">
      {/*
        Both backgrounds are always mounted and cross-faded on scroll, rather
        than swapped, so neither pops in within a single frame.

        Neither layer uses backdrop-filter. A backdrop-filter on a position:fixed
        element makes the compositor sample the scrolling content behind it every
        frame, and Chrome and Safari both smear or band the element's edges while
        that happens — worst when scrolling back up, where stale tiles get
        reused. The bar is 95% opaque on an already-dark page, so the blur was
        contributing almost nothing visually.
      */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 border-b border-hairline/10 bg-jet/95 transition-opacity duration-300 ${
          scrolled || menuOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/*
        Scrim for when the nav sits over photography. Taller than the header so
        it fades out well below it instead of stopping at the header's edge.
      */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgb(10_10_9/0.96)_0%,rgb(10_10_9/0.78)_40%,rgb(10_10_9/0.38)_70%,transparent_100%)] transition-opacity duration-300 ${
          scrolled || menuOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="McMaster Exoskeleton — home"
          >
            <Image
              src="/exo_logo_gold_black.png"
              alt=""
              width={160}
              height={64}
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-11" : "h-14"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 hover:text-ashGold hover:bg-hairline/[0.06] ${
                    isActive(link.href) ? "text-ashGold" : "text-softWhite/85"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                  {isActive(link.href) && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3.5 -bottom-px h-px bg-ashGold"
                    />
                  )}
                </Link>

                {link.children && (
                  // group-focus-within keeps the submenu reachable by keyboard;
                  // previously it was hover-only, so ACE 2025 could not be
                  // tabbed to at all on desktop.
                  <div className="absolute top-full left-0 pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                    <div className="min-w-[10rem] rounded-xl bg-charcoal border border-hairline/10 shadow-2xl overflow-hidden py-1.5">
                      {link.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-softWhite/85 hover:bg-ashGold/10 hover:text-ashGold transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden -mr-2 p-2.5 rounded-lg text-ashGold hover:bg-hairline/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-4 relative" aria-hidden>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile navigation. `hidden` when closed keeps its links out of the tab
          order — previously they stayed focusable behind an opacity-0 panel. */}
      <nav
        id="mobile-nav"
        hidden={!menuOpen}
        aria-label="Main"
        className="md:hidden border-t border-hairline/10 bg-jet"
      >
        <div className="px-4 py-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block px-4 py-3.5 rounded-xl font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-ashGold bg-ashGold/10"
                    : "text-softWhite hover:text-ashGold hover:bg-hairline/[0.06]"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 pl-4 border-l border-hairline/10">
                  {link.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-3 text-sm text-softWhite/70 rounded-xl hover:text-ashGold hover:bg-hairline/[0.06] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
