// import NewsMedia from "@/src/components/news/new-media";
// import SolutionsLayout from "@/src/components/solutions/solutions-layout";
// import { useSearchParams } from "next/navigation";
// import React from "react";

// export default function News() {
//   return (
//     <div className=" flex flex-col">
//       <SolutionsLayout
//         tag="Stay up to date"
//         title="Stay informed with updates"
//         description={[
//           "At Harvest Value Chain (HVC), every headline tells a story of innovation, resilience, and progress. Our News & Media section brings you closer to the work we’re doing across Nigeria and beyond, from cutting-edge agricultural techniques and smart farming initiatives to meaningful partnerships that empower local farmers and communities.",
//           "Whether it's updates on government collaborations, youth empowerment programs, breakthrough products, or insights from industry events, our stories reflect the heartbeat of our mission: to create a sustainable, inclusive, and tech-powered agricultural ecosystem.Stay tuned as we continue to build value at every stage of the food chain  and celebrate the people, projects, and milestones moving agriculture forward.",
//         ]}
//         imageSrc="/news-bg.png"
//         imageAlt="news"
//         tagBg="#353e26"
//         backgroundColor="#141F01"
//       />

//       <NewsMedia />
//     </div>
//   );
// }

"use client";

import Image from "next/image";
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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options).replace(/(\d+)/, "$1th");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function NewsMedia() {
  const router = useRouter();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://www.hvcproject.com/wp-json/wp/v2/posts?per_page=5&_embed=true",
          {
            next: { revalidate: 60 },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const fetchedPosts = await res.json();
        console.log(fetchedPosts, "hello");
        setPosts(fetchedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);
  console.log(
    posts.map((item) => item.slug),
    "you"
  );

  if (loading) {
    return (
      <main className="w-full min-h-screen py-8 lg:py-[148px] bg-white lg:bg-[#FAFAFA] px-5 sm:px-[clamp(20px,3vw,32px)] lg:px-[80px]">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading news...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-full min-h-screen py-8 lg:py-[148px] bg-white lg:bg-[#FAFAFA] px-5 sm:px-[clamp(20px,3vw,32px)] lg:px-[80px]">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen py-8 lg:py-[148px] bg-white lg:bg-[#FAFAFA] px-5 sm:px-[clamp(20px,3vw,32px)] lg:px-[80px]">
      <div className="flex flex-col lg:flex-row w-full px-2 sm:px-4 lg:px-[40px] lg:bg-white bg-[#FAFAFA] rounded-[10px] shadow">
        <section className="flex flex-col justify-between w-full lg:w-[350px] xl:w-[400px] mb-8 lg:mb-0 lg:pr-8 pt-[clamp(5px,4vw,78px)] pb-[45px]">
          <img
            src="/big-logo.png"
            alt="logo"
            width={140}
            height={112}
            className="mb-6 lg:mb-0"
          />

          <div className="flex flex-col gap-[27px]">
            <article className="flex gap-[10px] flex-col">
              <h4 className="text-[#141414] text-[28px] font-semibold">
                HVC News & Media
              </h4>
              <p className="text-[16px] font-normal text-[#686A6C]">
                At HVC, we believe every step forward is worth sharing — from
                sustainable farming breakthroughs and agro-processing milestones
                to inspiring partnerships with farmers, communities, and
                institutions. This is where we document the growth, challenges,
                and triumphs shaping our mission to redefine the agricultural
                value chain in Nigeria and across Africa.
              </p>
            </article>
            <figure className="hidden lg:block"></figure>
          </div>
        </section>

        <div className="flex flex-col flex-1 lg:border-l border-l-[#ddd] pb-[43px] pt-[20px]">
          <p className="font-medium text-[#141414] text-[16px] border-b border-b-[#ddd] pb-4 mb-[35px] pl-[34px]">
            All News
          </p>
          <section className="flex flex-col gap-[30px] lg:pl-[34px] pl-1">
            {posts?.map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/news-placeholder.png";
              const imageAlt =
                post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                "News image";

              return (
                <div
                  key={post.id}
                  className="flex flex-col sm:flex-row gap-[16px] items-start"
                >
                  <div className="rounded-[10px] w-full sm:w-[267px] flex-shrink-0">
                    <img
                      src={featuredImage}
                      alt={imageAlt}
                      width={267}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-[10px]"
                      onError={(e) => {
                        e.currentTarget.src = "/news-placeholder.png";
                      }}
                    />
                  </div>

                  <section className="flex flex-col justify-between flex-1 h-full">
                    <article className="flex flex-col gap-2">
                      <h4
                        onClick={() => router.push(`/news/${post.slug}`)}
                        className="text-[18px] font-semibold text-[#9DC655] underline cursor-pointer"
                      >
                        {post.title.rendered}
                      </h4>
                      <p className="text-[#444444] text-[15px] font-normal">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                    </article>
                    <div className="flex justify-between mt-4 items-end">
                      <p className="text-[#141414] text-[14px] font-semibold mb-2">
                        {formatDate(post.date)}
                      </p>

                      <img
                        className="cursor-pointer"
                        onClick={() => router.push(`/news/${post.slug}`)}
                        src="/news-arrow.png"
                        alt="arrow"
                        width={44}
                        height={44}
                      />
                    </div>
                  </section>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
