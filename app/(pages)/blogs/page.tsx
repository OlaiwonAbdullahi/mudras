"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { blogPosts } from "@/lib/blog-data";

const blogFaqs = [
  {
    q: "What topics does the Mudras blog cover?",
    a: "Our blog covers custom massage therapy, recovery techniques, wellness strategies, sports massage insights, deep tissue therapy benefits, and practical tips for maintaining an active, healthy lifestyle between sessions.",
  },
  {
    q: "What is custom massage and why does Mudras focus on it?",
    a: "Custom massage is a fully personalized treatment tailored to your body\u2019s unique needs. At Mudras, we focus on customization because no two bodies carry the same history \u2014 every session should be as individual as you are.",
  },
  {
    q: "How can the Mudras blog help me prepare for my first session?",
    a: "Our blog includes guidance on what to expect during your first visit, how to communicate your needs to your therapist, what to wear, and how to maximize the benefits of your treatment.",
  },
  {
    q: "Does Mudras share recovery and wellness tips beyond massage?",
    a: "Yes. We regularly share practical recovery tips, stretching routines, hydration guidance, and lifestyle advice that complement your massage therapy and support your overall wellness between sessions.",
  },
  {
    q: "How often does Mudras publish new content?",
    a: "We publish new content regularly. For the latest updates, follow us on social media or contact us at info@mudras.com to stay informed about new blog posts and wellness resources.",
  },
];

export default function BlogsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: "url(/images/aboutoffers.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center pt-44 pb-24">
          <h1 className="text-5xl lg:text-7xl font-light tracking-wide text-[#fffcf2] mb-10">
            Blog
          </h1>
          <Link
            href="/contact"
            className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#fffcf2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Our Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blogPosts.map((post, i) => {
              const fallbackImages = [
                "/images/service1.webp",
                "/images/service2.webp",
                "/images/tera1.webp",
                "/images/tera2.webp",
                "/images/founder-how.webp",
                "/images/specialist.webp",
              ];
              const image =
                post.image || fallbackImages[i % fallbackImages.length];
              return (
                <article
                  key={i}
                  className="border border-[#212121]/15 rounded-md overflow-hidden bg-transparent group flex flex-col"
                >
                  <div className="p-4">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-6 md:px-8 md:pb-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-[#212121] leading-snug mb-4 group-hover:text-[#212121]/70 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#212121]/70 text-base leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-[#a08858] text-sm font-medium hover:text-[#876f44] transition-colors inline-flex items-center gap-1"
                    >
                      Read More
                      <span className="text-base">&rarr;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#f0cc75] leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="w-full space-y-0">
              {blogFaqs.map((f, i) => {
                const isOpen = openFAQ === i;
                return (
                  <div
                    key={i}
                    className="border-b border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : i)}
                      className="w-full text-left px-2 py-6 flex justify-between items-center gap-4 group transition-colors"
                    >
                      <span className="text-base md:text-[17px] font-normal text-[#fffcf2]">
                        {f.q}
                      </span>
                      <HugeiconsIcon
                        icon={PlusSignIcon}
                        size={20}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 shrink-0 ml-4 text-[#fffcf2]/70 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2 pb-6 text-[#fffcf2]/70 leading-relaxed text-base">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
