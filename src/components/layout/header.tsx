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
    text: "Home",
    link: "/",
  },
  {
    text: "About HVC",
    link: "/about",
  },
  {
    text: "Co-operatives",
    link: "/cooperatives",
  },
  {
    text: "Solutions",
    link: "/solutions",
    children: [
      { text: "Solutions", link: "/solutions" },
      { text: "Food Flow", link: "/solutions/food-flow" },
      { text: "Food Freedom", link: "/solutions/food-freedom" },
    ],
  },
  {
    text: "Career at HVC",
    link: "/career",
  },
];

function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <section className="bg-[#141F01] px-[clamp(20px,5.5vw,80px)] h-full">
      <nav className="flex justify-between items-center py-[18px] bg-[#141F01]">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={80} />
        </Link>

        <section className="flex gap-[clamp(10px,4.1vw,60px)] items-center max-[1062px]:hidden">
          <ul className="flex gap-[clamp(4px,0.7vw,10px)]">
            {navList.map((item, idx) => {
              const isActive =
                item.link &&
                (pathname === item.link ||
                  (item.link !== "/" && pathname.startsWith(item.link)));

              return (
                <li
                  className={clsx(
                    isActive ? "text-[#9DC655]" : "text-white",
                    "font-normal text-[16px] leading-[22px] px-[clamp(3px,0.7vw,10px)] py-[clamp(3px,0.6px,9px)] hover:text-[#9DC655] transition-colors cursor-pointer"
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
                      <p>{item.text}</p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <Link href="/news" className="cursor-pointer">
            <Button variant="primary" size="lg">
              News and Media
            </Button>
          </Link>
        </section>

        <div className="hidden max-[1062px]:flex">
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
  );
}

export default Header;
