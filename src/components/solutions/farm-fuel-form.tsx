// import clsx from "clsx";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   businessEmail: string;
//   interests: string[];
//   comments: string;
//   contactTime: string;
// }

// function FarmFuelInterestForm() {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     firstName: "",
//     lastName: "",
//     phone: "",
//     businessEmail: "",
//     interests: [],
//     comments: "",
//     contactTime: "",
//   });

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       interests: checked
//         ? [...prev.interests, value]
//         : prev.interests.filter((item) => item !== value),
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     // Basic validation
//     if (
//       !formData.email ||
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.phone
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     if (formData.interests.length === 0) {
//       alert("Please select at least one area of interest.");
//       return;
//     }

//     console.log("Form submitted:", formData);
//     // Here you would typically send the data to your backend or a form service
//     alert("Thank you for your interest! We will contact you soon.");
//   };

//   const handleClearForm = () => {
//     setFormData({
//       email: "",
//       firstName: "",
//       lastName: "",
//       phone: "",
//       businessEmail: "",
//       interests: [],
//       comments: "",
//       contactTime: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa] py-[clamp(20px,3vw,72px)] px-4">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className=" flex flex-col gap-[11px] items-center">
//           <article
//             className={clsx(
//               "py-[7px] px-[11px] bg-[#dedede] rounded-[8px] w-fit"
//             )}
//           >
//             <p className=" text-[10px] font-medium text-[#141414]">
//               Interested in Transforming Agricultural Waste
//             </p>
//           </article>

//           <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
//             Let us know how we can work together
//           </h1>
//         </div>

//         {/* Form Card */}
//         <div className="mt-8 ">
//           <div className="rounded-[20px] p-6 mb-[clamp(16px,2vw,32px)] border border-[#EBEBEB] bg-white relative overflow-hidden">
//             <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9DC655] to-[#7BA83F] rounded-t-[20px]"></div>

//             <div className="pt-2">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 Farm Fuel Interest Form
//               </h2>
//               <p className="text-[#141414] text-[16px] italic font-medium">
//                 FarmFuel by Harvest Value Chain Limited is more than just a
//                 renewable energy solution—it’s a partnership to transform
//                 agricultural waste into power, income, and sustainable farming
//                 solutions. Fill out the form below to indicate your interest,
//                 whether you’re a farmer, a potential partner, or simply
//                 passionate about sustainable energy. Our team will reach out to
//                 discuss how we can collaborate to create cleaner, more
//                 sustainable communities.
//               </p>
//             </div>
//           </div>

//           <div className="space-y-[10px]">
//             {/* Email */}
//             <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>

//             {/* Name Fields */}
//             {/* <div className="grid md:grid-cols-2 gap-4"> */}
//             <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 First name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>

//             <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Last name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>
//             {/* </div> */}

//             {/* Phone */}
//             <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Phone number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>

//             {/* Interests */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 What aspects of Farm Fuel are you interested in?{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {(
//                   [
//                     "Supply chain and network",
//                     "Agricultural fertilizer for farming",
//                     "Purchasing organic fertilizer",
//                     "Learning about our ethanol organic fertilizer",
//                     "General information",
//                   ] as const
//                 ).map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center space-x-3 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={option}
//                       checked={formData.interests.includes(option)}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-[#9DC655] border-gray-300 rounded focus:ring-[#9DC655]"
//                     />
//                     <span className="text-[#444444]">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Comments */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label
//                 htmlFor="comments"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Comments or Questions
//                 <span className="text-red-500">*</span>
//               </label>

//               <textarea
//                 id="comments"
//                 name="comments"
//                 rows={1}
//                 value={formData.comments}
//                 onChange={handleInputChange}
//                 // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer."
//               />
//             </div>

//             {/* Preferred Contact Time */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
//               <label
//                 htmlFor="contactTime"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Preferred Contact Method
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="contactTime"
//                 name="contactTime"
//                 value={formData.contactTime}
//                 onChange={handleInputChange}
//                 className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors  contactTime"
//               >
//                 <option value="">Choose</option>
//                 <option value="morning">Morning (9 AM - 12 PM)</option>
//                 <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
//                 <option value="evening">Evening (5 PM - 8 PM)</option>
//                 <option value="anytime">Anytime</option>
//               </select>
//             </div>

//             {/* Terms Agreement */}
//             <div className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 required
//                 className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
//               />
//               <label
//                 htmlFor="terms"
//                 className="text-sm text-gray-700 leading-relaxed"
//               >
//                 I agree to a copy of my submission
//               </label>
//             </div>

//             <div className="flex justify-between items-center ">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="bg-gradient-to-r from-[#008807] to-green-700 text-white font-medium py-[9px] px-[29px] rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-fit"
//               >
//                 Submit
//               </button>

//               <p
//                 onClick={handleClearForm}
//                 className=" font-semibold text-[#008807] text-[16px] cursor-pointer "
//               >
//                 Clear form
//               </p>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <p className="text-xs text-gray-500 leading-relaxed">
//               <strong>FarmFuel</strong> will use your contact information for
//               sending you product information and relevant educational services
//               about agriculture products. You may unsubscribe from these
//               communications at any time. For information on how to unsubscribe,
//               as well as our privacy practices and commitment to protecting your
//               privacy, check out our
//               <a href="#" className="text-blue-600 hover:underline ml-1">
//                 Privacy Policy
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FarmFuelInterestForm;

import clsx from "clsx";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;

  interests: string[];
  comments: string;
  contactTime: string;
  contactMethod: string;
}

function FarmFuelInterestForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",

    interests: [],
    comments: "",
    contactTime: "",
    contactMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone
    ) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (formData.interests.length === 0) {
      alert("Please select at least one area of interest.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-to-hubspot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, pageUrl: window.location.href }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you for your interest! We will contact you soon.");
        handleClearForm();
      } else {
        console.error("Submission error:", result);
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",

      interests: [],
      comments: "",
      contactTime: "",
      contactMethod: "",
    });
  };

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
              Interested in Transforming Agricultural Waste
            </p>
          </article>

          <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
            Let us know how we can work together
          </h1>
        </div>

        {/* Form Card */}
        <div className="mt-8 ">
          <div className="rounded-[20px] p-6 mb-[clamp(16px,2vw,32px)] border border-[#EBEBEB] bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9DC655] to-[#7BA83F] rounded-t-[20px]"></div>

            <div className="pt-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Farm Fuel Interest Form
              </h2>
              <p className="text-[#141414] text-[16px] italic font-medium">
                FarmFuel by Harvest Value Chain Limited is more than just a
                renewable energy solution—it's a partnership to transform
                agricultural waste into power, income, and sustainable farming
                solutions. Fill out the form below to indicate your interest,
                whether you're a farmer, a potential partner, or simply
                passionate about sustainable energy. Our team will reach out to
                discuss how we can collaborate to create cleaner, more
                sustainable communities.
              </p>
            </div>
          </div>

          <div className="space-y-[10px]">
            {/* Email */}
            <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer"
              />
            </div>

            {/* Name Fields */}
            <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer"
              />
            </div>

            <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer"
              />
            </div>

            {/* Phone */}
            <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer"
              />
            </div>

            {/* Interests */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What aspects of Farm Fuel are you interested in?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {(
                  [
                    "Supply chain and network",
                    "Agricultural fertilizer for farming",
                    "Purchasing organic fertilizer",
                    "Learning about our ethanol organic fertilizer",
                    "General information",
                  ] as const
                ).map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.interests.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#9DC655] border-gray-300 rounded focus:ring-[#9DC655]"
                    />
                    <span className="text-[#444444]">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Comments or Questions
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="comments"
                name="comments"
                rows={1}
                value={formData.comments}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer."
              />
            </div>

            {/* Preferred Contact Time */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
              <label
                htmlFor="contactMethod"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Contact Method
                <span className="text-red-500">*</span>
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleInputChange}
                className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors  contactTime"
              >
                <option value="">Choose</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 leading-relaxed"
              >
                I agree to a copy of my submission
              </label>
            </div>

            <div className="flex justify-between items-center ">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#008807] to-green-700 hover:from-green-700 hover:to-green-800 transform hover:scale-105"
                } text-white font-medium py-[9px] px-[29px] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-fit`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              <p
                onClick={handleClearForm}
                className=" font-semibold text-[#008807] text-[16px] cursor-pointer "
              >
                Clear form
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>FarmFuel</strong> will use your contact information for
              sending you product information and relevant educational services
              about agriculture products. You may unsubscribe from these
              communications at any time. For information on how to unsubscribe,
              as well as our privacy practices and commitment to protecting your
              privacy, check out our
              <a href="#" className="text-blue-600 hover:underline ml-1">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmFuelInterestForm;
