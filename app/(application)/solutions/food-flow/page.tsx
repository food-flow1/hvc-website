"use client";

import Features from "@/src/components/solutions/features";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";

function FoodFlow() {
  return (
    <main className=" flex flex-col">
      <SolutionsLayout
        tag="Farm-to-Fork"
        title="FoodFlow"
        description={[
          "FoodFlow by HVC connects farmers directly to food processors, simplifying the farm-to-food supply chain. By eliminating middlemen, FoodFlow ensures fair pricing for farmers and a reliable source of fresh produce for processors, driving sustainable growth in local food production.",
          "FoodFlow is designed to make farm-to-food transactions seamless and efficient. Our platform empowers farmers by providing direct access to food processors, enabling a smoother supply chain that strengthens local food production and fosters fair trade practices.",
        ]}
        imageSrc="/solution2.png"
        imageAlt="food flow"
        tagBg="#353e26"
        backgroundColor="#141F01"
      />

      <Features />
    </main>
  );
}

export default FoodFlow;
