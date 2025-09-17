"use client";

import Membership from "@/src/components/cooperative/membership";
import MissionVision from "@/src/components/cooperative/mission-vision";
import Objectives from "@/src/components/cooperative/objectives";
import Value from "@/src/components/cooperative/values";
import WhyJoin from "@/src/components/cooperative/why-join";
import Features from "@/src/components/solutions/features";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";

function Cooperatives() {
  return (
    <main className=" flex flex-col">
      <SolutionsLayout
        tag="HVC Co-operative"
        title="Empowering Farmers, Strengthening Communities. Securing the Future"
        description={[
          "The Harvest Value Chain Co-operative Society (HVCCS) is a transformative farmer led initiative established in January 2025 to build a new future for Agriculture. Operating across selected states. HVCCS serves as a unified platform that connects farmers with the tools, training and opportunities they need to thrive.",
          "At HVCCS we champion collective progress. Our co-operative model ensures every member contributes to and benefits from shared growth. Through affordable access to resources, innovative practices and and a culture of mutual support, we are reimagining what is possible for farmers in Nigeria.",
        ]}
        imageSrc="/cooperative-bg.png"
        imageAlt="co-operatives"
        tagBg="#353e26"
        backgroundColor="#141F01"
      />
      <div className="p-[clamp(20px,3vw,60px)] bg-white"></div>
      <MissionVision />

      <Value />

      <Objectives />
      {/* <Membership /> */}
      <WhyJoin />
    </main>
  );
}

export default Cooperatives;
