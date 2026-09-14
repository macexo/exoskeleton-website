import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PageCTA, PageNav, PageSection, SafetyLink, SectionIntro } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";
import { DESIGN_PRIORITIES } from "@/data/suit";
import SuitExplorer, { SoftwareJumpLink } from "@/components/SuitExplorer";
import DesignTeamLinks from "@/components/DesignTeamLinks";
import "./design.css";

export const metadata: Metadata = {
  title: "Design",
  description: "Explore the hardware, motion sensing and software behind McMaster’s student-built exoskeleton, and meet the six subteams bringing it together.",
};

export default function DesignPage() {
  return (
    <div className="home-page inner-page">
      <PageHero
        eyebrow="The design / McMaster Exoskeleton"
        title="One suit."
        accent="Built together."
        image="/ace_2025/working_on_suit.JPG"
        imageAlt="McMaster students fitting the exoskeleton around their pilot and adjusting its waist and leg assemblies."
        focal="55% 48%"
        imageCaption="Bringing the suit together / 2025"
        actions={<><a href="#the-suit" className="home-button">Explore the suit <ArrowRight /></a><SoftwareJumpLink /></>}
      >
        A wearable frame. Powered joints. Software that connects movement to assistance. Our engineering comes together around the person wearing the suit.
      </PageHero>
      <PageNav items={[{ href: "#the-suit", label: "Explore the suit" }, { href: "#systems", label: "Design priorities" }, { href: "#subteams", label: "Our subteams" }]} />
      <div className="home-container design-assembly"><SuitExplorer /></div>

      <PageSection id="systems" tone="light">
        <SectionIntro eyebrow="01 / Design priorities" title="Every decision meets at the pilot.">
          A wearable robot brings different engineering problems into the same space. Fit, movement, power and control all have to be considered together.
        </SectionIntro>
        <div className="systems-inventory">{DESIGN_PRIORITIES.map((priority, i) => <div key={priority.group}><span className="eyebrow">0{i + 1}</span><h3>{priority.group}</h3><ul>{priority.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
      </PageSection>

      <PageSection id="subteams">
        <SectionIntro eyebrow="02 / The teams / 2026–27" title="Three divisions. Six ways to contribute.">
          Explore the current subteams, their responsibilities and the tools they work with. From the waist module to predictive models, there are different ways to help build the next suit.
        </SectionIntro>
        <DesignTeamLinks divisions={["mechanical", "electrical", "software"]} />
        <SafetyLink />
      </PageSection>
      <PageCTA title="Find the work that interests you.">Read the subteam responsibilities and application requirements.</PageCTA>
    </div>
  );
}
