import type { Metadata } from "next";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsorship tiers and benefits for McMaster Exoskeleton. Gold and Platinum sponsors have their logo on the exoskeleton itself. Bronze $500, Silver $1,000, Gold $2,000, Platinum $3,000+.",
};

export default function SponsorsPage() {
  return <Sponsors />;
}
