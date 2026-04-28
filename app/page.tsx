import Hero from "./_components/hero";
import Info from "./_components/info";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <Hero />
      <Info />
    </div>
  );
}
