// Current structure and responsibilities supplied by the team from its
// 2026/27 application form. These describe member work, not a list of deployed features.
export type TeamRole = {
  id: string;
  name: string;
  description: string;
  responsibilities: { title: string; detail: string }[];
  tools: string[];
  expectation?: string;
};

export const TEAM_ROLES: Record<"mechanical" | "electrical" | "software", TeamRole[]> = {
  mechanical: [
    {
      id: "waist", name: "Waist",
      description: "Design the module that carries the electronics and directly interfaces with the pilot. The work balances structural loading, comfort, safety and space for the systems inside.",
      responsibilities: [
        { title: "Model and package", detail: "Develop CAD models and make room for boards, batteries and wiring with electrical and software teammates." },
        { title: "Design for fabrication", detail: "Select materials and print processes, design for 3D printing, and choose fasteners and hardware." },
        { title: "Build and test", detail: "Print, assemble and test the waist module, considering how it fits and carries loads on a person." },
      ],
      tools: ["CAD modelling", "3D printing", "Materials", "Fasteners", "Assembly & testing"],
    },
    {
      id: "linkages", name: "Linkages",
      description: "Design the joints, linkages and mounting hardware that follow the pilot’s legs and transmit assistive torque. The aim is to align human and machine motion without fighting the wearer.",
      responsibilities: [
        { title: "Define the motion", detail: "Work on joint kinematics, range of motion, linkage geometry and strap design." },
        { title: "Engineer the interfaces", detail: "Design motor mounts, bearings, mechanical hard stops and tolerances; select materials and fabrication methods." },
        { title: "Integrate and assemble", detail: "Print, assemble and test parts while coordinating IMU placement and wiring-harness routing with electrical and software teams." },
      ],
      tools: ["Joint kinematics", "CAD", "Tolerancing", "Motor mounts", "Printing & assembly"],
    },
  ],
  electrical: [
    {
      id: "power-architecture", name: "Power Architecture",
      description: "Design the electrical supply for the suit: regulate voltages and distribute power to its onboard systems. The work combines circuit design with practical board assembly and testing.",
      responsibilities: [
        { title: "Design the power system", detail: "Develop power-distribution circuits and PCB layouts for the suit’s electrical supply." },
        { title: "Assemble and validate", detail: "Work on soldering, wiring, physical circuit assembly and testing." },
        { title: "Integrate across disciplines", detail: "Coordinate with software and mechanical teams on system fit, operation and electrical safety." },
      ],
      tools: ["Power electronics", "Altium or similar", "PCB layout", "Soldering", "Electrical safety"],
      expectation: "The application asks for a solid electrical and power-electronics foundation, experience with Altium or similar PCB tools, hands-on assembly skills and an understanding of electrical safety.",
    },
    {
      id: "actuation-sensing", name: "Actuation & Sensing",
      description: "Design and integrate the sensors and motors that connect the suit to the pilot’s movement, from IMU measurements to motor-control signals.",
      responsibilities: [
        { title: "Design circuits", detail: "Contribute to circuit design and component selection for sensing and actuation." },
        { title: "Connect hardware and code", detail: "Support embedded programming and integrate electrical, software and mechanical systems." },
        { title: "Build the physical system", detail: "Solder, test and set up hardware, following clean wiring and cable-management standards." },
      ],
      tools: ["Circuit design", "Sensors & motors", "Embedded programming", "Soldering", "Wiring & testing"],
    },
  ],
  software: [
    {
      id: "embedded-controls", name: "Embedded & Controls",
      description: "Build the firmware architecture connecting physical hardware to control logic. Work spans microcontroller code, communication, control algorithms and hardware validation.",
      responsibilities: [
        { title: "Firmware development", detail: "Develop, test and maintain modular C/C++ firmware for system microcontrollers such as STM32." },
        { title: "Testing and telemetry", detail: "Use Python for automated test suites, hardware-validation scripts and telemetry logging." },
        { title: "Low-level protocols", detail: "Implement and optimise CAN, I²C, SPI and DMA paths between sensors, controllers and actuators." },
        { title: "Control systems", detail: "Use ROS / ROS 2 to write, simulate and tune algorithms for exoskeleton kinematics and actuation." },
        { title: "Hardware integration", detail: "Work with Electrical on sensors, motor drivers and power systems, with modular code and disciplined Git version control." },
      ],
      tools: ["C / C++", "STM32", "Python", "CAN · I²C · SPI · DMA", "ROS / ROS 2", "Git"],
    },
    {
      id: "ai-ml", name: "AI & Machine Learning",
      description: "Develop the predictive models that interpret pilot movement and inform torque assistance. The work connects research, multi-sensor data and real-time deployment.",
      responsibilities: [
        { title: "Applied research", detail: "Review academic literature and adapt architectures for biomechanical intent and torque prediction." },
        { title: "Model development", detail: "Design, train and evaluate models with frameworks such as PyTorch and TensorFlow." },
        { title: "Benchmarking", detail: "Run controlled experiments comparing accuracy, latency and generalisation against established baselines." },
        { title: "Data engineering", detail: "Build pipelines for dynamic multi-sensor streams and extract useful predictive features." },
        { title: "Deployment and tooling", detail: "Work with Embedded & Controls on edge deployment and hardware-in-the-loop testing. Build dashboards for metrics, training runs and live telemetry." },
        { title: "Reproducible work", detail: "Maintain version control, clear documentation and repeatable research workflows." },
      ],
      tools: ["PyTorch", "TensorFlow", "Data pipelines", "Model benchmarking", "Edge deployment", "Visualisation"],
    },
  ],
};

export const SOFTWARE_RECRUITING_NOTE = "Software recruitment is competitive because of team capacity. Applications are evaluated on technical curiosity, relevant skills and projects, problem-solving mindset, and alignment with team goals.";

export const getTeamRoles = (slug: string) => TEAM_ROLES[slug as keyof typeof TEAM_ROLES] ?? [];
