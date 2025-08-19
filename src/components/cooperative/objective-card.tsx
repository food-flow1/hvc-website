import React from "react";

// Type definition for a single benefit item
export interface ObjectivesCard {
  name: string;
  details: string;
}

interface ObjectivesCardGridProps {
  benefits: ObjectivesCard[];
}

// Individual benefit card component
const ObjectivesCard: React.FC<{
  benefit: ObjectivesCard;
}> = ({ benefit }) => (
  <section className="px-[clamp(16px,1.8vw,28px)] py-[clamp(16px,1.2vw,18px)] flex flex-col rounded-[14px] bg-[#fff] border border-[#EBEBEB] gap-6">
    <figure className="self-start">
      <img src="/objective-icon.png" alt="objective" />
    </figure>
    <div className="flex flex-col gap-[8px]">
      <h4 className="text-[22px] font-semibold text-[#141414]">
        {benefit.name}
      </h4>
      <p className="text-[18px] font-normal text-[#444444]">
        {benefit.details}
      </p>
    </div>
  </section>
);

//
const ObjectivesGrid: React.FC<ObjectivesCardGridProps> = ({ benefits }) => {
  return (
    <div
      className={`grid grid-cols-3 gap-[clamp(10px,0.8vw,14px)] max-[715px]:grid-cols-2  max-[453px]:grid-cols-1 `}
    >
      {benefits.map((benefit, idx) => (
        <ObjectivesCard key={idx} benefit={benefit} />
      ))}
    </div>
  );
};

export default ObjectivesGrid;
