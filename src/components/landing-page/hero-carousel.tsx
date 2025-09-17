"use client";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function HeroCarousel() {
  const images = ["/hero-bg-1.png", "/hero-bg-2.png", "/hero-bg-3.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[578px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000  ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Agricultural landscape ${index + 1}`}
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>
      ))}

      <div className="absolute top-0 left-0">
        <div
          className="bg-[#141F01] rounded-[10px]"
          style={{
            paddingBottom: "16px",
            width: "219px",
            height: "54px",
            clipPath: "polygon(0 0, 100% 0, 79% 100%, 0 100%)",
          }}
        >
          <Link href="/about" className=" flex gap-[10px] items-center">
            <Button variant="secondary" size="lg">
              Learn more
            </Button>
            <div className=" flex items-center justify-center p-[6px] border border-[#9DC655] rounded-[8px] w-[38px] h-[38px]">
              <HiArrowUpRight className=" cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div
          className="bg-[#141F01] flex items-center gap-3 pr-[4px] pt-4  pl-[12px] justify-center"
          style={{
            width: "176px",
            height: "52px",
            borderRadius: "25px 15px 0px 8px",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="flex space-x-2 pt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="transition-all duration-300"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "bg-white w-[30px]  h-1   shadow-lg opacity-100"
                      : "bg-[#2c351a] w-[30px] h-1 opacity-40 hover:opacity-60"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="bg-[#2c351a]  rounded-full w-7 h-7 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {currentSlide + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Optional: Navigation arrows for manual control */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default HeroCarousel;
