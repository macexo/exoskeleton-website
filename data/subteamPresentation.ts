import type { Subteam } from "./subteams";

export const SUBTEAM_PRESENTATION: Record<Subteam["slug"], {
  index: string; title: string; accent: string; image: string; imageAlt: string;
}> = {
  mechanical: {
    index: "01", title: "Make it strong.", accent: "Make it move.",
    image: "/ace_2026/IMG_4369.jpg",
    imageAlt: "A pilot stepping over an obstacle in the powered suit, its leg structure carrying the movement.",
  },
  electrical: {
    index: "02", title: "Power every", accent: "possibility.",
    image: "/ace_2026/IMG_4128.JPG",
    imageAlt: "Students checking the exoskeleton before competition.",
  },
  software: {
    index: "03", title: "Turn intent", accent: "into movement.",
    image: "/design/suit-leg.jpg",
    imageAlt: "The suit’s leg-mounted controller enclosures and wiring alongside its powered joints.",
  },
  safety: {
    index: "04", title: "A person comes", accent: "before a prototype.",
    image: "/ace_2026/IMG_4800.JPG",
    imageAlt: "Team members helping the pilot adjust the exoskeleton before a run.",
  },
};
