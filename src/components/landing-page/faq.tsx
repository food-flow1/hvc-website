"use client";

import Image from "next/image";
import TagLayout from "./tag-layout";
import { Accordion } from "@mantine/core";
import classes from "../ui/mantine/accordion.module.css";
import { GoPlus } from "react-icons/go";

function Faq() {
  const faqList = [
    {
      value: "How Do I Sign Up For Foodflow?",
      description:
        "Simply visit foodflow.africa, click on Get Started/Sign Up, and complete the quick registration form to get started.",
    },
    {
      value: "How Do I Make Payment?",
      description:
        "Payments can be made securely online through our approved gateways or via bank transfer. Instructions are provided at checkout.",
    },
    {
      value: "What Is The FarmFuel All About?",
      description:
        "Farm Fuel is our clean energy initiative that converts agro-waste into affordable renewable energy for farmers and processors. You can read more HERE [Link to Farm Fuel]",
    },
    {
      value: "How Do I Contact HVC?",
      description:
        "You can reach us via email (hello@hvcproject.com), phone (+234 912 220 3166 or +234 808 513 4177), we’re always ready to assist.",
    },
    {
      value: "Are All Farmers Eligible To Join HVCCS?",
      description:
        " Yes, all farmers are welcome. Once you register, our team will guide you through the onboarding process.",
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
