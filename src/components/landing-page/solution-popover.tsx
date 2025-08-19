import { Menu, Text } from "@mantine/core";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const dropList = [
  {
    text: "HVC Farm fuel",
    subText: "Turning waste into clean energy",
    link: "/solutions",
  },
  {
    text: "HVC Food flow",
    subText: "Connecting farmers to food processors",
    link: "/solutions/food-flow",
  },
  {
    text: "HVC Food freedom",
    subText: "Sustainable food access for all",
    link: "/solutions/food-freedom",
  },
];

export default function SolutionPopover() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLinkClick = () => {
    close();
  };

  return (
    <Menu
      opened={opened}
      width="target"
      onChange={toggle}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
      classNames={{
        dropdown:
          " bg-white rounded-lg bg-white   p-0 !rounded-lg !w-[500px] !shadow-[0_4px_8px_2px_rgba(0,0,0,0.1)]",
        item: "p-2 hover:bg-[#f5f5f6]",
      }}
    >
      <Menu.Target>
        <span className=" cursor-pointer">
          <IoMdArrowDropdown className=" cursor-pointer" size={24} />
        </span>
      </Menu.Target>

      <Menu.Dropdown>
        <div className=" flex gap-[13px] bg-[#fff] py-5 px-[23px]  ">
          <Image src="/sections-image.png" alt="" width={199} height={242} />
          <section className=" flex flex-col py-[26px] px-[16px] bg-[#FAFAFA] rounded-[4px] items-center justify-center gap-[30px] cursor-pointer  ">
            {dropList.map((item, idx) => (
              <Link key={idx} href={item.link} onClick={handleLinkClick}>
                <div className=" flex gap-[5px] w-[210px]  cursor-pointer hover:shadow-sm px-1 py-1 rounded-md ">
                  <GoDotFill color="#9DC655" />
                  <article className=" flex flex-col gap-[2px]">
                    <p className=" text-[16px] font-semibold text-[#0A0A0A] leading-[20px]">
                      {item.text}
                    </p>
                    <p className=" text-[#585858] font-medium text-[12px]">
                      {item.subText}
                    </p>
                  </article>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
