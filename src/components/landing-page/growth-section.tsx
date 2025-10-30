"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

function GrowthSection() {
  const router = useRouter();
  const [firstPost, setFirstPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFirstPost() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://blog.hvcproject.com/wp-json/wp/v2/posts?per_page=1&_embed=true"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const posts = await res.json();

        if (posts.length > 0) {
          setFirstPost(posts[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchFirstPost();
  }, []);

  const featuredImage =
    firstPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/news-placeholder.png";
  const imageAlt =
    firstPost?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    "Latest news image";

  return (
    <main className=" py-[clamp(30px,6.8vw,131px)] px-[clamp(20px,4.1vw,80px)] flex justify-center bg-white">
      <section
        className=" py-[clamp(50px,2.8vw,54px)] px-[clamp(35px,2.8vw,54px)]    flex justify-between rounded-[9px] gap-[clamp(30px,5.6vw,108px)] max-[544px]:gap-[clamp(16px,1vw,20px)] w-full  max-[713px]:flex-col max-[713px]:justify-center"
        style={{
          background: `linear-gradient(135deg, #DEEC40 0%, #F0DD36 50%, #FFB875 100%)`,
        }}
      >
        <section className=" flex justify-between flex-col p-4">
          <div className=" flex flex-col gap-[clamp(16px,1.4vw,28px)]">
            <h4 className=" text-[clamp(20px,3.1vw,60px)] leading-[clamp(20px,3.1vw,60px)] font-medium text-[#141414] max-w-[477px]">
              HVC News & Media
            </h4>
            <p className=" text-[clamp(14px,1vw,16px)] font-normal leading-[22px] text-[#585858] max-w-[477px] ">
              At HVC, we believe every step forward is worth sharing,from
              sustainable farming breakthroughs and agro-processing milestones
              to inspiring partnerships with farmers, communities, and
              institutions. This is where we document the growth, challenges,
              and triumphs shaping our mission to redefine the agricultural
              value chain in Nigeria and across Africa.
            </p>
          </div>
          <Link href="/news" className=" flex ">
            {/* <div onClick={() => router.push(`/news/${firstPost?.slug}`)}> */}
            <Button variant="dark" size="vlg" className="w-fit">
              See all
            </Button>
            {/* </div> */}
          </Link>
        </section>

        <div className="relative max-w-[320px] w-full max-[544px]:max-w-full h-[300px] max-[544px]:h-[260px]">
          <div className="absolute top-2 right-1 w-full h-full max-[544px]:h-[160px] bg-[#C18EF4] rounded-[8px] transform rotate-[10deg] z-10 shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>
          <div className="absolute top-5 right-4 w-full h-full max-[544px]:h-[160px] bg-[#CCFC5B] rounded-[8px] transform rotate-[9deg] z-10 shadow-lg flex max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-4  w-full h-[100%] max-[544px]:h-[160px] bg-[#4D7702] rounded-[8px] transform -rotate-[10deg]  shadow-lg max-[575px]:w-[75%] max-[575px]:h-[75%]"></div>

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full bg-[#035925] rounded-[8px] z-30 shadow-xl  p-3 flex max-[575px]:w-[75%] max-[575px]:h-[75%]">
            <div className=" flex p-2   flex-col  relative ">
              <img
                // src="/footer-img.png"
                src={featuredImage}
                alt="FCT-SAFZ Project meeting"
                className="w-full h-full object-cover"
              />
              <div onClick={() => router.push(`/news/${firstPost?.slug}`)}>
                <h5 className="text-white text-[clamp(12px,1vw,14px)] font-medium leading-[1.3] underline cursor-pointer">
                  {firstPost?.title.rendered}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GrowthSection;
