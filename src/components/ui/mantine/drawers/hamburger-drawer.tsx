import { Button, Drawer, Text } from "@mantine/core";
import clsx from "clsx";

import React from "react";
import { FaBookReader } from "react-icons/fa";
import { GiFarmTractor, GiFarmer } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

type IDrawer = {
  opened: boolean;
  close: () => void;
};

const navbar = [
  {
    name: "Home ",
    link: "",
  },
  {
    name: "About HVC ",
    link: "",
  },
  {
    name: "Co-operatives ",
    link: "",
  },
  {
    name: "Solutions ",
  },
  {
    name: "Career at HVC ",
  },
  {
    name: "News & Media ",
  },
];

export const HamburgerDrawer = ({ opened, close }: IDrawer) => {
  return (
    <Drawer
      position="right"
      size={100}
      withCloseButton={false}
      opened={opened}
      onClose={close}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },

        content: {
          top: 0,
          height: "100vh",
        },
        body: {
          height: "100%",
          overflow: "auto",
          padding: 0,
        },
      }}
    >
      {/* <section className="flex flex-col   gap-8 bg-white  dark:bg-[#191919] h-full "> */}
      {/* <div className=" flex items-end  justify-end p-2">
          <CgCloseR
            size={30}
            className="cursor-pointer"
            onClick={() => close()}
          />
        </div> */}
      {/* <div className=" py-[4rem] px-[4rem] flex flex-col  gap-10">
          {navbar.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col text-black dark:text-white font-bold text-[1rem] p-3 bg-primary hover:bg-primary-500 rounded-lg"
            >
              <ul className=" flex gap-4 items-center">
                <li>{item.icon}</li>

                <li>{item.name}</li>
              </ul>
            </div>
          ))}
        </div> */}

      {/* <div className="iflex justify-between">
          <Heading title="Activity Log" />
          <Link href="/activity-log" className="text-bms-red-600">
            View All
          </Link>
        </div> */}
      {/* </section> */}
      <section className="px-4 flex flex-col gap-[21px] bg-white  justify-center h-[100vh] ">
        <div className=" flex justify-between">
          <Image src="/logo.svg" alt="logo" width={64} height={51} />
          <div className="p-2 rounded-[8px] bg-[#ededed] flex items-center justify-center cursor-pointer  w-[34px] h-[34px] ">
            <IoMdClose
              color="#000"
              size={18}
              className="cursor-pointer"
              onClick={() => close()}
            />
          </div>
        </div>

        <section className=" flex flex-col gap-[60px]">
          <div className="  flex flex-col  gap-[24px]">
            {navbar.map((item, idx) => (
              <ul key={idx} className="   ">
                <li className="text-[#444444] font-normal text-[14px]  hover:text-[#9DC655]  p-[10px] hover:font-semibold cursor-pointer">
                  {item.name}
                </li>
              </ul>
            ))}
          </div>

          <Button
            variant="outline-p"
            size="xl"
            className="item-center border-[#9dc655] cursor-pointer  justify-center leading-[20px]"
          >
            Let’s work together
          </Button>
        </section>
      </section>
    </Drawer>
  );
};
