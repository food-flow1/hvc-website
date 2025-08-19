import { main } from "framer-motion/client";
import React from "react";
import { Button } from "../ui/mantine/buttons";
import { GoDotFill } from "react-icons/go";

export default function OpenRoles() {
  const roleList = [
    {
      role: "Farm Manager",
      detail:
        "We are seeking an experienced Farm Manager to oversee our cassava and ginger farms. The ideal candidate will have a strong background in sustainable farming practices and team management.",
    },

    {
      role: "Sales Executive",
      detail:
        "We are looking for a meticulous Quality Control Specialist to ensure that all our products meet the highest standards of quality and safety.",
    },
    {
      role: "Quality Control Specialist",
      detail:
        "We are looking for a meticulous Quality Control Specialist to ensure that all our products meet the highest standards of quality and safety.",
    },

    {
      role: "Internship",
      detail:
        "Are you a student or recent graduate looking to kickstart your career in agriculture? HVC offers internships and training programs designed to give you valuable industry insights and practical skills. Our programs are tailored to provide real-world experience in sustainable farming, agricultural technology, and business operations.",
    },
  ];

  return (
    <section className=" px-[clamp(28px,5.8vw,112px)] py-[clamp(80px,6.7vw,130px)] items-center justify-center bg-white">
      <div className=" flex flex-col gap-[clamp(20px,1.5vw,30px]">
        <h4 className=" text-[34px] font-semibold text-[#141414]">
          All open roles
        </h4>
        <div className=" flex flex-col gap-[20px]">
          {roleList.map(({ role, detail }, idx) => (
            <section
              key={idx}
              className=" pb-[clamp(20px,2vw,40px)] pt-[clamp(15px,1.5vw,30px)] px-[clamp(15px,1.6vw,32px)] flex flex-col  justify-center gap[32px] rounded-[16px] shadow"
            >
              <div className="flex justify-between items-center">
                <div className=" flex flex-col gap-[clamp(15px,1vw,20px)]">
                  <h4 className=" text-[clamp(18px,1vw,24px)] font-semibold text-[#9DC655]">
                    {role}
                  </h4>
                  <p className=" text-[clamp(18px,1vw,24px)] font-normal text-[#667085] max-w-[768px]">
                    {detail}
                  </p>
                </div>

                <section
                  className="flex items-center justify-center w-[313px] h-[200px] max-[476px]:hidden  "
                  style={{
                    backgroundImage: "url('/apply-bg.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // width: "100%",
                  }}
                >
                  <Button variant="secondary" size="apply" className="">
                    Apply here
                  </Button>
                </section>
              </div>

              <div className=" flex flex-col gap-3">
                <article className=" flex gap-3 items-center">
                  <p className=" font-semibold text-[#667085] text-[clamp(14px,0.8vw,18px)]">
                    Kwara State
                  </p>
                  <GoDotFill color="#667085" />
                  <p className=" font-semibold text-[#667085] text-[clamp(14px,0.8vw,18px)]">
                    Nigeria
                  </p>
                  <GoDotFill color="#667085" />
                  <p className=" font-semibold text-[#667085] text-[clamp(14px,0.8vw,18px)]">
                    Full-time
                  </p>
                </article>

                <article className=" hidden justify-end max-[476px]:flex">
                  <Button variant="secondary" size="apply">
                    Apply here
                  </Button>
                </article>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
