// import { Button, Drawer, Text } from "@mantine/core";
// import React from "react";
// import Image from "next/image";
// import { IoMdClose } from "react-icons/io";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
// import SolutionMobilePopover from "@/src/components/shared/solution-mobile-popover";

// type IDrawer = {
//   opened: boolean;
//   close: () => void;
// };

// const navbar = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "About HVC",
//     link: "/about",
//   },
//   {
//     name: "Co-operatives",
//     link: "/cooperatives",
//   },
//   {
//     name: "Solutions",
//     link: "/solutions",
//     children: [
//       { name: "Solutions", link: "/solutions" },
//       { name: "Food Flow", link: "/solutions/food-flow" },
//       { name: "Food Freedom", link: "/solutions/food-freedom" },
//     ],
//   },
//   {
//     name: "Career at HVC",
//     link: "/career",
//   },
//   {
//     name: "News & Media",
//     link: "/news",
//   },
// ];

// export const HamburgerDrawer = ({ opened, close }: IDrawer) => {
//   const pathname = usePathname();

//   return (
//     <Drawer
//       position="right"
//       size={268}
//       withCloseButton={false}
//       opened={opened}
//       onClose={close}
//       styles={{
//         root: {
//           display: "flex",
//           flexDirection: "column",
//           height: "100%",
//         },
//         content: {
//           top: 0,
//         },
//         body: {
//           height: "100%",
//           overflow: "auto",
//           padding: 0,
//         },
//       }}
//     >
//       <section className="px-4 flex flex-col gap-[21px] bg-white justify-center py-[17px]">
//         <div className="flex justify-between items-center">
//           <Image src="/logo.svg" alt="logo" width={64} height={51} />
//           <div className="p-2 rounded-[8px] bg-[#14141414] flex items-center justify-center cursor-pointer w-[34px] h-[34px]">
//             <IoMdClose
//               color="#141414"
//               size={18}
//               className="cursor-pointer"
//               onClick={() => close()}
//             />
//           </div>
//         </div>

//         <section className="flex flex-col gap-[60px]">
//           <div className="flex flex-col gap-[24px]">
//             {navbar.map((item, idx) => {
//               const isActive =
//                 item.link &&
//                 (pathname === item.link ||
//                   (item.link !== "/" && pathname.startsWith(item.link)));

//               return (
//                 <ul key={idx}>
//                   <li>
//                     {item.name === "Solutions" && item.children ? (
//                       <div className="flex items-center gap-[3px]">
//                         <span
//                           className={clsx(
//                             isActive
//                               ? "text-[#9DC655] font-semibold"
//                               : "text-[#444444] font-normal",
//                             "text-[14px] hover:text-[#9DC655] p-[10px] hover:font-semibold cursor-pointer transition-colors"
//                           )}
//                         >
//                           {item.name}
//                         </span>
//                         <SolutionMobilePopover />
//                       </div>
//                     ) : (
//                       <Link href={item.link || "#"}>
//                         <span
//                           className={clsx(
//                             isActive
//                               ? "text-[#9DC655] font-semibold"
//                               : "text-[#444444] font-normal",
//                             "text-[14px] hover:text-[#9DC655] p-[10px] hover:font-semibold cursor-pointer transition-colors block"
//                           )}
//                           onClick={() => close()}
//                         >
//                           {item.name}
//                         </span>
//                       </Link>
//                     )}
//                   </li>
//                 </ul>
//               );
//             })}
//           </div>

//           <Link href="/policy">
//             <Button
//               size="vlg"
//               variant="outline-p"
//               className="item-center border-[#9dc655] cursor-pointer justify-center leading-[20px] py-[10px] rounded-[8px] "
//               onClick={() => close()}
//             >
//               Let's work together
//             </Button>
//           </Link>
//         </section>
//       </section>
//     </Drawer>
//   );
// };

import { Button, Drawer, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SolutionMobilePopover from "@/src/components/shared/solution-mobile-popover";

type IDrawer = {
  opened: boolean;
  close: () => void;
};

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About HVC",
    link: "/about",
  },
  {
    name: "Co-operatives",
    link: "/cooperatives",
  },
  {
    name: "Solutions",
    link: "/solutions",
    children: [
      { name: "Solutions", link: "/solutions" },
      { name: "Food Flow", link: "/solutions/food-flow" },
      { name: "Food Freedom", link: "/solutions/food-freedom" },
    ],
  },
  {
    name: "Career at HVC",
    link: "/career",
  },
  {
    name: "News & Media",
    link: "/news",
  },
];

export const HamburgerDrawer = ({ opened, close }: IDrawer) => {
  const pathname = usePathname();

  return (
    <Drawer
      position="right"
      size={268}
      withCloseButton={false}
      opened={opened}
      onClose={close}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          border: "none",
        },
        content: {
          top: 0,
        },
        body: {
          height: "100%",
          overflow: "auto",
          padding: 0,
        },
      }}
    >
      <section className="px-4 flex flex-col gap-[21px] bg-white justify-center py-[17px]">
        <div className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={64} height={51} />
          <div className="p-2 rounded-[8px] bg-[#14141414] flex items-center justify-center cursor-pointer w-[34px] h-[34px]">
            <IoMdClose
              color="#141414"
              size={18}
              className="cursor-pointer"
              onClick={() => close()}
            />
          </div>
        </div>

        <section className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[24px] border-none ">
            {navbar.map((item, idx) => {
              const isActive =
                item.link &&
                (pathname === item.link ||
                  (item.link !== "/" && pathname.startsWith(item.link)));

              return (
                <ul key={idx}>
                  <li>
                    {item.name === "Solutions" && item.children ? (
                      <div className="flex items-center gap-[3px]">
                        <span
                          className={clsx(
                            isActive
                              ? "text-[#9DC655] font-semibold"
                              : "text-[#444444] font-normal",
                            "text-[14px] hover:text-[#9DC655] p-[10px] hover:font-semibold cursor-pointer transition-colors"
                          )}
                        >
                          {item.name}
                        </span>
                        <SolutionMobilePopover onClose={close} />
                      </div>
                    ) : (
                      <Link href={item.link || "#"}>
                        <span
                          className={clsx(
                            isActive
                              ? "text-[#9DC655] font-semibold"
                              : "text-[#444444] font-normal",
                            "text-[14px] hover:text-[#9DC655] p-[10px] hover:font-semibold cursor-pointer transition-colors block"
                          )}
                          onClick={() => close()}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                </ul>
              );
            })}
          </div>

          <Link className="" href="/">
            <Button
              size="mdd"
              variant="outline-p"
              className="item-center border-[#9dc655] cursor-pointer justify-center leading-[20px] py-[10px] rounded-[8px]  "
              onClick={() => close()}
            >
              Let's work together
            </Button>
          </Link>
        </section>
      </section>
    </Drawer>
  );
};
