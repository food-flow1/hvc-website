// import clsx from "clsx";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   businessEmail: string;
//   package: string[];
//   comments: string;
//   contactTime: string;
// }

// function OurFocusForm() {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     firstName: "",
//     lastName: "",
//     phone: "",
//     businessEmail: "",
//     package: [],
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
//         ? [...prev.package, value]
//         : prev.package.filter((item) => item !== value),
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

//     if (formData.package.length === 0) {
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
//       package: [],
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
//               Ready to enjoy freedom in food choices
//             </p>
//           </article>

//           <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
//             Sign up for Food Freedom Today
//           </h1>
//         </div>

//         {/* Form Card */}
//         <div className="mt-8 ">
//           <div className="rounded-[20px] p-6 mb-[clamp(16px,2vw,32px)] border border-[#EBEBEB] bg-white relative overflow-hidden">
//             <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9DC655] to-[#7BA83F] rounded-t-[20px]"></div>
//             <div className="pt-2">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 Food Freedom Interest Form
//               </h2>
//               <p className="text-[#141414] text-[16px] italic font-medium">
//                 Food Freedom by HVC delivers curated food essentials directly to
//                 your doorstep with flexibility and added bonuses tailored to fit
//                 your lifestyle. Whether you’re a student, a busy professional,
//                 or a family looking for reliable, monthly food deliveries, Food
//                 Freedom offers subscription plans designed to meet your needs.
//                 Fill out the interest form below to learn more about our
//                 subscription packages, referral rewards, and the bonuses we
//                 offer each month. Once you’ve registered your interest, our team
//                 will reach out to help you find the perfect plan to match your
//                 preferences.
//               </p>
//             </div>
//             {/* <div className="mt-4 text-sm text-blue-700">
//               <a href="#" className="hover:underline">
//                 Read our Terms & Conditions
//               </a>{" "}
//               •
//               <a href="#" className="hover:underline ml-2">
//                 Read the full T&C
//               </a>
//             </div> */}
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

//             {/* Subscription Type */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
//               <label
//                 htmlFor="contactTime"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Subscription type*
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
//                 <option value="morning">Junior</option>
//                 <option value="afternoon">Master </option>
//                 <option value="evening">Chief </option>
//                 <option value="anytime">Novice</option>
//               </select>
//             </div>

