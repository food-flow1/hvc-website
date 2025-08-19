"use client";

import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import FormSection from "@/src/components/shared/form-section";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveData: false,
  });

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
                The Transformative Impact of INCITIS on Emerging African Cities
              </h4>
              <p className="text-[16px] font-normal text-[#444444]">
                At the 6th Nigeria International Agriculture Expo in Abuja, We
                had the privilege of meeting{" "}
                <span className=" text-[16px] font-semibold text-[#444444]">
                  Dr. Oyebola,
                </span>
                  a pioneer in urban agricultural innovation and the driving
                force behind INCITIS at the University of Ibadan. INCITIS is at
                the forefront of revolutionizing African city-region food
                systems, with a comprehensive approach that not only addresses
                food and nutrition security (FNS) but also intersects with
                climate change mitigation and aesthetic enhancements in urban
                environments.
              </p>
            </article>
            <figure className=" w-full">
              <Image
                src="/news-bg2.png"
                width={1280}
                height={513}
                alt="news 1"
                className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
              />
            </figure>
          </div>

          <div className=" flex flex-col gap-[40px]">
            <article className=" flex flex-col gap-4">
              <h3 className=" text-[20px] font-semibold text-[#141414]">
                The Role of INCITS in Emerging Cities
              </h3>
              <article>
                <p className=" text-[#444444] font-normal text-[16px]">
                  INCITIS stands out for its holistic approach to urban
                  development, particularly in rapidly growing African cities.
                  The organization focuses on enhancing food security across
                  four critical dimensions: availability, accessibility,
                  utilization, and stability. By integrating agriculture into
                  the urban fabric, INCITIS is helping cities become more
                  resilient to food shortages, economic disruptions, and the
                  adverse effects of climate change.
                </p>
                <p className="text-[#444444] font-normal text-[16px] pt-2">
                  One of the most striking aspects of INCITIS’s work is its
                  emphasis on creating food systems that are both sustainable
                  and aesthetically pleasing. Through innovative projects,
                  INCITIS is transforming urban spaces into green, productive
                  areas that contribute to the well-being of city dwellers. This
                  approach not only addresses the immediate needs for food but
                  also improves the quality of life by enhancing the visual and
                  environmental appeal of urban spaces.
                </p>
              </article>
            </article>

            <article className=" flex flex-col gap-[16px]">
              <h4 className=" font-semibold text-[20px] text-[#141414]">
                Climate Change and Urban Agriculture
              </h4>
              <article>
                <p className=" text-[#444444] font-normal text-[16px]">
                  INCITIS’s initiatives are particularly relevant in the context
                  of climate change. By promoting urban agriculture, the
                  organization is helping cities reduce their carbon footprints
                  and build resilience against the impacts of global warming.
                  Urban farming reduces the need for long-distance
                  transportation of food, cutting down on greenhouse gas
                  emissions. Moreover, green spaces in cities can help mitigate
                  the urban heat island effect, making cities cooler and more
                  livable.
                </p>
                <p className="text-[#444444] font-normal text-[16px] pt-2">
                  This focus on sustainability and climate action is closely
                  aligned with the mission of Harvest Value Chain Limited (HVC).
                  At HVC, we are committed to implementing sustainable farming
                  practices that protect the environment while enhancing
                  agricultural productivity. INCITIS’s work in integrating
                  agriculture into urban settings offers valuable insights that
                  could be applied to our own operations, particularly as we
                  explore new ways to minimize our environmental impact and
                  contribute to the fight against climate change.
                </p>
              </article>
            </article>

            <article className=" flex flex-col gap-4">
              <h4 className="font-semibold text-[20px] text-[#141414]">
                Aesthetic Enhancements and Social Impact
              </h4>
              <article>
                <p className="text-[#444444] font-normal text-[16px]">
                  Beyond the practical benefits of food production and climate
                  mitigation, INCITIS’s work also enhances the aesthetic value
                  of urban environments. By incorporating green spaces and urban
                  farms into city landscapes, INCITIS is helping to create
                  cities that are not only functional but also beautiful and
                  vibrant. This approach fosters a sense of community,
                  encourages social interaction, and improves the mental and
                  physical well-being of residents.
                </p>

                <p className="text-[#444444] font-normal text-[16px]">
                  For HVC, the work of INCITIS underscores the importance of
                  thinking beyond traditional agricultural boundaries. As we
                  continue to grow, we are inspired to explore how our own
                  operations can contribute to creating more livable,
                  sustainable, and aesthetically pleasing environments in the
                  communities we serve.
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
