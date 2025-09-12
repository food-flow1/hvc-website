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
      name: "Mr Kay,",
      title: " Farmer",
      text: "A great interface and very easy easy to navigate, a great asset tothe food chain as it connects farmers to food processors and consumers with less stress and fast timing, hence, enabling fast processing of produce and reducing worries of farmers. It's a win-win situation for all parties and a great digital asset to work with for all, a great development this is..",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#FAFAFA]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      titleColor: "text-[#585858]",
      layout: "top",
    },
    {
      id: 2,
      name: "MoyinOluwa A,",
      title: "Processor",
      text: "Food Flow Africa is a game-changer! I love how easy it is to use and how it connects farmers directly to suppliers, logistics, and markets—all in one place. It's practical, efficient, and exactly what the agricultural sector in Africa needs. A user testimonials or success stories to build trust and showcase real-world value and multilingual support would make it even better. Great work to the team behind this!",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#000]",
      textColor: "text-[#fff]",
      nameColor: "text-[#fff]",
      layout: "top",
    },
    {
      id: 3,
      name: "Alhaji Abdulrahim Yahaya Onipe,",
      title: "Cooperative member",
      text: "I sincerely thank the management of Harvest Value Chain Cooperative Society for this remarkable initiative. It is a great step that will benefit not just us, but the country at large. I pray the cooperative continues to grow from strength to strength, and I look forward to more impactful engagements and opportunities for wider outreach.",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#fff]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      layout: "top",
    },
    {
      id: 4,
      name: "Pst Mrs Abayomi Elizabeth Mosunmola Onipe,",
      title: "Cooperative member",
      text: "When individuals come together as a cooperative, they can pool their limited resources to achieve greater results than they could alone. For example, while ₦1,000 may not do much individually, 10 members contributing ₦1,000 each can collectively raise ₦10,000—making bigger, more impactful actions possible.",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#2d5016]",
      textColor: "text-[#fff]",
      nameColor: "text-[#fff]",
      layout: "top",
    },
    {
      id: 5,
      name: "Brandlocus,",
      title: "Business stakeholder",
      text: "Working with Harvest Value Chain Ltd (HVC) has been a deeply rewarding experience. As the team behind the business development and strategy, we've had the privilege of shaping ideas into impactful systems that serve farmers and members across the value chain. HVC's vision, commitment, and openness to innovation have made our work not only productive but inspiring. We're proud to be part of this journey and excited about the continued growth and transformation ahead.",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#9DC655]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      layout: "top",
    },
    {
      id: 6,
      name: "Shakirudeen Abdulazeez,",
      title: "Manager",
      text: "Being part of HVC has been a transformative journey for me—not just as a manager but also as a farmer. Through my role, I've had the opportunity to meet people, gain hands-on experience, and develop new skills in business and cooperative development. I'm proud of what we're building together at HVC. The impact is real, and I look forward to even more progress as we continue to grow and reach more people",
      quoteImage: "quotes-border.png",
      bgColor: "bg-[#9DC655]",
      textColor: "text-[#000]",
      nameColor: "text-[#000]",
      layout: "top",
    },
  ];

  const getInitials = (name: string) => {
    const cleanName = name.replace(/,/g, "").trim();
    const words = cleanName.split(" ");

    if (words.length >= 2) {
      const firstInitial = words[0].charAt(0);
      const lastInitial = words[words.length - 1].charAt(0);
      return (firstInitial + lastInitial).toUpperCase();
    } else if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return "HV";
  };

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
                        <div className="-ml-[10px] w-12 h-12 bg-[#035925] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {getInitials(testimonial.name)}
                          </span>
                        </div>
                      </section>
                    )}
                    {!testimonial.quoteImage && (
                      <div className="w-12 h-12 bg-[#035925] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {getInitials(testimonial.name)}
                        </span>
                      </div>
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
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>

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
