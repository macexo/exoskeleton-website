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
   * The mark's true width/height. next/image needs intrinsic dimensions, and
   * passing a generic 200x80 letterboxed square marks like the MES crest inside
   * a wide box — they rendered far smaller than everything else.
   */
  aspect?: number;
};

export const sponsors: Record<"bronze" | "silver" | "gold", SponsorProps[]> = {
  bronze: [
    {
      name: "East Mount Chiropractic",
      logo: "/eastmount-chiro-logo.png",
      aspect: 3.381,
      invert: true,
      website: "https://eastmountchiropractic.ca/",
    },
    {
      name: "Generations Physio",
      logo: "/generations-physio-logo.avif",
      aspect: 0.793,
      website: "https://www.generationsphysio.com/",
    },
    {
      name: "Aegis Batteries",
      logo: "/Aegis Batteries.jpg",
      aspect: 1.347,
      website: "https://www.aegisbattery.com/",
    },
    {
      name: "Protocase",
      logo: "/protocase.png",
      aspect: 1.887,
      website: "https://www.protocase.com/",
    },
    {
      name: "Toronto Hydro",
      logo: "/toronto_hydro.png",
      aspect: 2.551,
      website: "https://www.torontohydro.com/",
    },
  ],
  silver: [
    {
      name: "Solid Works",
      logo: "/solidworks-logo.svg",
      aspect: 3.261,
      website: "https://www.solidworks.com/",
    },
    {
      name: "MG Chemicals",
      logo: "/mg-chemicals-logo.webp",
      aspect: 3.673,
      website: "https://mgchemicals.com/",
    },
    {
      name: "McMaster Engineering Society",
      logo: "/MES_logo.png",
      aspect: 2.428,
      website: "https://www.macengsociety.ca/",
    },
  ],
  gold: [
    {
      name: "Trexo Robotics",
      logo: "/trexo-logo-dark.webp",
      aspect: 4.695,
      website: "https://www.trexorobotics.com/",
    },
    {
      name: "CubeMars",
      logo: "/cubemars-logo.webp",
      aspect: 3.764,
      website: "https://www.cubemars.com/",
    },
    {
      name: "Phoenix Contact",
      logo: "/Phoenix_Contact_Logo.png",
      aspect: 3.616,
      website: "https://www.phoenixcontact.com/en-ca/",
    },
    {
      name: "PCB Libraries",
      logo: "/pcb-libraries.png",
      aspect: 2.539,
      website: "https://www.pcblibraries.com/",
    },
    {
      name: "EZMotion",
      logo: "/ezmotion-logo-dark.png",
      aspect: 6.333,
      website: "https://www.ezmotion.co/",
    },
    {
      name: "KISSsoft",
      logo: "/kisssoft-logo.svg",
      aspect: 4.935,
      website: "https://www.kisssoft.com/en",
    },
    {
      name: "RLX Solutions",
      logo: "/rlx_logo.png",
      aspect: 1.657,
      invert: true,
      website: "https://rlxsolutions.com/",
    },
    {
      name: "3JPrecision",
      logo: "/3JPrecision_logo.png",
      aspect: 2.037,
      website: "https://www.3jprecision.com/",
    },
    {
      name: "Pfaff Technologies",
      logo: "/pfaff_logo.webp",
      aspect: 3.139,
      website: "https://pfafftechnologies.com/",
    },
  ],
}; 