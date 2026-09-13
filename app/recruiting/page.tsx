import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { PageSection, SectionIntro, PageNav, SubteamDirectory } from "@/components/ui/Interior";
import { ArrowRight } from "@/components/ui/Button";
import { SITE } from "@/data/site";
import { APPLICATIONS_OPEN, APPLICATION_FORM_LINK } from "./constants";

export const metadata: Metadata = { title: "Join the Team", description: "Find your place at McMaster Exoskeleton. Explore the subteams, learn how to apply, and build real engineering experience. Explore the six specialist subteams and role-specific expectations." };
const QUESTIONS = [
  { question: "Do I need experience?", answer: "Expectations vary by subteam. Read the responsibilities, tools and any experience requirements for the roles that interest you. Use the application to share your relevant skills and projects, and contact us if you’re unsure how your background fits." },
  { question: "Can I join from any program or year?", answer: "The team is based at McMaster. Start with the subteam responsibilities and experience requirements; contact us if you are unsure how your background fits a role." },
  { question: "Can I be interested in more than one subteam?", answer: "The application asks for your subteam preference. Software offers a first choice and an optional second choice between Embedded & Controls and AI & Machine Learning." },
  { question: "How do I join health & safety?", answer: "Contact the team about contributing to safety work. The six recruiting subteams are grouped under Mechanical, Electrical and Software." },
  { question: "What is the time commitment?", answer: "Ask us about the current meeting schedule and expectations for the subteam you’re considering. We can help you understand how the build fits around your coursework." },
];
export default function RecruitingPage() {
  return <div className="home-page inner-page">
    <PageHero eyebrow={APPLICATIONS_OPEN ? "Recruiting / Applications open" : "Recruiting / Meet your next team"} title="Bring your" accent="curiosity." image="/ace_2026/background_image.jpg" imageAlt="McMaster Exoskeleton students together outside the engineering building with their competition suit." focal="50% 50%" imageCaption="Real hardware. Shared ambition. Your people." actions={<>{APPLICATIONS_OPEN ? <a href={APPLICATION_FORM_LINK} target="_blank" rel="noopener noreferrer" className="home-button">Apply to the team <ArrowRight /></a> : <a href={`mailto:${SITE.email}`} className="home-button">Ask about openings <ArrowRight /></a>}<a href="#subteams" className="home-text-link">Find your subteam <ArrowRight /></a></>}>
      Find your place in one of six specialist subteams. Explore the work, understand the expectations and tell us what you can bring to McMaster Exoskeleton.
    </PageHero>
    <div className="recruiting-strip"><div className="home-container"><span>2026/27 recruitment</span><span>3 divisions · 6 subteams</span><span>Experience varies by role</span></div></div>
    <PageNav items={[{href:"#subteams",label:"Find your fit"},{href:"#experience",label:"The experience"},{href:"#apply",label:"How to join"},{href:"#questions",label:"Questions"}]} />
    <PageSection id="subteams" tone="light"><SectionIntro eyebrow="01 / Find your fit" title="Find the team for your kind of work.">Mechanical: Waist and Linkages. Electrical: Power Architecture and Actuation & Sensing. Software: Embedded & Controls and AI & Machine Learning. Each division page sets out the actual responsibilities.</SectionIntro><SubteamDirectory recruiting /></PageSection>
    <PageSection id="experience" tone="surface"><SectionIntro eyebrow="02 / More than a line on your résumé" title="Make something that matters to you." /><div className="experience-grid">{[
      ["Real responsibility", "A part you design can become a machined component, a working circuit or firmware running on the suit. Follow your work from an idea to a real machine."],
      ["People to learn from", "Work with your leads and students across disciplines. Integration gives you a reason to understand how the other parts of the machine work, too."],
      ["A shared finish line", "See a season’s work come together for ACE, where the suit takes on design review, safety checks and physical challenges with a pilot inside."],
    ].map(([title,body],i)=><article key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></PageSection>
    <PageSection id="apply"><SectionIntro eyebrow="03 / Take the first step" title={APPLICATIONS_OPEN ? "Let’s get you started." : "Be part of the next intake."} /><div className="apply-layout"><ol className="application-steps"><li><span>01</span><div><h3>Explore the work.</h3><p>Read through the subteams and the projects you could contribute to.</p></div></li><li><span>02</span><div><h3>Tell us what interests you.</h3><p>Use the application to share your interests, relevant skills and projects, and preferred subteam.</p></div></li><li><span>03</span><div><h3>Get to know the team.</h3><p>Follow the application instructions for next steps. Reach out if you have questions along the way.</p></div></li></ol><aside className="application-panel"><p className="eyebrow">{APPLICATIONS_OPEN ? "Applications open" : "Applications currently closed"}</p><h3>Your next build<br />starts here.</h3><p>{APPLICATIONS_OPEN ? "One form. Your interests and relevant work. A first step into the team." : "Email us to learn when the next round of applications opens."}</p>{APPLICATIONS_OPEN ? <a href={APPLICATION_FORM_LINK} target="_blank" rel="noopener noreferrer" className="home-button">Open the application <ArrowRight /></a> : <a href={`mailto:${SITE.email}`} className="home-button">Email the team <ArrowRight /></a>}<span className="application-note">{APPLICATIONS_OPEN ? "Google Forms · McMaster Exoskeleton" : SITE.email}</span></aside></div></PageSection>
    <PageSection id="questions" tone="light"><div className="faq-layout"><div><p className="eyebrow">04 / Good questions</p><h2 className="home-heading">A few things<br />you might wonder.</h2><a href={`mailto:${SITE.email}`} className="home-text-link">Ask us something else <ArrowRight /></a></div><div className="faq-list">{QUESTIONS.map(item=><details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></PageSection>
    <section className="page-bottom-link"><div className="home-container"><span>Get to know the people you’ll build with.</span><Link href="/team" className="home-text-link">Meet McMaster Exo <ArrowRight /></Link></div></section>
  </div>;
}
