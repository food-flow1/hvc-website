import React, { useState } from "react";
import TagLayout from "../landing-page/tag-layout";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

function Value() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const valueList = [
    {
      title: "Integrity",
      description: "We operate with honesty, accountability, and transparency.",
    },
    {
      title: "Sustainability",
      description: "We champion eco-friendly, climate-smart farming practices.",
    },
    {
      title: "Equity",
      description:
        "Every member has a voice, value, and role in shaping our future.",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern tools and techniques to boost farming efficiency.",
    },
    {
      title: "Community",
      description:
        "We believe that collective action is the strongest path to prosperity.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="px-[clamp(20px,4.1vw,80px)] py-[clamp(20px,5.9vw,114px)] items-center flex justify-center bg-white max-[768px]:px-[20px]">
      <section className=" flex flex-col gap-[clamp(16px,2vw,36px)]">
        <TagLayout
          tag="Values"
          tagColour="#141414"
          subText="Our Core Values"
          subTextColor="#141414"
          description="At Harvest Value Chain, our commitment to excellence begins with our core values. They shape the way we farm, partner, innovate, and grow. From integrity in every transaction to sustainability in every harvest, these values define who we are — and how we serve communities, drive innovation, and transform agriculture into a force for good. As we scale across Nigeria and beyond, our values remain constant: people-first, purpose-driven, and proudly rooted in impact."
          descriptionColor="#444444"
          tagBg="#d6d9cf"
        />
        <section className=" flex gap-[clamp(20px,2vw,40px)]">
          <div className=" flex flex-col gap-[clamp(16px,1vw,20px)] flex-1">
            {valueList.map((item, idx) => (
              <motion.article
                key={idx}
                className="bg-[#fafcf6] border border-[#E7EAE9] rounded-[12px] overflow-hidden cursor-pointer"
                initial={false}
                animate={{
                  backgroundColor:
                    openAccordion === idx ? "#f0f4ec" : "#fafcf6",
                }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex py-[clamp(20px,2vw,33px)] px-[clamp(16px,1.8vw,28px)] gap-[clamp(16px,1vw,20px)] items-center focus:outline-none cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: openAccordion === idx ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {openAccordion === idx ? (
                      <RxCross2 color="#334840" size={20} />
                    ) : (
                      <FiPlus color="#334840" size={20} />
                    )}
                  </motion.div>
                  <p className="text-[clamp(16px,2vw,24px)] font-semibold text-[#444444] text-left">
                    {item.title}
                  </p>
                </button>

                <AnimatePresence initial={false}>
                  {openAccordion === idx && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-[clamp(16px,1.8vw,28px)] pb-[clamp(20px,2vw,33px)] pl-[clamp(52px,4.8vw,68px)]">
                        <p className="text-[16px] leading-relaxed text-[#666666]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>

          <figure className="rounded-[8px] flex-1 relative min-h-[400px] max-[523px]:hidden">
            <Image
              src="/hands.png"
              fill
              alt="shaking hands"
              className="object-cover rounded-[8px]"
              sizes="(max-width: 631px) 100vw, 50vw"
            />
          </figure>
        </section>
      </section>
    </div>
  );
}

export default Value;
