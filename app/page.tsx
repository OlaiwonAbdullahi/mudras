import Benefits from "./_components/benefits";
import FAQ from "./_components/faq";
import Hero from "./_components/hero";
import Info from "./_components/info";
import Newsletter from "./_components/newsletter";
import Schedule from "./_components/schedule";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";
import Therapist from "./_components/therapist";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <Hero />
      <Info />
      <Services />
      <Schedule />
      <Therapist />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
}
