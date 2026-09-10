import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AceYearPage from "@/components/AceYearPage";
import { getAceYear } from "@/data/competitions";

const YEAR = 2026;

export const metadata: Metadata = {
  title: `ACE ${YEAR}`,
  description: getAceYear(YEAR)?.summary,
};

export default function Page() {
  const year = getAceYear(YEAR);
  if (!year) notFound();
  return <AceYearPage year={year} />;
}
