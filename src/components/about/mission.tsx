"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const missionList = [
  {
    name: "Our Mission",
    text: " To become Africa’s leading catalyst for inclusive and sustainable agricultural value chains that empower smallholder farmers and strengthen food systems.",
    img: "/mission.png",
  },

  {
    name: "Our Vision",
    text: "To enhance agricultural productivity, reduce post-harvest losses, and facilitate fair and efficient market access by organizing smallholder farmers, deploying technology, and building strong cooperative systems.",
    img: "/vision.png",
  },
];

function Mission() {
  return (
    <main className=" px-[clamp(20px,5.5vw,80px)] py-[clamp(40px,10vw,155px)] flex items-center bg-[#fff] justify-center  ">
      <div
        className="  flex py-[clamp(20px,41vw,60px)] px-[clamp(20px,5.5vw,80px)] w-[1280px] h-[713px] "
        style={{
          backgroundImage: "url('/about-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          width: "100%",
          flex: 1,
        }}
      >
        <section className=" flex justify-between flex-col flex-1">
          <Link
            href="/cooperatives"
            className=" flex gap-2 justify-end items-center"
          >
            <Button variant="secondary" size="lg">
              View products
            </Button>
            <article className=" flex items-center justify-center p-[6px] border border-[#000] rounded-[8px] w-[38px] h-[38px]">
              <HiArrowUpRight className=" cursor-pointer text-[#000]" />
            </article>
          </Link>

          <section className=" flex flex-col gap-[44px]">
            {missionList.map(({ name, text, img }, idx) => (
              <div key={idx} className=" flex gap-4 items-center">
                <article className=" bg-[#3d3e35] rounded-full p-2">
                  <figure
                    className=" p-[clamp(10px,0.8vw,14px)] bg-white rounded-full w-[50px] h-[50px] items-center justify-center flex
             "
                  >
                    <img src={img} />
                  </figure>
                </article>
                <article className=" flex flex-col">
                  <h5 className=" text-[clamp(19px,1.6vw,24px)] font-semibold text-white">
                    {name}
                  </h5>
                  <p className=" font-normal text-[clamp(14px,1.1vw,16px)] text-white">
                    {text}
                  </p>
                </article>
              </div>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}

export default Mission;
