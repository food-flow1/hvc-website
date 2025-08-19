"use client";

import JoinPartner from "@/src/components/career/join-partner";
import OpenRoles from "@/src/components/career/open-roles";
import WorkWithUs from "@/src/components/career/work-with-us";
import Partner from "@/src/components/landing-page/partners";
import Features from "@/src/components/solutions/features";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";

function Career() {
  return (
    <main className=" flex flex-col">
      <SolutionsLayout
        tag="Work with Harvest Value Chain Limited (HVC)"
        title="Join us"
        description={[
          "We believe that success is driven by the strength of our team and the partnerships we build. Whether you’re a professional looking to advance your career, a student eager to learn, or a business seeking collaboration, HVC offers a dynamic environment where innovation, sustainability, and community impact are at the forefront. Join us in shaping the future of agriculture in Nigeria and beyond.",
          "HVC is always looking for passionate and talented individuals who are eager to make a meaningful impact in the agricultural sector. We offer a range of career opportunities across various fields, including agronomy, processing, logistics, sales, and more.",
        ]}
        imageSrc="/join-us-bg.png"
        imageAlt="join us"
        tagBg="#353e26"
        backgroundColor="#141F01"
      />

      <OpenRoles />
      <WorkWithUs />
      <JoinPartner />
    </main>
  );
}

export default Career;
