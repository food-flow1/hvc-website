import React from "react";

// Type definition for a single benefit item
export interface SingleSolutionCard {
  name: string;
  details: string;
  containerBg: string;
  nameColor: string;
  detailColor: string;
}

interface SolutionCardGridProps {
  benefits: SingleSolutionCard[];
  iconSrc?: string;
  iconAlt?: string;
  className?: string;
  containerBg?: string;
  nameColor?: string;
  detailColor?: string;
}

// Individual benefit card component
const SingleSolutionCard: React.FC<{
  benefit: SingleSolutionCard;
  iconSrc: string;
  iconAlt: string;
}> = ({ benefit, iconSrc, iconAlt }) => (
  <section
    style={{ backgroundColor: benefit.containerBg }}
    className="px-[clamp(10px,2vw,25px)] py-[clamp(20px,2vw,27px)] flex flex-col rounded-[clamp(10px,0.8vw,14px)] bg-[#2c361b]"
  >
    <figure className="self-end w-[clamp(25px,4vw,50px]) h-[clamp(25px,4vw,50px]) ">
      <img src={iconSrc} alt={iconAlt} />
    </figure>
    <div className="flex flex-col gap-[8px]">
      <h4
        className="text-[20px] font-bold"
        style={{ color: benefit.nameColor }}
      >
        {benefit.name}
      </h4>
      <p
        className="text-[14px] font-normal"
        style={{ color: benefit.detailColor }}
      >
        {benefit.details}
      </p>
    </div>
  </section>
);

//  SolutionGrid component
const SolutionGrid: React.FC<SolutionCardGridProps> = ({
  benefits,
  iconSrc = "/benefits-icon.png",
  iconAlt = "Benefit icon",
  className = "",
}) => {
  return (
    <div className={`flex gap-[16px] max-[715px]:flex-col ${className}`}>
      {benefits.map((benefit, idx) => (
        <SingleSolutionCard
          key={idx}
          benefit={benefit}
          iconSrc={iconSrc}
          iconAlt={iconAlt}
        />
      ))}
    </div>
  );
};

export default SolutionGrid;
