import Hero from "./_components/hero";
import Info from "./_components/info";
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
    </div>
  );
}
