"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const newsItems = [
  {
    id: 1,
    title:
      "Introducing the Nigeria Youth Farmers Network (NYFN) – Empowering the Next Generation of Farmers",
    details:
      "The Nigeria Youth Farmers Network is more than just an organization; it's a movement that is set to transform the agricultural landscape of Nigeria by empowering the next generation of farmers.",
    date: "16th April, 2025",
    image: "/news1.png",
  },
  {
    id: 2,
    title: "The Transformational Impact of INCITIS on Emerging African Cities",
    details:
      "INCITIS is leading the way in reimagining how African cities can feed their populations while also addressing broader issues like climate change and urban aesthetics. Their work offers a blueprint for how agriculture can be integrated into urban planning to create healthier, more sustainable cities.",
    date: "6th April, 2025",
    image: "/news2.png",
  },
  {
    id: 3,
    title:
      "Exploring the Potentials of the FCT-SAPZ Project for Local Agro Companies and Foreign Investors",
    details:
      "The FCT-SAPZ Project is a game-changer for Nigeria's agricultural sector. It offers local agro companies and foreign investors a unique opportunity to collaborate, innovate, and drive economic growth.",
    date: "13th March, 2025",
    image: "/news3.png",
  },
  {
    id: 4,
    title:
      "HVC Partners with Kwara State Government to Empower Farmers for the 2024 Wet Season Farming",
    details:
      "HVC proudly joins forces with the Kwara State Government to support local farmers for the 2024 wet season. Through this partnership, HVC and the Ministry of Agriculture are conducting a thorough verification process to ensure real farmers receive the necessary inputs and support.",
    date: "2nd February, 2025",
    image: "/news4.png",
  },
];

export default function NewsMedia() {
  const router = useRouter();
  return (
    <main className="w-full min-h-screen py-8 lg:py-[148px] bg-white lg:bg-[#FAFAFA] px-5 sm:px-[clamp(20px,3vw,32px)] lg:px-[80px]">
      <div className="flex flex-col lg:flex-row w-full px-2 sm:px-4 lg:px-[40px] lg:bg-white bg-[#FAFAFA] rounded-[10px] shadow ">
        <section className="flex flex-col justify-between w-full lg:w-[350px] xl:w-[400px]  mb-8 lg:mb-0 lg:pr-8  pt-[clmap(5px,4vw,78px)] pb-[45px]">
          <Image
            src="/big-logo.png"
            alt="logo"
            width={140}
            height={112}
            className="mb-6 lg:mb-0"
          />

          <div className="flex flex-col gap-[27px]">
            <article className="flex gap-[10px] flex-col">
              <h4 className="text-[#141414] text-[28px] font-semibold">
                HVC News & Media
              </h4>
              <p className="text-[16px] font-normal text-[#686A6C]">
                At HVC, we believe every step forward is worth sharing — from
                sustainable farming breakthroughs and agro-processing milestones
                to inspiring partnerships with farmers, communities, and
                institutions. This is where we document the growth, challenges,
                and triumphs shaping our mission to redefine the agricultural
                value chain in Nigeria and across Africa.
              </p>
            </article>
            <figure className="hidden lg:block">
              <Image src="/new-log.png" alt="logo" width={337} height={250} />
            </figure>
          </div>
        </section>

        <div className="flex flex-col flex-1 lg:border-l border-l-[#ddd] pb-[43px] pt-[20px] ">
          <p className="font-medium text-[#141414] text-[16px] border-b border-b-[#ddd] pb-4 mb-[35px] pl-[34px]">
            All News
          </p>
          <section className="flex flex-col gap-[30px]  lg:pl-[34px] pl-1">
            {newsItems.map(({ title, details, date, image, id }) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row gap-[16px] items-start"
              >
                <div className="rounded-[10px] w-full sm:w-[267px] flex-shrink-0">
                  <Image
                    src={image}
                    alt="news"
                    width={267}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-[10px]"
                  />
                </div>

                <section className="flex flex-col justify-between flex-1 h-full">
                  <article className="flex flex-col gap-2">
                    <h4
                      onClick={() => router.push(`/news/${id}`)}
                      className="text-[18px] font-semibold text-[#9DC655] underline cursor-pointer"
                    >
                      {title}
                    </h4>
                    <p className="text-[#444444] text-[15px] font-normal">
                      {details}
                    </p>
                  </article>
                  <div className="flex justify-between  mt-4 items-end ">
                    <p className="text-[#141414] text-[14px] font-semibold mb-2">
                      {date}
                    </p>

                    <Image
                      className=" cursor-pointer"
                      onClick={() => router.push(`news/${id}`)}
                      src="/news-arrow.png"
                      alt="arrow"
                      width={44}
                      height={44}
                    />
                  </div>
                </section>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
