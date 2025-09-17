// "use client";

// import { Button } from "@mantine/core";
// import Link from "next/link";

// const growthList = ["Driven", "Rooted", "Impactful"];

// function GrowthSection() {
//   return (
//     <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
//       <section
//         className=" py-[clamp(40px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]     flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full"
//         style={{
//           background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
//         }}
//       >
//         <section className=" flex flex-col justify-between gap-4">
//           <div className=" flex flex-col gap-[7px]">
//             <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
//               HVC News & Media
//             </h4>
//             <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] max-[544px]:hidden">
//               At HVC, we believe every step forward is worth sharing,from
//               sustainable farming breakthroughs and agro-processing milestones
//               to inspiring partnerships with farmers, communities, and
//               institutions. This is where we document the growth, challenges,
//               and triumphs shaping our mission to redefine the agricultural
//               value chain in Nigeria and across Africa.
//             </p>
//           </div>
//           <Link href="/news" className=" flex max-[544px]:hidden">
//             <Button variant="dark" size="vlg" className="w-fit">
//               See all
//             </Button>
//           </Link>
//         </section>

//         <div className=" flex-col gap-[10px] hidden max-[544px]:flex">
//           <p className="text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px]">
//             At HVC, we believe every step forward is worth sharing,from
//             sustainable farming breakthroughs and agro-processing milestones to
//             inspiring partnerships with farmers, communities, and institutions.
//             This is where we document the growth, challenges, and triumphs
//             shaping our mission to redefine the agricultural value chain in
//             Nigeria and across Africa.
//           </p>
//           <Link href="/news">
//             <Button variant="dark" size="vlg" className="w-fit">
//               See all
//             </Button>
//           </Link>
//         </div>

//         <div className=" ">
//           {/* <Link href="/news" className=" flex max-[544px]:hidden">
//             <Button variant="dark" size="vlg" className="w-fit">
//               See all
//             </Button>
//           </Link> */}

//           {/* <section className=" flex gap-[clamp(20px,4.4vw,86px)]">
//             {growthList.map((item, idx) => (
//               <article key={idx} className=" flex gap-[9px] items-center">
//                 <figure className="w-full">
//                   <img
//                     src="/green.png"
//                     alt="green-stroke"
//                     width={9}
//                     height={39}
//                   />
//                 </figure>
//                 <p className=" text-[clamp(12px,0.8vw,15px)] font-medium text-[#002C11]">
//                   {item}
//                 </p>
//               </article>
//             ))}
//           </section> */}
//           <div className="relative max-w-[400px] w-full max-[544px]:max-w-full">
//             {/* Decorative background cards */}
//             <div className="absolute top-2 left-2 w-full h-full bg-purple-400 rounded-[8px] z-0"></div>
//             <div className="absolute top-1 left-1 w-full h-full bg-blue-400 rounded-[8px] z-1"></div>

