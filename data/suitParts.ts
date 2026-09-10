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
      "Back-mounted enclosure carrying the battery, power distribution and controller boards. It also carries our sponsors' logos to every event we run.",
  },
  {
    id: "e-stop",
    name: "Emergency stop",
    x: 32,
    y: 37,
    owner: "Health & Safety",
    detail:
      "A hardware cutoff within the pilot's reach. Pressing it removes power from the actuators immediately — ACE will not clear a suit for the course without one.",
  },
  {
    id: "hip",
    name: "Hip actuator",
    x: 36,
    y: 46,
    owner: "Mechanical",
    detail:
      "Powered hip joint. It adds torque through the swing and stance phases of the pilot's gait and carries load into the frame rather than the pilot's body.",
  },
  {
    id: "harness",
    name: "Wiring harness",
    x: 55,
    y: 44,
    owner: "Electrical",
    detail:
      "Power and signal routing between the control pack, the actuators and the sensors — built to survive being walked, climbed and fallen in.",
  },
  {
    id: "knee",
    name: "Knee actuator",
    x: 66,
    y: 61,
    owner: "Mechanical",
    detail:
      "Powered knee joint. This is the actuator doing the most work on the stair climb, where it drives the pilot's full body weight upward each step.",
  },
  {
    id: "foot",
    name: "Foot interface",
    x: 56,
    y: 87,
    owner: "Mechanical",
    detail:
      "Where the whole structure meets the ground. The boot plate transfers load out of the frame and has to stay rigid without limiting the pilot's ankle.",
  },
];

export const OWNER_STYLES: Record<SuitPart["owner"], string> = {
  Mechanical: "text-ashGold",
  Electrical: "text-yellow-400",
  Software: "text-mutedBlue",
  "Health & Safety": "text-dustyRose",
};
