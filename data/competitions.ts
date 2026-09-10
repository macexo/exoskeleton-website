/**
 * ACE competition data.
 *
 * The EVENTS array previously existed three times — identically in
 * app/ace2025/page.tsx and app/ace2026/page.tsx, and as a five-item subset with
 * no descriptions in components/Competition.tsx.
 */

export const ACE_EVENTS = [
  {
    name: "Design Review",
    description: "Judged presentation of the engineering behind the suit.",
  },
  {
    name: "Safety Check",
    description: "The suit is cleared for a pilot before it runs anything.",
  },
  {
    name: "Don/Doff Test",
    description: "How fast a pilot can get into and out of the suit.",
  },
  {
    name: "Emergency Doff",
    description: "Removing the suit under simulated emergency conditions.",
  },
  {
    name: "Stair Climbing",
    description: "Powered ascent and descent under the pilot's own control.",
  },
  {
    name: "Obstacle Course",
    description: "Full first-responder agility run against the clock.",
  },
] as const;

export type GalleryItem = {
  src: string;
  /** Real alt text. The old galleries used "ACE 2026 photo 3", which tells a
   *  screen-reader user nothing at all. */
  alt: string;
  /** Tailwind object-position class for framing. */
  position?: string;
};

export type AceYear = {
  year: number;
  slug: string;
  placement: string;
  host: string;
  hostLong: string;
  note: string;
  summary: string;
  gallery: GalleryItem[];
};

export const ACE_RESULTS: AceYear[] = [
  {
    year: 2026,
    slug: "ace2026",
    placement: "5th",
    host: "Hosted at McMaster",
    hostLong: "McMaster University — our home campus",
    note: "Second year competing",
    summary:
      "Our second year at ACE, and the first time McMaster hosted it. The team built a functional exoskeleton from scratch across the full school year and placed 5th overall.",
    gallery: [
      {
        src: "/ace_2026/DSCF0584.jpeg",
        alt: "The full McMaster Exoskeleton team gathered outdoors on campus with two pilots in suits at the centre.",
      },
      {
        src: "/ace_2026/IMG_4369.jpg",
        alt: "Team members making final adjustments to the exoskeleton before a competition run.",
      },
      {
        src: "/ace_2026/IMG_4128.JPG",
        alt: "A pilot in the exoskeleton preparing at the start of a competition event.",
        position: "object-[45%_50%]",
      },
      {
        src: "/ace_2026/sponsors.jpg",
        alt: "The exoskeleton's control pack showing sponsor logos during competition.",
        position: "object-[50%_63%]",
      },
      {
        src: "/ace_2026/IMG_4563.jpg",
        alt: "The team working on the suit between events at ACE 2026.",
      },
      {
        src: "/ace_2026/IMG_4800.JPG",
        alt: "A pilot walking in the exoskeleton during an ACE 2026 event.",
      },
    ],
  },
  {
    year: 2025,
    slug: "ace2025",
    placement: "5th",
    host: "Hosted at U. Michigan",
    hostLong: "The University of Michigan",
    note: "First year competing",
    summary:
      "Our first year competing at ACE. The team built a functional exoskeleton in just five months and placed 5th overall, against schools that had been at it far longer.",
    gallery: [
      {
        src: "/ace_2025/full_suit_image.png",
        alt: "The complete 2025 exoskeleton worn by a pilot, showing the back-mounted control pack and powered leg structure.",
        position: "object-[55%_center]",
      },
      {
        src: "/ace_2025/juan_stair_climb.png",
        alt: "A pilot climbing stairs in the exoskeleton during the stair climbing event.",
      },
      {
        src: "/ace_2025/vineet_obstacle.JPG",
        alt: "A pilot navigating the obstacle course in the exoskeleton.",
      },
      {
        src: "/ace_2025/dylan_presenting.png",
        alt: "A team member presenting the exoskeleton design to competition judges.",
      },
      {
        src: "/ace_2025/working_on_suit.JPG",
        alt: "Team members working on the suit in the pit area between events.",
      },
      {
        src: "/ace_2025/all_pilots_ace.png",
        alt: "All ACE 2025 pilots together at the competition.",
      },
    ],
  },
];

export const getAceYear = (year: number) =>
  ACE_RESULTS.find((r) => r.year === year);