//             {/* Main card */}
//             <div className="relative bg-[#2D5B3F] rounded-[8px] overflow-hidden z-2 shadow-lg">
//               <div className="relative h-[200px] max-[544px]:h-[160px]">
//                 {/* Replace this src with your actual image */}
//                 <img
//                   src="/api/placeholder/400/200"
//                   alt="FCT-SAFZ Project meeting"
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Overlay content */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D5B3F] via-[#2D5B3F]/80 to-transparent p-4">
//                   <h5 className="text-white text-[clamp(12px,1.2vw,16px)] font-medium leading-tight">
//                     Exploring the Potentials of the FCT-SAFZ Project for Local
//                     Agro Companies and Foreign Investors
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default GrowthSection;

// "use client";

// import { Button } from "@mantine/core";
// import Link from "next/link";

// function GrowthSection() {
//   return (
//     <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
//       <section
//         className=" py-[clamp(40px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full"
//         style={{
//           background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
//         }}
//       >
//         <section className=" flex justify-between flex-col">
//           <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
//             <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
//               HVC News & Media
//             </h4>
//             <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] max-[544px]:hidden">
//               At HVC, we believe every step forward is worth sharing,from
//               sustainable farming breakthroughs and agro-processing milestones
//               to inspiring partnerships with farmers, communities, and
//               institutions. This is where we document the growth, challenges,
//               and triumphs shaping our mission to redefine the agricultural
//               value chain in Nigeria and across Africa.
//             </p>
//           </div>
//           <Link href="/news" className=" flex max-[544px]:hidden">
//             <Button variant="dark" size="vlg" className="w-fit">
//               See all
//             </Button>
//           </Link>
//         </section>

//         {/* Image Card Stack - Scattered Effect */}

//         <div className="relative max-w-[320px] w-full max-[544px]:max-w-full h-[280px] max-[544px]:h-[240px] p-4">
//           {/* Purple card - top right, rotated */}
//           <div className="absolute -top-3 -right-2 w-full h-[240px] max-[544px]:h-[200px] bg-[#8B5CF6] rounded-[8px] transform rotate-12 z-0 shadow-md"></div>

//           {/* Blue card - bottom left, rotated opposite */}
//           <div className="absolute top-4 -left-3 w-full h-[240px] max-[544px]:h-[200px] bg-[#3B82F6] rounded-[8px] transform -rotate-6 z-1 shadow-md"></div>

//           {/* Main green card - center, slight rotation */}
//           <div className="relative bg-[#16A34A] rounded-[8px] overflow-hidden z-2 shadow-lg transform rotate-2 top-2">
//             <div className="relative h-[240px] max-[544px]:h-[200px]">
//               {/* Replace this src with your actual image */}
//               <img
//                 src="/footer-img.png"
//                 alt="FCT-SAFZ Project meeting"
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay content */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16A34A] via-[#16A34A]/90 to-transparent p-4">
//                 <h5 className="text-white text-[clamp(13px,1.1vw,15px)] font-medium leading-[1.3] max-w-[280px]">
//                   Exploring the Potentials of the FCT-SAFZ Project for Local
//                   Agro Companies and Foreign Investors
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default GrowthSection;

// "use client";

// import { Button } from "@mantine/core";
// import Link from "next/link";

// function GrowthSection() {
//   return (
//     <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
//       <section
//         className=" py-[clamp(40px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full"
//         style={{
//           background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
//         }}
//       >
//         <section className=" flex justify-between flex-col">
//           <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
//             <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
//               HVC News & Media
//             </h4>
//             <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] max-[544px]:hidden">
//               At HVC, we believe every step forward is worth sharing,from
//               sustainable farming breakthroughs and agro-processing milestones
//               to inspiring partnerships with farmers, communities, and
//               institutions. This is where we document the growth, challenges,
//               and triumphs shaping our mission to redefine the agricultural
//               value chain in Nigeria and across Africa.
//             </p>
//           </div>
//           <Link href="/news" className=" flex max-[544px]:hidden">
//             <Button variant="dark" size="vlg" className="w-fit">
//               See all
//             </Button>
//           </Link>
//         </section>

//         {/* Image Card Stack - Scattered Effect */}
//         <div className="relative max-w-[320px] w-full max-[544px]:max-w-full h-[300px] max-[544px]:h-[260px]">
//           {/* Purple card - top right, more visible */}
//           <div className="absolute top-0 right-0 w-[90%] h-[220px] max-[544px]:h-[180px] bg-[#8B5CF6] rounded-[8px] transform rotate-12 z-10 shadow-lg"></div>

//           {/* Blue card - middle left, partially visible */}
//           <div className="absolute top-6 left-0 w-[85%] h-[220px] max-[544px]:h-[180px] bg-[#3B82F6] rounded-[8px] transform -rotate-8 z-20 shadow-lg"></div>

//           {/* Main green card - center front */}
//           <div className="absolute top-8 left-4 right-4 bg-[#16A34A] rounded-[8px] z-30 shadow-xl transform rotate-3 p-3">
//             <div className="relative h-[194px] max-[544px]:h-[154px] rounded-[5px] overflow-hidden">
//               {/* Replace this src with your actual image */}
//               <img
//                 src="/footer-img.png"
//                 alt="FCT-SAFZ Project meeting"
//                 className="w-full h-full object-cover"
//               />

//               {/* Text overlay at bottom */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3">
//                 <h5 className="text-white text-[clamp(12px,1vw,14px)] font-medium leading-[1.3]">
//                   Exploring the Potentials of the FCT-SAFZ Project for Local
//                   Agro Companies and Foreign Investors
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default GrowthSection;

"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

function GrowthSection() {
  return (
    <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
      <section
        className=" py-[clamp(50px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full  max-[713px]:flex-col max-[713px]:justify-center"
        style={{
          background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
        }}
      >
        <section className=" flex justify-between flex-col p-4">
          <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
            <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
              HVC News & Media
            </h4>
            <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] ">
              At HVC, we believe every step forward is worth sharing,from
              sustainable farming breakthroughs and agro-processing milestones
              to inspiring partnerships with farmers, communities, and
              institutions. This is where we document the growth, challenges,
              and triumphs shaping our mission to redefine the agricultural
              value chain in Nigeria and across Africa.
            </p>
          </div>
          <Link href="/news" className=" flex ">
            <Button variant="dark" size="vlg" className="w-fit">
              See all
            </Button>
          </Link>
        </section>

        <div className="relative max-w-[320px] w-full max-[544px]:max-w-full h-[300px] max-[544px]:h-[260px]">
          <div className="absolute top-2 right-1 w-full h-full max-[544px]:h-[160px] bg-[#C18EF4] rounded-[8px] transform rotate-[10deg] z-10 shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>
          <div className="absolute top-5 right-4 w-full h-full max-[544px]:h-[160px] bg-[#CCFC5B] rounded-[8px] transform rotate-[9deg] z-10 shadow-lg flex max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-4  w-full h-[100%] max-[544px]:h-[160px] bg-[#4D7702] rounded-[8px] transform -rotate-[10deg]  shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full bg-[#035925] rounded-[8px] z-30 shadow-xl  p-3 flex max-[575px]:w-[75%] max-[575px]:h-[75%]">
            <div className=" flex p-2   flex-col  relative ">
              <img
                src="/footer-img.png"
                alt="FCT-SAFZ Project meeting"
                className="w-full h-full object-cover"
              />
              <Link href="/news">
                <h5 className="text-white text-[clamp(12px,1vw,14px)] font-medium leading-[1.3] underline">
                  Exploring the Potentials of the FCT-SAFZ Project for Local
                  Agro Companies and Foreign Investors
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GrowthSection;
