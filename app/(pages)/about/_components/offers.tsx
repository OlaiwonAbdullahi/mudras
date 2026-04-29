import { Check } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const Offers = () => {
  const offerings = [
    "The BodyReset – Our signature personalized session (available in NYC, at home, or worldwide)",
    "In-flight and in-transit recovery sessions (private jet/yacht)",
    "National and international house calls",
    "Wellness activations and partnerships for corporate events",
    "Retreats and sports team recovery",
    "Professional group recovery",
  ];

  return (
    <div>
      <section className="px-6 py-12 md:p-20 bg-[#EDE9DF]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative overflow-hidden order-2 lg:order-2">
            <Image
              src="/images/aboutoffers.webp"
              alt="Therapeutic massage treatment"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-1">
            <div className="mb-6 md:mb-8">
              <Image
                src={"/images/icon.webp"}
                alt="Mudras Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 md:mb-12 leading-tight">
              Key Offerings Include:
            </h2>
            <div className="space-y-4">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-4">
                  <HugeiconsIcon
                    icon={Check}
                    size={24}
                    className="text-[#A0826D] flex-shrink-0 mt-1"
                    stroke="currentColor"
                  />

                  <p className="text-base lg:text-[17px] leading-relaxed text-foreground font-light">
                    {offering}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
