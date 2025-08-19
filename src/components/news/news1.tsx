"use client";

import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import FormSection from "@/src/components/shared/form-section";
import { useRouter } from "next/navigation";

const benefitsList = [
  {
    title: "Training and Capacity Building",
    description:
      "NYFN offers comprehensive training programs that cover modern farming techniques, business management, and sustainable practices. This ensures that young farmers are well-equipped to run successful agricultural enterprises.",
  },
  {
    title: "Mentorship and Networking",
    description:
      "Members of NYFN have the opportunity to connect with experienced professionals and mentors who can provide guidance and support. This network helps young farmers navigate the challenges of the industry and build valuable connections.",
  },
  {
    title: "Access to Funding",
    description:
      "One of the major barriers for young people entering agriculture is access to capital. NYFN works to bridge this gap by connecting its members with funding opportunities, grants, and loans designed to help them start and grow their farming businesses.",
  },
  {
    title: "Advocacy and Representation",
    description:
      "NYFN advocates for policies and initiatives that support young farmers and the broader agricultural sector. By joining the network, members can contribute to shaping the future of agriculture in Nigeria.",
  },
];

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveData: false,
  });

  return (
    <main className=" px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex  items-center justify-center bg-white">
      <section className=" flex flex-col gap-[40px]">
        <article
          className=" flex items-center gap-[11px] cursor-pointer "
          onClick={() => router.back()}
        >
          <FaArrowLeftLong color="#141414" />
          <p className=" font-medium text-[20px] text-[#141414]">Go back</p>
        </article>

        <section className=" flex flex-col gap-[53px]">
          <div className=" flex flex-col gap-[50px]">
            <article className="flex flex-col gap-[10px]">
              <h4 className=" text-[#9DC655] text-[20px] font-semibold">
                Introducing the Nigeria Youth Farmers Network (NYFN) –
                Empowering the Next Generation of Farmers
              </h4>
              <p className="text-[16px] font-normal text-[#444444]">
                The {" "}
                <span className=" text-[16px] font-semibold text-[#444444]">
                  6th Nigeria International Agriculture Expo in Abuja 
                </span>
                was not only a platform for industry professionals to connect
                and share ideas but also a place to discover impactful
                initiatives that are shaping the future of Nigerian agriculture.
                Among these initiatives, the Nigeria Youth Farmers Network
                (NYFN) stood out as a transformative movement dedicated to
                empowering young Nigerians to engage in agriculture and drive
                economic growth.
              </p>
            </article>
            <figure className=" w-full">
              <Image
                src="/news-bg1.png"
                width={1280}
                height={513}
                alt="news 1"
                className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
              />
            </figure>
          </div>

          <div className=" flex flex-col gap-[40px]">
            <article className=" flex flex-col gap-4">
              <h3 className=" text-[20px] font-semibold text-[#141414]">
                What is the Nigeria Youth Farmers Network (NYFN)?
              </h3>
              <article>
                <p className=" text-[#444444] font-normal text-[16px]">
                  The Nigeria Youth Farmers Network (NYFN) is a dynamic
                  organization focused on encouraging and supporting young
                  Nigerians to take up agriculture as a viable career path. In a
                  country where the average age of farmers is relatively high,
                  NYFN aims to rejuvenate the agricultural sector by fostering a
                  new generation of skilled, innovative, and passionate farmers.
                </p>
                <p className="text-[#444444] font-normal text-[16px] pt-2">
                  NYFN provides its members with access to valuable resources,
                  including training programs, mentorship opportunities, and
                  access to funding. By equipping young farmers with the
                  knowledge and tools they need to succeed, NYFN is helping to
                  build a sustainable future for Nigeria’s agricultural
                  industry.
                </p>
              </article>
            </article>

            <article className=" flex flex-col gap-[16px]">
              <h4 className=" font-semibold text-[20px] text-[#141414]">
                Benefits of Joining NYFN
              </h4>
              <ol className="list-decimal pl-6 space-y-4 marker:font-semibold marker:text[#444444]">
                {benefitsList.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[#141414] text-[16px] font-normal"
                  >
                    <span className="font-semibold text-[#141414] text-[16px] mb-1">
                      {benefit.title}:
                    </span>
                    {benefit.description}
                  </li>
                ))}
              </ol>
            </article>

            <article className=" flex flex-col gap-4">
              <h4 className="font-semibold text-[20px] text-[#141414]">
                How to Join NYFN
              </h4>
              <p className="text-[#444444] font-normal text-[16px]">
                Joining the Nigeria Youth Farmers Network is straightforward.
                Interested individuals can apply online through the NYFN
                website or attend one of the organization’s outreach events.
                Once accepted, members gain access to all the benefits and
                resources that NYFN has to offer.
              </p>
            </article>

            <article className=" flex flex-col gap-4">
              <h4 className="font-semibold text-[20px] text-[#141414]">
                Connecting NYFN with HVC’s Mission
              </h4>

              <div className=" flex flex-col">
                <p className="text-[#444444] font-normal text-[16px]">
                  Joining the Nigeria Youth Farmers Network is straightforward.
                  Interested individuals can apply online through the NYFN
                  website or attend one of the organization’s outreach events.
                  Once accepted, members gain access to all the benefits and
                  resources that NYFN has to offer.
                </p>
                <p className="text-[#444444] font-normal text-[16px] pt-2">
                  HVC is committed to working with organizations like NYFN to
                  provide opportunities for young farmers to thrive. Whether
                  through partnerships, mentorship, or shared resources, we see
                  immense value in collaborating with NYFN to achieve our shared
                  vision of a prosperous agricultural future.
                </p>
              </div>
            </article>

            {/* myform */}
            <FormSection />
          </div>
        </section>
      </section>
    </main>
  );
}
