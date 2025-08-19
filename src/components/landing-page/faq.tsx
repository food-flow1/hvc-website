"use client";

import Image from "next/image";
import TagLayout from "./tag-layout";
import { Accordion } from "@mantine/core";
import classes from "../ui/mantine/accordion.module.css";
import { GoPlus } from "react-icons/go";

function Faq() {
  const faqList = [
    {
      value: "How do i sign up for Foodflow?",
      description:
        "We believe in harnessing the power of nature and technology to create a sustainable future for food production, energy, and economic growth.",
    },
    {
      value: "How do i make payment?",
      description:
        "We believe in harnessing the power of nature and technology to create a sustainable future for food production, energy, and economic growth.",
    },
    {
      value: "What is the farm fuel all about?",
      description:
        "We believe in harnessing the power of nature and technology to create a sustainable future for food production, energy, and economic growth.",
    },
    {
      value: "How do i contact HVC?",
      description:
        "We believe in harnessing the power of nature and technology to create a sustainable future for food production, energy, and economic growth.",
    },
    {
      value: "Are all farmers eligible to join HVCCS?",
      description:
        "We believe in harnessing the power of nature and technology to create a sustainable future for food production, energy, and economic growth.",
    },
  ];

  return (
    <section className=" bg-[#fbfdf8] py-[clamp(30px,3.8vw,74px)] px-[clamp(50px,4.5vw,87px)]  flex items-center justify-center max-[726px]:px-5 ">
      <div className=" flex justify-between gap-[clamp(17px,2vw,34px)] max-[726px]:flex-col max-[726px]:w-full">
        <div className=" flex flex-1">
          <TagLayout
            tag="FAQs"
            tagColour="#141414"
            subText="Frequently asked questions"
            subTextColor="#141414"
            description="For any unanswered questions, reach out to us and we will be glad to provide you with answers"
            descriptionColor="#444444"
            tagBg="#dbdcd8"
          />
        </div>

        <div className="w-full flex flex-1 max-[726px]:w-full">
          <Accordion
            chevron={<GoPlus />}
            className="  w-[clamp(500px,36vw,705px)] max-[726px]:w-full"
            classNames={classes}
            defaultValue="How do i sign up for Foodflow?"
            chevronPosition="left"
            chevronSize={20}
          >
            {faqList?.map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
                className=" border border-[#E7EAE9] m-2 "
              >
                <Accordion.Control className=" text-[#444444] text-[24px] font-semibold">
                  {item.value}
                </Accordion.Control>
                <Accordion.Panel className="">
                  {item.description}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
