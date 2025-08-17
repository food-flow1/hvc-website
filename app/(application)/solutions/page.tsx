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
    // Solution2
    // <main className=" flex flex-col">
    //   <SolutionsLayout
    //     tag="Farm-to-Fork"
    //     title="Food Flow"
    //     description={[
    //       "FoodFlow by HVC connects farmers directly to food processors, simplifying the farm-to-food supply chain. By eliminating middlemen, FoodFlow ensures fair pricing for farmers and a reliable source of fresh produce for processors, driving sustainable growth in local food production.",
    //       "FoodFlow is designed to make farm-to-food transactions seamless and efficient. Our platform empowers farmers by providing direct access to food processors, enabling a smoother supply chain that strengthens local food production and fosters fair trade practices.",
    //     ]}
    //     imageSrc="/solution2.png"
    //     imageAlt="food flow"
    //     tagBg="#353e26"
    //     backgroundColor="#141F01"
    //   />

    //   <Features />
    // </main>

    // Solution3

    // <main className=" flex flex-col">
    //   <SolutionsLayout
    //     tag="HVC Food freedom"
    //     title="Sustainable Food Access for All"
    //     description={[
    //       "Food Freedom offers a range of membership plans tailored for different lifestyles, from budget-friendly student packages to family bundles. Choose your preferred plan, and we’ll deliver a variety of food items, bonus essentials, and even branded gifts directly to your doorstep each month.",
    //       "FoodFlow is designed to make farm-to-food transactions seamless and efficient. Our platform empowers farmers by providing direct access to food processors, enabling a smoother supply chain that strengthens local food production and fosters fair trade practices.",
    //     ]}
    //     imageSrc="/solution2.png"
    //     imageAlt="food flow"
    //     tagBg="#353e26"
    //     backgroundColor="#141F01"
    //   />

    //   <Features />
    // </main>
  );
}

export default Solutions;