//             {/* Prfered Package */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Preferred monthly package*
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {(
//                   [
//                     "Student Low Key (₦5,000)",
//                     "Student Flex (₦8,000)",
//                     "Student Buga (₦12,000)",
//                     "Cool Spinster (₦16,000)",
//                     "Cool Bachelor (₦16,000)",
//                     "Family Lite (₦20,000)",
//                     "Family Medium (₦30,000)",
//                     "Family Large (₦40,000)",

//                     "Family Extra Large (₦50,000)",
//                     "Grannies Delight (₦35,000)",
//                     "M1-Diabetic (₦45,000)",
//                     "M2-Hypertensive (₦45,000)",
//                   ] as const
//                 ).map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center space-x-3 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={option}
//                       checked={formData.package.includes(option)}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-[#9DC655] border-gray-300 rounded focus:ring-[#9DC655]"
//                     />
//                     <span className="text-[#444444]">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* referal program */}

//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Are you interested in our referral program?*
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {(["Yes", "No"] as const).map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center space-x-3 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={option}
//                       checked={formData.package.includes(option)}
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

//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
//               <label
//                 htmlFor="contactTime"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Preferred Contact Method*
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
//                 <option value="phone">Phone</option>

//                 <option value="email">Email</option>
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

// export default OurFocusForm;

import clsx from "clsx";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  preferred_packages: string[];
  subscription_type: string;
  referral_interest: string;

  contact_methods: string;
  message: string;
}

function OurFocusForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    preferred_packages: [],
    subscription_type: "",
    referral_interest: "",
    contact_methods: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: checked
        ? [...(prev[fieldName] as string[]), value]
        : (prev[fieldName] as string[]).filter((item) => item !== value),
    }));
  };

  const submitToHubSpot = async (formData: FormData) => {
    const PORTAL_ID = "146841102";
    const FORM_GUID = "2e316d0b-b73d-4e8f-bfe1-2746d41aaefe";

    const hubspotData = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: formData.email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: formData.firstname,
        },
        {
          objectTypeId: "0-1",
          name: "lastname",
          value: formData.lastname,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: formData.phone,
        },
        {
          objectTypeId: "0-1",
          name: "subscription_type",
          value: formData.subscription_type,
        },
        {
          objectTypeId: "0-1",
          name: "preferred_packages",
          value: formData.preferred_packages.join(", "),
        },
        {
          objectTypeId: "0-1",
          name: "referral_interest",
          value: formData.referral_interest,
        },

        {
          objectTypeId: "0-1",
          name: "message",
          value: formData.message,
        },
        {
          objectTypeId: "0-1",
          name: "contact_methods",
          value: formData.contact_methods,
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Food Freedom Interest Form",
      },
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("HubSpot submission error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.email ||
      !formData.firstname ||
      !formData.lastname ||
      !formData.phone
    ) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (formData.preferred_packages.length === 0) {
      toast.info("Please select at least one package.");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitToHubSpot(formData);
      toast.success("Thank you for your interest! We will contact you soon.");
      handleClearForm();
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      preferred_packages: [],

      message: "",
      subscription_type: "",
      referral_interest: "",
      contact_methods: "",
    });
    setTerms(false);
  };

  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerms(e.target.checked);
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
              Ready to enjoy freedom in food choices
            </p>
          </article>

          <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
            Sign up for Food Freedom Today
          </h1>
        </div>

        {/* Form Card */}
        <div className="mt-8 ">
          <div className="rounded-[20px] p-6 mb-[clamp(16px,2vw,32px)] border border-[#EBEBEB] bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9DC655] to-[#7BA83F] rounded-t-[20px]"></div>
            <div className="pt-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Food Freedom Interest Form
              </h2>
              <p className="text-[#141414] text-[16px] italic font-medium">
                Food Freedom by HVC delivers curated food essentials directly to
                your doorstep with flexibility and added bonuses tailored to fit
                your lifestyle. Whether you're a student, a busy professional,
                or a family looking for reliable, monthly food deliveries, Food
                Freedom offers subscription plans designed to meet your needs.
                Fill out the interest form below to learn more about our
                subscription packages, referral rewards, and the bonuses we
                offer each month. Once you've registered your interest, our team
                will reach out to help you find the perfect plan to match your
                preferences.
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
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                required
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer"
              />
            </div>

            <div className=" border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                required
                value={formData.lastname}
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

            {/* Subscription Type */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
              <label
                htmlFor="subscriptionType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subscription type <span className="text-red-500">*</span>
              </label>
              <select
                id="subscription_type"
                name="subscription_type"
                value={formData.subscription_type}
                onChange={handleInputChange}
                className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors text-gray-700"
              >
                <option value="">Choose</option>
                <option value="Junior">Junior</option>
                <option value="Master">Master</option>
                <option value="Chief">Chief</option>
                <option value="Novice">Novice</option>
              </select>
            </div>

            {/* Preferred Package */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred monthly package{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {(
                  [
                    "Student Low Key (₦5,000)",
                    "Student Flex (₦8,000)",
                    "Student Buga (₦12,000)",
                    "Cool Spinster (₦16,000)",
                    "Cool Bachelor (₦16,000)",
                    "Family Lite (₦20,000)",
                    "Family Medium (₦30,000)",
                    "Family Large (₦40,000)",
                    "Family Extra Large (₦50,000)",
                    "Grannies Delight (₦35,000)",
                    "M1-Diabetic (₦45,000)",
                    "M2-Hypertensive (₦45,000)",
                  ] as const
                ).map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.preferred_packages.includes(option)}
                      onChange={(e) =>
                        handleCheckboxChange(e, "preferred_packages")
                      }
                      className="w-4 h-4 text-[#9DC655] border-gray-300 rounded focus:ring-[#9DC655]"
                    />
                    <span className="text-[#444444]">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Referral program */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you interested in our referral program?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {(["Yes", "No"] as const).map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="referral_interest"
                      value={option}
                      checked={formData.referral_interest === option}
                      onChange={handleInputChange}
                      // checked={formData.referralInterest.includes(option)}
                      // onChange={(e) =>
                      //   handleCheckboxChange(e, "referral_interest")
                      // }
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
                htmlFor="messsage"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Comments or Questions
              </label>
              <textarea
                id="messsage"
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
                placeholder="Your answer."
              />
            </div>

            {/* Contact Method */}
            <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
              <label
                htmlFor="contactMethod"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Contact Method <span className="text-red-500">*</span>
              </label>
              <select
                id="contact_methods"
                name="contact_methods"
                value={formData.contact_methods}
                onChange={handleInputChange}
                className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors text-gray-700"
              >
                <option value="">Choose</option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
              </select>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={handleTermsChange}
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
                disabled={isSubmitting || !terms}
                className="bg-gradient-to-r from-[#008807] to-green-700 text-white font-medium py-[9px] px-[29px] rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-fit disabled:opacity-50 disabled:cursor-not-allowed"
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

export default OurFocusForm;

// import clsx from "clsx";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   package: string[];
//   comments: string;
//   subscriptionType: string;
//   referralInterest: string; // Changed from string[] to string for radio buttons
//   contactMethods: string; // Fixed field name
// }

// function OurFocusForm() {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     firstName: "",
//     lastName: "",
//     phone: "",
//     package: [],
//     comments: "",
//     subscriptionType: "",
//     referralInterest: "", // Changed from [] to ""
//     contactMethods: "", // Fixed field name
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (
//     e: ChangeEvent<HTMLInputElement>,
//     fieldName: keyof FormData
//   ) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: checked
//         ? [...(prev[fieldName] as string[]), value]
//         : (prev[fieldName] as string[]).filter((item) => item !== value),
//     }));
//   };

//   // New handler for radio buttons
//   const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Basic validation
//     if (
//       !formData.email ||
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.phone ||
//       !formData.subscriptionType ||
//       !formData.contactMethods
//     ) {
//       alert("Please fill in all required fields.");
//       setIsSubmitting(false);
//       return;
//     }

//     if (formData.package.length === 0) {
//       alert("Please select at least one package.");
//       setIsSubmitting(false);
//       return;
//     }

//     if (!formData.referralInterest) {
//       alert("Please select your referral program interest.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Use your API route instead of direct HubSpot submission
//       const response = await fetch("/api/submit-to-hubspot", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           formData,
//           pageUrl: window.location.href,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Thank you for your interest! We will contact you soon.");
//         handleClearForm();
//       } else {
//         console.error("Submission error:", result);
//         alert("Something went wrong. Please try again or contact us directly.");
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error. Please check your connection and try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClearForm = () => {
//     setFormData({
//       email: "",
//       firstName: "",
//       lastName: "",
//       phone: "",
//       package: [],
//       comments: "",
//       subscriptionType: "",
//       referralInterest: "", // Changed from [] to ""
//       contactMethods: "", // Fixed field name
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
//               Ready to enjoy freedom in food choices
//             </p>
//           </article>

//           <h1 className="text-[clamp(25px,3vw,40px)] font-medium text-[#141414] text-center">
//             Sign up for Food Freedom Today
//           </h1>
//         </div>

//         {/* Form Card */}
//         <div className="mt-8 ">
//           <div className="rounded-[20px] p-6 mb-[clamp(16px,2vw,32px)] border border-[#EBEBEB] bg-white relative overflow-hidden">
//             <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9DC655] to-[#7BA83F] rounded-t-[20px]"></div>
//             <div className="pt-2">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 Food Freedom Interest Form
//               </h2>
//               <p className="text-[#141414] text-[16px] italic font-medium">
//                 Food Freedom by HVC delivers curated food essentials directly to
//                 your doorstep with flexibility and added bonuses tailored to fit
//                 your lifestyle. Whether you're a student, a busy professional,
//                 or a family looking for reliable, monthly food deliveries, Food
//                 Freedom offers subscription plans designed to meet your needs.
//                 Fill out the interest form below to learn more about our
//                 subscription packages, referral rewards, and the bonuses we
//                 offer each month. Once you've registered your interest, our team
//                 will reach out to help you find the perfect plan to match your
//                 preferences.
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
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>

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
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer"
//               />
//             </div>

//             {/* Subscription Type */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
//               <label
//                 htmlFor="subscriptionType"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Subscription type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="subscriptionType"
//                 name="subscriptionType"
//                 value={formData.subscriptionType}
//                 onChange={handleInputChange}
//                 className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors"
//               >
//                 <option value="">Choose</option>
//                 <option value="Junior">Junior</option>
//                 <option value="Master">Master</option>
//                 <option value="Chief">Chief</option>
//                 <option value="Novice">Novice</option>
//               </select>
//             </div>

//             {/* Preferred Package */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Preferred monthly package{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {(
//                   [
//                     "Student Low Key (₦5,000)",
//                     "Student Flex (₦8,000)",
//                     "Student Buga (₦12,000)",
//                     "Cool Spinster (₦16,000)",
//                     "Cool Bachelor (₦16,000)",
//                     "Family Lite (₦20,000)",
//                     "Family Medium (₦30,000)",
//                     "Family Large (₦40,000)",
//                     "Family Extra Large (₦50,000)",
//                     "Grannies Delight (₦35,000)",
//                     "M1-Diabetic (₦45,000)",
//                     "M2-Hypertensive (₦45,000)",
//                   ] as const
//                 ).map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center space-x-3 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       value={option}
//                       checked={formData.package.includes(option)}
//                       onChange={(e) => handleCheckboxChange(e, "package")}
//                       className="w-4 h-4 text-[#9DC655] border-gray-300 rounded focus:ring-[#9DC655]"
//                     />
//                     <span className="text-[#444444]">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Referral program - Fixed to use radio buttons properly */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px] ">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Are you interested in our referral program?{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="space-y-3">
//                 {(["Yes", "No"] as const).map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center space-x-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="referralInterest"
//                       value={option}
//                       checked={formData.referralInterest === option}
//                       onChange={handleRadioChange}
//                       className="w-4 h-4 text-[#9DC655] border-gray-300 focus:ring-[#9DC655]"
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
//               </label>
//               <textarea
//                 id="comments"
//                 name="comments"
//                 rows={1}
//                 value={formData.comments}
//                 onChange={handleInputChange}
//                 className="w-full text-[#000] font-normal text-[16px] px-1  py-3 border-b border-b-[#EBEBEB]  focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655]  transition-colors placeholder:text-[#888888] rounded-none "
//                 placeholder="Your answer."
//               />
//             </div>

//             {/* Contact Method - Fixed field name */}
//             <div className="border border-[#EBEBEB] bg-white px-[25px] py-[20px] rounded-[10px]">
//               <label
//                 htmlFor="contactMethod"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Preferred Contact Method <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="contactMethods"
//                 name="contactMethods"
//                 value={formData.contactMethods}
//                 onChange={handleInputChange}
//                 className="w-full px-1 py-3  border-b border-b-[#EBEBEB] rounded-lg focus:ring-2 focus:ring-[#9DC655] focus:border-[#9DC655] transition-colors"
//               >
//                 <option value="">Choose</option>
//                 <option value="Phone">Phone</option>
//                 <option value="Email">Email</option>
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
//                 disabled={isSubmitting}
//                 className="bg-gradient-to-r from-[#008807] to-green-700 text-white font-medium py-[9px] px-[29px] rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-fit disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
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
//               <strong>Food Freedom</strong> will use your contact information
//               for sending you product information and relevant educational
//               services about food products. You may unsubscribe from these
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

// export default OurFocusForm;
