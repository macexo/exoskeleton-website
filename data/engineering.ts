// Public overview grounded in the documented competition build.
// Keep implementation parameters and future architecture out of website data.
// Current member responsibilities are maintained separately in teamRoles.ts.

export type EngineeringOverview = {
  kind: "areas" | "flow";
  title: string;
  introduction: string;
  stages: readonly {
    name: string;
    device: string;
    summary: string;
    detail: string;
    work: string;
  }[];
};

export const SOFTWARE_ARCHITECTURE = {
  kind: "flow",
  title: "Sense. Predict. Control. Assist.",
  introduction: "Software follows a real information path: it reads movement, estimates intent, calculates commands and carries those commands to the powered joints.",
  stages: [
    {
      name: "Sense movement",
      device: "Motion sensing",
      summary: "Turn physical movement into data.",
      detail: "Body-mounted sensors provide measurements of how the wearer moves. Software reads and organises those measurements so they can be used for prediction and control.",
      work: "Sensor integration · Data acquisition",
    },
    {
      name: "Predict motion",
      device: "Machine learning",
      summary: "Find useful patterns in movement.",
      detail: "Predictive models use movement data to estimate how the pilot’s joints will move. Developing and evaluating these models connects machine learning to a physical system.",
      work: "Data processing · Predictive models",
    },
    {
      name: "Guide assistance",
      device: "Control systems",
      summary: "Translate motion into motor commands.",
      detail: "Control software uses movement estimates to calculate commands for the powered joints. Command limits are part of the control design around the person wearing the suit.",
      work: "Control algorithms · Command limits",
    },
    {
      name: "Drive the joints",
      device: "Hardware integration",
      summary: "Connect the code to the machine.",
      detail: "Communication between the onboard computer and motor electronics carries commands to the hip and knee actuators. Bringing these pieces together connects software, electrical and mechanical work.",
      work: "Motor communication · System integration",
    },
  ],
} as const;

export const DISCIPLINE_ENGINEERING = {
  mechanical: {
    sectionTitle: "Where the person meets the machine.",
    sectionIntroduction: "The waist and leg structure connect the pilot to the powered joints. Their physical interfaces also make room for electronics, sensors and wiring.",
    overview: {
      kind: "areas",
      title: "Four interfaces. One moving structure.",
      introduction: "These are connected design areas rather than sequential steps. CAD, material selection, fabrication, assembly and testing support the waist and every leg interface.",
      stages: [
        {
          name: "Fit the pilot",
          device: "Waist & attachment",
          summary: "Support the suit around its wearer.",
          detail: "The waist is a main connection between the pilot and the exoskeleton. It supports the structure and houses onboard electronics, bringing attachment and comfort together with the space needed for boards, power hardware and wiring.",
          work: "Pilot fit · Structural support · Electronics packaging",
        },
        {
          name: "Move at the hip",
          device: "Hip assembly",
          summary: "Accommodate motion in more than one direction.",
          detail: "The hip assembly allows the leg to move forwards, backwards and sideways. Joint geometry and motor mounting connect assistance to the moving structure, while physical stops limit travel. Mechanical, electrical and software work meet at this powered interface.",
          work: "Joint geometry · Motor mounting · Travel limits",
        },
        {
          name: "Guide the knee",
          device: "Knee & shin interface",
          summary: "Connect a powered joint to the lower leg.",
          detail: "The knee assembly bends and straightens with the pilot’s leg. Linkages and the shin plate connect the joint to straps around the wearer. Alignment, attachment and space for sensors and wiring have to work together as the leg moves.",
          work: "Joint alignment · Linkages · Straps & sensor placement",
        },
        {
          name: "Connect to the ground",
          device: "Ankle & boot interface",
          summary: "Carry structural loads down through the suit.",
          detail: "The ankle interface is designed to route the suit’s weight towards the ground. Its joint allows movement at the foot, while a strap secures the assembly over a work boot. This connection links lower-leg motion with attachment and load support.",
          work: "Range of motion · Boot attachment · Load support",
        },
      ],
    },
  },
  electrical: {
    sectionTitle: "Power and signals, brought together.",
    sectionIntroduction: "Electrical work connects the power supply, motion sensors and motor electronics. Those systems need physical space in the suit and interfaces that software can work with.",
    overview: {
      kind: "areas",
      title: "Four systems. Designed together.",
      introduction: "These systems are developed in parallel rather than as a linear pipeline. Circuit design, component selection, PCB layout, assembly and testing support each area and the connections between them.",
      stages: [
        {
          name: "Distribute power",
          device: "Supply & regulation",
          summary: "Supply the motors and onboard electronics.",
          detail: "The battery supplies the suit’s powered joints and onboard electronics. Distribution and voltage regulation provide the supply paths these systems need. Integrating them also means coordinating space for power hardware and connections within the waist structure.",
          work: "Power distribution · Voltage regulation · Waist packaging",
        },
        {
          name: "Read movement",
          device: "Motion sensing",
          summary: "Connect body-mounted measurements to software.",
          detail: "Motion sensors measure the orientation of body segments as the pilot moves. The circuits and connections designed around them carry those measurements to the onboard computer. Sensor mounting and wiring are coordinated with Mechanical, while Software reads and interprets the incoming data.",
          work: "Circuit design · Sensor integration · Wiring",
        },
        {
          name: "Drive the joints",
          device: "Motor electronics",
          summary: "Bring electrical power and control commands together.",
          detail: "Motor electronics connect the electrical supply and software commands to actuation at the hip and knee. Their circuits, power connections and communication hardware sit alongside the moving assemblies, linking electrical design to control software and mechanical mounting.",
          work: "Circuit design · Motor integration · Control signals",
        },
        {
          name: "Integrate protection",
          device: "Protection & shutdown",
          summary: "Build protection into the electrical system.",
          detail: "Fuses and emergency-stop hardware form part of the suit’s electrical protections. Packaging and wiring must accommodate these devices alongside the supply and motor connections. Their behaviour also has to be considered with software shutdown handling and the pilot’s physical controls.",
          work: "Circuit protection · Emergency stop · System integration",
        },
      ],
    },
  },
  software: {
    sectionTitle: "From movement to assistance.",
    sectionIntroduction: "Sensing, prediction and control connect the wearer’s movement to the powered joints. Each part of the software works through interfaces with the suit’s physical hardware.",
    overview: SOFTWARE_ARCHITECTURE,
  },
} satisfies Record<"mechanical" | "electrical" | "software", {
  sectionTitle: string;
  sectionIntroduction: string;
  overview: EngineeringOverview;
}>;
