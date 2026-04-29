"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const referralOptions = [
  "Referral",
  "Social Media",
  "Google Maps",
  "Magazine article",
  "Other",
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
    name: "",
    email: "",
    phone: "",
    message: "",
    heardAbout: [] as string[],
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
            Contact Us
          </h1>
          <div className="mt-2 flex justify-center">
            <span className="ornament" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Get in Touch With Us
            </h2>
            <p className="text-[#212121]/70 text-base md:text-[17px] leading-relaxed mt-6 max-w-2xl mx-auto">
              To schedule a session or for any other inquiry — please complete
              the form below or email us at{" "}
              <a
                href="mailto:info@mudras.com"
                className="text-[#212121] underline underline-offset-4"
              >
                info@mudras.com
              </a>
              .
            </p>
            <p className="text-[#212121] font-medium text-sm tracking-widest uppercase mt-4">
              Bookings by appointment only
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-sm tracking-widest uppercase text-[#212121]/50 mb-2">
                    Address
                  </p>
                  <p className="text-[17px] text-[#212121]">
                    37 W 20th Street, New York City, NY 10011
                  </p>
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-[#212121]/50 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:2128378382"
                    className="text-[17px] text-[#212121] hover:underline"
                  >
                    (212) 837-8382
                  </a>
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-[#212121]/50 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@mudras.com"
                    className="text-[17px] text-[#212121] hover:underline"
                  >
                    info@mudras.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <Image
                      src="/images/icon.webp"
                      alt="Mudras Icon"
                      width={30}
                      height={30}
                      className="object-contain mx-auto mb-4"
                    />
                    <h3 className="text-3xl font-light text-[#212121]">
                      Thank you!
                    </h3>
                    <p className="text-[#212121]/60 mt-2">
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-[#212121]/20 rounded-[15px] p-8 md:p-10 bg-white/50"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-widest uppercase text-[#212121]/60 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-[#212121]/20 rounded-[15px] bg-transparent py-3 px-4 text-[#212121] focus:border-[#212121] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-widest uppercase text-[#212121]/60 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-[#212121]/20 rounded-[15px] bg-transparent py-3 px-4 text-[#212121] focus:border-[#212121] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-widest uppercase text-[#212121]/60 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border border-[#212121]/20 rounded-[15px] bg-transparent py-3 px-4 text-[#212121] focus:border-[#212121] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-widest uppercase text-[#212121]/60 mb-3">
                        How did you hear about us?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {referralOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleCheckbox(option)}
                            className={`px-4 py-2 text-sm border rounded-full transition-all duration-200 ${
                              formData.heardAbout.includes(option)
                                ? "bg-[#212121] text-white border-[#212121]"
                                : "border-[#212121]/20 text-[#212121]/70 hover:border-[#212121]"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm tracking-widest uppercase text-[#212121]/60 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full border border-[#212121]/20 rounded-[15px] bg-transparent py-3 px-4 text-[#212121] focus:border-[#212121] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#f0cc75] hover:bg-[#e0bc65] text-black py-4 text-sm tracking-widest uppercase font-medium transition-colors duration-300 rounded-[15px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
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
            href="#"
            className="inline-block mt-10 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
          >
            Explore Recovery Products
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
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
            {faqs.map((f, i) => {
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

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
            >
              View All FAQs
            </Link>
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
