import { Check } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const col1 = [
  "That persistent shoulder tension has melted away completely",
  "Your neck moves freely without that familiar catch or restriction",
  "Lower back tightness you've carried for weeks simply isn't there anymore",
  "Breathing feels deeper and more natural throughout your body",
];
const col2 = [
  "Sleep comes easier that night, and you wake up genuinely restored",
  "Movement feels fluid again, whether training or navigating your day",
  "Your body works with you instead of against you",
  "Enhanced mobility and flexibility that support your active lifestyle",
];

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-5">
    {items.map((t) => (
      <li key={t} className="flex gap-4 text-foreground/80 leading-relaxed">
        <HugeiconsIcon icon={Check} className="text-[#f0cc75] flex-shrink-0" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const Benefits = () => (
  <section className="px-6 py-16 md:p-20 bg-stone-100">
    <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <Image
          src={"/images/icon.webp"}
          alt="Mudras Logo"
          width={30}
          height={30}
          className="object-contain flex items-center justify-center mx-auto mb-4"
        />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-6 md:mb-8 leading-tight text-balance">
          Deep Tissue & Therapeutic Sports Massage: What They&apos;re Known For
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-20">
        <div className="border border-[#f0cc75] p-6 sm:p-10 md:p-14">
          <p className="text-lg sm:text-xl md:text-2xl mt-3 mb-6 md:mb-8 text-center">
            Mudras Deep Tissue & Sports Massage
          </p>
          <List items={col1} />
        </div>
        <div className="border border-[#f0cc75] p-6 sm:p-10 md:p-14">
          <p className="text-lg sm:text-xl md:text-2xl mt-3 mb-6 md:mb-8 text-center">
            The Mudras BodyReset Bespoke Therapy
          </p>
          <List items={col2} />
        </div>
      </div>

      <p className="mt-8 md:mt-10 max-w-3xl mx-auto text-center text-[#121212] leading-relaxed text-base md:text-[17px]">
        This is what happens when <u> Mudras therapeutic expertise</u> meets
        your body&apos;s actual needs. Not temporary relaxation that fades by
        evening, but real restoration from <u> Mudras massage therapy</u> that
        lasts.
      </p>

      <div className="mt-6 md:mt-8 text-center">
        <button className="bg-[#f0cc75] uppercase hover:bg-accent/90 text-black px-6 md:px-8 py-3 md:py-4 mt-4 md:mt-8 text-sm md:text-base font-medium tracking-wide transition-colors w-fit">
          Take the Next Step
        </button>
      </div>
    </div>
  </section>
);

export default Benefits;
