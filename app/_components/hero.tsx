import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: "url(/images/mudrashero.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full px-5 sm:px-6 lg:px-12 text-center flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-light tracking-wide text-[#fffcf2] mb-4 md:mb-6 max-w-4xl leading-tight md:leading-[1.15] text-balance">
            Mudras: Expert Sports Massage & Bespoke Therapy
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-4xl font-light tracking-wide text-[#fffcf2] mb-4 md:mb-6 max-w-3xl text-balance">
            Bespoke Recovery & Deep Tissue Specialists
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#fffcf2] max-w-2xl mb-6 md:mb-4 leading-relaxed font-light">
            Twenty years of therapeutic expertise meets personalized care in
            Chelsea. From sports massage in NYC to our signature Mudras
            BodyReset sessions, we deliver custom-tailored massage therapy that
            restores, heals, and enhances performance for bodies that demand
            more.
          </p>
          <Button
            size="lg"
            className="bg-[#f0cc75] text-black hover:bg-accent/90 px-8 md:px-12 h-12 md:h-16 text-sm md:text-[17px] tracking-wide rounded-none"
          >
            BOOK YOUR SESSION
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
