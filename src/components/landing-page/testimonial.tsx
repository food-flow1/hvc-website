"use client";

import { useState } from "react";
import TagLayout from "./tag-layout";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mark Linberg",
      title: "CEO of Artana",
      text: "Working with HVC has transformed the way we operate. Their sustainable approach and reliable delivery have made them an essential part of our supply chain.",
      image: "test1.png",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#FAFAFA]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      titleColor: "text-[#585858]",
      layout: "top",
    },
    {
      id: 2,
      name: "Lisa Rhouther",
      title: "",
      text: "Their team brings not only expertise but real care for the land and the farmers.",
      image: "lisa.png",
      bgColor: "bg-[#000]",
      textColor: "text-[#fff]",
      nameColor: "text-[#fff]",
      layout: "bottom",
    },
    {
      id: 3,
      name: "Rebecca Truj",
      title: "",
      text: "We've seen measurable improvements in both crop quality and operational efficiency since partnering with them.",
      image: "rubecca.png",
      bgColor: "bg-[#fff]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      layout: "bottom",
    },
    {
      id: 4,
      name: "John Smith",
      title: "Farm Manager",
      text: "The innovative solutions and dedicated support from HVC have revolutionized our farming practices.",
      image: "test1.png",
      bgColor: "bg-[#2d5016]",
      textColor: "text-[#fff]",
      nameColor: "text-[#fff]",
      layout: "bottom",
    },
    // {
    //   id: 5,
    //   name: "Sarah Johnson",
    //   title: "Agricultural Consultant",
    //   text: "HVC's commitment to sustainable agriculture and community development is truly inspiring.",
    //   image: "lisa.png",
    //   bgColor: "bg-[#9DC655]",
    //   textColor: "text-[#000]",
    //   nameColor: "text-[#000]",
    //   layout: "top",
    // },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className=" bg-[#f5f9ee] py-[clamp(18px,4.6vw,90px)] px-[clamp(16px,6.1vw,80px)] gap-[20px]  flex flex-col  ">
      <TagLayout
        tag="Testimonials"
        tagColour="#141414"
        subText="Hear from our Community"
        subTextColor="#141414"
        description="Farmers, Consumers, Research Institutes and Businesses worldwide"
        descriptionColor="#444444"
        tagBg="#d6d9cf"
      />

      <section className=" flex flex-col gap-[clamp(20px,2.6vw,30px)]">
        <div className=" flex gap-1 items-center justify-end">
          <button
            onClick={prevSlide}
            className=" border-[#141414] border rounded-full p-[13px]  transition-colors duration-200 cursor-pointer"
          >
            <MdOutlineArrowBackIosNew color="#000" />
          </button>
          <button
            onClick={nextSlide}
            className=" border-[#141414] border rounded-full p-[13px] transition-colors duration-200 cursor-pointer"
          >
            <MdOutlineArrowForwardIos color="#000" />
          </button>
        </div>

        <div className=" flex gap-[clamp(10px,2vw,20px)] overflow-hidden w-full">
          {getVisibleTestimonials().map((testimonial, index) => (
            <section
              key={testimonial.id}
              className={`p-[clamp(20px,3vw,30px)] flex flex-col gap-[clamp(30px,3vw,87px)] ${
                testimonial.bgColor
              } rounded-[10px] transition-all duration-500 ease-in-out h-fit ${
                index === 0
                  ? "min-w-[280px] flex-[1.5]"
                  : "min-w-[200px] flex-1"
              }`}
              style={{
                transform: `translateX(${index * 0}px)`,
                opacity: index === 0 ? 1 : index === 1 ? 1 : 0.7,
              }}
            >
              {testimonial.layout === "top" ? (
                <>
                  <div className=" flex gap-[14px] items-center">
                    {testimonial.quoteImage && (
                      <section className=" flex">
                        <figure className="">
                          <img src={testimonial.quoteImage} alt="quote" />
                        </figure>
                        <figure className=" -ml-[10px]">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </figure>
                      </section>
                    )}
                    {!testimonial.quoteImage && (
                      <figure className="">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </figure>
                    )}

                    <p
                      className={`${testimonial.nameColor} text-[16px] font-medium`}
                    >
                      {testimonial.name}{" "}
                      {testimonial.title && (
                        <span
                          className={`${testimonial.titleColor} text-[16px] font-medium`}
                        >
                          {testimonial.title}
                        </span>
                      )}
                    </p>
                  </div>

                  <h5
                    className={`${testimonial.textColor} text-[clamp(16px,2vw,20px)] font-medium`}
                  >
                    "{testimonial.text}"
                  </h5>
                </>
              ) : (
                <>
                  <h5
                    className={`${testimonial.textColor} text-[clamp(16px,2vw,20px)] font-medium`}
                  >
                    "{testimonial.text}"
                  </h5>
                  <div className=" flex gap-[14px] items-center">
                    <figure className="">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </figure>

                    <p
                      className={`${testimonial.nameColor} text-[16px] font-medium`}
                    >
                      {testimonial.name}
                      {testimonial.title && (
                        <span
                          className={`${testimonial.titleColor} text-[16px] font-medium`}
                        >
                          {testimonial.title}
                        </span>
                      )}
                    </p>
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Testimonial;
