// Public system functions only; detailed responsibilities live on discipline pages.
// Coordinates refer to the uncropped 2:3 hardware photograph.

import type { SuitRegionId } from "@/data/suitGeometry";

export type PhotoAnnotation = {
  x: number;
  y: number;
  side: "left" | "right";
  labelY: number;
};

export type SuitPart = {
  id: string;
  name: string;
  hint: string;
  detail: string;
  /**
   * The subteams that own this part, not everyone who touches it.
   */
  contributors: { division: "mechanical" | "electrical" | "software"; id: string }[];
  regions: readonly SuitRegionId[];
  /** Present only for the four parts that carry a label on the photograph. */
  photoAnnotation?: PhotoAnnotation;
};

export const SUIT_PARTS: SuitPart[] = [
  {
    id: "power",
    name: "Power & electronics",
    hint: "Boards, battery and distribution",
    detail: "Power distribution boards and the onboard computer sit at the waist. Their connections supply the suit’s electronics and carry signals between sensing, software and the powered joints.",
    contributors: [{ division: "electrical", id: "power-architecture" }, { division: "mechanical", id: "waist" }],
    regions: ["power"],
    photoAnnotation: { x: 42, y: 24, side: "left", labelY: 20 },
  },
  {
    id: "waist",
    name: "Waist & fit",
    hint: "The connection to the pilot",
    detail: "The waist connects the suit to its wearer and supports the onboard electronics. Attachment, comfort and packaging have to work together around a moving body.",
    contributors: [{ division: "mechanical", id: "waist" }],
    regions: ["waist"],
    photoAnnotation: { x: 50, y: 27, side: "right", labelY: 30 },
  },
  {
    id: "actuation",
    name: "Powered joints",
    hint: "Hip & knee assistance",
    detail: "Motors at the hip and knee turn electrical power and control commands into assistive torque. Their mounts and joint geometry connect that assistance to the pilot’s legs.",
    contributors: [{ division: "mechanical", id: "linkages" }, { division: "electrical", id: "actuation-sensing" }, { division: "software", id: "embedded-controls" }, { division: "software", id: "ai-ml" }],
    regions: ["hipMotor", "kneeMotor"],
    photoAnnotation: { x: 41, y: 66, side: "left", labelY: 61 },
  },
  {
    id: "linkages",
    name: "Leg structure",
    hint: "Structure that follows movement",
    detail: "Linkages, joints and mounting hardware connect the powered assemblies to the pilot. Alignment and range of motion guide how the structure follows the leg and transfers assistive torque.",
    contributors: [{ division: "mechanical", id: "linkages" }],
    regions: ["linkages"],
    photoAnnotation: { x: 31, y: 76, side: "right", labelY: 80 },
  },
  {
    id: "sensing",
    name: "Motion sensing",
    hint: "Movement into data",
    detail: "Motion sensors inside the leg-mounted controller enclosures measure how the pilot moves. The local electronics read those measurements and pass them to the onboard computer.",
    contributors: [{ division: "electrical", id: "actuation-sensing" }, { division: "software", id: "embedded-controls" }],
    regions: ["thighMcu", "shinMcu"],
  },
  {
    id: "prediction",
    name: "Prediction & learning",
    hint: "Movement data into intent",
    detail: "The onboard computer uses movement data to estimate how the pilot’s joints will move next. Building and evaluating those models is where machine learning meets a physical system that someone is wearing.",
    contributors: [{ division: "software", id: "ai-ml" }],
    regions: ["pi"],
  },
  {
    id: "control",
    name: "Control & firmware",
    hint: "Intent into motor commands",
    detail: "Control software turns estimated movement into commands for the powered joints, and firmware carries those commands to the motor electronics. Command limits are part of the control design around the wearer.",
    contributors: [{ division: "software", id: "embedded-controls" }],
    regions: ["thighMcu", "shinMcu"],
  },
];

// A measured movement passes through prediction, control and actuation,
// then returns to sensing as the pilot and suit move together.
export const SUIT_RESPONSE = [
  { id: "sensing", name: "Sensing", hint: "Measure movement" },
  { id: "prediction", name: "Prediction", hint: "Estimate intent" },
  { id: "control", name: "Control", hint: "Send motor commands" },
  { id: "actuation", name: "Actuation", hint: "Apply joint torque" },
] as const;
