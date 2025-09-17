"use client";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

function AboutHero() {
  return (
    <main className="px-[clamp(24px,4.9vw,80px)] py-[clamp(40px,5.2vw,75px)] bg-[#141F01] min-h-screen items-center ">
      <div className="flex flex-col items-center w-full  lg:flex-row ">
        <div className="flex-1 flex flex-col gap-5  ">
          <div className="flex flex-col gap-5">
            <article className="flex flex-col gap-3">
              <div className="px-[10px] py-[9px] flex items-center bg-[#353e26] w-fit rounded-[8px]">
                <p className="text-white text-sm font-medium">About us</p>
              </div>
              <h1 className="text-[clamp(24px,3.3vw,48px)] font-semibold text-white leading-tight">
                Our Story
              </h1>
            </article>

            <p className="text-[16px] text-white leading-relaxed max-w-[625px]">
              Harvest Value Chain Limited (HVC) was founded in 2022 with a clear
              vision: to transform Africa's agricultural landscape by
              integrating <strong>Technology</strong> into{" "}
              <strong>sustainable farming</strong> and{" "}
              <strong>processing</strong> to optimize the agricultural value
              chain from farm to fork.
            </p>
          </div>

          <div className="flex-1  lg:order-2 min-[1026px]:hidden">
            <figure className="relative rounded-[8px] w-full  mx-auto">
              <Image
                src="/about-uss.png"
                width={550}
                height={563}
                alt="food flow"
                className="w-full h-auto rounded-[8px]"
              />
              {/* Overlay actions */}
              <Link
                href="/solutions"
                className="absolute right-0 bottom-[10px] flex items-center gap-2  px-[7px] py-[8px] rounded-tl-[20px] rounded-bl-[20px] bg-[#141F01] cursor-pointer"
              >
                <Button variant="secondary" size="lg" className="w-fit">
                  View solutions
                </Button>

                <article className=" flex items-center justify-center p-[6px] border border-[#9DC655] rounded-[8px] w-[38px] h-[38px] max-[923px]:hidden">
                  <HiArrowUpRight className=" cursor-pointer" />
                </article>
              </Link>
            </figure>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] text-white leading-relaxed max-w-[625px]">
              From humble beginnings, Harvest Value Chain Limited (HVC) has
              evolved into a dynamic agribusiness player driving innovation
              across the agricultural value chain from farm to market.
            </p>

            <div className="">
              <p className="text-[16px] text-white leading-relaxed max-w-[625px]">
                Today, our operations encompass:
              </p>
              <ul className="text-[16px] text-white leading-relaxed max-w-[625px] ">
                <li className=" text-white font-normal ">
                  <strong className=" text-[#9DC655] text-semibold text-[16px] ">
                    • Over 52 hectares of high yield farmland
                  </strong>{" "}
                  dedicated to sustainable cultivation of priority crops.
                </li>
                <li className="text-white font-normal">
                  <strong className="text-[#9DC655] text-semibold text-[16px] ">
                    {" "}
                    • Climate smart livestock farming
                  </strong>{" "}
                  systems that ensure animal welfare and environmental
                  sustainability.
                </li>
                <li className="text-white font-normal ">
                  <strong className="text-[#9DC655] text-semibold text-[16px] ">
                    {" "}
                    • Value add processing units
                  </strong>{" "}
                  that convert raw materials into market ready products like
                  Garri, cassava flour, corn flour, and animal feed, supporting
                  food security and agro industrialization.
                </li>
                <li className="text-white font-normal">
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    {" "}
                    • FoodFlow
                  </strong>
                  , our award nominated{" "}
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    Farm-to-Fork Agri-Tech Platform
                  </strong>{" "}
                  that connects farmers directly to consumers.
                </li>
                <li className="text-white font-normal">
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    {" "}
                    • A cooperative based investment model (HVCCG)
                  </strong>{" "}
                  allowing members to co-own agribusiness ventures, access
                  inputs, and enjoy guaranteed market linkage.
                </li>
                <li className=" text-white font-normal">
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    {" "}
                    • Agro Waste to Energy innovation
                  </strong>
                  , piloted through our FarmFuel initiative, converting
                  agricultural waste into clean, renewable energy to power rural
                  operations and reduce environmental impact.
                </li>
                <li className=" text-white font-normal">
                  <strong className=" text-[#9DC655] text-semibold text-[16px]">
                    {" "}
                    • EU and state backed projects
                  </strong>{" "}
                  including farmer data digitization and community training
                  under CIWA and Kwara State partnerships.
                </li>
                <li className=" text-white font-normal">
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    •
                  </strong>{" "}
                  A commitment to{" "}
                  <strong className="text-[#9DC655] text-semibold text-[16px]">
                    gender inclusion, youth empowerment ,
                  </strong>{" "}
                  and digital transformation. across all our operations.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className=" flex justify-center items-center flex-1">
          <div className="flex-1  lg:order-2 max-[1026px]:hidden">
            <figure className="relative rounded-[8px] w-full  mx-auto">
              <Image
                src="/about-uss.png"
                width={550}
                height={563}
                alt="food flow"
                className=" h-auto rounded-[8px]"
              />

              <div className="absolute  right-[0px] left-[336px] bottom-[40px] flex items-center gap-2  px-[12px] py-[8px] rounded-tl-[20px] rounded-bl-[20px] bg-[#141F01]">
                <Button variant="secondary" size="lg-v">
                  View solutions
                </Button>
                <Link
                  href="/solutions"
                  className=" flex items-center justify-center p-[6px] border border-[#9DC655] rounded-[8px] w-[38px] h-[38px]"
                >
                  <HiArrowUpRight className=" cursor-pointer" />
                </Link>
              </div>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutHero;
