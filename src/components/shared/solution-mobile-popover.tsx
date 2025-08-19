import { Menu, Text } from "@mantine/core";
import { IoMdArrowDropdown } from "react-icons/io";
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

type SolutionMobilePopoverProps = {
  onClose?: () => void;
};

export default function SolutionMobilePopover({
  onClose,
}: SolutionMobilePopoverProps) {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLinkClick = () => {
    close();
    onClose?.();
  };

  return (
    <Menu
      opened={opened}
      width="target"
      onChange={toggle}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
      classNames={{
        dropdown:
          " bg-white rounded-lg bg-white   p-0 !rounded-lg !w-[272px] !shadow-[0_4px_8px_2px_rgba(0,0,0,0.1)]",
        item: "p-2 hover:bg-[#f5f5f6]",
      }}
    >
      <Menu.Target>
        <span className=" cursor-pointer">
          <IoMdArrowDropdown
            className=" cursor-pointer"
            size={24}
            color="#444444"
          />
        </span>
      </Menu.Target>

      <Menu.Dropdown>
        <div className=" flex gap-[13px] bg-[#fff] py-5 px-[11px]  ">
          <section className=" flex flex-col  px-[16px] bg-[#FAFAFA] rounded-[4px] items-center justify-center cursor-pointer  ">
            {dropList.map((item, idx) => (
              <Link key={idx} href={item.link} onClick={handleLinkClick}>
                <div className=" flex gap-[5px] w-[210px]  cursor-pointer hover:shadow-sm border-b border-b-[#EBEBEB] py-[13px]">
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
