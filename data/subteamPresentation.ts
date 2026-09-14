import type { Subteam } from "./subteams";

export const SUBTEAM_PRESENTATION: Record<Subteam["slug"], {
  index: string; title: string; accent: string; image: string; imageAlt: string;
}> = {
  mechanical: {
    index: "01", title: "Make it strong.", accent: "Make it move.",
    image: "/ace_2025/juan_stair_climb.png",
    imageAlt: "A pilot’s powered leg frame during a stair-climbing event, with teammates alongside.",
  },
  electrical: {
    index: "02", title: "Power every", accent: "possibility.",
    image: "/ace_2026/IMG_4128.JPG",
    imageAlt: "Students checking the exoskeleton before competition.",
  },
  software: {
    index: "03", title: "Turn intent", accent: "into movement.",
    image: "/ace_2025/working_on_suit.JPG",
    imageAlt: "McMaster students working together on the exoskeleton.",
  },
  safety: {
    index: "04", title: "A person comes", accent: "before a prototype.",
    image: "/ace_2026/IMG_4800.JPG",
    imageAlt: "Team members helping the pilot adjust the exoskeleton before a run.",
  },
};
