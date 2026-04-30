"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import Hero from "@/app/ui/hero";

const referralOptions = [
  "Referral",
  "Social Media",
  "Google Maps",
  "Magazine article",
  "Other (please specify)",
];

const faqs = [
  {
    q: "Where are you located?",
    a: "We\u2019re located at 37 W 20th Street in Chelsea, New York City, NY 10011. We also offer house calls, in-flight sessions, and retreat-based services upon request.",
  },
  {
    q: "How do I book a session?",
    a: "You can book through our online booking system, email us at info@mudras.com, or text us at (212) 837-8382. We\u2019re happy to help you find the right time and specialist.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We require 48 hours notice for cancellations or rescheduling. Late cancellations may incur fees. We understand life happens \u2014 please reach out as soon as possible if your plans change.",
  },
  {
    q: "Do you accept insurance?",
    a: "Mudras does not process insurance directly. However, we provide detailed receipts that clients may submit to their insurance provider for potential reimbursement, depending on their plan.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards. Package options are also available for clients who want to commit to regular sessions at a preferred rate.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    heardAbout: [] as string[],
    referralDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleCheckbox = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      heardAbout: prev.heardAbout.includes(option)
        ? prev.heardAbout.filter((o) => o !== option)
        : [...prev.heardAbout, option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col flex-1">
      <Hero
        backgroundImage="/images/testhero.webp"
        title="Contact Us"
        buttonText=" Book Your Session"
        buttonLink="#contact-form"
      />
      <section
        id="contact-form"
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#fffcf2]"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Get in touch with us
            </h2>
            <p className="text-[#212121]/70 text-[17px] leading-relaxed mt-6 max-w-xl mx-auto">
              To schedule a session or for any other inquiry – please complete
              the form below or email us at{" "}
              <a
                href="mailto:info@mudras.com"
                className="text-[#212121] underline underline-offset-4"
              >
                info@mudras.com
              </a>
            </p>
            <p className="text-[#212121] text-[17px] mt-4 font-medium">
              Bookings by appointment only
            </p>
          </div>

          {submitted ? (
            <div className="border border-[#a08858]/40 p-10 md:p-14 text-center">
              <Image
                src="/images/icon.webp"
                alt="Mudras Icon"
                width={30}
                height={30}
                className="object-contain mx-auto mb-4"
              />
              <h3 className="text-3xl font-light text-[#212121]">Thank you!</h3>
              <p className="text-[#212121]/60 mt-2">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-[#a08858]/40 p-8 md:p-12 rounded-md"
            >
              <div className="space-y-6">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base text-[#212121] mb-3">
                        First Name{" "}
                        <span className="text-[#212121]/40">(required)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full bg-[#e7e4db]/70 py-3 px-4 text-[#212121] focus:outline-none focus:bg-[#e7e4db] rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-base text-[#212121] mb-3">
                        Last Name{" "}
                        <span className="text-[#212121]/40">(required)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full bg-[#e7e4db]/70 py-3 rounded-md px-4 text-[#212121] focus:outline-none focus:bg-[#e7e4db]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-base text-[#212121] mb-3">
                    Email Address{" "}
                    <span className="text-[#212121]/40 text-sm">
                      (required)
                    </span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#e7e4db]/70 py-3 px-4 rounded-md text-[#212121] focus:outline-none focus:bg-[#e7e4db]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#212121] mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#e7e4db]/70 py-3 px-4 rounded-md text-[#212121] focus:outline-none focus:bg-[#e7e4db]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#212121] mb-3">
                    How did you hear about us?{" "}
                    <span className="text-[#212121]/40 text-sm">
                      (required)
                    </span>
                  </label>
                  <div className="space-y-3">
                    {referralOptions.map((option) => {
                      const checked = formData.heardAbout.includes(option);
                      return (
                        <label
                          key={option}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <span
                            className={`w-5 h-5 border flex items-center rounded-sm justify-center transition-colors ${
                              checked
                                ? "bg-[#a08858] border-[#a08858]"
                                : "border-[#212121]/40 group-hover:border-[#212121]"
                            }`}
                          >
                            {checked && (
                              <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                className="w-3 h-3"
                              >
                                <polyline points="2.5 6 5 8.5 9.5 3.5" />
                              </svg>
                            )}
                          </span>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleCheckbox(option)}
                            className="sr-only"
                          />
                          <span className="text-sm text-[#212121]">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-base text-[#212121] mb-3">
                    If you heard of Mudras through a referral or other, tell us
                    more
                  </label>
                  <input
                    type="text"
                    value={formData.referralDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        referralDetails: e.target.value,
                      })
                    }
                    className="w-full bg-[#e7e4db]/70 py-3 px-4 text-[#212121] rounded-md focus:outline-none focus:bg-[#e7e4db]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#212121] mb-3">
                    Message{" "}
                    <span className="text-[#212121]/40 text-sm">
                      (required)
                    </span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#e7e4db]/70 py-3 px-4 text-[#212121] rounded-md focus:outline-none focus:bg-[#e7e4db] resize-none"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="bg-[#f0cc75] hover:bg-[#e0bc65] text-black px-12 py-3 text-sm tracking-widest uppercase font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
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
            Chelsea location. Our professional-grade Mudras Recovery Cream
            brings the same expertise to your daily routine.
          </p>
          <Link
            href="#"
            className="inline-block mt-10 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
          >
            Explore Recovery Products
          </Link>
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
              {faqs.map((f, i) => {
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

              <div className="mt-10">
                <Link
                  href="/faq"
                  className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
                >
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Coming Soon */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light tracking-wide text-[#212121] mb-4">
            Coming Soon
          </h2>
          <p className="text-[#212121]/70 leading-relaxed">
            Sign up with your email address to receive news and updates.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-white text-gray-500 border border-[#212121]/20 py-3 placeholder:text-gray-500 px-4 h-14 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#f0cc75] hover:bg-[#e0bc65] uppercase text-black px-8 py-4 font-medium tracking-wide transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
