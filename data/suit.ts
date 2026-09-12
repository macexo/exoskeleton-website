// Public engineering priorities, grounded in the documented build and team roles.
// Describe the problems being worked on without publishing implementation details.
export const DESIGN_PRIORITIES = [
  { group: "Fit & movement", items: ["Joint alignment and range of motion", "Pilot comfort and attachment", "Materials, fabrication and assembly"] },
  { group: "Sensing & response", items: ["Measuring the wearer’s movement", "Developing predictive models", "Connecting control software to actuation"] },
  { group: "System integration", items: ["Packaging boards and batteries", "Routing power and signal wiring", "Testing hardware and software together"] },
  { group: "Pilot safety", items: ["Mechanical travel limits", "Electrical protection and emergency stop", "Software command limits and testing"] },
] as const;
