import NewsMedia from "@/src/components/news/new-media";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function News() {
  return (
    <div className=" flex flex-col">
      <SolutionsLayout
        tag="Stay up to date"
        title="Stay informed with updates"
        description={[
          "At Harvest Value Chain (HVC), every headline tells a story of innovation, resilience, and progress. Our News & Media section brings you closer to the work we’re doing across Nigeria and beyond, from cutting-edge agricultural techniques and smart farming initiatives to meaningful partnerships that empower local farmers and communities.",
          "Whether it's updates on government collaborations, youth empowerment programs, breakthrough products, or insights from industry events, our stories reflect the heartbeat of our mission: to create a sustainable, inclusive, and tech-powered agricultural ecosystem.Stay tuned as we continue to build value at every stage of the food chain  and celebrate the people, projects, and milestones moving agriculture forward.",
        ]}
        imageSrc="/news-bg.png"
        imageAlt="news"
        tagBg="#353e26"
        backgroundColor="#141F01"
      />

      <NewsMedia />
    </div>
  );
}
