"use client";

import Features from "@/src/components/solutions/features";
import FoodFreedomHero from "@/src/components/solutions/food-freedom-hero";
import OurFocus from "@/src/components/solutions/our-focus";
import OurFocusForm from "@/src/components/solutions/our-focus-form";
import SolutionsLayout from "@/src/components/solutions/solutions-layout";
import SubPackage from "@/src/components/solutions/sub-package";

function FoodFreedom() {
  return (
    <main className=" flex flex-col">
      <FoodFreedomHero />
      <SubPackage />
      <OurFocus />
      <OurFocusForm />
    </main>
  );
}

export default FoodFreedom;
