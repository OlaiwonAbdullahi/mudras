"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import FAQ from "@/app/_components/faq";

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
            backgroundImage: "url(/images/founders.webp)",
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
                  From his early training in advanced Western, European, and Eastern modalities to years of working directly with clients seeking and demanding optimal recovery and performance, Yotam has built a reputation for excellence and care.
                </p>
                <p>
                  At Mudras, his philosophy is simple yet profound: to listen deeply and to assess each individual’s movement before every session. This guiding principle shapes every experience, ensuring that each session not only relieves tension, restores balance and optimal results.
                </p>
                <p>
                  Yotam continues to lead and mentor the Mudras team, setting the highest standards in technique, consistency, and integrity. His goals have always been to continue creating a safe place where expert touch meets genuine understanding.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/yotam.webp"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/founder-started.webp"
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
                  looking for. Two decades means countless hours spent
                  understanding how bodies hold tension, how they respond to
                  different techniques, and what creates real change rather
                  than temporary comfort. That&apos;s what shapes how we work
                  today.
                </p>
                <div className="pt-2">
                  <p className="font-medium text-foreground mb-4">
                    Who We Work With:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    <ul className="space-y-3">
                      {[
                        "NBA and WNBA players",
                        "FIFA players",
                        "Olympic athletes",
                        "MMA fighters",
                        "UFC fighters",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className="w-4 h-4 mt-1 text-[#a08858] shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {[
                        "Marathon, Ironman, and Triathlon athletes",
                        "Professional Dancers",
                        "Broadway performers",
                        "Hollywood actors and actresses",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className="w-4 h-4 mt-1 text-[#a08858] shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 border border-[#a08858]/40 p-8 md:p-12">
            <p className="font-medium text-foreground mb-6 text-base lg:text-[17px]">
              Where We Work:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-base lg:text-[17px] text-foreground/90 font-light">
              {[
                "Our Chelsea location in Manhattan",
                "Wellness retreats and sports team recovery",
                "Residences throughout New York",
                "International locations when clients need consistent care",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 mt-1 text-[#a08858] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-base lg:text-[17px] leading-relaxed text-foreground/80 font-light">
              These relationships exist through referrals, not marketing.
              People recommend Mudras<sup>®</sup> when they&apos;ve experienced
              the difference themselves.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
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
                src="/images/founder-how.webp"
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
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/what-we-built.webp"
                alt="The Mudras studio space"
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
                What We Built
              </h2>
              <div className="space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
                <p>
                  The Mudras space feels different the moment you arrive. Clean,
                  quiet, private. Nothing rushed. Everything considered.
                </p>
                <p>
                  Each session starts with understanding your body&apos;s story.
                  Our specialists notice how you move, listen to what you
                  describe, then design the work around what your body needs.
                </p>
                <p>
                  When someone trusts you with their body, especially when their
                  performance depends on it, everything about how you work must
                  honor that trust. Discretion, consistency, and genuine
                  expertise aren&apos;t optional here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twenty Years, Still Learning */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
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
      <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: "url(/images/newsletter.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#fffcf2] mb-6 leading-tight">
            Stay Connected with Mudras
          </h2>
          <p className="text-white/80 leading-relaxed text-base mb-3 max-w-3xl mx-auto">
            Join our private mailing list to receive exclusive updates,
            thoughtful seasonal offers, and occasional invitations to special
            experiences.
          </p>
          <p className="text-white/80 leading-relaxed text-base mb-3">
            We don&apos;t send weekly emails — only meaningful updates, shared
            occasionally.
          </p>
          <p className="text-white/80 leading-relaxed text-sm mb-3 italic max-w-3xl mx-auto">
            As a small thank-you, every subscriber is automatically entered into
            our random giveaway for a complimentary Mudras<sup>®</sup> experience.
          </p>
          <p className="text-white/60 text-sm mb-10">
            Your information is always kept private and never shared.
          </p>

          {subscribed ? (
            <div className="py-8">
              <h3 className="text-2xl font-light text-[#fffcf2]">
                Thank you!
              </h3>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 max-w-5xl mx-auto"
            >
              <input
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white py-4 px-5 text-[#212121] placeholder:text-gray-400 focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-white py-4 px-5 text-[#212121] placeholder:text-gray-400 focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white py-4 px-5 text-[#212121] placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
              >
                Join the List
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
