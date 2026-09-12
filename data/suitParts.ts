// Public system functions only; detailed responsibilities live on discipline pages.
// Coordinates refer to the uncropped 2:3 hardware photograph.
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
  learnMore: { href: string; label: string };
  photoAnnotation?: PhotoAnnotation;
};

export const SUIT_PARTS: SuitPart[] = [
  {
    id: "power",
    name: "Power & computing",
    hint: "Onboard electronics",
    detail: "Power distribution and computing hardware sit at the waist. Their connections supply the suit’s electronics and carry signals between sensing, software and the powered joints.",
    learnMore: { href: "/design/electrical", label: "Explore electrical design" },
    photoAnnotation: { x: 42, y: 24, side: "left", labelY: 20 },
  },
  {
    id: "waist",
    name: "Waist & fit",
    hint: "The connection to the pilot",
    detail: "The waist connects the suit to its wearer and supports the onboard electronics. Attachment, comfort and packaging have to work together around a moving body.",
    learnMore: { href: "/design/mechanical#waist", label: "Explore the waist module" },
    photoAnnotation: { x: 65, y: 25, side: "right", labelY: 33 },
  },
  {
    id: "actuation",
    name: "Powered joints",
    hint: "Hip & knee assistance",
    detail: "Motors at the hip and knee turn electrical power and control commands into assistive torque. Their mounts and joint geometry connect that assistance to the pilot’s legs.",
    learnMore: { href: "/design/electrical#actuation-sensing", label: "Explore actuation & sensing" },
    photoAnnotation: { x: 41, y: 66, side: "left", labelY: 61 },
  },
  {
    id: "linkages",
    name: "Leg structure",
    hint: "Structure that follows movement",
    detail: "Linkages, joints and mounting hardware connect the powered assemblies to the pilot. Alignment and range of motion guide how the structure follows the leg and transfers assistive torque.",
    learnMore: { href: "/design/mechanical#linkages", label: "Explore the linkages" },
    photoAnnotation: { x: 40, y: 75, side: "right", labelY: 80 },
  },
  {
    id: "sensing",
    name: "Motion sensing",
    hint: "Movement into data",
    detail: "Body-mounted sensors measure how the pilot moves. Electrical connections carry those measurements to the software that reads and interprets them.",
    learnMore: { href: "/design/electrical#actuation-sensing", label: "Explore actuation & sensing" },
  },
  {
    id: "software",
    name: "Software & controls",
    hint: "Data into motor commands",
    detail: "Firmware reads the sensors, predictive models estimate movement, and control software calculates commands for the powered joints. These stages connect the pilot’s motion to assistance.",
    learnMore: { href: "/design/software", label: "Explore software design" },
  },
];

export const SUIT_RESPONSE = [
  { id: "sensing", name: "Sensing", hint: "Measure movement" },
  { id: "software", name: "Software", hint: "Interpret & command" },
  { id: "actuation", name: "Assistance", hint: "Drive the joints" },
] as const;
