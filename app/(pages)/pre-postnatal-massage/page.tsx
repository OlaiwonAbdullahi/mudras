"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Check } from "@hugeicons/core-free-icons";

const faqs = [
  {
    q: "When is it safe to get a prenatal massage?",
    a: "Prenatal massage is generally safe from the second trimester onward. During the first trimester, we recommend obtaining medical clearance from your healthcare provider before scheduling a session. Our specialist has over twenty years of experience selecting the right techniques for each stage of pregnancy, ensuring both your safety and comfort throughout.",
  },
  {
    q: "How will I be positioned during a prenatal massage?",
    a: "You will never be placed flat on your back after the first trimester. We use a special pregnancy kit that reduces pressure on your belly and chest, allowing you to rest comfortably. Positioning is adjusted based on your stage of pregnancy and personal comfort preferences.",
  },
  {
    q: "What are the benefits of prenatal massage?",
    a: "Prenatal massage provides relief from back, hip, and leg discomfort, improves circulation, reduces swelling, and supports better sleep quality. It also offers a dedicated time for emotional reconnection with your changing body during this transformative period.",
  },
  {
    q: "How does postnatal massage help with recovery?",
    a: "Postnatal massage aids in realignment after delivery, addresses tension from breastfeeding and carrying, and provides emotional support during the postpartum transition. It helps your body recover, restore balance, and adjust to the physical demands of new motherhood.",
  },
  {
    q: "What should I communicate before my session?",
    a: "Please inform your specialist about your pregnancy stage, any areas of discomfort, pressure preferences, and any medical conditions or concerns. We encourage you to stay hydrated before and after your session and to communicate openly throughout so we can adjust the treatment to your needs.",
  },
];

export default function PrePostnatalPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/schedule-bg.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center pt-44 pb-24">
          <h1 className="text-4xl lg:text-[56px] font-light tracking-wide text-[#fffcf2] mb-6 max-w-4xl leading-tight text-balance">
            Pre & Postnatal Massage Therapy NYC
          </h1>
          <Link
            href="/contact"
            className="mt-6 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* Nurture Section */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Image
                src="/images/icon.webp"
                alt="Mudras Icon"
                width={30}
                height={30}
                className="object-contain mb-8"
              />
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] mb-8 leading-tight">
                Nurture, Support, and Restore Through Every Stage
              </h2>
              <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-[#212121]/80 font-light">
                <p>
                  Pregnancy transforms your body in ways that are extraordinary
                  and deeply personal. The physical demands of carrying,
                  delivering, and recovering ask more of you than almost anything
                  else. This kind of transformation requires care shaped around
                  her specific experience.
                </p>
                <p>
                  At Mudras, our prenatal specialist brings over twenty years of
                  practice dedicated to supporting women through every stage of
                  pregnancy and postpartum recovery. Every session is designed to
                  address your comfort, safety, and restoration — adapting as
                  your body changes week by week.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about.webp"
                alt="Prenatal massage therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Mudras - Three Pillars */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Why Mudras
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-px bg-[#f0cc75] mx-auto mb-8" />
              <h3 className="text-xl md:text-2xl font-light text-[#212121] mb-4">
                Two Decades of Specialized Experience
              </h3>
              <p className="text-[#212121]/70 leading-relaxed text-base">
                Our specialist has spent over twenty years developing deep
                expertise in women&apos;s bodies through pregnancy and recovery.
                This level of experience means your care is grounded in
                knowledge that only comes with time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-[#f0cc75] mx-auto mb-8" />
              <h3 className="text-xl md:text-2xl font-light text-[#212121] mb-4">
                Safety You Can Trust
              </h3>
              <p className="text-[#212121]/70 leading-relaxed text-base">
                Every technique is selected based on your stage of pregnancy,
                with careful attention to what serves both you and your baby. We
                use specialized equipment and positioning to ensure complete
                comfort and safety.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-[#f0cc75] mx-auto mb-8" />
              <h3 className="text-xl md:text-2xl font-light text-[#212121] mb-4">
                Shaped Around You
              </h3>
              <p className="text-[#212121]/70 leading-relaxed text-base">
                No two pregnancies are the same. Whether you&apos;re managing
                back discomfort, circulation changes, swelling, or simply need
                rest, every session adapts to where you are today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Prenatal & Postnatal Massage Offers */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              What Prenatal & Postnatal Massage Offers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="border border-[#f0cc75] p-10 md:p-14">
              <p className="text-xl md:text-2xl mt-3 mb-8 text-center font-light">
                Physical Relief
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Eases back, hip, and leg discomfort</span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Improves circulation and reduces swelling</span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Supports better sleep quality</span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Helps postpartum recovery and realignment</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#f0cc75] p-10 md:p-14">
              <p className="text-xl md:text-2xl mt-3 mb-8 text-center font-light">
                Emotional Space
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Time to reconnect with your changing body</span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>
                    Support for emotional balance during transition
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0"
                  />
                  <span>Permission to receive care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] leading-tight">
              Safety Guidelines
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Do */}
            <div>
              <h3 className="text-2xl font-light text-[#212121] mb-6">Do</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0 mt-1"
                  />
                  <span>
                    Inform your specialist about your pregnancy stage and
                    postpartum condition
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0 mt-1"
                  />
                  <span>
                    Schedule regular sessions with your doctor&apos;s approval
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0 mt-1"
                  />
                  <span>
                    Communicate openly about pressure preferences and comfort
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <HugeiconsIcon
                    icon={Check}
                    className="text-[#f0cc75] flex-shrink-0 mt-1"
                  />
                  <span>Stay hydrated before and after your session</span>
                </li>
              </ul>
            </div>

            {/* Don't */}
            <div>
              <h3 className="text-2xl font-light text-[#212121] mb-6">
                Don&apos;t
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <span className="text-red-400 flex-shrink-0 mt-1 text-lg font-medium">
                    &times;
                  </span>
                  <span>
                    Receive massage during the first trimester without medical
                    clearance
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <span className="text-red-400 flex-shrink-0 mt-1 text-lg font-medium">
                    &times;
                  </span>
                  <span>
                    Lie flat on your back after the first trimester
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <span className="text-red-400 flex-shrink-0 mt-1 text-lg font-medium">
                    &times;
                  </span>
                  <span>
                    Use aromatherapy oils or deep-pressure techniques without
                    specialist approval
                  </span>
                </li>
                <li className="flex gap-4 text-[#212121]/80 leading-relaxed">
                  <span className="text-red-400 flex-shrink-0 mt-1 text-lg font-medium">
                    &times;
                  </span>
                  <span>Ignore any discomfort during your session</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-[#212121]/60 text-base mt-12 max-w-2xl mx-auto leading-relaxed">
            We use a special pregnancy kit that reduces pressure on your belly
            and chest, allowing you to rest comfortably throughout your session.
          </p>
        </div>
      </section>

      {/* Care That Honors This Time */}
      <section className="py-18 md:py-20 bg-[url('/images/newsletter.webp')] bg-cover bg-center w-full flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-white mb-8 leading-tight text-balance">
            Care That Honors This Time
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            At Mudras, we understand what mothers navigate. Our care is designed
            to offer you genuine rest and a space to reconnect with your body,
            breathe deeply, and feel supported through one of the most
            meaningful chapters of your life.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
          >
            Book Your Prenatal or Postnatal Session
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
        </div>
      </section>
    </div>
  );
}
