import React from "react";
import TagLayout from "../landing-page/tag-layout";
import Image from "next/image";
import { Button } from "@mantine/core";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function JoinPartner() {
  const sections = [
    {
      title: "Types of partnerships",
      items: [
        {
          label: "Contract Farming",
          description:
            "Partner with us to grow high-quality crops with guaranteed market access and technical support.",
        },
        {
          label: "Processing Collaborations",
          description:
            "Leverage our state-of-the-art processing facilities to add value to your agricultural products.",
        },
        {
          label: "Distribution Partnerships",
          description:
            "Work with us to bring quality agricultural products to new markets, both locally and globally.",
        },
      ],
    },
    {
      title: "Why partner with HVC?",
      items: [
        {
          label: "Access to Advanced Technology",
          description:
            "Benefit from the latest agricultural technologies and practices to enhance your operations.",
        },
        {
          label: "High-Impact Projects",
          description:
            "Join forces with us on projects that prioritize sustainability, innovation, and community development.",
        },
        {
          label: "Shared Values",
          description:
            "Partner with a company that is committed to quality, sustainability, and making a positive impact on the communities we serve.",
        },
      ],
    },
  ];

  return (
    <div className="px-[clamp(30px,4vw,80px)] py-[clamp(40px,5.8vw,113px)] flex items-center justify-center bg-white">
      <section className="flex flex-col gap-[30px]">
        <TagLayout
          tag="Partner with HVC"
          tagBg="#dedede"
          tagColour="#141414"
          subText="Collaborate with us for greater impact"
          subTextColor="#141414"
          description="At HVC, we don't just build solutions—we build communities, empower people, and drive real impact. Whether you're a farmer, vendor, investor, or partner, working with us means being part of a mission to transform agriculture, food access, and livelihoods across Africa. Together, we can create sustainable systems that nourish both people and economies."
          descriptionColor="#444444"
        />

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[578px] overflow-hidden">
          <div className="absolute inset-0 transition-opacity duration-1000 ">
            <img
              src="/partner-bg.png"
              alt=""
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>

          <div className="absolute top-0 left-0">
            <div
              className="bg-[#fff] rounded-[10px]"
              style={{
                // paddingBottom: "16px",
                width: "255px",
                height: "64px",
                clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
              }}
            >
              <div className=" flex gap-[10px] items-center">
                <Button variant="secondary" size="lg">
                  Send a message
                </Button>
                <Link
                  href="/about"
                  className=" flex items-center justify-center p-[6px] border border-[#000] rounded-[8px] w-[38px] h-[38px]"
                >
                  <HiArrowUpRight className=" cursor-pointer" color="#000" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[30px] ">
          {sections.map((section, idx) => (
            <section key={idx} className=" flex flex-col gap-[14px]">
              <h2 className="text-2xl font-semibold text-[#141414]">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[#141414]">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <span className="font-semibold text-[16px] text-[#444444]">
                      {item.label}:
                    </span>{" "}
                    <span className="font-normal text-[16px] text-[#444444]">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
