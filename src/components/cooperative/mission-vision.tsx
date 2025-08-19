import React, { useState } from "react";

export default function MissionVision() {
  const [hoveredCard, setHoveredCard] = useState("mission"); // Default to mission expanded

  const cardsData = [
    {
      id: "mission",
      title: "Our Mission",
      description:
        "To be Nigeria's leading agricultural cooperative, empowering millions of farmers to achieve food security and economic independence through innovation, collaboration, and climate-smart solutions",
      backgroundImage: "/mission-bg.png",
      logoSrc: "/missionv-log.png",
      justifyContent: "justify-end",
    },
    {
      id: "vision",
      title: "Our Vision",
      description:
        "To empower Nigerian farmers by providing affordable access to agricultural resources, training, financial support, and markets while building a sustainable ecosystem that nurtures rural livelihoods, productivity, and resilience.",
      backgroundImage: "/vision-bg.png",
      logoSrc: "/missionv-log.png",
      justifyContent: "justify-center",
    },
  ];

  return (
    <div className="lg:py-[63px] md:py-[40px] py-[20px] justify-between items-center bg-[#f5f9ee] lg:px-[127px] md:px-[64px] px-[20px]">
      <section className="flex lg:flex-row flex-col gap-[clamp(16px,1.2vw,20px)] items-center justify-center">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`lg:p-[40px] md:p-[32px] p-[24px] lg:h-[348px] md:h-[300px] h-[280px] flex ${
              card.justifyContent
            } items-end lg:cursor-pointer transition-all duration-500 ease-in-out ${
              hoveredCard === (card.id === "mission" ? "vision" : "mission")
                ? "lg:flex-[0.3] w-full"
                : "lg:flex-1 w-full"
            }`}
            style={{
              backgroundImage: `url('${card.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "24px",
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
          >
            <div className="flex lg:gap-[24px] md:gap-[20px] gap-[16px] items-center">
              <img
                src={card.logoSrc}
                alt={`${card.title} logo`}
                className={`lg:transition-all lg:duration-300 w-[clamp(35px,2.3vw,50px)] ${
                  hoveredCard === (card.id === "mission" ? "vision" : "mission")
                    ? "lg:opacity-0 lg:w-0 lg:overflow-hidden opacity-100"
                    : "opacity-100"
                }`}
              />

              <article className="flex flex-col lg:gap-[10px] md:gap-[8px] gap-[6px]">
                <p className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-white">
                  {card.title}
                </p>
                <p
                  className={`lg:text-[16px] md:text-[14px] text-[12px] font-normal text-white lg:transition-all lg:duration-300 ${
                    hoveredCard ===
                    (card.id === "mission" ? "vision" : "mission")
                      ? "lg:opacity-0 lg:max-h-0 lg:overflow-hidden opacity-100 max-h-none"
                      : "opacity-100 lg:max-h-[200px] max-h-none"
                  }`}
                >
                  {card.description}
                </p>
              </article>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
