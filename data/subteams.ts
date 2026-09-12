import type { IconType } from "react-icons";
import { FaBolt, FaCogs, FaCode, FaShieldAlt } from "react-icons/fa";

/**
 * One definition of the subteams, replacing two divergent shapes: DESIGN_TEAMS
 * in app/design/page.tsx and SUBTEAMS in app/recruiting/page.tsx, plus a third
 * copy of the long-form body text duplicated verbatim between
 * app/design/[slug]/page.tsx and the three recruiting subpages.
 *
 * Colours are stored as complete class strings, never interpolated. The old code
 * built classes like `bg-${subteam.color}` and `group-hover:text-${team.color}`,
 * which Tailwind cannot see at build time, so those hover states rendered
 * nothing at all.
 */

export type Subteam = {
  slug: "electrical" | "mechanical" | "software" | "safety";
  name: string;
  icon: IconType;
  /** One line, for cards. */
  summary: string;
  /** What the subteam owns on the suit. */
  body: string;
  /** Concrete things a member works on — the detail recruits actually want. */
  work: string[];
  /** Complete Tailwind classes. Never build these by interpolation. */
  text: string;
  border: string;
  bg: string;
  /** Whether this subteam takes general-member applications. */
  recruiting: boolean;
};

export const SUBTEAMS: Subteam[] = [
  {
    slug: "mechanical",
    name: "Mechanical",
    icon: FaCogs,
    summary:
      "The waist, hip and knee assemblies, and the ankle interface that connects the suit to its wearer.",
    body: "The mechanical division has two subteams: Waist and Linkages. Waist develops the module that carries the electronics and interfaces with the pilot; Linkages develops the joints, moving structure and mounting hardware that follow the pilot’s legs.",
    work: [
      "Develop the waist structure and electronics enclosure",
      "Design hip motion and mechanical travel stops",
      "Refine knee linkages, shin plates and attachment straps",
      "Work on the ankle ball joint and boot attachment",
      "Evaluate fit, joint alignment and the path of loads through the suit",
    ],
    text: "text-ashGold",
    border: "hover:border-ashGold/40",
    bg: "bg-ashGold/10",
    recruiting: true,
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: FaBolt,
    summary:
      "Battery distribution, custom boards, joint sensors and the communication hardware linking the suit.",
    body: "The electrical division has two subteams: Power Architecture and Actuation & Sensing. Power Architecture develops the suit’s power distribution and regulation. Actuation & Sensing integrates the sensors, motors and circuits that connect the suit to movement.",
    work: [
      "Design power-distribution circuits and PCB layouts",
      "Select and integrate sensors, motors and circuit components",
      "Support embedded programming and system integration",
      "Solder, assemble and test circuits with clean wiring",
      "Coordinate packaging and interfaces with mechanical and software teams",
    ],
    text: "text-yellow-400",
    border: "hover:border-yellow-400/40",
    bg: "bg-yellow-400/10",
    recruiting: true,
  },
  {
    slug: "software",
    name: "Software",
    icon: FaCode,
    summary:
      "Sensor firmware, motion prediction and motor commands: the code connecting measurements to assistance.",
    body: "The software division has two subteams: Embedded & Controls and AI & Machine Learning. Embedded & Controls develops firmware, communication and control systems. AI & ML develops predictive models, data pipelines and the experiments needed to evaluate assistance algorithms.",
    work: [
      "Develop C/C++ microcontroller firmware and communication pipelines",
      "Build Python testing, hardware-validation and telemetry tools",
      "Write, simulate and tune controls using ROS / ROS 2",
      "Research, train and benchmark intent and torque prediction models",
      "Build multi-sensor data pipelines and interactive dashboards",
      "Collaborate on edge deployment and hardware-in-the-loop testing",
    ],
    text: "text-mutedBlue",
    border: "hover:border-mutedBlue/40",
    bg: "bg-mutedBlue/10",
    recruiting: true,
  },
  {
    slug: "safety",
    name: "Health & Safety",
    icon: FaShieldAlt,
    summary:
      "Reviewing the mechanical, electrical and software protections around a person wearing the suit.",
    body: "Safety work crosses the whole system: joint travel, attachment to the wearer, power protection and software commands. The documented designs combine physical stops and an emergency stop with fuses, command limits and shutdown handling.",
    work: [
      "Review mechanical travel limits and attachment interfaces",
      "Evaluate emergency-stop and electrical protection behaviour",
      "Review firmware command limits and fault responses",
      "Document test observations and unresolved system risks",
    ],
    text: "text-dustyRose",
    border: "hover:border-dustyRose/40",
    bg: "bg-dustyRose/10",
    recruiting: false,
  },
];

export const getSubteam = (slug: string) =>
  SUBTEAMS.find((s) => s.slug === slug);
