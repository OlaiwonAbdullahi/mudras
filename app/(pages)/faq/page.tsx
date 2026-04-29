"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const faqs = [
  {
    q: "What is Mudras?",
    a: "Mudras is a private recovery and performance boutique in Chelsea, NYC, offering fully customized massage therapy by specialists with over 20 years of experience. Every session is tailored to your body, your lifestyle, and your goals.",
  },
  {
    q: "What is BodyReset?",
    a: "BodyReset is our signature treatment that combines deep tissue work, trigger point therapy, neuromuscular therapy, cupping, gua sha, and assisted stretching. Every BodyReset is different because no two bodies carry the same history.",
  },
  {
    q: "How long are sessions?",
    a: "Most sessions are 60 or 90 minutes. Each session is customized based on your goals and includes time to assess how your body is presenting so the treatment can be fully tailored with precision and intention.",
  },
  {
    q: "How is Mudras different from a regular massage?",
    a: "We deliver performance-driven treatments rooted in clinical knowledge and intuitive touch. Unlike traditional spas or massage chains that follow fixed routines, no two sessions at Mudras are the same. Our specialists are hand-selected for their mastery and presence.",
  },
  {
    q: "What should I expect after a session?",
    a: "Most clients feel lighter, more mobile, and deeply restored. Some mild soreness within 24\u201348 hours is normal, especially after deep tissue or targeted work. Staying hydrated and resting after your session will help optimize your recovery.",
  },
  {
    q: "How often should I book?",
    a: "It depends on your lifestyle, training schedule, stress levels, and overall goals. Some clients come in regularly for maintenance and mobility. Others book sessions around competitions, travel, or periods of high stress. We help you determine what rhythm best supports your body.",
  },
  {
    q: "Do you accept insurance?",
    a: "Mudras does not process insurance directly. However, we provide detailed receipts that clients may submit to their insurance provider for potential reimbursement, depending on their plan.",
  },
  {
    q: "How do I book a session?",
    a: "You can book through our online booking system, email us at info@mudras.com, or text us at (212) 837-8382. We\u2019re happy to help you find the right time and specialist.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We require 48 hours notice for cancellations or rescheduling. Late cancellations may incur fees. We understand life happens\u2014please reach out as soon as possible if your plans change.",
  },
  {
    q: "Do you work with doctors and physical therapists?",
    a: "Yes. We work closely with physicians, physical therapists, chiropractors, and other healthcare professionals to provide fully integrated care. Many of our clients are referred by their medical providers.",
  },
  {
    q: "What should I wear during a session?",
    a: "It\u2019s entirely your choice. You may wear underwear, shorts, or disrobe fully\u2014you\u2019ll always be draped with linens and blankets for comfort and privacy. Your specialist will ensure you feel safe and comfortable throughout.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! Gift cards are available for purchase. Contact us at info@mudras.com or call (212) 837-8382 to arrange a gift card for someone special.",
  },
  {
    q: "Can you help with injury recovery?",
    a: "Absolutely. Our specialists are experienced in recovery and post-rehabilitation care. We work with your healthcare team to support your healing process and help you return to full function.",
  },
  {
    q: "Do you work with professional athletes?",
    a: "Yes. We work with Olympic athletes, NBA, WNBA, NFL, and UFC athletes, Broadway performers, and other elite professionals who demand the highest level of bodywork and recovery support.",
  },
  {
    q: "Can I request a specific specialist?",
    a: "Of course. You can request a specific specialist when booking, or you\u2019re welcome to try someone new. Each of our team members brings a unique set of skills and specialties.",
  },
  {
    q: "What should I expect as a first-time client?",
    a: "Your session begins with a conversation about your needs, goals, and comfort level. Your specialist will take time to understand your body and create a treatment plan that\u2019s right for you. There\u2019s no rush\u2014we prioritize your experience from the moment you walk in.",
  },
  {
    q: "Where are you located?",
    a: "We\u2019re located at 37 W 20th Street in Chelsea, New York City, NY 10011. We also offer house calls, in-flight sessions, and retreat-based services upon request.",
  },
  {
    q: "Do you offer house calls?",
    a: "Yes, house calls are available upon request. Please contact us for pricing and availability. We bring the same level of expertise and care to your home, hotel, or office.",
  },
  {
    q: "Do you specialize in sports massage and injury work?",
    a: "Yes. Our sports massage specialists work extensively with injury recovery, athletic performance, and rehabilitation. Whether you\u2019re training for competition or recovering from surgery, we tailor every session to your specific needs.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards. Package options are also available for clients who want to commit to regular sessions at a preferred rate.",
  },
  {
    q: "Can I purchase gift certificates?",
    a: "Yes, gift certificates are available for friends, family, and colleagues. They make a thoughtful and meaningful gift for anyone who values self-care and recovery.",
  },
  {
    q: "Do you work with young athletes?",
    a: "Yes, we are happy to work with young athletes. A parent or guardian may be present during the session. We adjust our approach to be age-appropriate while still delivering effective, high-quality bodywork.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: "url(/images/abouthero.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center pt-44 pb-24">
          <h1 className="text-5xl lg:text-7xl font-light tracking-wide text-[#fffcf2] mb-10">
            FAQ
          </h1>
          <Link
            href="/contact"
            className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* FAQ Content */}
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
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-[#a08858]/40 rounded-md overflow-hidden h-fit transition-colors duration-300 hover:border-[#a08858]"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 transition-colors"
                  >
                    <span className="text-sm md:text-[15px] font-normal text-[#212121]">
                      {f.q}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={18}
                      className={`transition-transform duration-300 shrink-0 text-[#a08858] ${
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
                      <div className="px-5 pb-5 text-[#212121]/70 leading-relaxed text-sm md:text-[15px]">
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

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#EDE9DF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <Image
                src="/images/tera1.webp"
                alt="Mudras massage therapy"
                width={800}
                height={800}
                className="w-full aspect-square object-cover grayscale"
              />
            </div>
            <div>
              <Image
                src="/images/icon.webp"
                alt="Mudras Icon"
                width={30}
                height={30}
                className="object-contain mb-6"
              />
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] mb-6 leading-tight">
                Still Have Questions?
              </h2>
              <p className="text-[#212121]/80 text-base lg:text-[17px] leading-relaxed max-w-md mb-10 font-light">
                We&apos;re here for you. Whether you&apos;re curious about
                specific techniques, wondering which session length suits your
                needs, or want to discuss how massage therapy can support your
                goals, our team is ready to help.
              </p>
              <Link
                href="/contact"
                className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 text-sm tracking-widest font-medium transition-colors inline-block"
              >
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Products */}
      <section className="py-18 md:py-20 bg-[url('/images/newsletter.webp')] bg-cover bg-center w-full flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-white mb-8 leading-tight text-balance">
            Extend Your Recovery
          </h2>
          <p className="mt-8 text-white leading-relaxed max-w-2xl mx-auto">
            Your massage therapy journey doesn&apos;t end when you leave our
            Chelsea location. Our professional-grade Mudras Recovery Cream brings
            the same expertise to your daily routine.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
          >
            Explore Recovery Products
          </Link>
        </div>
      </section>
    </div>
  );
}
