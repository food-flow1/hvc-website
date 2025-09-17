"use client";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <section className=" bg-white flex items-center justify-center py-[clamp(30px,9.7vw,188px)]  ">
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
              We&apos;re more than just a farm, we&apos;re your trusted partner
              in sustainable agriculture.
            </p>
          </div>
        </div>

        <section className=" flex gap-1  max-[981px]:flex-col items-center justify-center max-[981px]:gap-[20px]  ">
          <div className=" p-[clamp(16px,1vw,20px)] flex flex-col rounded-[10px] bg-[#000000] w-[310px] rotate-10  max-[981px]:rotate-none clip-slant1  ">
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
                At HVC, sustainability isn&apos;t just a buzzword, it&apos;s our
                foundation. From climate-smart farming to responsible resource
                use, we prioritize methods that protect the earth today while
                safeguarding food security for tomorrow.
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
                We bring years of international experience to the table,
                delivering scalable agricultural solutions that adapt to diverse
                climates, markets, and communities, ensuring lasting impact
                across borders.
              </p>
            </article>
          </div>

          <div
            className=" p-[clamp(16px,1vw,20px)] flex flex-col rounded-[10px] bg-[#035925] w-[310px] 
         -rotate-10 max-[981px]:rotate-none clip-slant2"
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
                Our growing community of farmers, partners, and subscribers
                trust HVC because we deliver more than promises, we deliver
                results, creating real change in livelihoods, markets, and food
                systems.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyChooseUs;
