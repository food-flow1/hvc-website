"use client";

import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import FormSection from "@/src/components/shared/form-section";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <main className=" px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex  items-center justify-center bg-white">
      <section className=" flex flex-col gap-[40px]">
        <article
          className=" flex items-center gap-[11px] cursor-pointer "
          onClick={() => router.back()}
        >
          <FaArrowLeftLong color="#141414" />
          <p className=" font-medium text-[20px] text-[#141414]">Go back</p>
        </article>

        <section className=" flex flex-col gap-[53px]">
          <div className=" flex flex-col gap-[50px]">
            <article className="flex flex-col gap-[10px]">
              <h4 className=" text-[#9DC655] text-[20px] font-semibold">
                Exploring the Potentials of the FCT-SAPZ Project for Local Agro
                Companies and Foreign Investors
              </h4>
              <p className="text-[16px] font-normal text-[#444444]">
                The recently concluded
                <span className=" text-[16px] font-semibold text-[#444444]">
                  6th Nigeria International Agriculture Expo
                </span>
                in Abuja was a convergence of key players in the agricultural
                sector, both local and international. Among the many
                opportunities discussed, the FCT-SAPZ Project (Special
                Agro-Industrial Processing Zones Project) stood out as a
                transformative initiative with immense potential for local agro
                companies and foreign investors alike.
              </p>
            </article>
            <figure className=" w-full">
              <Image
                src="/news-bg3.png"
                width={1280}
                height={513}
                alt="news 1"
                className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
              />
            </figure>
          </div>

          <div className=" flex flex-col gap-[40px]">
            <article>
              <p className=" text-[#444444] font-normal text-[16px]">
                The FCT-SAPZ Project is designed to create a dedicated zone for
                agro-industrial processing in the Federal Capital Territory
                (FCT), offering an integrated approach to agricultural
                development. This initiative, spearheaded by the Nigerian
                government, aims to attract private sector investments, create
                jobs, and enhance the value chain in Nigeria’s agricultural
                sector. During the expo, Harvest Value Chain Limited (HVC),
                represented by the CEO,{" "}
                <span className=" text-[16px] font-semibold text-[#444444]">
                  Mr. Charles Adetola
                </span>
                  had the privilege of discussing the project in detail with{" "}
                <span className=" text-[16px] font-semibold text-[#444444]">
                  Mr. Omale Adebisi Olateju,
                </span>
                  the Monitoring and Evaluation Officer for the FCT-SAPZ
                Project, and{" "}
                <span className=" text-[16px] font-semibold text-[#444444]">
                  Mr. Aliyu Mustapha Shaba,
                </span>
                  the Investment Officer. Their insights shed light on the
                significant opportunities this project presents.
              </p>
            </article>

            <article className=" flex flex-col gap-[16px]">
              <h4 className=" font-semibold text-[20px] text-[#141414]">
                Opportunities for Local Agro Companies
              </h4>
              <article>
                <p className=" text-[#444444] font-normal text-[16px]">
                  For local agro companies, the FCT-SAPZ Project offers a unique
                  platform to scale operations, enhance product quality, and
                  increase market access. The project’s infrastructure is
                  designed to support processing activities, ensuring that
                  companies can efficiently convert raw materials into
                  value-added products. This aligns perfectly with HVC’s mission
                  to optimize agricultural value chains through sustainable
                  farming and advanced processing techniques.
                </p>
                <p className="text-[#444444] font-normal text-[16px] pt-2">
                  Moreover, the project’s focus on creating a conducive
                  environment for agro-industrial activities means that
                  companies like HVC can benefit from improved logistics, access
                  to modern processing facilities, and streamlined regulatory
                  processes. This not only enhances efficiency but also reduces
                  operational costs, making it easier to compete in the global
                  market.
                </p>
              </article>
            </article>

            <article className=" flex flex-col gap-4">
              <h4 className="font-semibold text-[20px] text-[#141414]">
                Attracting Foreign Investors
              </h4>
              <article>
                <p className="text-[#444444] font-normal text-[16px]">
                  For foreign investors, the FCT-SAPZ Project represents a
                  strategic entry point into Nigeria’s burgeoning agricultural
                  sector. The project’s integrated approach ensures that
                  investors can leverage a well-developed infrastructure, access
                  a reliable supply of raw materials, and benefit from
                  government incentives. The Nigerian government’s commitment to
                  this project signals a stable and supportive environment for
                  investment, which is crucial for long-term success.
                </p>

                <p className="text-[#444444] font-normal text-[16px]">
                  The discussions with Mr. Olateju and Mr. Shaba highlighted the
                  potential for collaboration between local companies and
                  foreign investors. For HVC, this presents an opportunity to
                  partner with international firms that can bring in capital,
                  technology, and expertise, further enhancing our capacity to
                  produce and process agricultural products sustainably.
                </p>
              </article>
            </article>

            {/* myform */}
            <FormSection />
          </div>
        </section>
      </section>
    </main>
  );
}
