"use client";

import Image from "next/image";
import { useState } from "react";
import { Accordion } from "@mantine/core";
import classes from "../ui/mantine/accordion.module.css";
import TagLayout from "../landing-page/tag-layout";

function CoreValue() {
  const [activeIndex, setActiveIndex] = useState(0);

  const valueList = [
    {
      name: "Sustainability",
      text: "We are committed to implementing practices that protect the environment, conserve resources, and ensure long-term agricultural productivity.",
      img: "/core-value.png",
    },
    {
      name: "Quality",
      text: "From seed selection to final product, we maintain the highest standards of quality to ensure that our products meet the expectations of our customers and partners.",
      img: "/core-value2.png",
    },
    {
      name: "Community",
      text: "We believe in giving back to the communities we operate in, supporting local development initiatives, and empowering smallholder farmers.",
      img: "/core-value3.png",
    },
    {
      name: "Innovation",
      text: "We continuously seek out and implement the latest technologies and methods to improve our processes, enhance efficiency, and stay ahead in the industry.",
      img: "/core-value4.png",
    },
  ];

  return (
    <section className=" bg-[#f5f9ee] py-[clamp(20px,3.8vw,56px)] px-[clamp(30px,5.5vw,80px)]  flex items-center justify-center ">
      <div className=" flex flex-col gap-[clamp(18px,1.5vw,30px)]  items-center justify-center">
        <div className="flex max-[430px]:hidden">
          <TagLayout
            tag="What drives us"
            tagColour="#141414"
            subText="Our core values"
            subTextColor="#141414"
            description="Committed to Growth, Impact, and SustainabilityAt HVC, agriculture is more than food production, it’s a powerful tool for solving real-world challenges. Our mission is to harness the full potential of agribusiness to address pressing societal issues such as food insecurity, youth unemployment, climate change, and rural poverty.We provide end-to-end agricultural solutions that prioritize innovation, environmental stewardship, and inclusive economic growth. From empowering farmers through technology to transforming waste into renewable energy, we are committed to building systems that serve both people and the planet.We believe sustainable development begins with strong communities. That’s why we actively invest in local partnerships that drive education, health, gender equity, and job creation, using agriculture as a catalyst for long-term social change"
            descriptionColor="#444444"
            tagBg="#d6d9cf"
          />
        </div>

        <div className="hidden max-[430px]:flex">
          <TagLayout
            tag="What drives us"
            tagColour="#141414"
            subText="Our core values"
            subTextColor="#141414"
            description="As an agro-tech company, we are driven by our core values"
            descriptionColor="#444444"
            tagBg="#d6d9cf"
          />
        </div>

        <figure className=" w-full">
          <Image
            src={valueList[activeIndex].img}
            // src="/core-value.png"
            width={1280}
            height={513}
            alt={`${valueList[activeIndex].name} illustration`}
            className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
          />
        </figure>

        <div className=" grid grid-cols-4 gap-[13px] max-[646px]:grid-cols-1">
          {valueList.map(({ name, text }, idx) => (
            <section
              key={idx}
              className={`flex flex-col gap-[clamp(20x,1.4vw,24px] p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeIndex === idx ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <article
                className={`py-[2px] rounded-[10px] h-[6px] transition-all duration-300 ${
                  activeIndex === idx ? "bg-[#141F01]" : "bg-[#CECECD]"
                }`}
              ></article>
              <div className=" flex flex-col gap-[10px]">
                <h4
                  className={`text-[18px] font-semibold transition-all duration-300 ${
                    activeIndex === idx ? "text-[#9DC655]" : "text-[#141414]"
                  }`}
                >
                  {name}
                </h4>
                <p className=" text-[#444444] text-[14px] font-normal">
                  {text}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValue;
