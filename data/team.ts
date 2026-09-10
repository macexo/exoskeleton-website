/**
 * Team-level facts, previously hardcoded inline in About.tsx and duplicated as
 * badges in Competition.tsx and the two ACE pages.
 *
 * Note on the "5th place" figure: the team placed 5th at ACE 2025 (its first
 * year, hosted at the University of Michigan) AND 5th at ACE 2026 (its second
 * year, hosted at McMaster). Both badges on the old site were correct, but
 * showing "5th — ACE 2025" and "5th — ACE 2026" a few hundred pixels apart read
 * as a mistake. Stated as a streak it reads as the achievement it is.
 */

export const HOME_STATS = [
  { value: "50+", label: "Members across 5+ disciplines" },
  { value: "2", label: "Suits built from scratch" },
  { value: "5th", label: "At ACE, two years running" },
] as const;

export const TEAM_FACTS = {
  memberCount: "50+",
  disciplines: "5+",
  foundedSeason: "2024/25",
  bestFinish: "5th overall",
} as const;
