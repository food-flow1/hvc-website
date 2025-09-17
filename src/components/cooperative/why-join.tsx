"use client";

import { Button } from "@mantine/core";
import clsx from "clsx";
import { section } from "framer-motion/client";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

function WhyJoin() {
  return (
    <section className="flex px-[clamp(20px,4vw,80px)] py-[clamp(20px,4vw,80px)] items-center justify-center bg-white">
      <section className="justify-between flex  w-full gap-16 max-[666px]:flex-col-reverse max-[666px]:gap-8 items-center">
        <figure
          className={clsx(
            "w-[550px] h-[563px] flex-1 max-[666px]:w-[343px] max-[666px]:h-full"
          )}
        >
          <img
            src="/join-bg.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div className="flex flex-col gap-1 flex-1 h-full">
          <article className="py-[7px] px-[11px] rounded-[8px] w-fit bg-[#dedede]">
            <p className="text-[10px] font-medium text-[#141414]">
              Why Join HVCCS?
            </p>
          </article>

          <div className="flex flex-col justify-between max-[666px]:flex-col-reverse gap-[clamp(20px,2vw,64px)] h-full">
            <div className="flex flex-col gap-[10px]">
              <h3 className="leading-[clamp(35px,3vw,60px)] font-medium text-[clamp(20px,2vw,48px)] text-[#141414]">
                Farming is better together
              </h3>

              <article className="flex flex-col">
                <p className="text-[16px] font-normal text-[#444444] mb-4">
                  The Harvest Value Chain Cooperative Society (HVCCS) isn't just
                  a platform.it's a movement. A trusted support system. A
                  national alliance of farmers who believe that by working
                  together, we grow faster, stronger, and smarter. When you join
                  HVCCS, you become part of a solution:
                </p>
                <span className="text-[16px] font-normal text-[#444444] block mb-1">
                  -To break the cycle of poor yields and low income.
                </span>
                <span className="text-[16px] font-normal text-[#444444] block mb-1">
                  -To eliminate middlemen and access real markets.
                </span>
                <span className="text-[16px] font-normal text-[#444444] block">
                  -To stop farming alone and start farming empowered.
                </span>
              </article>
            </div>
            <div className="flex gap-[10px] mt-8">
              <Link
                href="https://forms.gle/EkXX6Yn7WK3Kv1aVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  Join now
                </Button>
              </Link>
              <Link
                href="https://forms.gle/EkXX6Yn7WK3Kv1aVA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-[6px] border border-[#141414] rounded-[8px] w-[38px] h-[38px]"
              >
                <HiArrowUpRight className="cursor-pointer" color="#141414" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhyJoin;
