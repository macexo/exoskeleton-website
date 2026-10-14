/**
 * Sponsorship tiers, transcribed from page 6 of the 2026/27 sponsorship
 * package PDF. These were previously only available by downloading a 6.5 MB
 * PDF, which meant a prospective sponsor could not evaluate the team without
 * committing to a download.
 */

export type TierBenefit = {
  /** What the sponsor receives. */
  label: string;
  /** Per-tier value: a string describes the benefit, true is a plain yes, false is not included. */
  bronze: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
};

export type Tier = {
  id: "bronze" | "silver" | "gold" | "platinum";
  name: string;
  amount: string;
  /** Short pitch shown under the tier name. */
  blurb: string;
};

export const TIERS: Tier[] = [
  {
    id: "bronze",
    name: "Bronze",
    amount: "$500",
    blurb: "Get your name in front of 50+ engineering students and our audience.",
  },
  {
    id: "silver",
    name: "Silver",
    amount: "$1,000",
    blurb: "Your logo travels with the team, on our presentations and promotional material.",
  },
  {
    id: "gold",
    name: "Gold",
    amount: "$2,000",
    blurb: "Your logo rides on the suit itself, at competition and in every photo.",
  },
  {
    id: "platinum",
    name: "Platinum",
    amount: "$3,000+",
    blurb: "Everything Gold offers, plus a featured post and a place on our team merch.",
  },
];

export const TIER_BENEFITS: TierBenefit[] = [
  {
    label: "Logo on website",
    bronze: "Standard display",
    silver: "Enhanced display",
    gold: "Prominent display",
    platinum: "Featured display",
  },
  {
    label: "Logo on team materials",
    bronze: "Website only",
    silver: "Promos & presentations",
    gold: "On the exoskeleton suit",
    platinum: "On the exoskeleton suit",
  },
  {
    label: "Access to team resume book",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Social media promotion",
    bronze: false,
    silver: "General mention",
    gold: "Dedicated mention",
    platinum: "Featured post",
  },
  {
    label: "Meet the team & suit display event",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    label: "Featured on team merch",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
];

/** What a sponsor's money actually buys — used to make the ask concrete. */
export const FUNDING_USES = [
  {
    label: "Actuators & motor drivers",
    detail: "The hip and knee joints that carry the load.",
  },
  {
    label: "Machining & raw stock",
    detail: "Aluminium, fasteners and custom-machined structural parts.",
  },
  {
    label: "Custom PCBs",
    detail: "Power distribution, sensing and safety cutoff boards.",
  },
  {
    label: "Competition travel",
    detail: "Getting the team and the suit to ACE each spring.",
  },
];
