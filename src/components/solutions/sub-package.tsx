import React from "react";
import TagLayout from "../landing-page/tag-layout";
import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "@mantine/core";

const packageList = [
  {
    name: "For Students",
    details:
      "Affordable options for students needing staple items and quick meals.",
  },
  {
    name: "For Singles and Couples",
    details:
      "Essentials that suit busy professionals, including snacks and quick-cook items.",
  },
  {
    name: "For Families",
    details:
      "Comprehensive packages with staple items, fresh produce, and bonuses.",
  },
  {
    name: "For Health-Specific Needs",
    details:
      "Specialized options tailored for diabetics, hypertensives, and other dietary requirements.",
  },
];

export default function SubPackage() {
  return (
    <div className="px-[clamp(40px,4vw,85px)] py-[clamp(40px,5vw,104px)] bg-white">
      <section className="flex justify-between w-full gap-[clamp(20px,2vw,32px)] max-[763px]:flex-col">
        <div className="flex-1">
          <TagLayout
            tag="Our Subscription packages"
            subText="Choose from a variety of packages"
            description="No matter which package you select, you can expect quality, convenience, and a little something extra each month."
            tagColour="#141414"
            tagBg="#dedede"
            subTextColor="#141414"
            descriptionColor="#444444"
          />
        </div>

        <section className="relative px-[clamp(20px,2vw,42px)] pt-[clamp(20px,1.7vw,34px)] pb-[clamp(40px,4.8vw,94px)] bg-[#E5F1D4] rounded-[24px] flex-1">
          <div className="grid grid-cols-2 gap-[14px] h-fit max-[421px]:grid-cols-1">
            {packageList.map(({ name, details }, idx) => (
              <section
                key={idx}
                className="flex flex-col px-[clamp(16px,1.2vw,20px)] py-[clamp(18px,1.5vw,28px)] bg-[#f5f9ee] rounded-[10px] min-h-[200px]"
              >
                <figure className="w-5 h-5 mb-4">
                  <img
                    src="/sub-icon.png"
                    className="w-5 h-5"
                    alt="subscription icon"
                  />
                </figure>

                <article className="flex flex-col gap-[10px] flex-grow">
                  <h4 className="font-bold text-[20px] text-[#141414] leading-tight">
                    {name}
                  </h4>
                  <p className="font-normal text-[16px] text-[#444444] leading-relaxed">
                    {details}
                  </p>
                </article>
              </section>
            ))}
          </div>

          <div className=" bg-white px-[clamp(18px,1.4vw,28px)] py-[15px] rounded-bl-[14px] rounded-tl-[14px] absolute bottom-6 right-6 flex items-center gap-3 -mb-13 -mr-6">
            <Button variant="secondary" size="lg">
              See Food flow Africa
            </Button>
            <article className=" flex items-center justify-center p-[6px] border border-[#000] rounded-[8px] w-[38px] h-[38px]">
              <HiArrowUpRight className=" cursor-pointer text-[#000]" />
            </article>
          </div>
        </section>
      </section>
    </div>
  );
}
