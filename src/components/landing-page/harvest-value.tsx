// "use client";

// import Image from "next/image";
// import TagLayout from "./tag-layout";
// import { Button } from "@mantine/core";
// import { HiArrowUpRight } from "react-icons/hi2";

// function HarvestValue() {
//   return (
//     <section className=" bg-[#fff] py-[clamp(40px,8vw,149px)] px-[clamp(16px,4vw,137px)] gap-[clamp(20px,3vw,40px)] flex flex-col">
//       <TagLayout
//         tag="Harvest Value Chain Co-operative Society"
//         tagColour="#141414"
//         subText="Empowering Farmers, Strengthening Communities. Securing the Future"
//         subTextColor="#141414"
//         description="The Harvest Value Chain Co-operative Society (HVCCS) is a transformative farmer led initiative established in January 2025 to build a new future for Nigerian Agriculture. Operating across all states. HVCCS serves as a unified platform that connects farmers with the tools, training and opportunities they need to thrive."
//         descriptionColor="#444444"
//         tagBg="#dedede"
//       />

//       <section className=" flex flex-col xl:flex-row w-full gap-[14px]">
//         <div className=" xl:flex-[1.5] xl:w-[65%]  relative">
//           <div className=" w-full h-[clamp(300px,60vw,600px)] overflow-hidden rounded-t-[10px]">
//             <Image
//               src="/pairs.png"
//               width={1140}
//               height={760}
//               alt="Two farmers discussing in greenhouse"
//               sizes="(min-width: 1280px) 60vw, 100vw"
//               className=" w-full h-full object-cover object-center"
//             />

//             {/* <div className=" absolute left-0 right-0 bg-gradient-to-r from-[rgb(91,103,72)] to-[rgb(60,69,43)] p-[clamp(16px,3vw,30px)] rounded-b-[10px]   ">
//               <p className=" text-white text-[clamp(16px,2.5vw,20px)] font-medium">
//                 A Community Driven Initiative for Inclusive Agricultural Growth
//               </p>
//             </div> */}
//           </div>
//         </div>

//         <div className=" xl:flex-1 flex flex-col gap-[14px]">
//           <div className=" w-full h-[clamp(250px,40vw,350px)] overflow-hidden rounded-[10px]">
//             <Image
//               src="/withbox.png"
//               width={900}
//               height={450}
//               alt="Farmers with produce boxes"
//               sizes="(min-width: 1280px) 40vw, 100vw"
//               className=" w-full h-full object-cover object-center"
//             />
//           </div>

//           <div className=" flex flex-col lg:flex-row gap-[14px]">
//             <div className=" lg:w-[45%] overflow-hidden rounded-[10px] h-[clamp(200px,35vw,320px)]">
//               <Image
//                 src="/old-woman.png"
//                 width={600}
//                 height={600}
//                 alt="Market handshake"
//                 sizes="(min-width: 1024px) 20vw, 50vw"
//                 className=" w-full h-full object-cover object-center"
//               />
//             </div>

//             <div className=" lg:w-[55%] bg-[#dadada] rounded-[10px] flex flex-col justify-center gap-[15px]">
//               <section className=" flex flex-col gap-[clamp(5px,1vw,7px)]  px-[clamp(20px,4vw,32px)] py-[clamp(24px,5vw,40px)]">
//                 <article className=" flex flex-col gap-[clamp(6px,1.5vw,10px)]">
//                   <h3 className=" text-[clamp(28px,4vw,37px)] font-bold text-[#1A1A1A]">
//                     40+
//                   </h3>
//                   <h5 className=" text-[14px] font-semibold text-[#1A1A1A]">
//                     Registered Farmers
//                   </h5>
//                 </article>
//                 <p className=" text-[12px] text-[#485267] min-w-[209px] px-[2px] ">
//                   Over 40 thousand farmers have joined our co-operative and it
//                   has been an easy ride for each and every one of them
//                 </p>
//               </section>
//               <div className=" self-end bg-white rounded-tl-[14px] rounded-bl-[14px] px-[14px] py-[12px] flex gap-[10px] items-center  -mb-0 min-[968px]:-mb-[30px] ">
//                 <Button variant="secondary" size="nlgg" className="w-fit">
//                   See more
//                 </Button>
//                 <article className=" flex items-center justify-center p-[6px] border border-[#141414] rounded-[8px] w-[38px] h-[38px] bg-white">
//                   <HiArrowUpRight className=" text-[#141414] cursor-pointer" />
//                 </article>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default HarvestValue;

