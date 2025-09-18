"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

function GrowthSection() {
  return (
    <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
      <section
        className=" py-[clamp(50px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full  max-[713px]:flex-col max-[713px]:justify-center"
        style={{
          background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
        }}
      >
        <section className=" flex justify-between flex-col p-4">
          <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
            <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
              HVC News & Media
            </h4>
            <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] ">
              At HVC, we believe every step forward is worth sharing,from
              sustainable farming breakthroughs and agro-processing milestones
              to inspiring partnerships with farmers, communities, and
              institutions. This is where we document the growth, challenges,
              and triumphs shaping our mission to redefine the agricultural
              value chain in Nigeria and across Africa.
            </p>
          </div>
          <Link href="/news" className=" flex ">
            <Button variant="dark" size="vlg" className="w-fit">
              See all
            </Button>
          </Link>
        </section>

        <div className="relative max-w-[320px] w-full max-[544px]:max-w-full h-[300px] max-[544px]:h-[260px]">
          <div className="absolute top-2 right-1 w-full h-full max-[544px]:h-[160px] bg-[#C18EF4] rounded-[8px] transform rotate-[10deg] z-10 shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>
          <div className="absolute top-5 right-4 w-full h-full max-[544px]:h-[160px] bg-[#CCFC5B] rounded-[8px] transform rotate-[9deg] z-10 shadow-lg flex max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-4  w-full h-[100%] max-[544px]:h-[160px] bg-[#4D7702] rounded-[8px] transform -rotate-[10deg]  shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full bg-[#035925] rounded-[8px] z-30 shadow-xl  p-3 flex max-[575px]:w-[75%] max-[575px]:h-[75%]">
            <div className=" flex p-2   flex-col  relative ">
              <img
                src="/footer-img.png"
                alt="FCT-SAFZ Project meeting"
                className="w-full h-full object-cover"
              />
              <Link href="/news">
                <h5 className="text-white text-[clamp(12px,1vw,14px)] font-medium leading-[1.3] underline">
                  Exploring the Potentials of the FCT-SAFZ Project for Local
                  Agro Companies and Foreign Investors
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GrowthSection;
