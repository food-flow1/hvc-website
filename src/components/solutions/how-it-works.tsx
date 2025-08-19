import React from "react";

export default function HowItWorks() {
  return (
    <section className="flex px-4 md:px-8 lg:px-[clamp(20px,4vw,80px)] py-8 md:py-12 lg:py-[clamp(22px,6.1vw,101px)] items-center justify-center bg-white">
      <div className="flex flex-col gap-[clamp(16px,2vw,24px)] md:gap-8 lg:gap-[47px] w-full max-w-7xl">
        <article className="flex flex-col gap-[clamp(10px,1vw,12px)] md:gap-[13px]">
          <h3 className="text-[clamp(24px,5vw,30px)] font-bold text-[#141414]">
            How it works
          </h3>
          <p className="text-[clamp(13px,2.5vw,14px)] font-normal text-[#444444] leading-relaxed">
            FarmFuel is a circular waste-to-energy solution designed to address
            agricultural waste and energy scarcity in rural areas. Here's a
            step-by-step overview of how it operates:
          </p>
        </article>

        <figure className="w-full max-w-full">
          <img
            src="/works.png"
            alt="How FarmFuel works - step by step process"
            className="w-full h-auto object-contain rounded-lg"
          />
        </figure>
      </div>
    </section>
  );
}
