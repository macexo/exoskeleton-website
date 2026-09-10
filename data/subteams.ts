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
      "The structure that carries the load — joints, linkages, and the frame that has to fit a real person.",
    body: "The mechanical team designs and manufactures the exoskeleton's structural components. That means joint mechanisms, weight distribution, and material selection that supports the pilot's full range of motion below the hip while staying stable and comfortable enough to wear for a full competition run.",
    work: [
      "CAD the hip and knee joint assemblies in SolidWorks",
      "Run FEA on load-bearing members before anything is cut",
      "Machine and assemble aluminium structural parts",
      "Design the harness and fit system around a real pilot",
      "Iterate on weight — every gram sits on someone's legs",
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
      "Power, sensing and the safety cutoffs — everything between the battery and the actuators.",
    body: "The electrical team designs and implements the exoskeleton's core systems: power distribution, circuit design, sensor integration and the safety features that let a pilot trust the suit. If it carries current, this team owns it.",
    work: [
      "Design custom PCBs for power distribution and sensing",
      "Select and integrate motor drivers and actuators",
      "Build the emergency-stop and safety cutoff circuitry",
      "Wire and harness the suit so it survives a competition run",
      "Manage battery systems and power budgeting",
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
      "The control loop — reading the pilot's intent and turning it into torque.",
    body: "The software team develops the firmware that controls the exoskeleton, processes sensor input for real-time motion analysis, and turns a pilot's intent into actuator commands. The work spans bare-metal embedded control up to applied machine learning on gait data.",
    work: [
      "Write embedded firmware for the motor controllers",
      "Build the real-time control loop and state machine",
      "Process IMU and load-cell data for gait detection",
      "Apply ML to classify pilot intent from sensor streams",
      "Build tooling to log and visualise test runs",
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
      "Hazard analysis and the competition safety case — the work that lets us put a person in the suit.",
    body: "The safety team evaluates the exoskeleton's design for potential hazards, prepares the competition safety report, and implements the features that minimise risk during operation and testing. ACE will not let a suit onto the course without this work.",
    work: [
      "Run hazard analyses across mechanical, electrical and software",
      "Author the ACE competition safety report",
      "Define and rehearse emergency doff procedures",
      "Set the test protocols every pilot session follows",
    ],
    text: "text-dustyRose",
    border: "hover:border-dustyRose/40",
    bg: "bg-dustyRose/10",
    recruiting: false,
  },
];

export const getSubteam = (slug: string) =>
  SUBTEAMS.find((s) => s.slug === slug);
