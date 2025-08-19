import React from "react";
import TagLayout from "../landing-page/tag-layout";
import SolutionGrid from "../shared/solution-cards";
import { Button } from "@mantine/core";
import { HiArrowUpRight } from "react-icons/hi2";
import { details } from "framer-motion/client";

const benefits = [
  {
    name: "SDG-2: Zero Hunger",
    details:
      "We ensure that individuals and families have reliable access to essential food items.",
    containerBg: " #353e26",
    nameColor: "#fff",
    detailColor: "#fff",
  },

  {
    name: "SDG-12: Responsible Consumption and Production",
    details:
      "We are promoting sustainable consumption through curated packages that reduce waste.",
    containerBg: " #353e26",
    nameColor: "#fff",
    detailColor: "#fff",
  },
  {
    name: "SDG-1: No Poverty",
    details:
      "We offer affordable food packages that contribute to food security and financial stability for low-income households.",
    containerBg: " #353e26",
    nameColor: "#fff",
    detailColor: "#fff",
  },
];

function OurFocus() {
  return (
    <div className=" px-[clamp(20px,4vw,80px)] py-[clamp(20px,3vw,61px)] justify-center bg-white flex ">
      <section className=" px-[clamp(25px,2.6vw,50px)] py-[clamp(20px,2vw,44px)] bg-[#141F01] flex flex-col gap-[clamp(20px,3vw,40px)] rounded-[clamp(14px,3vw,30px)]">
        <TagLayout
          tag="We Contribute to the Sustainable Development Goals *SDG"
          tagColour="#fff"
          subText="Our Focus"
          subTextColor="#fff"
          description="We are committed to building a future where everyone has consistent, affordable access to safe and nutritious food. Our focus is on empowering local producers, strengthening food systems, and eliminating barriers to distribution and affordability. Through innovation, partnerships, and grassroots engagement, HVC Food Freedom is driving a movement toward true food independence for all."
          descriptionColor="#fff"
          tagBg="#353e26"
        />

        <SolutionGrid
          benefits={benefits}
          iconSrc="/icon-s.png"
          iconAlt="solution3 cards"
          className="mt-8"
        />
      </section>
    </div>
  );
}
export default OurFocus;
