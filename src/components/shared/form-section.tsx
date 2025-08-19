"use client";

import React, { useState } from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveData: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.comment.trim() ||
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.website.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }
  };
  return (
    <div className=" flex flex-col gap-[28px]">
      <article className=" flex flex-col gap-4">
        <p className=" text-[20px] font-semibold text-[#141414]">
          Leave a Reply
        </p>
        <p className=" text-[16px] text-[#444444] font-normal">
          Your email address will not be published. Required fields are marked*
        </p>
      </article>
      <div className=" ">
        <div className="space-y-6">
          {/* Comment Field */}
          <div>
            <label
              htmlFor="comment"
              className="text-[16px] font-medium text-[#141414] mb-2"
            >
              Comment*
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-3 py-2 border-[#EBEBEB] border rounded-[10px]  focus:outline-none focus:ring-2 resize-vertical min-h-[120px] text-sm sm:text-base mt-[6px]"
            />
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="text-[16px] font-medium text-[#141414] mb-2"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border-[#EBEBEB] border rounded-[10px]  focus:outline-none focus:ring-2 text-sm sm:text-base mt-[6px]"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-[16px] font-medium text-[#141414] mb-2"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border-[#EBEBEB] border rounded-[10px] focus:ring-2   focus:outline-none text-sm sm:text-base mt-[6px]"
            />
          </div>

          {/* Website Field */}
          <div>
            <label
              htmlFor="website"
              className="text-[16px] font-medium text-[#141414] mb-2"
            >
              Website*
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border-[#EBEBEB] border rounded-[10px] focus:ring-2  focus:outline-none  text-sm sm:text-base mb-[6px]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="saveData"
                name="saveData"
                type="checkbox"
                checked={formData.saveData}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#444444] border-[#EBEBEB] rounded-[4px] "
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="saveData"
                className="text-[16px] font-normal text-[#444444] "
              >
                Save my name, email and website in this browser for the next
                time I comment
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              onClick={handleSubmit}
              className="border-[#BD0303] border bg-[#f8e6e5] text-[#BD0303] font-normal px-[41px] py-[13px] rounded-[10px] transition duration-200 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 text-sm sm:text-base"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
