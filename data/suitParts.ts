/**
 * Annotated hotspots over `public/ace_2025/full_suit_image.png`.
 *
 * Coordinates are percentages of that image's natural 1800x2400 (3:4) frame, so
 * the diagram MUST render the photo un-cropped in a 3:4 box for the markers to
 * land correctly. Positions were read off a coordinate grid overlaid on the
 * actual photograph.
 *
 * `owner` ties each part back to the subteam that builds it, which is the point
 * of the diagram: it shows a recruit where their discipline physically lives on
 * the machine, and shows a sponsor that the team knows its own hardware.
 */

export type SuitPart = {
  id: string;
  name: string;
  /** % from left of the image. */
  x: number;
  /** % from top of the image. */
  y: number;
  owner: "Mechanical" | "Electrical" | "Software" | "Health & Safety";
  detail: string;
};

export const SUIT_PARTS: SuitPart[] = [
  {
    id: "control-pack",
    name: "Control pack",
    x: 68,
    y: 20,
    owner: "Electrical",
    detail:
      "The waist-mounted enclosure carries the onboard computing and electronics. Mechanical packaging gives power, sensing and software a place on the suit.",
  },
  {
    id: "e-stop",
    name: "Emergency stop",
    x: 32,
    y: 37,
    owner: "Health & Safety",
    detail:
      "A physical emergency stop gives the pilot a way to interrupt powered operation. It forms part of the suit’s mechanical, electrical and software safety considerations.",
  },
  {
    id: "hip",
    name: "Hip actuator",
    x: 36,
    y: 46,
    owner: "Mechanical",
    detail:
      "The hip assembly connects powered actuation to the upper leg. Its geometry has to accommodate the wearer’s movement while maintaining joint alignment.",
  },
  {
    id: "harness",
    name: "Wiring harness",
    x: 55,
    y: 44,
    owner: "Electrical",
    detail:
      "Power and signal wiring connect the electronics, sensors and actuators. Routing has to account for moving joints and the person wearing the suit.",
  },
  {
    id: "knee",
    name: "Knee actuator",
    x: 66,
    y: 61,
    owner: "Mechanical",
    detail:
      "A powered knee joint connects the moving structure to a strapped shin interface. Linkage geometry and attachment both matter when transferring assistance to the leg.",
  },
  {
    id: "foot",
    name: "Foot interface",
    x: 56,
    y: 87,
    owner: "Mechanical",
    detail:
      "The leg structure connects to the wearer’s boot through an ankle interface. This connection supports a path for the suit’s weight toward the ground while accommodating ankle movement.",
  },
];

export const OWNER_STYLES: Record<SuitPart["owner"], string> = {
  Mechanical: "text-ashGold",
  Electrical: "text-yellow-400",
  Software: "text-mutedBlue",
  "Health & Safety": "text-dustyRose",
};
