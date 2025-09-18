import clsx from "clsx";
import React, { useState, ChangeEvent, FormEvent } from "react";

function OurFocusForm() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-[clamp(20px,3vw,72px)] px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className=" flex flex-col gap-[11px] items-center">
          <article
            className={clsx(
              "py-[7px] px-[11px] bg-[#dedede] rounded-[8px] w-fit"
            )}
          >
            <p className=" text-[10px] font-medium text-[#141414]">
              Ready to enjoy freedom in food choices
            </p>
          </article>

          <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
            Sign up for Food Freedom Today
          </h1>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfjQZvcsr6txOzurufGMSQEXW0VkgX49kIFyGNisWAh3owPFw/viewform?embedded=true"
          width="100%"
          height="1764"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full"
        >
          Loading…
        </iframe>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            At HVC, we understand that everyone’s food needs are unique. With{" "}
            <strong>Food Freedom</strong> , you get more than just food; you get
            flexibility, quality, and the freedom to choose a plan that fits
            your lifestyle. Whether you’re a student, a young professional, or
            part of a growing family, Food Freedom delivers carefully selected
            essentials every month to support your daily needs.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default OurFocusForm;
