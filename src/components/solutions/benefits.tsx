import React from "react";
import TagLayout from "../landing-page/tag-layout";

const benefits = [
  {
    name: "Renewable Energy",
    details:
      "Biogas produced through FarmFuel provides a clean and renewable alternative to traditional fuels. It’s cost-effective and readily available for rural households and agribusinesses, reducing dependence on firewood, kerosene, or coal. By harnessing waste to produce energy, FarmFuel enhances energy access, especially in off-grid rural areas, empowering communities with reliable energy for cooking, heating, and small-scale agribusiness operations.",
  },

  {
    name: "Waste Reduction",
    details:
      "FarmFuel efficiently uses crop by-products that would otherwise be wasted, addressing both waste disposal and environmental concerns. By preventing waste from decomposing openly, FarmFuel minimizes methane emissions, a potent greenhouse gas, contributing positively to the climate. This approach not only reduces the carbon footprint of agricultural operations but also aligns with sustainable waste management goals.",
  },
  {
    name: "Organic Fertilizer",
    details:
      "The digestate produced in the anaerobic process is rich in essential nutrients like nitrogen, potassium, and phosphorus, which promote healthy soil and crop growth.This organic fertilizer is distributed back to farmers, who benefit from improved soil health and higher crop yields, reducing reliance on chemical fertilizers and enhancing the sustainability of their agricultural practices.",
  },
];

export default function Benefits() {
  return (
    <div className=" px-[clamp(20px,4vw,80px)] py-[clamp(20px,3vw,61px)] items-center justify-center bg-white">
      <section className=" px-[clamp(20px,2.6vw,50px)] py-[clamp(20px,2vw,44px)] bg-[#141F01] flex flex-col gap-[40px] rounded-[30px]">
        <TagLayout
          tag="Benefits"
          tagColour="#fff"
          subText="Why Farm fuel?"
          subTextColor="#fff"
          description="Access to fuel is critical for modern farming operations, yet many farmers face inconsistent supply, high costs, and logistical challenges that disrupt productivity. Farm Fuel by HVC bridges this gap by providing a reliable, affordable, and accessible fuel solution tailored specifically for agricultural needs. It empowers farmers to operate machinery without delay, reduce downtime during peak seasons, and focus on what truly matters—growing food and sustaining livelihoods."
          descriptionColor="#fff"
          tagBg="#2c361b"
        />

        <div className="flex gap-[16px] max-[715px]:flex-col">
          {benefits.map(({ name, details }, idx) => (
            <section
              key={idx}
              className=" px-[25px] py-[27px] flex flex-col rounded-[14px] bg-[#2c361b]"
            >
              <figure className=" self-end">
                <img src="/benefits-icon.png" alt="" />
              </figure>
              <div className=" flex flex-col gap-[8px] ">
                <h4 className=" text-[20px] font-bold">{name}</h4>
                <p className=" text-[14px] font-normal">{details}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
