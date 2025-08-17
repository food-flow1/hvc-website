"use client";
import AboutHero from "@/src/components/about/about-hero";
import CEO from "@/src/components/about/ceo";
import CoreValue from "@/src/components/about/core-value";
import Mission from "@/src/components/about/mission";
import OurPillars from "@/src/components/about/our-pillars";
import WeDedicated from "@/src/components/about/we-dedicated";

function About() {
  return (
    <main className="">
      <AboutHero />
      <Mission />
      <CoreValue />
      <WeDedicated />
      <OurPillars />
      <CEO />
    </main>
  );
}

export default About;
