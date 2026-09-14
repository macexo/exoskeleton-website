// Current structure and responsibilities supplied by the team from its
// 2026/27 application form. These describe member work, not a list of deployed features.
export type TeamRole = {
  id: string;
  name: string;
  description: string;
  responsibilities: { title: string; detail: string }[];
  tools: string[];
};

export const TEAM_ROLES: Record<"mechanical" | "electrical" | "software", TeamRole[]> = {
  mechanical: [
    {
      id: "waist", name: "Waist",
      description: "Design the module that carries the electronics and directly interfaces with the pilot. The work balances structural loading, comfort, safety and space for the systems inside.",
      responsibilities: [
        { title: "CAD and packaging", detail: "Model the waist module and arrange space for boards, batteries and wiring with electrical and software teammates." },
        { title: "Materials and fabrication", detail: "Choose materials and print processes, and develop parts that can be produced through 3D printing." },
        { title: "Attachment and assembly", detail: "Select fasteners and hardware, then print and assemble the structure that directly interfaces with the pilot." },
        { title: "Fit and testing", detail: "Test the assembled module under load, considering pilot comfort, safety and how the electronics fit inside it." },
      ],
      tools: ["CAD modelling", "3D printing", "Materials", "Fasteners", "Assembly & testing"],
    },
    {
      id: "linkages", name: "Linkages",
      description: "Design the joints, linkages and mounting hardware that follow the pilot’s legs and transmit assistive torque. The aim is to align human and machine motion without fighting the wearer.",
      responsibilities: [
        { title: "Kinematics and fit", detail: "Develop joint geometry, range of motion, linkages and straps so the moving structure follows the pilot’s legs." },
        { title: "Mechanical interfaces", detail: "Design motor mounts, select bearings, and work on hard stops and tolerances where components meet." },
        { title: "Fabrication and assembly", detail: "Select materials and fabrication methods, then print and assemble parts into the moving leg structure." },
        { title: "Integration and testing", detail: "Test assemblies and coordinate IMU placement and wiring-harness routing with electrical and software teammates." },
      ],
      tools: ["Joint kinematics", "CAD", "Tolerancing", "Motor mounts", "Printing & assembly"],
    },
  ],
  electrical: [
    {
      id: "power-architecture", name: "Power Architecture",
      description: "Design the electrical supply for the suit: regulate voltages and distribute power to its onboard systems. The work combines circuit design with practical board assembly and testing.",
      responsibilities: [
        { title: "Distribution and regulation", detail: "Develop circuits that regulate voltages and distribute power to the suit’s onboard systems." },
        { title: "PCB design", detail: "Turn power-circuit designs into board layouts using Altium Designer or similar PCB tools." },
        { title: "Assembly and validation", detail: "Solder, wire and assemble circuits, then test the physical hardware with electrical safety in mind." },
        { title: "System integration", detail: "Coordinate board placement, wiring and operation with mechanical and software teammates so the supply works within the wearable suit." },
      ],
      tools: ["Power electronics", "Altium or similar", "PCB layout", "Soldering", "Electrical safety"],
    },
    {
      id: "actuation-sensing", name: "Actuation & Sensing",
      description: "Design and integrate the sensors and motors that connect the suit to the pilot’s movement. Work spans IMU measurements, motor-control signals, circuit assembly and the wiring that brings the hardware together.",
      responsibilities: [
        { title: "Circuits and components", detail: "Contribute to circuit design and select components for the suit’s sensing and actuation systems." },
        { title: "Sensors and motor signals", detail: "Integrate motion sensors and motors, connecting IMU measurements and motor-control signals to the rest of the system." },
        { title: "Hardware and code", detail: "Support embedded programming and work with software and mechanical teammates on the interfaces between their systems." },
        { title: "Assembly and testing", detail: "Solder, test and set up the hardware, following clean wiring and cable-management standards throughout the suit." },
      ],
      tools: ["Circuit design", "Sensors & motors", "Embedded programming", "Soldering", "Wiring & testing"],
    },
  ],
  software: [
    {
      id: "embedded-controls", name: "Embedded & Controls",
      description: "Build the firmware architecture connecting physical hardware to control logic. Work spans microcontroller code, communication, control algorithms and hardware validation.",
      responsibilities: [
        { title: "Firmware and communication", detail: "Develop C/C++ firmware for microcontrollers such as STM32. Implement CAN, I²C, SPI and DMA paths between sensors, controllers and actuators." },
        { title: "Controls and simulation", detail: "Use ROS / ROS 2 to write, simulate and tune algorithms for exoskeleton kinematics and actuation." },
        { title: "Testing and telemetry", detail: "Use Python to build automated test suites, hardware-validation scripts and telemetry logging tools." },
        { title: "Integration and code quality", detail: "Work with Electrical to integrate sensors, motor drivers and power systems. Maintain tested, modular firmware with disciplined Git version control." },
      ],
      tools: ["C / C++", "STM32", "Python", "CAN · I²C · SPI · DMA", "ROS / ROS 2", "Git"],
    },
    {
      id: "ai-ml", name: "AI & Machine Learning",
      description: "Develop the predictive models that interpret pilot movement and inform torque assistance. The work connects research, multi-sensor data and real-time deployment.",
      responsibilities: [
        { title: "Research and model development", detail: "Review literature on biomechanical intent and torque prediction. Adapt architectures and train models using PyTorch, TensorFlow or similar frameworks." },
        { title: "Data and visualisation", detail: "Process multi-sensor streams and extract predictive features. Build dashboards for model metrics, training runs and live telemetry." },
        { title: "Benchmarking and validation", detail: "Run controlled experiments comparing accuracy, latency and generalisation against established baselines." },
        { title: "Deployment and reproducibility", detail: "Collaborate with Embedded & Controls on edge deployment and hardware-in-the-loop testing. Maintain version control, clear documentation and repeatable research workflows." },
      ],
      tools: ["PyTorch", "TensorFlow", "Data pipelines", "Model benchmarking", "Edge deployment", "Visualisation"],
    },
  ],
};

export const getTeamRoles = (slug: string) => TEAM_ROLES[slug as keyof typeof TEAM_ROLES] ?? [];
