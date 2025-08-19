"use client";

import Benefits from "@/src/components/solutions/benefits";
import FarmFuelInterestForm from "@/src/components/solutions/farm-fuel-form";
import Features from "@/src/components/solutions/features";

import HowItWorks from "@/src/components/solutions/how-it-works";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";
import clsx from "clsx";
import { section } from "framer-motion/client";

function Solutions() {
  return (
    // solution1
    <main className=" flex flex-col">
      <SolutionsLayout
        tag="HVC Farm fuel"
        title="Agro-Waste-to-Energy Solution"
        description={[
          "FarmFuel by Harvest Value Chain Limited (HVC) is our agro-waste-to-energy solution that converts agricultural waste into renewable energy. This initiative not only provides clean power to rural communities but also supports sustainable farming through organic fertilizer production.",
          "At FarmFuel, we believe that agricultural waste holds untapped potential. By transforming crop by-products into biogas, FarmFuel is creating a circular economy that empowers farmers, reduces environmental impact, and boosts energy access for rural areas.",
        ]}
        imageSrc="/solution1.png"
        imageAlt="Agricultural waste to energy solution"
        tagBg="#353e26"
        backgroundColor="#141F01"
      />
      <HowItWorks />
      <Benefits />
      <FarmFuelInterestForm />
    </main>
  );
}

export default Solutions;
