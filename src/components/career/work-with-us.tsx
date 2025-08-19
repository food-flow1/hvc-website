// import React, { useState } from "react";
// import TagLayout from "../landing-page/tag-layout";

// export default function WorkWithUs() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const workList = [
//     {
//       title: "Competitive Salaries & Benefits",
//       subText:
//         "We offer attractive compensation packages that reward your hard work and dedication.",
//       img: "/work1.png",
//     },
//     {
//       title: "Professional development",
//       subText:
//         "We provide ongoing training and development opportunities to help you grow your skills and advance your career.",
//       img: "/work2.png",
//     },
//     {
//       title: "Inclusive work environment",
//       subText:
//         "HVC is committed to fostering a supportive and inclusive work culture where every team member can thrive.",
//       img: "/work3.png",
//     },
//     {
//       title: "Impactful work",
//       subText:
//         "Be part of a company that is making a difference in the agricultural sector and contributing to the well-being of communities.",
//       img: "/work4.png",
//     },
//   ];

//   const truncateText = (text: string, maxLength = 50) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + "...";
//   };

//   return (
//     <div className="px-[90px] py-[74px] items-center flex justify-center bg-[#f5f9ee]">
//       <section className="flex flex-col gap-[30px]">
//         <TagLayout
//           tag="Explore opportunities with HVC today"
//           tagBg="#d6d9cf"
//           tagColour="#141414"
//           subText="Why work with us"
//           subTextColor="#141414"
//           description="At HVC, we don't just build solutions—we build communities, empower people, and drive real impact. Whether you're a farmer, vendor, investor, or partner, working with us means being part of a mission to transform agriculture, food access, and livelihoods across Africa. Together, we can create sustainable systems that nourish both people and economies."
//           descriptionColor="#444444"
//         />

//         <div className="flex gap-[10px] items-center justify-center w-full">
//           {workList.map(({ title, subText, img }, idx) => (
//             <section
//               key={idx}
//               className={`flex items-end justify-start h-[440px] cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden rounded-[10px] ${
//                 hoveredIndex === null
//                   ? "w-[320px]"
//                   : hoveredIndex === idx
//                   ? "w-[551px]"
//                   : "w-[260px]"
//               }`}
//               style={{
//                 backgroundImage: `url("${img}")`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Dark overlay for better text readability */}
//               <div className="absolute inset-0 transition-opacity duration-300" />

//               <article className="flex flex-col gap-[6px] px-[23px] pb-[30px] relative z-10">
//                 <h4 className="text-[20px] font-semibold text-white leading-tight">
//                   {title}
//                 </h4>
//                 <p className="text-[16px] font-normal text-white leading-relaxed transition-all duration-300">
//                   {hoveredIndex === idx ? subText : truncateText(subText)}
//                 </p>
//               </article>
//             </section>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import TagLayout from "../landing-page/tag-layout";

// export default function WorkWithUs() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first image expanded

//   const workList = [
//     {
//       title: "Competitive Salaries & Benefits",
//       subText:
//         "We offer attractive compensation packages that reward your hard work and dedication.",
//       img: "/work1.png",
//     },
//     {
//       title: "Professional development",
//       subText:
//         "We provide ongoing training and development opportunities to help you grow your skills and advance your career.",
//       img: "/work2.png",
//     },
//     {
//       title: "Inclusive work environment",
//       subText:
//         "HVC is committed to fostering a supportive and inclusive work culture where every team member can thrive.",
//       img: "/work3.png",
//     },
//     {
//       title: "Impactful work",
//       subText:
//         "Be part of a company that is making a difference in the agricultural sector and contributing to the well-being of communities.",
//       img: "/work4.png",
//     },
//   ];

//   const truncateText = (text: string, maxLength = 45) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + "...";
//   };

//   return (
//     <div className="px-[90px] py-[74px] bg-[#f5f9ee]">
//       <section className="flex flex-col gap-[30px] w-full">
//         <TagLayout
//           tag="Explore opportunities with HVC today"
//           tagBg="#d6d9cf"
//           tagColour="#141414"
//           subText="Why work with us"
//           subTextColor="#141414"
//           description="At HVC, we don't just build solutions—we build communities, empower people, and drive real impact. Whether you're a farmer, vendor, investor, or partner, working with us means being part of a mission to transform agriculture, food access, and livelihoods across Africa. Together, we can create sustainable systems that nourish both people and economies."
//           descriptionColor="#444444"
//         />

