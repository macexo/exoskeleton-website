/**
 * What is actually on the suit.
 *
 * ────────────────────────────────────────────────────────────────────────
 *  FOR THE TEAM: the `specs` list below is deliberately short, because these
 *  are the only figures I could source from material the team has already
 *  published (the sponsorship proposal, the ACE pages and competition photos).
 *
 *  Numbers like total mass, joint torque, battery capacity, actuator model and
 *  runtime are the first things a sponsor or a rival team looks for, and they
 *  are the most credible thing this site could publish. They were left out
 *  rather than guessed. Add them here and they appear on /design automatically.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Spec = { label: string; value: string; note?: string };

export const SUIT_SPECS: Spec[] = [
  { label: "Type", value: "Powered lower-limb exoskeleton" },
  { label: "Actuated joints", value: "Hip and knee", note: "Bilateral" },
  { label: "Structure", value: "Machined aluminium" },
  { label: "Build cycle", value: "One academic year", note: "From blank CAD to competition" },
  { label: "Pilot control", value: "Onboard, pilot-initiated" },
  { label: "Safety", value: "Hardware e-stop + rapid doff" },
];

/**
 * Grouped capability panel. Each group is a subsystem; each item is something
 * genuinely on the suit or in the toolchain, sourced from the team's own
 * subteam descriptions and from what is visible in competition photographs.
 */
export const SUIT_SYSTEMS = [
  {
    group: "Structure",
    items: [
      "Machined aluminium frame",
      "Hip joint assembly",
      "Knee joint assembly",
      "Harness & fit system",
      "Pilot boot interface",
    ],
  },
  {
    group: "Actuation & power",
    items: [
      "Brushless joint actuators",
      "Motor drivers",
      "Battery pack",
      "Power distribution board",
      "Hardware emergency stop",
    ],
  },
  {
    group: "Sensing & control",
    items: [
      "Embedded motor controllers",
      "Real-time control loop",
      "IMU sensing",
      "Load sensing",
      "Gait state machine",
    ],
  },
  {
    group: "Toolchain",
    items: [
      "SolidWorks",
      "KISSsoft",
      "FEA",
      "Custom PCB design",
      "Embedded C/C++",
      "Python",
    ],
  },
] as const;

/** How a season actually runs — the thing recruits most want to understand. */
export const BUILD_CYCLE = [
  {
    phase: "Design",
    window: "Fall",
    detail:
      "Requirements from the ACE rulebook, concept selection, then CAD and circuit design. Nothing gets cut until the analysis says it holds.",
  },
  {
    phase: "Build",
    window: "Winter",
    detail:
      "Machining, PCB assembly, wiring and firmware bring-up. Subsystems are tested standalone before they ever go on a person.",
  },
  {
    phase: "Integrate & test",
    window: "Late winter",
    detail:
      "The suit comes together, a pilot straps in, and the safety team signs off on every test session.",
  },
  {
    phase: "Compete",
    window: "Spring",
    detail:
      "Design review, safety inspection, then stairs and the obstacle course at ACE.",
  },
] as const;
