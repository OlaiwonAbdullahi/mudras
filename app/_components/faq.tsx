"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const faqs = [
  {
    q: "What makes Mudras different from other massage therapy studios in Chelsea NYC?",
    a: "Mudras is a private recovery and bodywork studio in Chelsea specializing in customized massage therapy for performance, mobility, and recovery. Unlike traditional massage studios in NYC that follow fixed routines, every session at Mudras is fully tailored by specialists with over 20 years of experience. We combine clinical knowledge, performance-based techniques, and intuitive touch to create treatments that are specific to your body, your lifestyle, and your goals. Many of our clients are referred by physicians, trainers, and performance professionals who trust the precision of our work.",
  },
  {
    q: "What types of massage therapy do you offer in Chelsea?",
    a: "We offer deep tissue massage, sports massage, trigger point therapy, neuromuscular therapy, myofascial release, Swedish massage, Thai massage, cupping, gua sha, assisted stretching, prenatal and postnatal massage, and our signature BodyReset session. Rather than selecting a preset style, we customize each treatment using the techniques that best support your body that day.",
  },
  {
    q: "What is the Mudras BodyReset session?",
    a: "BodyReset is our signature customized massage therapy session designed to release tension, restore mobility, and support faster recovery. Depending on your needs, your specialist may incorporate deep tissue work, trigger point therapy, neuromuscular techniques, assisted stretching, cupping, or gua sha. Every BodyReset is different because no two bodies present the same way.",
  },
  {
    q: "How long are massage therapy sessions at Mudras?",
    a: "Most sessions are 60 or 90 minutes. Each session includes time to assess how your body is presenting so the treatment can be fully customized with precision and intention.",
  },
  {
    q: "How often should I get massage therapy for best results?",
    a: "Frequency depends on your lifestyle, training schedule, stress levels, and overall goals. Some clients come in regularly for maintenance and mobility. Others book sessions around competitions, travel, or periods of high stress. We help you determine what rhythm best supports your body.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 px-20 bg-[#212121] text-white">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#f0cc75] mb-8 leading-tight text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="md:w-1/2">
          <div className="w-full space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border border-[#f0cc75]/5 rounded-2xl overflow-hidden transition-all duration-300 `}
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left px-5 py-3 flex justify-between items-center group transition-colors"
                  >
                    <span className="text-md md:text-[17px] font-normal transition-colors duration-300 text-white">
                      {f.q}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={20}
                      className="transition-transform duration-300 shrink-0 ml-4 text-white/60"
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
                      <div className="px-8 pb-7 text-white/60 leading-relaxed text-base md:text-md">
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
  );
};

export default FAQ;
