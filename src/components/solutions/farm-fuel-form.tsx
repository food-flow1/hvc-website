import clsx from "clsx";
import React, { useState } from "react";

function FarmFuelInterestForm() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-[clamp(20px,3vw,72px)] px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-[11px] items-center mb-8">
          <article
            className={clsx(
              "py-[7px] px-[11px] bg-[#dedede] rounded-[8px] w-fit"
            )}
          >
            <p className="text-[10px] font-medium text-[#141414]">
              Interested in Transforming Agricultural Waste
            </p>
          </article>

          <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
            Let us know how we can work together
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
            <strong>FarmFuel</strong>  not only promotes renewable energy and
            sustainable farming but also actively drives rural economic
            development. By addressing the dual challenges of waste and energy
            access, it provides a holistic approach to rural sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FarmFuelInterestForm;
