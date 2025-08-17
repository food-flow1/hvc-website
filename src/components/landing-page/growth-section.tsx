"use client";

import { Button } from "@mantine/core";

const growthList = ["Driven", "Rooted", "Impactful"];

function GrowthSection() {
  return (
    <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(25px,4.1vw,80px)] flex justify-center bg-white">
      <section
        className=" py-[clamp(40px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex-col flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full"
        style={{
          background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
        }}
      >
        <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
          <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
            Grow something great together.
          </h4>
          <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] max-[544px]:hidden">
            Farmers, Consumer, Processor, Institution, Agency or any Agro Stake
            holder
          </p>
        </div>

        <div className=" flex-col gap-[10px] hidden max-[544px]:flex">
          <p className="text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px]">
            Whether you're a farmer, distributor, or parner, we're here to
            support your goals with sustainable solutions and global expertise.
          </p>
          <Button variant="dark" size="vlg" className="w-fit">
            Join us
          </Button>
        </div>

        <div className=" flex justify-between max-[544px]:flex-col">
          <div className=" flex max-[544px]:hidden">
            <Button variant="dark" size="vlg" className="w-fit">
              Join us
            </Button>
          </div>

          <section className=" flex gap-[clamp(20px,4.4vw,86px)]">
            {growthList.map((item, idx) => (
              <article key={idx} className=" flex gap-[9px] items-center">
                <figure className="w-full">
                  <img
                    src="/green.png"
                    alt="green-stroke"
                    width={9}
                    height={39}
                  />
                </figure>
                <p className=" text-[clamp(12px,0.8vw,15px)] font-medium text-[#002C11]">
                  {item}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export default GrowthSection;
