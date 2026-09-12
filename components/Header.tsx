"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site";
import { ArrowRight } from "./ui/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const links = navRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        const last = links?.[links.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); toggleRef.current?.focus();
        } else if (e.shiftKey && document.activeElement === toggleRef.current) {
          e.preventDefault(); last?.focus();
        }
      }
    };
    const wide = window.matchMedia("(min-width: 1100px)");
    const closeOnWide = () => { if (wide.matches) setMenuOpen(false); };
    wide.addEventListener("change", closeOnWide);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", closeOnWide);
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const links = NAV_LINKS.filter(link => link.href !== "/recruiting");

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
      <div className="home-container header-inner">
        <Link href="/" className="site-brand" aria-label="McMaster Exoskeleton — home">
          <Image src="/exo_logo_gold_black.png" alt="" width={60} height={60} priority />
          <span>MCMASTER<strong>EXOSKELETON</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main">
          {links.map(link => <div key={link.href} className="nav-group">
            <Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}{link.children && <span aria-hidden="true" className="nav-chevron">⌄</span>}</Link>
            {link.children && <div className="nav-dropdown">{link.children.map(child => <Link key={child.href} href={child.href} aria-current={isActive(child.href) ? "page" : undefined}>{child.label}</Link>)}</div>}
          </div>)}
          <Link className="nav-join" href="/recruiting" aria-current={isActive("/recruiting") ? "page" : undefined}>Join the team <ArrowRight /></Link>
        </nav>
        <button ref={toggleRef} type="button" className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav">
          <span>{menuOpen ? "Close" : "Menu"}</span><span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
        </button>
      </div>
      <nav ref={navRef} id="mobile-nav" hidden={!menuOpen} aria-label="Mobile navigation" className="mobile-nav">
        {NAV_LINKS.map(link => <div key={link.href}>
          <Link href={link.href} onClick={() => setMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}<ArrowRight /></Link>
          {link.children?.map(child => <Link className="mobile-sub-link" key={child.href} href={child.href} onClick={() => setMenuOpen(false)}>{child.label}</Link>)}
        </div>)}
      </nav>
    </header>
  );
}
