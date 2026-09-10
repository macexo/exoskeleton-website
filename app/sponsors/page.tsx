import type { Metadata } from "next";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsorship tiers and benefits for McMaster Exoskeleton. Gold sponsors have their logo on the exoskeleton itself. Bronze from under $1,000, Silver $1,000–2,000, Gold $2,000+.",
};

export default function SponsorsPage() {
  return <Sponsors />;
}
