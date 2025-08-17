import { div } from "framer-motion/client";
import React from "react";

function Partner() {
  const topLogos = [
    "/paystack.png",
    "/spot.png",
    "/brand.png",
    "/youlead.png",
    "/ijebu.png",
    "/kwara.png",
    "/african-food.png",
    "/nigerian-stored.png",
    "/african-projects.png",
  ];

  const bottomLogos = [
    "/federal-ministry.png",
    "/novasphere.png",
    "/london-school.png",
    "/media-inno.png",
    "/generate.png",
    "/Incitisfood.png",
    "/iita.png",
    "/hic.png",
  ];

  const allLogos = [...topLogos, ...bottomLogos];

  const LogoItem = ({ src }: { src: string }) => (
    <img
      src={src}
      alt={`Partner logo ${src.split("/").pop()?.split(".")[0]}`}
      className="logo-item"
    />
  );

  const MarqueeRow = ({
    logos,
    direction,
  }: {
    logos: string[];
    direction: string;
  }) => {
    const repeatedLogos = Array(6).fill(logos).flat();

    return (
      <div className={`marquee-row ${direction}`}>
        {repeatedLogos.map((logo, index) => (
          <LogoItem key={`${logo}-${index}`} src={logo} />
        ))}
      </div>
    );
  };

  return (
    <section
      className=" flex flex-col gap-[clamp(1rem,1.3vw,20px)] px-[clamp(30px,4.8vw,70px)] py-[clamp(25px,4.4vw,64px)] bg-white pb-[clamp(20px,4.0vw,60px)]"
      style={{
        backgroundImage: "url('/partners-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className=" text-[clamp(20px,2vw,30px)] font-semibold text-[#141414] text-center leading-[24px]">
        Our Trusted Partners around the Globe
        <div className=" max-[630px]:hidden">
          <div className="marquee-container">
            <MarqueeRow logos={topLogos} direction="marquee-right" />
          </div>

          <div className="marquee-container">
            <MarqueeRow logos={bottomLogos} direction="marquee-left" />
          </div>
        </div>
        <div className=" hidden max-[630px]:flex max-[630px]:pt-10">
          <section className="  grid grid-cols-5 gap-[20px] gap-y-[clamp(20px,1.6vw,32px)] ">
            {allLogos.map((item, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img
                  src={item}
                  alt={`Logo ${idx + 1}`}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </section>
        </div>
      </h4>
    </section>
  );
}

export default Partner;
