import Hero from "@/src/components/landing-page/hero";
import Partner from "@/src/components/landing-page/partners";
import { Button } from "@mantine/core";
import Image from "next/image";

function WeCare() {
  const joinList = [
    "Sustainable",
    "Innovative",
    "Global",
    "Reliable",
    "Efficient",
    "Impactful",
    "Adaptive",
    "Collaborative",
    "Visionary",
  ];

  const numberList = [
    {
      number: "135",
      text: "Farmers",
      details:
        "We’re more than just farmers—we’re transforming agriculture in Nigeria through innovation, sustainability, and community empowerment.",
    },

    {
      number: "16",
      text: "Partners",
      details:
        "We care about the land we cultivate, the communities we serve, and the quality of the products we deliver. Our commitment goes beyond agriculture at Harvest Value Chain Limited (HVC).",
    },

    {
      number: "869",
      text: "Subscribers",
      details:
        "From cultivating to livestock farming, advanced food processing, Optimizing agric-value-chain through generating renewable energy from agro-waste, we are redefining what it means to lead in agriculture.",
    },
  ];

  return (
    <section className=" flex flex-col  gap-[clamp(30px,5.5vw,80px)] py-[clamp(30px,3.3vw,64px)] px-[clamp(40px,5.4vw,105px)] bg-white">
      <div className=" flex flex-col gap-[10px]">
        <article className="py-[7px] px-[13px] bg-[#EBEBEB] rounded-[8px] w-fit ">
          <p className=" text-[10px] font-medium text-[#141414]">We Care</p>
        </article>
        <section className=" flex justify-between gap-2 w-full max-[631px]:flex-col">
          <div className=" flex flex-col gap-[clamp(20px,2.1vw,40px)] flex-1 ">
            <h3 className=" text-[#141414] leading-[clamp(35px,2vw,48px] font-medium text-[clamp(18px,2vw,40px)] ">
              We are committed to advancing agriculture.
            </h3>

            <div className=" flex flex-col gap-[clamp(15px,1.5vw,30px)]">
              <p className=" text-[16px] font-normal text-[#444444] leading-[24px] min-[630px]:hidden">
                We believe in harnessing the power of nature and technology to
                create a sustainable future for food production, energy, and
                economic growth.
              </p>

              <figure className=" flex gap-1  flex-wrap max-w-[500px] ">
                {joinList.map((item, idx) => (
                  <article
                    key={idx}
                    className=" flex px-3 py-1 bg-[#EBEBEB] rounded-[6px] "
                  >
                    <p className=" font-medium text-[clamp(13px,0.8vw,16px)] leading-[14px] text-[#585858]">
                      {item}
                    </p>
                  </article>
                ))}
              </figure>
            </div>
          </div>

          <section className=" flex flex-col gap-5 flex-1 max-[631px]:hidden">
            <article>
              <p className=" leading-[28px] font-normal text-[16px] text-[#444444]">
                We care about the land we cultivate, the communities we serve,
                and the quality of the products we deliver. Our commitment goes
                beyond agriculture at Harvest Value Chain Limited (HVC).
              </p>
              <p className="leading-[28px] font-normal text-[16px] text-[#444444]">
                We’re more than just farmers—we’re transforming agriculture in
                Nigeria through innovation, sustainability, and community
                empowerment. From cultivating to livestock farming, advanced
                food processing, Optimizing agric-value-chain through innovative
                technologies and even generating renewable energy from
                agro-waste, we are redefining what it means to lead in
                agriculture.
              </p>
            </article>
            <Button
              variant="secondary"
              size="nlg"
              className="w-fit font-bold text-[16px py-[10px] px-[23px] w-fit"
            >
              Join us
            </Button>
          </section>
        </section>
      </div>

      <section className=" flex gap-[13px] max-[631px]:flex-col">
        {numberList.map(({ text, number, details }, idx) => (
          <div
            key={idx}
            className=" py-[clamp(18px,1.8vw,35px)] px-[clamp(17px,1vw,20px)] flex flex-col border border-[#EBEBEB] gap-[clamp(10px,0.7vw,12px)] bg-[#FAFAFA] rounded-[14px] flex-1"
          >
            <section className=" flex flex-col gap-[clamp(8px,0.5vw,10px)]">
              <Image src="/join-image.png" alt="join" width={20} height={16} />
              <h4 className=" text-[#000000] text-[clamp(54px,3.6vw,70px)] font-medium">
                {number}
              </h4>
            </section>

            <div className=" flex flex-col gap-[clamp(18px,1.1vw,22px)]">
              <p className=" text-[clamp(20px,1.2vw,24px)] font-semibold text-black">
                {text}
              </p>
              <p className=" text-[#585858] text-[clamp(14px,0.8vw,16px)] font-normal leading-6">
                {details}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default WeCare;
