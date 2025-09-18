"use client";

import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";
import { Button } from "../ui/mantine/buttons";

interface PictureTextProps {
  header?: string;
  text?: string;
  details?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image?: string;
  children?: ReactNode;
}

function PictureTextLayout({
  header,
  text,
  details,
  onButtonClick,
  image,
  buttonText,
}: PictureTextProps) {
  return (
    <section className="p-[clamp(10px,1vw,17px)] flex gap-[clamp(16px,1.2vw,24px)] bg-[#FAFAFA] rounded-[8.5px] items-center justify-center max-[631px]:flex-col">
      <div className="flex flex-col gap-[clamp(20px,4.1vw,80px)] flex-1 px-[clamp(4px,2vw,44px)]">
        <section className="flex flex-col gap-[clamp(16px,2vw,32px)]">
          <article className="flex flex-col gap-2">
            <h5 className="text-[clamp(24px,2.5vw,48px)] font-semibold text-[#141414]">
              {header}
            </h5>
            <p className="text-[#585858] font-medium text-[16px]">{text}</p>
          </article>
          <p className="text-[14px] font-normal text-[#444444] max-w-[427px]">
            {details}
          </p>
        </section>

        <div>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="w-fit"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      <figure className="rounded-[8px] flex-1 w-full relative aspect-square max-w-[537px]">
        <Image
          src={`${image as string}`}
          fill
          alt="food flow"
          className="object-cover rounded-[8px]"
          sizes="(max-width: 631px) 100vw, 50vw"
        />
      </figure>
    </section>
  );
}

export default PictureTextLayout;
