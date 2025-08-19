import React from "react";
import TagLayout from "../landing-page/tag-layout";
import SolutionGrid from "./objective-card";
import { details } from "framer-motion/client";
import ObjectivesGrid from "./objective-card";

const benefits = [
  {
    name: "Empower Farmers with Access to Resources",
    details:
      "We bridge the gap by providing affordable inputs, equipment, and technical support.",
  },

  {
    name: "Strenghthen Farmer Capacity through Training",
    details:
      "We deliver hands-on and digital training in climate-smart agriculture, farm management, and agribusiness skills.",
  },
  {
    name: "Facilitate Financial Inclusion & Loan Support",
    details:
      "We support qualified members with soft loans and financing to growheir farming operations",
  },

  {
    name: "Unlock Market Across & Off taking Channels",
    details:
      "We link farmers directly to buyers, processors, and export opportunities—ensuring fair value for their produce",
  },

  {
    name: "Foster Community Engagement & Mutual Support",
    details:
      "We promote strong cooperative networks, shared labor models, and peer mentorship to reduce isolation and increase productivity",
  },
  {
    name: "Build Resilience through Climate Smart Practices",
    details:
      "We integrate sustainable farming methods that boost productivity while protecting our environment.",
  },
];

const objectives = [
  {
    name: "Input Distribution",
    details:
      "Access to quality seeds, fertilizers, and tools at subsidized or no cost.",
  },

  {
    name: "Training & Education",
    details:
      "Affordable access to modern machinery via our cooperative equipment pool.",
  },
  {
    name: "Equipment Rental",
    details:
      "We support qualified members with soft loans and financing to growheir farming operations",
  },

  {
    name: "Market Linkages",
    details:
      "Aggregated produce marketing, buyer connections, and pricing negotiation.",
  },

  {
    name: "Loan & Grant Programs",
    details: "Structured microfinancing for members who meet set criteria.",
  },
  {
    name: "Farm Monitoring",
    details: "Extension support, crop monitoring, and performance evaluation.",
  },
];

export default function Objectives() {
  return (
    <div className=" px-[clamp(20px,4vw,84px)] py-[clamp(20px,5vw,109px)] justify-center items-center flex flex-col gap-[clamp(30px,3vw,60px)] bg-[#fafafa]">
      <section className=" flex flex-col gap-[20px]">
        <TagLayout
          tag="Objectives"
          subText="Our Strategic Objectives"
          description="At the heart of the Harvest Value Chain Cooperative Society (HVCCS) lies a commitment to deliver real impact to farmers and agricultural communities across Nigeria. Our core objectives serve as a roadmap to inclusive growth and sustainable development"
          tagColour="#141414"
          tagBg="#ddd"
          subTextColor="#141414"
          descriptionColor="#141414"
        />

        <ObjectivesGrid benefits={benefits} />
      </section>

      <section className=" flex flex-col gap-[20px]">
        <TagLayout
          tag="Focus Area"
          subText="Our Strategic Focus Area"
          description="At the heart of the Harvest Value Chain Cooperative Society (HVCCS) lies a commitment to deliver real impact to farmers and agricultural communities across Nigeria. Our core objectives serve as a roadmap to inclusive growth and sustainable development"
          tagColour="#141414"
          tagBg="#ddd"
          subTextColor="#141414"
          descriptionColor="#141414"
        />

        <ObjectivesGrid benefits={objectives} />
      </section>
    </div>
  );
}
