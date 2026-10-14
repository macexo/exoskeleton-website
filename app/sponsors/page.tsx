import type { Metadata } from "next";
import Sponsors from "@/components/Sponsors";
import { pageMetadata } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Sponsors",
  path: "/sponsors",
  description:
    "Back McMaster Exoskeleton: Bronze $500, Silver $1,000, Gold $2,000, Platinum $3,000+. Gold and Platinum put your logo on the suit itself.",
});

export default function SponsorsPage() {
  return <Sponsors />;
}
