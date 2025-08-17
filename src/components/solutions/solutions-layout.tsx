"use client";

import clsx from "clsx";
import { section } from "framer-motion/client";

interface SolutionsProps {
  tag: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt?: string;
  tagBg?: string;
  tagColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
}

function SolutionsLayout({
  tag,
  title,
  description,
  imageAlt,
  imageSrc,
  tagBg = "#353e26",
  tagColor = "#fff",
  titleColor = "white",
  descriptionColor = "#fff",
  backgroundColor = "#141F01",
}: SolutionsProps) {
  return (
    <section
      className="flex px-[clamp(40px,4vw,80px)] py-[clamp(40px,4vw,80px)] items-center justify-center"
      style={{ backgroundColor }}
    >
      <section className="justify-between flex items-center max-w-7xl w-full gap-8 max-[666px]:flex-col  ">
        <div className={clsx("flex flex-col gap-1 flex-1")}>
          <article
            style={{ backgroundColor: tagBg }}
            className="py-[7px] px-[11px] rounded-[8px] w-fit"
          >
            <p className="text-[10px] font-medium" style={{ color: tagColor }}>
              {tag}
            </p>
          </article>

          <div className="flex flex-col gap-[20px]">
            <h3
              className="leading-[clamp(35px,3vw,60px)] font-medium text-[clamp(20px,2vw,48px)]"
              style={{ color: titleColor }}
            >
              {title}
            </h3>

            <article className="flex flex-col gap-[30px]">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[16px] font-normal"
                  style={{ color: descriptionColor }}
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </div>

        <figure
          className={clsx(
            "w-[550px] h-[563px] flex-1 max-[666px]:w-[343px] max-[666px]:h-full"
          )}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
      </section>
    </section>
  );
}

export default SolutionsLayout;
