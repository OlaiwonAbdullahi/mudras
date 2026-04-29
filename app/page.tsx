import Benefits from "./_components/benefits";
import FAQ from "./_components/faq";
import Hero from "./_components/hero";
import Info from "./_components/info";
import Newsletter from "./_components/newsletter";
import Reveal from "./_components/reveal";
import Schedule from "./_components/schedule";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";
import Therapist from "./_components/therapist";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <Hero />
      <Reveal className="w-full">
        <Info />
      </Reveal>
      <Reveal className="w-full">
        <Services />
      </Reveal>
      <Reveal className="w-full">
        <Schedule />
      </Reveal>
      <Reveal className="w-full">
        <Therapist />
      </Reveal>
      <Reveal className="w-full">
        <Benefits />
      </Reveal>
      <Reveal className="w-full">
        <Newsletter />
      </Reveal>
      <Reveal className="w-full">
        <Testimonials />
      </Reveal>
      <Reveal className="w-full">
        <FAQ />
      </Reveal>
    </div>
  );
}
