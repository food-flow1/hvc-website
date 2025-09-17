import React from "react";
import TagLayout from "../landing-page/tag-layout";
import SolutionGrid from "../shared/solution-cards";
import { Button } from "@mantine/core";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

const benefits = [
  {
    name: "Direct Connections",
    details:
      "FoodFlow enables farmers to connect directly with food processors, removing traditional intermediaries. This allows farmers to negotiate prices, quantities, and terms in real time. By fostering direct communication and transparency, FoodFlow builds long-term trust between farmers and processors, leading to better partnerships and mutual understanding of quality and supply expectations.",
    containerBg: " #f1f5ea",
    nameColor: "#141414",
    detailColor: "#444444",
  },

  {
    name: "Real-Time Market Updates",
    details:
      "Processors can access live listings of available produce, including detailed information on quality, quantity, and price. This enables processors to make informed purchasing decisions based on current availability. Real-time updates provide transparency into market conditions, empowering both farmers and processors to adapt to price shifts, seasonal changes, and supply-demand dynamics efficiently.",
    containerBg: " #f1f5ea",
    nameColor: "#141414",
    detailColor: "#444444",
  },
  {
    name: "Transaction Management",
    details:
      "FoodFlow integrates secure, reliable payment gateways, ensuring that transactions are streamlined, protected, and accessible to all users. Every transaction is documented and accessible, providing both farmers and processors with a clear record for future reference, taxation, and compliance needs.",
    containerBg: " #f1f5ea",
    nameColor: "#141414",
    detailColor: "#444444",
  },
];

function Features() {
  return (
    <div className=" px-[clamp(10px,4vw,80px)] py-[clamp(20px,3vw,61px)] justify-center bg-white flex flex-col gap-[clamp(20px,2vw,60px)]">
      <section className=" px-[clamp(16px,2.6vw,50px)] py-[clamp(20px,2vw,44px)] bg-[#FAFAFA] flex flex-col gap-[clamp(20px,40px] rounded-[30px]">
        <TagLayout
          tag="Features"
          tagColour="#141414"
          subText="Why FoodFlow?"
          subTextColor="#141414"
          description="In many agricultural communities, poor logistics, market access challenges, and post-harvest losses disrupt the journey of food from farm to table. Food Flow by HVC addresses these issues by streamlining transportation, enhancing storage solutions, and connecting farmers directly to buyers. This ensures faster distribution, reduces food waste, stabilizes pricing, and strengthens food security across regions, so that what is grown is not lost, but shared."
          descriptionColor="#444444"
          tagBg="#dadada"
        />

        <SolutionGrid
          benefits={benefits}
          iconSrc="/solution2-icon.png"
          iconAlt="solution2 cards"
          className="mt-8"
        />
      </section>
      <Link
        href="https://www.Foodflow.africa"
        target="_blank"
        rel="noopener noreferrer"
        className=" flex gap-[10px] justify-end items-center"
      >
        <Button variant="secondary" size="lg" className="w-fit">
          Start with FoodFlow
        </Button>
        <article className=" flex items-center justify-center p-[6px] border border-[#9DC655] rounded-[8px] w-[38px] h-[38px]">
          <HiArrowUpRight className=" cursor-pointer text-[#000]" />
        </article>
      </Link>
    </div>
  );
}
export default Features;
