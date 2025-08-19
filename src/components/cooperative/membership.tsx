import React from "react";

const member = [
  {
    id: 1,
    name: "Associate Member",
  },
  {
    id: 2,
    name: "Full Member",
  },
  {
    id: 3,
    name: "Senior Member",
  },
  {
    id: 4,
    name: "Executive Member",
  },
];

export default function Membership() {
  return (
    <div className="px-[clamp(20px,4vw,84px)] py-[clamp(20px,6vw,124px)] flex flex-col gap-[clamp(20px,3vw,60px)] bg-[#fff]">
      <div className="flex flex-col gap-[5px]">
        <article className="py-[7px] px-[11px] rounded-[8px] w-fit bg-[#ddd]">
          <p className="text-[10px] font-medium text-[#141414]">Membership</p>
        </article>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#141414] leading-[clamp(28px,1.6vw,40px)] font-medium text-[clamp(18px,2vw,40px)]">
            Membership Tiers & Requirements & Benefits
          </h3>
          <article className=" flex flex-col gap-[5px]">
            <p className="text-[clamp(14px,1.5vw,16px)] font-semibold text-[#444444]">
              Membership Requirements
            </p>
            <p className="text-[clamp(14px,1.5vw,16px)] font-normal text-[#444444]">
              Becoming a member of HVCCS means committing to shared prosperity,
              structured engagement, and mutual accountability.
            </p>
          </article>
        </div>
      </div>

      <section
        className="flex px-[clamp(15px,2.2vw,44px)] py-[clamp(20px,2.8vw,54px)] items-center justify-center min-h-[400px] sm:min-h-[500px]"
        style={{
          backgroundImage: "url('/member-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "clamp(12px,2vw,20px)",
        }}
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 w-full max-w-7xl">
          {member.map(({ name, id }) => (
            <div
              key={id}
              className="flex items-center flex-col justify-between px-[clamp(20px,3vw,60px)] py-[clamp(20px,3.5vw,70px)] rounded-[14px] gap-[clamp(15px,2vw,54px)] min-h-[400px] sm:min-h-[450px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/7 rounded-[14px]"></div>

              <section className="flex flex-col gap-[clamp(10px,1vw,34px)] flex-grow relative z-10">
                <article className="flex flex-col gap-2">
                  <h3 className="font-bold text-[clamp(16px,2vw,34px)] text-white text-center sm:text-left">
                    {name}
                  </h3>
                  <p className="text-white font-medium text-[clamp(12px,1.5vw,15px)] text-center sm:text-left">
                    Completed registration and onboarding-Dues based on declared
                    land size and requirements
                  </p>
                </article>

                <article className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-baseline justify-center sm:justify-start">
                    <span className="text-white font-bold text-[clamp(24px,4vw,34px)]">
                      ₦367,200.00
                    </span>
                    <span className="text-gray-300 font-bold text-[clamp(16px,2.5vw,24px)] ml-1">
                      /month
                    </span>
                  </div>

                  <section className="flex px-[clamp(12px,1.8vw,26px)] py-[clamp(10px,1vw,17px)] rounded-[8px] items-center justify-between bg-[#9DC655]">
                    <article className="flex flex-col gap-1">
                      <h4 className="text-[clamp(14px,1.8vw,20px)] font-semibold text-white">
                        Subscribe now
                      </h4>
                      <p className="text-white font-normal text-[clamp(11px,1.2vw,14px)]">
                        Elevate your growth
                      </p>
                    </article>
                    <img
                      src="/member-icon.png"
                      alt="Subscribe"
                      className="w-[clamp(20px,3vw,30px)] h-[clamp(20px,3vw,30px)] object-contain"
                    />
                  </section>
                </article>
              </section>

              <section className="flex flex-col gap-[8px] sm:gap-[10px] w-full relative z-10">
                <article className="flex gap-[8px] sm:gap-[10px] items-start">
                  <img
                    src="/tick-icon.png"
                    alt="included"
                    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] flex-shrink-0 mt-1"
                  />
                  <p className="text-[clamp(13px,1.5vw,16px)] text-white font-normal">
                    Basic orientation & training
                  </p>
                </article>
                <article className="flex gap-[8px] sm:gap-[10px] items-start">
                  <img
                    src="/tick-icon.png"
                    alt="included"
                    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] flex-shrink-0 mt-1"
                  />
                  <p className="text-[clamp(13px,1.5vw,16px)] text-white font-normal">
                    Community networking
                  </p>
                </article>
                <article className="flex gap-[8px] sm:gap-[10px] items-start">
                  <img
                    src="/tick-icon.png"
                    alt="included"
                    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] flex-shrink-0 mt-1"
                  />
                  <p className="text-[clamp(13px,1.5vw,16px)] text-white font-normal">
                    No access to inputs, equipments, loans or support services
                  </p>
                </article>
              </section>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
