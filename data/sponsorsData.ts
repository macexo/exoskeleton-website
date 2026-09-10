export type SponsorProps = {
  logo: string;
  name: string;
  website: string;
  /**
   * Set for logos supplied only as white-on-transparent artwork. Every tile
   * uses the same light plate, so these are inverted in CSS to render as
   * black-on-light. Only safe for monochrome marks — RLX and EastMount measure
   * saturation 0.03 and 0.00, so inverting produces black, not a colour shift.
   */
  invert?: boolean;
  /**
   * Per-logo size multiplier, so every mark has roughly the same optical
   * presence on the wall. Computed rather than eyeballed: logos here range from
   * 0.79:1 (Generations Physio, tall) to 6.33:1 (EZmotion, very wide), and a
   * single height cap renders a square mark tiny while a wide one fills the
   * tile. The value equalises rendered ink area — see the comment in
   * components/SponsorLogo.tsx. Source files were also trimmed of baked-in
   * whitespace first (CubeMars was 60% empty margin, Pfaff 35%).
   *
   * A few are hand-tuned above the computed value. Area normalisation measures
   * the ink bounding box, which over-counts a mark whose box is padded out by a
   * small tagline (CubeMars) or a thin wordmark (PCB Libraries), and
   * under-counts a square crest sitting among wide marks (MES).
   */
  scale?: number;
  /**
   * The mark's true width/height. next/image needs intrinsic dimensions, and
   * passing a generic 200x80 letterboxed square marks like the MES crest inside
   * a wide box — they rendered far smaller than everything else.
   */
  aspect?: number;
  /** @deprecated No longer read; all tiles share one plate. */
  needsBackground?: boolean;
};

export const sponsors: Record<"bronze" | "silver" | "gold", SponsorProps[]> = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
      aspect: 3.381,
      scale: 0.89,
      invert: true,
      website: "https://eastmountchiropractic.ca/",
    },
    {
      name: "Generations Physio",
      logo: "/generations-physio-logo.avif",
      aspect: 0.793,
      scale: 1.55,
      website: "https://www.generationsphysio.com/",
    },
    {
      name: "Aegis Batteries",
      logo: "/Aegis Batteries.jpg",
      aspect: 1.347,
      scale: 1.3,
      website: "https://www.aegisbattery.com/",
    },
    {
      name: "Protocase",
      logo: "/protocase.png",
      aspect: 1.887,
      scale: 1.15,
      website: "https://www.protocase.com/",
      needsBackground: true,
    },
    {
      name: "Toronto Hydro",
      logo: "/toronto_hydro.png",
      aspect: 2.551,
      scale: 1.03,
      website: "https://www.torontohydro.com/",
    },
  ],
  silver: [
    {
      name: "Solid Works",
      logo: "/solidworks-logo.svg",
      aspect: 3.261,
      scale: 1.15,
      website: "https://www.solidworks.com/",
    },
    {
      name: "MG Chemicals",
      logo: "/mg-chemicals-logo.webp",
      aspect: 3.673,
      scale: 0.9,
      website: "https://mgchemicals.com/",
    },
    {
      name: "McMaster Engineering Society",
      logo: "/MES_logo.png",
      aspect: 2.428,
      scale: 1.0,
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "Trexo Robotics",
      logo: "/trexo-logo-dark.webp",
      aspect: 4.695,
      scale: 0.98,
      website: "https://www.trexorobotics.com/",
    },
    {
      name: "CubeMars",
      logo: "/cubemars-logo.webp",
      aspect: 3.764,
      scale: 1.05,
      website: "https://www.cubemars.com/",
      needsBackground: true,
    },
    {
      name: "Phoenix Contact",
      logo: "/Phoenix_Contact_Logo.png",
      aspect: 3.616,
      scale: 0.95,
      website: "https://www.phoenixcontact.com/en-ca/",
      needsBackground: true,
    },
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      aspect: 2.539,
      scale: 1.2,
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo-dark.png",
      aspect: 6.333,
      scale: 1.05,
      website: "https://www.ezmotion.co/",
    },
    {
      name: "KISSsoft",
      logo: "/kisssoft-logo.svg",
      aspect: 4.935,
      scale: 1.0,
      website: "https://www.kisssoft.com/en",
    },
    {
      name: "RLX Solutions",
      logo: "/rlx_logo.png",
      aspect: 1.657,
      scale: 1.2,
      invert: true,
      website: "https://rlxsolutions.com/",
    },
    {
      name: "3JPrecision",
      logo: "/3JPrecision_logo.png",
      aspect: 2.037,
      scale: 1.32,
      website: "https://www.3jprecision.com/",
    },
    {
      name: "Pfaff Technologies",
      logo: "/pfaff_logo.webp",
      aspect: 3.139,
      scale: 1.0,
      website: "https://pfafftechnologies.com/",
      needsBackground: true,
    },
  ],
}; 