import Hero from "@/app/ui/hero";
import Info from "./_components/info";
import Service from "./_components/service";
import FAQ from "@/app/_components/faq";
import Offers from "./_components/offers";
import Specialist from "./_components/specialist";
import Cta from "./_components/cta";
import Reveal from "@/app/_components/reveal";

const Page = () => {
  return (
    <div>
      <Hero
        title="Hands on Healing"
        buttonText="BOOK YOUR SESSION"
        backgroundImage="/images/abouthero.webp"
      />
      <div>
        <Reveal>
          <Info />
        </Reveal>
        <Reveal>
          <Service />
        </Reveal>
        <Reveal>
          <Offers />
        </Reveal>
        <Reveal>
          <Specialist />
        </Reveal>
        <Reveal>
          <Cta />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </div>
    </div>
  );
};

export default Page;
