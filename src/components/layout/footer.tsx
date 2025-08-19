"use client";

import { Hamburger } from "@/src/components/ui/icons/hambuger";
import { HamburgerDrawer } from "@/src/components/ui/mantine/drawers/hamburger-drawer";
import { Divider, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import SolutionPopover from "../landing-page/solution-popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { main } from "framer-motion/client";
import GrowthSection from "../landing-page/growth-section";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "../ui/mantine/buttons";
import { color } from "framer-motion";

const navList = [
  {
    text: "About HVC",
    link: "/",
  },
  {
    text: "Co-operatives",
    link: "/",
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
    icon: "News & Media",
    link: "/",
  },
];

const socials = [
  {
    icon: <FaLinkedinIn color="#fff" size={20} />,
    link: "/",
  },
  {
    icon: <RiInstagramFill color="#fff" size={20} />,
    link: "/",
  },
  {
    icon: <BsYoutube color="#fff" size={20} />,
    link: "/",
  },
  {
    icon: <FaTiktok color="#fff" size={20} />,
    link: "/",
  },
  {
    icon: <FaFacebook color="#fff" size={20} />,
    link: "/",
  },
];

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "40px",
    borderRadius: "36px",
    border: "1px solid #525b44",
    outline: "none",
    background: "#2c361b",
    color: "#fff",
    width: "100%",
    paddingLeft: "19px",
  },
};

function Footer() {
  return (
    <main>
      <GrowthSection />

      <footer className=" bg-[#141F01] py-[clamp(20px,4.1vw,81px)] px-[clamp(30px,5.2vw,100px)] ">
        <section className=" flex flex-col gap-[20px]">
          <div className="  flex items-center justify-between  max-[600px]:flex-col   max-[600px]:w-full  max-[600px]:gap-2 ">
            <article className=" flex flex-col gap-[24px] flex-1">
              <p className="  text-[clamp(1rem,2.1vw,1.5rem)] whitespace-nowrap flex-1 text-[#fff] font-semibold">
                Subscribe to our newsletter
              </p>
              <p className=" font-normal text-[16px] text-white">
                Be the first to know about our latest updates
              </p>
            </article>

            <div className=" flex  gap-[15px] w-full flex-1  ">
              <TextInput styles={styles} placeholder="Enter your email" />
              <div className=" ">
                <Button variant="secondary" size="footer" className=" w-fit">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className=" grid justify-between grid-cols-2 border-t border-t-[#525b44] border-b border-b-[#525b44]  pt-[clamp(1.5rem,4vw,5rem)] pb-[clamp(1.5rem,3.0vw,2.6rem)]  max-[741px]:grid-cols-1 max-[741px]:gap-[32px]  ">
            <section className="">
              <div className=" flex flex-col ">
                <figure className="  w-[clamp(3rem,5.2vw,6.2rem)] ">
                  <Image
                    className="w-full"
                    src="/logo.svg"
                    width={20}
                    height={20}
                    alt="logo-img"
                  />
                </figure>
              </div>

              <article className=" flex gap-[16px] pt-[20px]">
                {socials.map(({ icon }, idx) => (
                  <div
                    key={idx}
                    className=" flex items-center justify-center w-[40px] h-[40px] p-[10px] border border-[#525b44] bg-[#2c361b] rounded-full"
                  >
                    {icon}
                  </div>
                ))}
              </article>
              {/* </div> */}
            </section>

            <section className=" flex justify-between max-[456px]:grid max-[456px]:grid-cols-2">
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)]">
                <h2 className=" text-[16px]font-normal text-[#fff]">
                  What we do
                </h2>

                <ul className=" flex flex-col gap-[16px] decoration-none list-none">
                  <Link href="/about">
                    <li className="text-[#ddd] font-normal text-[16px]">
                      About us
                    </li>
                  </Link>

                  <Link href="/career">
                    <li className="text-[#ddd] font-normal text-[16px]">
                      Career
                    </li>
                  </Link>
                </ul>
              </div>
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)]">
                <h2 className=" text-[16px] font-normal text-[#fff]">
                  What we do
                </h2>

                <ul className=" flex flex-col gap-[16px] list-none ">
                  <Link href="/cooperatives">
                    <li className="text-[#ddd] font-normal text-[16px] ">
                      Services
                    </li>
                  </Link>

                  <Link href="/news">
                    <li className="text-[#ddd] font-normaltext-[16px]">Blog</li>
                  </Link>
                </ul>
              </div>
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)] max-[456px]:pt-4">
                <h2 className=" text-[16px] font-normal text-[#fff]">
                  Support
                </h2>

                <ul className=" flex flex-col gap-[16px] list-none ">
                  <li className="text-[#ddd] font-normal text-[16px]">
                    +1 701 358 2142
                  </li>
                  <li className="text-[#ddd] font-normal text-[16px]">
                    +1 701 358 2143
                  </li>
                  <li className="text-[#ddd] font-normal text-[16px]">
                    info@hvc.ng.com
                  </li>
                </ul>
              </div>
            </section>

            <article className=" hidden  gap-[42px] items-center max-[434px]:flex ">
              <p className="font-normal text-[14px] text-[#ddd]">
                Terms & Service
              </p>
              <Link href="/policy  " className=" cursor-pointer">
                <p className="font-normal text-[14px] text-[#ddd]">
                  Privacy Policy
                </p>
              </Link>
            </article>
          </div>
        </section>

        <div className=" flex justify-between items-center pt-[20px] ">
          <p className="font-normal text-[14px] text-[#ddd] ">
            Copyright © 2025 Harvest Value Chain. All rights reserved.
          </p>
          <article className=" flex  gap-[42px] items-center max-[434px]:hidden">
            <p className="font-normal text-[14px] text-[#ddd]">
              Terms & Service
            </p>
            <Link href="/policy  " className=" cursor-pointer">
              <p className="font-normal text-[14px] text-[#ddd]">
                Privacy Policy
              </p>
            </Link>
          </article>
        </div>
      </footer>
    </main>
  );
}

export default Footer;
