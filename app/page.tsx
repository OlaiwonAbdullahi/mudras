import Benefits from "./_components/benefits";
import FAQ from "./_components/faq";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Info from "./_components/info";
import Newsletter from "./_components/newsletter";
import Schedule from "./_components/schedule";
import Services from "./_components/services";
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
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}
