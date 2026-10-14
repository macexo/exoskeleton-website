import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AceYearPage from "@/components/AceYearPage";
import { getAceYear } from "@/data/competitions";
import { pageMetadata } from "@/data/site";

const YEAR = 2025;

export const metadata: Metadata = pageMetadata({
  title: `ACE ${YEAR}`,
  path: `/ace${YEAR}`,
  description: getAceYear(YEAR)!.summary,
});

export default function Page() {
  const year = getAceYear(YEAR);
  if (!year) notFound();
  return <AceYearPage year={year} />;
}