"use client";

import Image from "next/image";
import TagLayout from "./tag-layout";
import { Button } from "@mantine/core";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

function HarvestValue() {
  return (
    <section className=" bg-[#fff] py-[clamp(40px,8vw,149px)] px-[clamp(16px,4vw,137px)] gap-[clamp(20px,3vw,40px)] flex flex-col">
      <TagLayout
        tag="Harvest Value Chain Co-operative Society"
        tagColour="#141414"
        subText="Empowering Farmers, Strengthening Communities. Securing the Future"
        subTextColor="#141414"
        description="The Harvest Value Chain Co-operative Society (HVCCS) is a transformative farmer led initiative established in January 2025 to build a new future for Nigerian Agriculture. Operating across all states. HVCCS serves as a unified platform that connects farmers with the tools, training and opportunities they need to thrive."
        descriptionColor="#444444"
        tagBg="#dedede"
      />

      <section className=" flex flex-col xl:flex-row w-full gap-[14px]">
        <div className=" xl:w-[65%] relative">
          <div className=" w-full h-[clamp(300px,60vw,600px)] overflow-hidden rounded-[10px]">
            <Image
              src="/pairs.png"
              width={1140}
              height={760}
              alt="Two farmers discussing in greenhouse"
              sizes="(min-width: 1280px) 65vw, 100vw"
              className=" w-full h-full object-cover object-center"
            />
          </div>

          <div className=" absolute bottom-0 left-0 right-0  bg-gradient-to-r from-[#798f56] to-[#030302]  p-[clamp(16px,3vw,30px)] rounded-b-[10px]">
            <p className=" text-white text-[clamp(16px,2.5vw,20px)] font-medium">
              A Community Driven Initiative for Inclusive Agricultural Growth
            </p>
          </div>
        </div>

        <div className=" xl:w-[35%] flex flex-col gap-[14px]">
          <div className=" w-full h-[clamp(250px,40vw,350px)] overflow-hidden rounded-[10px]">
            <Image
              src="/withbox.png"
              width={900}
              height={450}
              alt="Farmers with produce boxes"
              sizes="(min-width: 1280px) 35vw, 100vw"
              className=" w-full h-full object-cover object-center"
            />
          </div>

          <div className=" flex flex-col lg:flex-row gap-[14px] flex-1">
            <div className=" lg:w-[45%] overflow-hidden rounded-[10px] h-[clamp(200px,35vw,320px)]">
              <Image
                src="/old-woman.png"
                width={600}
                height={600}
                alt="Market handshake"
                sizes="(min-width: 1024px) 15vw, 50vw"
                className=" w-full h-full object-cover object-center"
              />
            </div>

            <div className=" lg:w-[55%] bg-[#dadada] rounded-[10px] flex flex-col justify-center gap-[15px] relative">
              <section className=" flex flex-col gap-[clamp(5px,1vw,7px)]  px-[clamp(20px,4vw,32px)] py-[40px] max-[465px]:py-[60px]">
                <article className=" flex flex-col gap-[clamp(6px,1.5vw,10px)]">
                  <h3 className=" text-[clamp(28px,4vw,37px)] font-bold text-[#1A1A1A]">
                    40+
                  </h3>
                  <h5 className=" text-[14px] font-semibold text-[#1A1A1A]">
                    Registered Farmers
                  </h5>
                </article>
                <p className=" text-[12px] text-[#485267] min-w-[209px] px-[2px] ">
                  Over 40 thousand farmers have joined our co-operative and it
                  has been an easy ride for each and every one of them
                </p>
              </section>

              <Link
                href="/cooperatives"
                className=" absolute bottom-0 right-0 bg-white rounded-tl-[14px] px-[clamp(11px,0.8vw,14px)] py-[clamp(10px,0.8vw,12px)] flex gap-[10px] items-center cursor-pointer justify-center"
              >
                <Button variant="secondary" size="lg" className="w-fit">
                  See more
                </Button>
                <article className=" flex items-center justify-center p-[6px] border border-[#141414] rounded-[8px] w-[38px] h-[38px] bg-white">
                  <HiArrowUpRight className=" text-[#141414] cursor-pointer" />
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HarvestValue;
