"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import GrowthSection from "../landing-page/growth-section";
import { FaFacebook, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "../ui/mantine/buttons";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface FormData {
  email: string;
}

const socials = [
  {
    icon: <FaLinkedinIn color="#fff" size={20} />,
    link: "https://www.linkedin.com/company/harvest-value-chain-limited/",
  },
  {
    icon: <RiInstagramFill color="#fff" size={20} />,
    link: "https://www.instagram.com/harvest_value_chain",
  },
  {
    icon: <BsYoutube color="#fff" size={20} />,
    link: "https://www.youtube.com/@HarvestValueChain",
  },
  {
    icon: <FaTiktok color="#fff" size={20} />,
    link: "https//www.tiktok.com@hvcproject",
  },
  {
    icon: <FaFacebook color="#fff" size={20} />,
    link: "https://www.facebook.com/share/1GqhDNLZ4N/",
  },
];

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "40px",
    borderRadius: "36px",
    border: "1px solid #525b44",
    outline: "none",
    background: "#2c361b",
    color: "#fff",
    width: "100%",
    paddingLeft: "19px",
  },
};

function Footer() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const submitToHubSpot = async (formData: FormData) => {
    const PORTAL_ID = "146841102";
    const FORM_GUID = "d4c02c15-4104-46be-a4e0-306542b2c3a5";

    const hubspotData = {
      fields: [
        {
          name: "email",
          value: formData.email,
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Email Input",
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
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.email) {
      toast.error("Please enter your email");
      setIsSubmitting(false);
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitToHubSpot(formData);
      toast.success("Thank you for subscribing!");
      setFormData({ email: "" });
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <GrowthSection />

      <footer className=" bg-[#141F01] py-[clamp(20px,4.1vw,81px)] px-[clamp(30px,5.2vw,100px)] ">
        <section className=" flex flex-col gap-[20px]">
          <div className="  flex items-center justify-between  max-[600px]:flex-col   max-[600px]:w-full  max-[600px]:gap-2 ">
            <article className=" flex flex-col gap-[24px] flex-1">
              <p className="  text-[clamp(1rem,2.1vw,1.5rem)] whitespace-nowrap flex-1 text-[#fff] font-semibold">
                Subscribe to our newsletter
              </p>
              <p className=" font-normal text-[16px] text-white">
                Be the first to know about our latest updates
              </p>
            </article>

            <div className=" flex  gap-[15px] w-full flex-1  ">
              <TextInput
                styles={styles}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className=" ">
                <Button
                  variant="secondary"
                  size="footer"
                  className=" w-fit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className=" grid justify-between grid-cols-2 border-t border-t-[#525b44] border-b border-b-[#525b44]  pt-[clamp(1.5rem,4vw,5rem)] pb-[clamp(1.5rem,3.0vw,2.6rem)]  max-[741px]:grid-cols-1 max-[741px]:gap-[32px]  ">
            <section className="">
              <div className=" flex flex-col ">
                <figure className="  w-[clamp(3rem,5.2vw,6.2rem)] ">
                  <Image
                    className="w-full"
                    src="/logo.svg"
                    width={20}
                    height={20}
                    alt="logo-img"
                  />
                </figure>
              </div>

              <article className=" flex gap-[16px] pt-[20px]">
                {socials.map(({ icon, link }, idx) => (
                  <div
                    role="button"
                    onClick={() => handleSocialClick(link)}
                    key={idx}
                    className=" flex items-center justify-center w-[40px] h-[40px] p-[10px] border border-[#525b44] bg-[#2c361b] rounded-full cursor-pointer"
                    tabIndex={0}
                    aria-label={`Visit our page`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSocialClick(link);
                      }
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </article>
              {/* </div> */}
            </section>

            <section className=" flex justify-between max-[456px]:grid max-[456px]:grid-cols-2">
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)]">
                <h2 className=" text-[16px]font-normal text-[#fff]">
                  What we do
                </h2>

                <ul className=" flex flex-col gap-[16px] decoration-none list-none">
                  <Link href="/about">
                    <li className="text-[#ddd] font-normal text-[16px]">
                      About us
                    </li>
                  </Link>

                  <Link href="/career">
                    <li className="text-[#ddd] font-normal text-[16px]">
                      Career
                    </li>
                  </Link>
                </ul>
              </div>
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)]">
                <h2 className=" text-[16px] font-normal text-[#fff]">
                  What we do
                </h2>

                <ul className=" flex flex-col gap-[16px] list-none ">
                  <Link href="/cooperatives">
                    <li className="text-[#ddd] font-normal text-[16px] ">
                      Services
                    </li>
                  </Link>

                  <Link href="/news">
                    <li className="text-[#ddd] font-normaltext-[16px]">Blog</li>
                  </Link>
                </ul>
              </div>
              <div className=" flex flex-col gap-[clamp(1.2rem,1.90vw,1.5rem)] max-[456px]:pt-4">
                <h2 className=" text-[16px] font-normal text-[#fff]">
                  Support
                </h2>

                <ul className=" flex flex-col gap-[16px] list-none ">
                  <li className="text-[#ddd] font-normal text-[16px]">
                    +234 912 220 3166
                  </li>
                  <li className="text-[#ddd] font-normal text-[16px]">
                    +234 808 513 4177
                  </li>
                  <li className="text-[#ddd] font-normal text-[16px]">
                    hello@hvc.project.com
                  </li>
                </ul>
              </div>
            </section>

            <article className=" hidden  gap-[42px] items-center max-[434px]:flex ">
              <p className="font-normal text-[14px] text-[#ddd]">
                Terms & Service
              </p>
              <Link href="/policy  " className=" cursor-pointer">
                <p className="font-normal text-[14px] text-[#ddd]">
                  Privacy Policy
                </p>
              </Link>
            </article>
          </div>
        </section>

        <div className=" flex justify-between items-center pt-[20px] ">
          <p className="font-normal text-[14px] text-[#ddd]">
            Copyright © {new Date().getFullYear()} Harvest Value Chain. All
            rights reserved.
          </p>
          <article className=" flex  gap-[42px] items-center max-[434px]:hidden">
            <p className="font-normal text-[14px] text-[#ddd]">
              Terms & Service
            </p>
            <Link href="/policy  " className=" cursor-pointer">
              <p className="font-normal text-[14px] text-[#ddd]">
                Privacy Policy
              </p>
            </Link>
          </article>
        </div>
      </footer>
    </main>
  );
}

export default Footer;
