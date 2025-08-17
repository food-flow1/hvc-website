"use client";

import { Hamburger } from "@/src/components/ui/icons/hambuger";
import { HamburgerDrawer } from "@/src/components/ui/mantine/drawers/hamburger-drawer";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import SolutionPopover from "../landing-page/solution-popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navList = [
  {
    text: "About HVC",
    link: "/about",
  },
  {
    text: "Co-operatives",

    link: "/solutions",
  },
  {
    text: "Solutions",
    link: "/solutions",
    children: [
      { text: "Financial Services", link: "/solutions/financial-services" },
      { text: "Technology Solutions", link: "/solutions/technology" },
      { text: "Consulting", link: "/solutions/consulting" },
      {
        text: "Digital Transformation",
        link: "/solutions/digital-transformation",
      },
    ],
  },
  {
    text: "Career at HVC",
    link: "/",
  },
  {
    text: "News & Media",
    link: "/",
  },
];

function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    // <main className=" bg-[#141F01] px-[clamp(20px,5.5vw,80px)] flex flex-col gap-[clamp(20px,6.2vw,90px)] h-full">
    <section className="bg-[#141F01] px-[clamp(20px,5.5vw,80px)]  h-full">
      <nav className="flex justify-between items-center py-[18px] bg-[#141F01] ">
        <Image src="/logo.svg" alt="logo" width={100} height={80} />

        <section className=" flex gap-[clamp(10px,4.1vw,60px)] items-center max-[631px]:hidden ">
          {/* {navList.map((item, idx) => (
            <div key={idx} className=" flex gap-[10px]">
              {item.text}
            </div>
          ))} */}
          <ul className=" flex gap-[clamp(4px,0.7vw,10px)] ">
            {navList.map((item, idx) => {
              const isActive =
                item.link && pathname.startsWith(item.link) && item.link !== "";
              return (
                <li
                  className={clsx(
                    isActive ? "text-[#9DC655] " : "text-white font-normal",
                    " font-normal text-[16px]  leading-[22px] text-white px-[clamp(3px,0.7vw,10px)] py-[clamp(3px,0.6px,9px)] hover:text-[#9DC655] transition-colors cursor-pointer"
                  )}
                  key={idx}
                >
                  {item?.text === "Solutions" && item?.children ? (
                    <div className="flex items-center gap-[9px]">
                      <p>{item?.text}</p>
                      <SolutionPopover />
                    </div>
                  ) : (
                    <Link href={item.link || "#"}>
                      <p
                      // className={clsx(
                      //   pathname?.includes(item?.link)
                      //     ? "text-[#9DC655]"
                      //     : "",
                      //   "text-white"
                      // )}
                      //   className="
                      // font-normal text-[16px] leading-[22px] text-white px-[clamp(3px,0.7vw,10px)] py-[clamp(3px,0.6px,9px)] hover:text-green-400 transition-colors cursor-pointer
                      // "
                      >
                        {item.text}
                      </p>
                    </Link>
                  )}

                  {/* {item.text} */}
                </li>
              );
            })}
          </ul>

          <Button variant="primary" size="lg">
            Let’s work together
          </Button>
        </section>

        <div className=" hidden max-[631px]:flex  ">
          <div
            className="p-2 rounded-[8px] bg-[#2c361b] flex items-center justify-center cursor-pointer"
            onClick={() => open()}
          >
            <Hamburger />
          </div>
        </div>
      </nav>
      <HamburgerDrawer opened={opened} close={close} />
    </section>
    // </main>
  );
}

export default Header;

// "use client";

// import { Hamburger } from "@/src/components/ui/icons/hambuger";
// import { HamburgerDrawer } from "@/src/components/ui/mantine/drawers/hamburger-drawer";
// import { Button, HoverCard, Stack, Box } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import Image from "next/image";
// import Link from "next/link";

// const navList = [
//   {
//     text: "About HVC",
//     link: "",
//   },
//   {
//     text: "Co-operatives",
//     link: "",
//   },
//   {
//     text: "Solutions",
//     link: "/solutions",
//     children: [
//       { text: "Financial Services", link: "/solutions/financial-services" },
//       { text: "Technology Solutions", link: "/solutions/technology" },
//       { text: "Consulting", link: "/solutions/consulting" },
//       {
//         text: "Digital Transformation",
//         link: "/solutions/digital-transformation",
//       },
//     ],
//   },
//   {
//     text: "Career at HVC",
//     link: "",
//   },
//   {
//     text: "News & Media",
//     link: "",
//   },
// ];

// function Header() {
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <section className="bg-[#141F01] px-[clamp(20px,5.5vw,80px)]  h-full">
//       <nav className="flex justify-between items-center py-[18px] bg-[#141F01] ">
//         <Image src="/logo.svg" alt="logo" width={100} height={80} />

//         <section className=" flex gap-[clamp(10px,4.1vw,60px)] items-center max-[631px]:hidden ">
//           <ul className=" flex gap-[clamp(4px,0.7vw,10px)] ">
//             {navList.map((item, idx) => (
//               <li key={idx}>
//                 {item.text === "Solutions" && item.children ? (
//                   <HoverCard
//                     width={280}
//                     shadow="md"
//                     radius="md"
//                     position="bottom-start"
//                     offset={5}
//                   >
//                     <HoverCard.Target>
//                       <div className="font-normal text-[16px] leading-[22px] text-white px-[clamp(3px,0.7vw,10px)] py-[clamp(3px,0.6px,9px)] cursor-pointer flex items-center gap-1 hover:text-green-400 transition-colors">
//                         {item.text}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="transition-transform group-hover:rotate-180"
//                         >
//                           <polyline points="6,9 12,15 18,9"></polyline>
//                         </svg>
//                       </div>
//                     </HoverCard.Target>
//                     <HoverCard.Dropdown>
//                       <Stack gap="xs">
//                         {item.children.map((child, childIdx) => (
//                           <Link key={childIdx} href={child.link}>
//                             <Box className="px-3 py-2 rounded-md hover:bg-green-50 transition-colors cursor-pointer text-gray-800 hover:text-green-600">
//                               {child.text}
//                             </Box>
//                           </Link>
//                         ))}
//                       </Stack>
//                     </HoverCard.Dropdown>
//                   </HoverCard>
//                 ) : (
//                   <Link href={item.link || "#"}>
//                     <div className="font-normal text-[16px] leading-[22px] text-white px-[clamp(3px,0.7vw,10px)] py-[clamp(3px,0.6px,9px)] hover:text-green-400 transition-colors cursor-pointer">
//                       {item.text}
//                     </div>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <Button variant="primary" size="lg">
//             Let's work together
//           </Button>
//         </section>

//         <div className=" hidden max-[631px]:flex  ">
//           <div
//             className="p-2 rounded-[8px] bg-[#2c361b] flex items-center justify-center cursor-pointer"
//             onClick={() => open()}
//           >
//             <Hamburger />
//           </div>
//         </div>
//       </nav>
//       <HamburgerDrawer opened={opened} close={close} />
//     </section>
//   );
// }

// export default Header;
