"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FormSection from "@/src/components/shared/form-section";
import { useParams, useRouter, useSearchParams } from "next/navigation";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
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

export default function page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [postDetails, setPostDetails] = useState<WordPressPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const detailId = useMemo(() => {
    if (!id) return undefined;
    return id;
  }, [id]);
  console.log(detailId, "details");

  // Function to fix HTTP to HTTPS URLs
  const fixWordPressImageUrls = (content: any) => {
    if (!content) return "";

    return content
      .replace(
        /src="http:\/\/(www\.)?hvcproject\.com\//gi,
        'src="https://www.hvcproject.com/'
      )
      .replace(/srcset="([^"]+)"/gi, (match: any, srcset: any) => {
        const fixedSrcset = srcset.replace(
          /http:\/\/(www\.)?hvcproject\.com\//gi,
          "https://www.hvcproject.com/"
        );
        return `srcset="${fixedSrcset}"`;
      })
      .replace(
        /data-src="http:\/\/(www\.)?hvcproject\.com\//gi,
        'data-src="https://www.hvcproject.com/'
      );
  };

  useEffect(() => {
    async function fetchDetails() {
      if (!id) return;

      try {
        setLoading(true);
        const res = await fetch(
          `https://www.hvcproject.com/wp-json/wp/v2/posts?slug=${id}&_embed=true`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const fetchedDetails = await res.json();
        console.log(fetchedDetails, "Prosper");

        if (!fetchedDetails || fetchedDetails.length === 0) {
          throw new Error("Post not found");
        }

        setPostDetails(fetchedDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
        <div className="text-lg text-gray-600">Loading post...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
        <div className="text-lg text-red-600">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="px-[clamp(30px,4vw,90px)] py-[clamp(20px,3vw,60px)] flex items-center justify-center bg-white">
      <section className="flex flex-col gap-[40px]">
        <article
          className="flex items-center gap-[11px] cursor-pointer"
          onClick={() => router.back()}
        >
          <FaArrowLeftLong color="#141414" />
          <p className="font-medium text-[20px] text-[#141414]">Go back</p>
        </article>

        <section className="flex flex-col gap-[53px]">
          <div className="flex flex-col gap-[50px]">
            <article className="flex flex-col gap-[10px]">
              <h4 className="text-[#9DC655] text-[20px] font-semibold">
                {postDetails?.[0]?.title?.rendered || " "}
              </h4>

              <p className="text-[16px] font-semibold text-[#444444]">
                {postDetails?.[0]?.excerpt?.rendered
                  ? postDetails[0].excerpt.rendered
                      .replace(/<[^>]*>/g, "")
                      .trim()
                  : " "}
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-[40px]">
            <article>
              {/* <div
                className="text-[#444444] font-normal text-[16px] prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html: postDetails?.[0]?.content?.rendered || "",
                }}
              /> */}
              {/* <div
                className="text-[#444444] font-normal text-[16px] prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    processContent(postDetails?.[0]?.content?.rendered) || "",
                }}
              /> */}
              <div
                className="text-[#444444] font-normal text-[16px] prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    fixWordPressImageUrls(
                      postDetails?.[0]?.content?.rendered
                    ) || "",
                }}
              />
            </article>

            <FormSection />
          </div>
        </section>
      </section>
    </main>
  );
}