//         <div className="flex gap-[8px] w-full h-[440px]">
//           {workList.map(({ title, subText, img }, idx) => (
//             <section
//               key={idx}
//               className={`flex items-end justify-start h-full cursor-pointer transition-all duration-700 ease-in-out relative overflow-hidden rounded-[10px] ${
//                 hoveredIndex === idx
//                   ? "flex-[3]" // Takes up even more space when expanded
//                   : "flex-1" // Equal distribution when not expanded
//               }`}
//               style={{
//                 backgroundImage: `url("${img}")`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 minWidth: hoveredIndex === idx ? "500px" : "150px", // Larger minimum widths
//               }}
//               onMouseEnter={() => setHoveredIndex(idx)}
//             >
//               {/* Dark overlay for better text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//               <article
//                 className={`flex flex-col gap-[8px] px-[24px] pb-[32px] relative z-10 transition-all duration-500 ${
//                   hoveredIndex === idx ? "opacity-100" : "opacity-90"
//                 }`}
//               >
//                 <h4
//                   className={`font-semibold text-white leading-tight transition-all duration-300 ${
//                     hoveredIndex === idx ? "text-[22px]" : "text-[18px]"
//                   }`}
//                 >
//                   {hoveredIndex === idx ? title : title.split(" ")[0] + "..."}
//                 </h4>
//                 <p
//                   className={`font-normal text-white/90 leading-relaxed transition-all duration-300 ${
//                     hoveredIndex === idx
//                       ? "text-[16px] opacity-100"
//                       : "text-[14px] opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   {hoveredIndex === idx ? subText : ""}
//                 </p>
//               </article>
//             </section>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import TagLayout from "../landing-page/tag-layout";

