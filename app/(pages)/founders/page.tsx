"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const faqs = [
  {
    q: "Who is Yotam Kafri and what is his background?",
    a: "Yotam Kafri is the founder and master therapist at Mudras, with over 20 years of hands-on experience. He is trained in advanced Western, European, and Eastern modalities and has built his reputation through decades of collaboration with elite athletes, performers, rehabilitation experts, executives, and high-performing professionals.",
  },
  {
    q: "Why did Yotam start Mudras?",
    a: "Yotam comes from a third-generation family of healing arts practitioners. Healing was part of daily life, and people naturally gravitated to him, seeking guidance, relief, and support. He noticed a persistent problem in NYC bodywork: clients with very different bodies and needs were often receiving the same routine session. Mudras was born to do the opposite — to offer fully customized, clinically informed care that honors each individual.",
  },
];

export default function FoundersPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: "url(/images/schedule-bg.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center pt-44 pb-24">
          <h1 className="text-3xl lg:text-[56px] font-light tracking-wide text-[#fffcf2] mb-6 max-w-4xl leading-tight text-balance">
            The Founder – Yotam Kafri & The Mudras Story
          </h1>
          <p className="text-lg text-white/70 font-light mb-8">
            The Hands Behind Mudras
          </p>
          <Link
            href="/contact"
            className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* Yotam Kafri Bio */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-[#EDE9DF]">
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
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight">
                Yotam Kafri – Founder & Master Therapist
              </h2>
              <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
                <p>
                  With over 20 years of hands-on experience, Yotam has dedicated
                  his life to the art and science of bodywork.
                </p>
                <p>
                  His approach blends technical precision with intuitive
                  understanding developed through decades of practice, study, and
                  collaboration with elite athletes, performers, and
                  rehabilitation experts.
                </p>
                <p>
                  His guiding principle is to listen deeply and to assess each
                  individual&apos;s movement before every session. This shapes
                  every experience, ensuring that each session not only relieves
                  tension but restores balance and optimal results.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/tera1.webp"
                alt="Yotam Kafri - Founder of Mudras"
                width={800}
                height={600}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where It Started */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-[#EDE9DF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about.webp"
                alt="Deep tissue massage therapy"
                width={800}
                height={600}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/icon.webp"
                alt="Mudras Icon"
                width={30}
                height={30}
                className="object-contain mb-8"
              />
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight">
                Where It Started
              </h2>
              <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
                <p>
                  Mudras began with Yotam recognizing that most bodywork and
                  massage therapy in New York has the same preset script,
                  regardless of who walks through the door.
                </p>
                <p>
                  For over two decades, what started as a different approach has
                  become a practice where people find what they&apos;ve been
                  looking for.
                </p>
                <p className="font-medium text-foreground">
                  Who trusts their bodies to Mudras:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>NBA and WNBA players</li>
                  <li>FIFA players</li>
                  <li>Olympic athletes</li>
                  <li>MMA and UFC fighters</li>
                  <li>Marathon, Ironman, and Triathlon athletes</li>
                  <li>Professional Dancers</li>
                  <li>Broadway performers</li>
                  <li>Hollywood actors and actresses</li>
                </ul>
                <p className="italic text-foreground/70">
                  These relationships exist through referrals, not marketing.
                  People recommend Mudras when they&apos;ve experienced the
                  difference themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-[#EDE9DF]">
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
              <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight">
                How It Works
              </h2>
              <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
                <p>
                  Your Mudras session begins when you walk in. Your specialist
                  observes how you move, how you carry yourself, where tension
                  shows before you mention it.
                </p>
                <p>
                  During the conversation, you describe what you&apos;re
                  experiencing. Then your specialist&apos;s hands confirm what
                  your body is actually holding. Sessions evolve based on what we
                  discover.
                </p>
                <p>
                  The only predetermined element is our commitment to addressing
                  what your body genuinely needs right now.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/service1.webp"
                alt="Mudras studio"
                width={800}
                height={600}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight">
            What We Built
          </h2>
          <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light text-left md:text-center">
            <p>
              The Mudras space feels different the moment you arrive. Clean,
              quiet, private. Nothing rushed. Everything considered.
            </p>
            <p>
              Each session starts with understanding your body&apos;s story. Our
              specialists notice how you move, listen to what you describe, then
              design the work around what your body needs.
            </p>
            <p>
              When someone trusts you with their body, especially when their
              performance depends on it, everything about how you work must honor
              that trust. Discretion, consistency, and genuine expertise
              aren&apos;t optional here.
            </p>
          </div>
        </div>
      </section>

      {/* Twenty Years, Still Learning */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#EDE9DF]">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight">
            Twenty Years, Still Learning
          </h2>
          <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
            <p>
              Twenty years of practice hasn&apos;t meant perfecting a final
              method. Every body teaches us something. Every specialist continues
              studying, questioning, refining their approach.
            </p>
            <p>
              Yotam still explores techniques that might improve what Mudras
              offers. The team works together, shares observations, challenges
              each other&apos;s assumptions.
            </p>
            <p>
              What continues looks like what started this practice: an unwavering
              commitment to the people who trust us with their bodies, and a
              refusal to compromise on what we know works.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-6 leading-tight">
            Stay Connected with Mudras
          </h2>
          <p className="text-foreground/70 leading-relaxed text-base mb-2">
            Join our private mailing list to receive exclusive updates,
            thoughtful seasonal offers, and occasional invitations to special
            experiences.
          </p>
          <p className="text-foreground/70 leading-relaxed text-base mb-2">
            We don&apos;t send weekly emails — only meaningful updates, shared
            occasionally.
          </p>
          <p className="text-foreground/70 leading-relaxed text-sm mb-2 italic">
            As a small thank-you, every subscriber is automatically entered into
            our random giveaway for a complimentary Mudras experience.
          </p>
          <p className="text-foreground/50 text-xs mb-8">
            Your information is always kept private and never shared.
          </p>

          {subscribed ? (
            <div className="py-8">
              <h3 className="text-2xl font-light text-foreground">
                Thank you!
              </h3>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="space-y-4 max-w-md mx-auto"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white border border-[#212121]/20 py-3 px-4 text-[#212121] placeholder:text-gray-400 focus:outline-none focus:border-[#212121]"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white border border-[#212121]/20 py-3 px-4 text-[#212121] placeholder:text-gray-400 focus:outline-none focus:border-[#212121]"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#212121]/20 py-3 px-4 text-[#212121] placeholder:text-gray-400 focus:outline-none focus:border-[#212121]"
              />
              <button
                type="submit"
                className="w-full bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black py-4 font-medium tracking-wide transition-colors"
              >
                Join the List
              </button>
            </form>
          )}
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
