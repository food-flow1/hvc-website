"use client";

import clsx from "clsx";

function TagLayout({
  tag,
  subText,
  description,
  tagBg,
  tagColour,
  subTextColor,
  descriptionColor,
}: {
  tag: string;
  subText: string;
  description: string;
  tagBg?: string;
  tagColour?: string;
  subTextColor?: string;
  descriptionColor?: string;
}) {
  return (
    <div className=" flex flex-col gap-1">
      <article
        style={{ backgroundColor: tagBg }}
        className={clsx(
          "py-[7px] px-[11px] bg-[#dedede] rounded-[8px] w-fit",
          tagBg
        )}
      >
        <p
          className=" text-[10px] font-medium text-[#fff]"
          style={{ color: tagColour }}
        >
          {tag}
        </p>
      </article>

      <div className=" flex flex-col gap-[10px]">
        <h3
          className=" text-white leading-[clamp(35px,1.6vw,40px] font-medium text-[clamp(20px,2vw,40px)] "
          style={{ color: subTextColor }}
        >
          {subText}
        </h3>
        <p
          className=" text-[16px] text-[#FAFAFA] font-normal"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default TagLayout;
