import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TagLayout from "../landing-page/tag-layout";
import clsx from "clsx";

export default function WeDedicated() {
  return (
    <section className="px-[clamp(20px,4.6vw,90px)] py-[clamp(30px,6.6vw,128px)] flex items-center justify-center bg-white">
      <div className="flex gap-[7px] items-stretch justify-center max-[1032px]:w-full max-[1016px]:flex-col max-[1016px]:gap-4">
        <div
          className=" rounded-[24px] flex items-center justify-center flex-1 min-h-[clamp(330px,32vw,625px)] max-[1016px]:w-full max-[1016px]:h-[clamp(330px,40vw,400px)] max-[1016px]:rounded-none"
          style={{
            backgroundImage: "url('/value-chain.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // borderRadius: "24px",
          }}
        >
          <article className="flex items-center px-[clamp(12px,1rem,16px)]">
            <h4 className="text-[clamp(20px,2vw,40px)] font-semibold text-[#141F01]">
              Harvest Value Chain
            </h4>
            <FaArrowRight
              color="#141F01"
              className="text-[clamp(16px,2vw,38px)] ml-2"
            />
          </article>
        </div>

        <section className="px-[32px] items-center justify-center bg-[#002C11] flex-1 flex py-[clamp(60px,5vw,100px)] min-h-[clamp(330px,32vw,625px)] max-[1016px]:w-full max-[1016px]:h-[clamp(330px,40vw,400px)]">
          <div className="flex flex-col gap-4">
            <article
              className={clsx(
                "py-[7px] px-[11px] bg-[#254a32] rounded-[8px] w-fit"
              )}
            >
              <p className="text-[10px] font-medium text-[#fff]">
                We are dedicated
              </p>
            </article>

            <div className="flex flex-col gap-[16px]">
              <h3 className="text-white leading-[clamp(28px,4vw,48px)] font-medium text-[clamp(24px,3.5vw,40px)]">
                Committed to growth and sustainability
              </h3>
              <div className="flex flex-col gap-[12px]">
                <p className="text-[clamp(14px,1.2vw,16px)] text-[#fff] font-normal leading-relaxed">
                  We're not just growing food—we're growing solutions. At HVC,
                  we deliver comprehensive agricultural services that go beyond
                  the farm, focusing on innovation, sustainability, and
                  efficiency at every step of the supply chain.
                </p>
                <p className="text-[clamp(14px,1.2vw,16px)] text-[#fff] font-normal leading-relaxed">
                  We are dedicated to farming in ways that protect our
                  environment, reduce waste, and conserve resources. We believe
                  that true sustainability goes hand in hand with community
                  development, which is why we actively engage with local
                  communities to promote education, health, and economic
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
