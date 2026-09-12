// Public overview grounded in the documented competition build.
// Keep implementation parameters and future architecture out of website data.
// Current member responsibilities are maintained separately in teamRoles.ts.

export const SOFTWARE_ARCHITECTURE = {
  title: "Sense. Understand. Assist.",
  introduction: "The software connects measurements from the wearer to commands for the powered joints. Each stage brings a different engineering challenge.",
  stages: [
    {
      name: "Sense movement",
      device: "Motion sensing",
      summary: "Turn physical movement into data.",
      detail: "Body-mounted sensors provide measurements of how the wearer moves. Software reads and organises those measurements so they can be used for prediction and control.",
      work: "Sensor integration · Data acquisition",
    },
    {
      name: "Understand motion",
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
