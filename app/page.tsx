import About from "@/components/About";
import Competition from "@/components/Competition";
import Hero from "@/components/Hero";
import YouTube from "@/components/YouTube";
import PoweredBy from "@/components/PoweredBy";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Competition />
      <YouTube />
      <PoweredBy />
      <CallToAction />
    </>
  );
}
