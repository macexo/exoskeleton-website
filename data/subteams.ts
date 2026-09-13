/**
 * One definition of the subteams, replacing two divergent shapes: DESIGN_TEAMS
 * in app/design/page.tsx and SUBTEAMS in app/recruiting/page.tsx, plus a third
 * copy of the long-form body text duplicated verbatim between
 * app/design/[slug]/page.tsx and the three recruiting subpages.
 */

export type Subteam = {
  slug: "electrical" | "mechanical" | "software" | "safety";
  name: string;
  /** Three or four words, for dense directory rows. */
  short: string;
  /** One line, for cards. */
  summary: string;
  /** What the subteam owns on the suit. */
  body: string;
  /**
   * Only rendered for subteams without entries in data/teamRoles.ts — in
   * practice, safety. The other three render TeamRoles instead, so carrying
   * `work` for them left 16 bullets that no page displayed.
   */
  work?: string[];
};

export const SUBTEAMS: Subteam[] = [
  {
    slug: "mechanical",
    name: "Mechanical",
    short: "The structure around the pilot.",
    summary:
      "The waist, hip and knee assemblies, and the ankle interface that connects the suit to its wearer.",
    body: "The mechanical division has two subteams: Waist and Linkages. Waist develops the module that carries the electronics and interfaces with the pilot; Linkages develops the joints, moving structure and mounting hardware that follow the pilot’s legs.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    short: "Power, sensing and actuation.",
    summary:
      "Battery distribution, custom boards, joint sensors and the communication hardware linking the suit.",
    body: "The electrical division has two subteams: Power Architecture and Actuation & Sensing. Power Architecture develops the suit’s power distribution and regulation. Actuation & Sensing integrates the sensors, motors and circuits that connect the suit to movement.",
  },
  {
    slug: "software",
    name: "Software",
    short: "Firmware, controls and prediction.",
    summary:
      "Sensor firmware, motion prediction and motor commands: the code connecting measurements to assistance.",
    body: "The software division has two subteams: Embedded & Controls and AI & Machine Learning. Embedded & Controls develops firmware, communication and control systems. AI & ML develops predictive models, data pipelines and the experiments needed to evaluate assistance algorithms.",
  },
  {
    slug: "safety",
    name: "Health & Safety",
    short: "Hazard analysis across every division.",
    summary:
      "Reviewing the mechanical, electrical and software protections around a person wearing the suit.",
    body: "Safety work crosses the whole system: joint travel, attachment to the wearer, power protection and software commands. The documented designs combine physical stops and an emergency stop with fuses, command limits and shutdown handling.",
    work: [
      "Review mechanical travel limits and attachment interfaces",
      "Evaluate emergency-stop and electrical protection behaviour",
      "Review firmware command limits and fault responses",
      "Document test observations and unresolved system risks",
    ],
  },
];

export const getSubteam = (slug: string) =>
  SUBTEAMS.find((s) => s.slug === slug);
