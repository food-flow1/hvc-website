import React from "react";
import TagLayout from "../landing-page/tag-layout";

function ourPillars() {
  const pillars = [
    {
      title: "Sustainable Farming",
      description:
        "At the heart of HVC are econfriendly farms and ethical livestock operations that prioritize food security, soil health, and animal welfare.",
      image: "/food1.png",
    },
    {
      title: "Food Processing",
      description:
        "We transform raw farm produce into market ready goods like garri, flour, and animal feed—boosting value, shelf life, and income",

      image: "/food1a.png",
    },
    {
      title: "Farm To Fork Agri Tech",
      description:
        "Our FoodFlow platform bridges the gap between farmers and processors, driving efficiency, transparency, and better pricing across the food chain.",
      image: "/food2a.png",
    },
    {
      title: "Agro Waste To Energy",
      description:
        "Through our FarmFuel solution, we convert agricultural waste into clean energy, tackling rural energy poverty and reducing emissions.",
      image: "/food3a.png",
    },

    {
      title: "Capacity Building ",
      description:
        "We empower youth and smallholder farmers with tailored training and digital tools that unlock productivity and market access.",

      image: "/food4a.png",
    },

    {
      title: "HVC Co-operative Group",
      description:
        "Our cooperative investment model enables shared ownership of agribusiness assets and inclusive wealth creation for members.",
      image: "/food5a.png",
    },

    {
      title: "Agricultural Extension",
      description:
        "We deliver on the ground support and advisory services that help farmers adopt climate smart practices and boost yields sustainably.",
      image: "/food6a.png",
    },

    {
      title: "Outgrowers Scheme",
      description:
        "Our inclusive model integrates local farmers into structured value chains with guaranteed off take, training, and input support.",
      image: "/food7a.png",
    },
  ];

  return (
    <div className="px-[clamp(40px,4.1vw,80px)] py-[clamp(40px,4.1vw,80px)] items-center flex justify-center bg-white max-[768px]:px-[20px]">
      <section className=" flex flex-col gap-[24px]">
        <TagLayout
          tag="Our 8 pillars of operation"
          tagColour="#141414"
          subText="What we do"
          subTextColor="#141414"
          description="Our work extends beyond the farm, we are deeply committed to the communities where we operate. We provide training and resources to local farmers, helping them improve their yields and income. We also invest in community projects that enhance infrastructure, education, and healthcare, contributing to the overall well-being and development of the regions we serve."
          descriptionColor="#444444"
          tagBg="#d6d9cf"
        />
        <div className="grid grid-cols-4 gap-[10px] max-[768px]:grid-cols-1 max-[768px]:gap-[10px]">
          {pillars.map((pillar, index) => (
            <section
              key={index}
              className="relative px-[18px] py-[136px] flex h-[490px] bg-[#E1FCAD] flex-col gap-[14px] overflow-hidden transition-all duration-300 max-[768px]:h-[300px] max-[768px]:py-[40px] cursor-pointer group"
            >
              <div className="absolute inset-0 transform translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 max-[1024px]:hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <figure className="relative z-10 w-[60px] h-[50px] transition-all duration-300 lg:group-hover:hidden">
                <img src="/book-stack.png" alt="icon" />
              </figure>

              <section className=" flex flex-col items-center">
                <div className="relative z-10 flex gap-2 flex-col lg:group-hover:hidden ">
                  <h4 className="text-[20px] font-semibold text-[#141F01]">
                    {pillar.title}
                  </h4>
                  <p className="font-normal text-[#444444] text-[16px]">
                    {pillar.description}
                  </p>
                </div>

                <figure className="relative z-10 w-[60px] h-[50px] transition-all duration-300 hidden lg:group-hover:block">
                  <img
                    src="/book-stack.png"
                    alt="icon"
                    className="brightness-0 invert items-center flex justify-center self-center"
                  />
                </figure>
              </section>

              <div className="relative z-10 gap-2 flex-col hidden lg:group-hover:block">
                <h4 className="text-[20px] font-semibold text-white text-center">
                  {pillar.title}
                </h4>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ourPillars;
