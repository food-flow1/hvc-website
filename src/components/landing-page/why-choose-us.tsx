"use client";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <section className=" bg-white flex items-center justify-center py-[clamp(74px,9.7vw,188px)]  ">
      <div className=" flex flex-col gap-[clamp(30px,2.0vw,40px)] px-4">
        <div className=" flex flex-col gap-1 items-center justify-center">
          <article className="py-[7px] px-[20px] bg-[#dedede] rounded-[8px] w-fit ">
            <p className=" text-[10px] font-medium text-[#141414]">
              Key highlights
            </p>
          </article>

          <div className=" flex flex-col gap-[10px] items-center">
            <h3 className=" text-[#141414] leading-[clamp(35px,1.6vw,40px] font-medium text-[clamp(24px,2vw,40px)] ">
              Why choose us
            </h3>
            <p className=" text-[16px] text-[#444444] font-normal text-center">
              We’re more than just a farm — we’re your trusted partner in
              sustainable agriculture.
            </p>
          </div>
        </div>

        <section className=" flex gap-1  max-[981px]:flex-col items-center justify-center max-[981px]:gap-[20px]  ">
          <div
            className=" p-[clamp(16px,1vw,20px)] flex flex-col rounded-[10px] bg-[#000000] w-[310px] rotate-10  max-[981px]:rotate-none clip-slant1  "
            // style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
            // style={{ clipPath: "polygon(8% 0%, 100% 0%, 98% 100%, 0% 100%)" }}
            // style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%" }}
          >
            <figure>
              <Image
                src="/seedling.png"
                alt="seedling"
                width={90}
                height={100}
              />
            </figure>
            <article className=" flex flex-col gap-2">
              <p className=" font-medium text-[clamp(20px,1.25vw,24px)] text-white">
                Sustainable Practices
              </p>
              <p className=" text-[16px] font-normal leading-[24px] text-white">
                From pesticide-free farming to smart water use, we’re committed
                to methods that respect the planet and future generations.
              </p>
            </article>
          </div>

          <div className=" p-[clamp(16px,1vw,20px)] flex flex-col rounded-[10px] bg-[#FAFAFA] w-[310px] skew-y-1 ">
            <figure>
              <Image
                src="/expertise.png"
                alt="expertise"
                width={90}
                height={100}
              />
            </figure>
            <article className=" flex flex-col gap-2">
              <p className=" font-medium text-[clamp(20px,1.25vw,24px)] text-[#000]">
                Global Expertise
              </p>
              <p className=" text-[16px] font-normal leading-[24px] text-[#585858]">
                Years of international experience delivering scalable
                agricultural solutions across diverse climates and regions.
              </p>
            </article>
          </div>

          <div
            className=" p-[clamp(16px,1vw,20px)] flex flex-col rounded-[10px] bg-[#035925] w-[310px] 
         -rotate-10 max-[981px]:rotate-none clip-slant2"
            // style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            // style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            // style={{
            //   clipPath: "polygon(9% 0%, 100% 0%, 100% 100%, -17% 106%)",
            // }}
          >
            <figure>
              <Image
                src="/thousands.png"
                alt="expertise"
                width={90}
                height={100}
              />
            </figure>
            <article className=" flex flex-col gap-2">
              <p className=" font-medium text-[clamp(20px,1.25vw,24px)] text-white">
                Trusted by Thousands
              </p>
              <p className=" text-[16px] font-normal leading-[24px] text-white">
                From pesticide-free farming to smart water use, we’re committed
                to methods that respect the planet and future generations.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyChooseUs;
