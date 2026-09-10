import execsJson from "./execs.json";
import archivedJson from "./archivedExecs.json";

/**
 * Roster data.
 *
 * These JSON files previously lived in `public/data/`, which meant they were
 * both bundled at build time AND served as public HTTP endpoints. They are
 * source data, so they belong in `data/`.
 */

export type Person = {
  name: string;
  title: string;
  linkedin_url: string;
  image_url: string;
  tenure?: string;
};

export const EXECS: Person[] = execsJson;
export const ARCHIVED_EXECS: Person[] = archivedJson;

/**
 * One role-colour map for the whole site.
 *
 * Headshot.tsx and ArchivedTeam.tsx each defined their own `getBorderColor`,
 * and the two disagreed: mechanical was `border-red-900` in one and
 * `border-steelRed` in the other, safety was `border-dustyRose` vs
 * `border-purple-300`. The same person's ring changed colour when they moved
 * from the current roster to the alumni list.
 */
export function roleAccent(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("principal") || t.includes("founder")) return "border-ashGold";
  if (t.includes("software")) return "border-mutedBlue";
  if (t.includes("electrical")) return "border-yellow-400";
  if (t.includes("mechanical")) return "border-ashGold/70";
  if (t.includes("safety")) return "border-dustyRose";
  return "border-white/25";
}

export const FACULTY = [
  {
    name: "Dr. Ratnasingham (Thamas) Tharmarasa",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-ratnasingham-thamas-tharmarasa/",
    headshot: "/headshots/Ratnasingham_Tharmarasa_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Thomas Doyle",
    link: "https://experts.mcmaster.ca/display/doylet",
    headshot: "/headshots/Doyle_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Shahrukh Athar",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-shahrukh-athar/",
    headshot: "/headshots/Shahrukh_Athar_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Scott Chen",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-scott-chen/",
    headshot: "/headshots/Scott_Chen_headshot.jpg",
    department: "Electrical & Computer Engineering",
  },
  {
    name: "Dr. Yaser Haddara",
    link: "https://experts.mcmaster.ca/display/yaser",
    headshot: "/headshots/Yaser_Haddara_headshot_cropped2.jpg",
    department: "Materials Science & Engineering",
  },
];
