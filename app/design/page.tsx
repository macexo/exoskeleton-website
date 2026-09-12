import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PageSection, SectionIntro, PageNav, PageCTA, SubteamDirectory } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";
import { DESIGN_PRIORITIES } from "@/data/suit";
import SuitExplorer from "@/components/SuitExplorer";
import SoftwareArchitecture from "@/components/SoftwareArchitecture";
import DesignTeamLinks from "@/components/DesignTeamLinks";

export const metadata: Metadata = {
  title: "Design",
  description: "Explore the hardware, motion sensing and software behind McMaster’s student-built exoskeleton, and meet the six subteams bringing it together.",
};

export default function DesignPage() {
  return (
    <div className="home-page inner-page">
      <PageHero eyebrow="The engineering / McMaster Exoskeleton" title="Built from" accent="the ground up." image="/ace_2025/working_on_suit.JPG" imageAlt="McMaster students fitting the exoskeleton around their pilot and adjusting its waist and leg assemblies." focal="55% 48%" imageCaption="Bringing the suit together / 2025" actions={<><a href="#the-suit" className="home-button">Explore the suit <ArrowRight /></a><a href="#software" className="home-text-link">Discover the software <ArrowRight /></a></>}>
        A wearable frame. Powered hips and knees. Software that connects movement to assistance. We bring mechanical design, electronics and code together around the person wearing the suit.
      </PageHero>
      <PageNav items={[{ href: "#the-suit", label: "The hardware" }, { href: "#software", label: "Software & controls" }, { href: "#systems", label: "Design priorities" }, { href: "#subteams", label: "Our subteams" }]} />

      <PageSection id="the-suit">
        <SectionIntro eyebrow="01 / Mechanical & Electrical" title="A structure built around a person.">
          The waist supports the electronics, the hips and knees provide powered movement, and the leg structure connects to the wearer. Explore these interfaces on our 2025 competition suit.
        </SectionIntro>
        <SuitExplorer />
        <DesignTeamLinks divisions={["mechanical", "electrical"]} />
      </PageSection>

      <PageSection id="software" tone="surface">
        <SectionIntro eyebrow="02 / Software" title="The code behind the movement.">
          Motion sensing, machine learning and control software connect the pilot to the powered joints. Explore the problems our software helps solve, from interpreting movement to commanding assistance.
        </SectionIntro>
        <SoftwareArchitecture />
        <DesignTeamLinks divisions={["software"]} />
      </PageSection>

      <PageSection id="systems" tone="light">
        <SectionIntro eyebrow="03 / Design priorities" title="Every decision meets at the pilot.">
          A wearable robot brings different engineering problems into the same space. Fit, movement, power and control all have to be considered together.
        </SectionIntro>
        <div className="systems-inventory">{DESIGN_PRIORITIES.map((priority, i) => <div key={priority.group}><span className="eyebrow">0{i + 1}</span><h3>{priority.group}</h3><ul>{priority.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
      </PageSection>

      <PageSection id="subteams">
        <SectionIntro eyebrow="04 / The teams / 2026–27" title="Three divisions. Six ways to contribute.">
          Explore the current subteams, their responsibilities and the tools they work with. From the waist module to predictive models, there are different ways to help build the next suit.
        </SectionIntro>
        <SubteamDirectory />
      </PageSection>
      <PageCTA title="Find the work that interests you.">Read the subteam responsibilities and application requirements.</PageCTA>
    </div>
  );
}