export default function WorkWithUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first image expanded

  const workList = [
    {
      title: "Competitive Salaries & Benefits",
      subText:
        "We offer attractive compensation packages that reward your hard work and dedication.",
      img: "/work1.png",
    },
    {
      title: "Professional development",
      subText:
        "We provide ongoing training and development opportunities to help you grow your skills and advance your career.",
      img: "/work2.png",
    },
    {
      title: "Inclusive work environment",
      subText:
        "HVC is committed to fostering a supportive and inclusive work culture where every team member can thrive.",
      img: "/work3.png",
    },
    {
      title: "Impactful work",
      subText:
        "Be part of a company that is making a difference in the agricultural sector and contributing to the well-being of communities.",
      img: "/work4.png",
    },
  ];

  const truncateText = (text: string, maxLength = 45) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const truncateTitle = (text: string, maxLength = 20) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="px-[clamp(20px,4.6vw,90px)] py-[clamp(20px,3.8vw,74px)] bg-[#f5f9ee]">
      <section className="flex flex-col gap-[clamp(20px,4vw,30px)] w-full">
        <TagLayout
          tag="Explore opportunities with HVC today"
          tagBg="#d6d9cf"
          tagColour="#141414"
          subText="Why work with us"
          subTextColor="#141414"
          description="At HVC, we don't just build solutions—we build communities, empower people, and drive real impact. Whether you're a farmer, vendor, investor, or partner, working with us means being part of a mission to transform agriculture, food access, and livelihoods across Africa. Together, we can create sustainable systems that nourish both people and economies."
          descriptionColor="#444444"
        />

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-[8px] w-full h-[440px]">
          {workList.map(({ title, subText, img }, idx) => (
            <section
              key={idx}
              className={`flex items-end justify-start h-full cursor-pointer transition-all duration-700 ease-in-out relative overflow-hidden rounded-[10px] ${
                hoveredIndex === idx
                  ? "flex-[3]" // Takes up even more space when expanded
                  : "flex-1" // Equal distribution when not expanded
              }`}
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition:
                  idx === 0
                    ? "center top"
                    : idx === 1
                    ? "center center"
                    : idx === 2
                    ? "center top"
                    : "center center",
                backgroundRepeat: "no-repeat",
                minWidth: hoveredIndex === idx ? "500px" : "150px",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <article
                className={`flex flex-col gap-[8px] px-[24px] pb-[32px] relative z-10 transition-all duration-500 ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-90"
                }`}
              >
                <h4
                  className={`font-semibold text-white leading-tight transition-all duration-300 ${
                    hoveredIndex === idx ? "text-[22px]" : "text-[18px]"
                  }`}
                >
                  {hoveredIndex === idx ? title : truncateTitle(title)}
                </h4>
                <p
                  className={`font-normal text-white/90 leading-relaxed transition-all duration-300 ${
                    hoveredIndex === idx
                      ? "text-[16px] opacity-100"
                      : "text-[14px] opacity-80"
                  }`}
                >
                  {hoveredIndex === idx ? subText : truncateText(subText, 35)}
                </p>
              </article>
            </section>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-[16px] w-full">
          {workList.map(({ title, subText, img }, idx) => (
            <section
              key={idx}
              className="flex items-end justify-start h-[280px] w-full relative overflow-hidden rounded-[10px]"
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <article className="flex flex-col gap-[8px] px-[20px] pb-[24px] relative z-10">
                <h4 className="text-[20px] font-semibold text-white leading-tight">
                  {title}
                </h4>
                <p className="text-[14px] font-normal text-white/90 leading-relaxed">
                  {subText}
                </p>
              </article>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from "react";
// import TagLayout from "../landing-page/tag-layout";

// export default function WorkWithUs() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first image expanded

//   const workList = [
//     {
//       title: "Competitive Salaries & Benefits",
//       subText:
//         "We offer attractive compensation packages that reward your hard work and dedication.",
//       img: "/work1b.png",
//       imgExpanded: "/work1.png",
//     },
//     {
//       title: "Professional development",
//       subText:
//         "We provide ongoing training and development opportunities to help you grow your skills and advance your career.",
//       img: "/work2b.png",
//       imgExpanded: "/work2.png",
//     },
//     {
//       title: "Inclusive work environment",
//       subText:
//         "HVC is committed to fostering a supportive and inclusive work culture where every team member can thrive.",
//       img: "/work3b.png",
//       imgExpanded: "/work3.png",
//     },
//     {
//       title: "Impactful work",
//       subText:
//         "Be part of a company that is making a difference in the agricultural sector and contributing to the well-being of communities.",
//       img: "/work4b.png",
//       imgExpanded: "/work4.png",
//     },
//   ];

//   const truncateText = (text: string, maxLength = 45) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + "...";
//   };

//   return (
//     <div className="px-[90px] py-[74px] bg-[#f5f9ee]">
//       <section className="flex flex-col gap-[30px] w-full">
//         <TagLayout
//           tag="Explore opportunities with HVC today"
//           tagBg="#d6d9cf"
//           tagColour="#141414"
//           subText="Why work with us"
//           subTextColor="#141414"
//           description="At HVC, we don't just build solutions—we build communities, empower people, and drive real impact. Whether you're a farmer, vendor, investor, or partner, working with us means being part of a mission to transform agriculture, food access, and livelihoods across Africa. Together, we can create sustainable systems that nourish both people and economies."
//           descriptionColor="#444444"
//         />

//         <div className="flex gap-[8px] w-full h-[440px]">
//           {workList.map(({ title, subText, img, imgExpanded }, idx) => (
//             <section
//               key={idx}
//               className={`flex items-end justify-start h-full cursor-pointer transition-all duration-700 ease-in-out relative overflow-hidden rounded-[10px] ${
//                 hoveredIndex === idx
//                   ? "flex-[3]" // Takes up even more space when expanded
//                   : "flex-1" // Equal distribution when not expanded
//               }`}
//               style={{
//                 backgroundImage: `url("${
//                   hoveredIndex === idx ? imgExpanded : img
//                 }")`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 minWidth: hoveredIndex === idx ? "500px" : "150px", // Larger minimum widths
//               }}
//               onMouseEnter={() => setHoveredIndex(idx)}
//             >
//               {/* Dark overlay for better text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//               <article
//                 className={`flex flex-col gap-[8px] px-[24px] pb-[32px] relative z-10 transition-all duration-500 ${
//                   hoveredIndex === idx ? "opacity-100" : "opacity-90"
//                 }`}
//               >
//                 <h4
//                   className={`font-semibold text-white leading-tight transition-all duration-300 ${
//                     hoveredIndex === idx ? "text-[22px]" : "text-[18px]"
//                   }`}
//                 >
//                   {hoveredIndex === idx ? title : title.split(" ")[0] + "..."}
//                 </h4>
//                 <p
//                   className={`font-normal text-white/90 leading-relaxed transition-all duration-300 ${
//                     hoveredIndex === idx
//                       ? "text-[16px] opacity-100"
//                       : "text-[14px] opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   {hoveredIndex === idx ? subText : ""}
//                 </p>
//               </article>
//             </section>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
