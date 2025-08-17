"use client";

import clsx from "clsx";
import { section } from "framer-motion/client";

const items = [
  {
    title: "Curated Essentials",
    description:
      "Each package is tailored to the needs of different lifestyles, with fresh produce, staple foods, and household essentials.",
  },
  {
    title: "Bonuses & Rewards",
    description:
      "Enjoy branded items, household materials, and referral rewards to make your experience even more valuable.",
  },
  {
    title: "Flexible Subscription Options",
    description:
      "From low-cost packages for students to specialty plans for health needs, there’s something for everyone.",
  },
  {
    title: "Referral Benefits",
    description:
      "Earn cashback or bonus items when you refer friends and family to Food Freedom.",
  },
];

function FoodFreedomHero() {
  return (
    <section className="flex px-[clamp(40px,4vw,80px)] py-[clamp(40px,4vw,80px)] items-center justify-center bg-[#141F01]">
      <section className="justify-between flex items-center max-w-7xl w-full gap-8 max-[666px]:flex-col  ">
        <div className={clsx("flex flex-col gap-1 flex-1")}>
          <article className="py-[7px] px-[11px] rounded-[8px] w-fit bg-[#353e26]">
            <p className="text-[10px] font-medium text-white">
              HVC Food freedom
            </p>
          </article>

          <div className="flex flex-col gap-[20px]">
            <h3 className="leading-[clamp(35px,3vw,60px)] font-medium text-[clamp(20px,2vw,48px)] text-white">
              Sustainable Food Access for All
            </h3>

            <article className="flex flex-col gap-[30px]">
              <h4 className=" font-normal text-[16px] text-white">
                Food Freedom offers a range of membership plans tailored for
                different lifestyles, from budget-friendly student packages to
                family bundles. Choose your preferred plan, and we’ll deliver a
                variety of food items, bonus essentials, and even branded gifts
                directly to your doorstep each month.
              </h4>

              <section className="flex flex-col gap-[10px]">
                <h2 className="font-semibold text-[20px] text-white">
                  What You Get with Food Freedom
                </h2>

                <ul className="space-y-5  ">
                  {items.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      <span className=" font-medium text-[16px] text-white">
                        {index + 1}. {item.title} –{" "}
                      </span>
                      <span className=" font-normal text-[16px]">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </div>

        <figure
          className={clsx(
            "w-[550px] h-[563px] flex-1 max-[666px]:w-[343px] max-[666px]:h-full"
          )}
        >
          <img
            src="/solution3.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
      </section>
    </section>
  );
}

export default FoodFreedomHero;
