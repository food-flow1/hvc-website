import Faq from "@/src/components/landing-page/faq";
import HarvestValue from "@/src/components/landing-page/harvest-value";
import Hero from "@/src/components/landing-page/hero";
import Partner from "@/src/components/landing-page/partners";
import Testimonial from "@/src/components/landing-page/testimonial";
import WeCare from "@/src/components/landing-page/we-care";
import WhatWeDo from "@/src/components/landing-page/what-we-do";
import WhyChooseUs from "@/src/components/landing-page/why-choose-us";
import { Button } from "@mantine/core";
import Image from "next/image";

function LandingPage() {
  return (
    <main className=" flex-col flex">
      <Hero />

      <Partner />
      <WeCare />

      <WhatWeDo />
      <WhyChooseUs />
      <Testimonial />
      <HarvestValue />
      <Faq />

      <section className=" flex mx-auto"></section>
    </main>
  );
}

export default LandingPage;
