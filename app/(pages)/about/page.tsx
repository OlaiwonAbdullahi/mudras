import Hero from "@/app/ui/hero";
import Info from "./_components/info";
import Service from "./_components/service";
import FAQ from "@/app/_components/faq";
import Offers from "./_components/offers";
import Specialist from "./_components/specialist";
import Cta from "./_components/cta";

const Page = () => {
  return (
    <div>
      <Hero
        title="Hands on Healing"
        buttonText="BOOK YOUR SESSION"
        backgroundImage="/images/abouthero.webp"
      />
      <div className="">
        <Info />
        <Service />
        <Offers />
        <Specialist />
        <Cta />
        <FAQ />
      </div>
    </div>
  );
};

export default Page;
