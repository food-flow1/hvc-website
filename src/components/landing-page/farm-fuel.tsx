"use client";

import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";

interface PictureTextProps {
  header?: string;
  text?: string;
  details?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image?: string;
  children?: ReactNode;
}

function FarmFuel() {
  return (
    <section className=" p-[clamp(10px,1vw,17px)] flex  gap-[clamp(16px,2vw,24px)] bg-[#FAFAFA] rounded-[8.5px] items-center justify-center max-[631px]:flex-col">
      <figure className=" rounded-[8px] flex-1 w-full max-[631px]:order-2 ">
        <Image src="/farm-fuel.png" width={537} height={537} alt="food flow" />
      </figure>

      <div className=" flex flex-col gap-[clamp(20px,4.1vw,80px)] flex-1 px-[clamp(4px,2vw,44px)] max-[631px]:order-1">
        <section className=" flex flex-col gap-[32px]">
          <article className=" flex flex-col gap-2">
            <h5 className=" text-[clamp(24px,2.5vw,48px)] font-semibold text-[#141414] ">
              Farm Fuel
            </h5>
            <p className=" text-[#585858] font-medium text-[16px]">
              Turning waste into clean energy
            </p>
          </article>
          <p className=" text-[14px] font-normal text-[#444444] max-w-[427px]">
            FarmFuel converts agricultural waste into renewable biogas energy
            and organic fertilizer, helping farmers reduce waste disposal costs
            while providing clean, affordable energy. This solution not only
            powers rural households and farms but also promotes sustainable
            agricultural practices by offering nutrient-rich organic fertilizer.
          </p>
        </section>

        <Link href="/solutions" className=" cursor-pointer">
          <Button variant="secondary" size="lg" className=" w-fit">
            Learn more about farm fuel
          </Button>
        </Link>
      </div>

      {/* <figure className="flex items-center justify-center h-[537px] w-[537px] flex-1">
    <img className="w-full h-full" src="/food-flow.png" alt="" />
  </figure> */}
    </section>
  );
}

export default FarmFuel;
