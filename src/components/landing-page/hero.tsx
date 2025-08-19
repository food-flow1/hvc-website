"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroCarousel from "./hero-carousel";

function Hero() {
  const images = ["/hero-bg-1.png", "/hero-bg-2.png", "/hero-bg-3.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <main className=" bg-[#141F01] py-[clamp(30px,6.2vw,90px)] flex flex-col gap-[clamp(25px,3.5vw,50px)] px-[clamp(10px,5.5vw,80px)]">
      <section className=" flex flex-col gap-1">
        <article className=" px-[10px] py-[9px] flex items-center  bg-[#353e26] w-fit rounded-[8px]">
          <p>Welcome to Harvest Value Chain Ltd</p>
        </article>
        <section className=" flex flex-col">
          <div className=" flex justify-between items-center">
            <h3 className="text-[clamp(24px,3.3vw,48px)] leading-[clamp(40px,4.1vw,60px)] font-semibold max-w-[1100px]">
              Leading the Future of{" "}
              <span className=" text-[#9DC655] text-[clamp(24px,3.3vw,48px)]">
                {" "}
                Sustainable{" "}
              </span>
              Agriculture and Innovation in Nigeria.
            </h3>
            <figure className=" p-5 bg-[#353e26] flex items-center justify-center rounded-full">
              <Image src="/plant.png" alt="logo" width={140} height={140} />
            </figure>
          </div>
          <p className=" font-normal text-[#FAFAFA] text-[16px] leading-[28px] max-w-[758px]">
            We believe in harnessing the power of nature and technology to
            create a sustainable future for food production, energy, and
            economic growth.
          </p>
        </section>
      </section>

      <HeroCarousel />
    </main>
  );
}

export default Hero;
