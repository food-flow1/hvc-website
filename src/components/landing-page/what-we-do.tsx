"use client";
import Image from "next/image";
import PictureTextLayout from "./picture-text-layout";
import FarmFuel from "./farm-fuel";

function WhatWeDo() {
  return (
    <section className=" bg-[#0A0F00] py-[clamp(35px,5.6vw,108px)] px-[clamp(16px,6.2vw,120px)] flex flex-col gap-[clamp(30px,2.5vw,48px)]">
      <div className=" flex flex-col gap-1">
        <article className="py-[7px] px-[11px] bg-[#2c3125] rounded-[8px] w-fit ">
          <p className=" text-[10px] font-medium text-[#fff]">
            Our Leading Solutions
          </p>
        </article>

        <div className=" flex flex-col gap-[10px]">
          <h3 className=" text-white leading-[clamp(35px,1.6vw,40px] font-medium text-[clamp(18px,2vw,40px)] ">
            What we do
          </h3>
          <p className=" text-[16px] text-[#FAFAFA] font-normal">
            Have a look through what we do as an agro tech company and start
            working with us today
          </p>
        </div>
      </div>

      <PictureTextLayout
        image="/food-flow.png"
        header="Food Flow"
        text="Connecting farmers to food processors"
        details="FoodFlow is a digital platform that bridges the gap between farmers and food processors, facilitating direct transactions and creating a transparent, efficient supply chain. By eliminating intermediaries, FoodFlow ensures fair pricing for farmers and a reliable source of fresh produce for processors, supporting local food production and community empowerment."
        buttonText="Explore food flow"
        onButtonClick={() => ""}
      />

      <FarmFuel />

      <PictureTextLayout
        image="/food-freedom.png"
        header="Food Freedom"
        text="Sustainable food access for all"
        details="Food Freedom is a subscription-based service that delivers curated food packages monthly, tailored to fit different lifestyles—from students to families and those with dietary needs. Each plan includes staple foods, bonuses, and referral rewards, making food access convenient, affordable, and sustainable for all."
        buttonText="Discover food freedom"
        onButtonClick={() => ""}
      />
    </section>
  );
}

export default WhatWeDo;
