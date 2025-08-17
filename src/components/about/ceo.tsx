import Image from "next/image";
import React from "react";

function CEO() {
  return (
    <div className=" py-[clamp(20px,4vw,79px)] flex items-center justify-center bg-[#FAFAFA]">
      <section className=" flex items-center    rounded-[16px] bg-[#035925] max-[1116px]:flex-col-reverse  max-[1116px]:bg-none  max-[1116px]:flex-1">
        <div
          className=" px-[29px] py-[40px] w-[480px]  h-[clamp(300px,60vw,550px)] overflow-hidden rounded-[14px] flex  max-[1116px]:w-full    "
          style={{
            backgroundImage: "url('/ceo.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "14px",
          }}
        >
          <p className=" flex items-end font-bold text-[20px] text-white  justify-end  self-end">
            CEO - Chief Executive Officer
          </p>
        </div>

        <section className="py-[clamp(18px,2vw,37px)] px-[clamp(18px,2vw,34px)] flex flex-col gap-[14px] bg-[#035925] h-[550px] w-[clamp(300px,41vw,800px)] justify-center rounded-tr-[14px]  rounded-br-[14px]  max-[1116px]:w-full  max-[462px]:h-full">
          <article className=" flex flex-col">
            <h5 className=" text-[clamp(15px,1.8vw,20px] font-semibold">
              Dear Valued Partners and Customers,
            </h5>
            <p className="text-[clamp(14px,1rem,16px)] font-normal">
              As we move forward, Harvest Value Chain Limited (HVC) remains
              dedicated to leading the agricultural sector through innovation
              and sustainability. Our upcoming expansion of processing
              facilities by 2025 will enhance our ability to deliver top-quality
              products, create jobs, and drive economic growth in our
              communities. Innovation is at the heart of our operations, and we
              will continue to adopt cutting-edge technologies to improve
              efficiency and product quality. Our commitment to community
              engagement remains strong as we expand our support for local
              farmers and invest in essential infrastructure. With a focus on
              global reach and local impact, we are excited about the future and
              confident in our ability to set new standards in agribusiness.
              Thank you for your continued support as we work together to
              achieve great things.
            </p>
            <p className="text-[16px] font-normal">Sincerely,</p>
          </article>
          <div className="flex flex-col gap-1">
            <h4 className=" text-[clamp(18px,2vw,40px)] font-semibold whitespace-pre-line">
              {" "}
              {`The Charles\nAdetola`}
            </h4>
            <figure className="w-[40px] h-[40px]">
              <img src="/linkedin-logo.png" alt="linkedin" />
            </figure>
          </div>
        </section>
      </section>
    </div>
  );
}

export default CEO;
