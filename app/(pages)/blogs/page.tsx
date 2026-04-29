"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
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
      <section className="relative w-full flex items-center justify-center overflow-hidden pt-44 pb-24 bg-stone-100">
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mb-8"
          />
          <h1 className="text-5xl lg:text-7xl font-light tracking-wide text-[#212121] mb-4">
            Blog
          </h1>
          <div className="mt-2 flex justify-center">
            <span className="ornament" />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Our Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="border border-[#212121]/10 bg-white/50 group"
              >
                <div className="p-8 md:p-10">
                  <p className="text-sm text-[#212121]/40 tracking-widest uppercase mb-4">
                    {post.date}
                  </p>
                  <h3 className="text-xl md:text-2xl font-light text-[#212121] leading-snug mb-4 group-hover:text-[#212121]/70 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#212121]/60 text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-[#212121] text-sm tracking-widest uppercase font-medium hover:text-[#f0cc75] transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <span className="text-lg">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="w-full space-y-0">
            {blogFaqs.map((f, i) => {
              const isOpen = openFAQ === i;
              return (
                <div
                  key={i}
                  className="border-b border-[#212121]/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full text-left px-2 py-6 flex justify-between items-center group transition-colors"
                  >
                    <span className="text-base md:text-[17px] font-normal text-[#212121]">
                      {f.q}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={18}
                      className={`transition-transform duration-300 shrink-0 ml-4 text-[#212121]/40 ${
                        isOpen ? "rotate-180" : ""
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
                      <div className="px-2 pb-6 text-[#212121]/70 leading-relaxed text-base">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
