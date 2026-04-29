import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  showHeader?: boolean;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  onButtonClick,
  backgroundImage = "/images/hero-bg.jpg",
}: HeroProps) => {
  return (
    <div className="relative w-full min-h-[70vh] md:h-[85vh] flex flex-col pt-10">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale zoom-in"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-0">
          <h1
            className="text-3xl sm:text-4xl md:text-[56px] text-[#fffcf2] font-light text-center mb-6 md:mb-8 tracking-wide leading-tight rise"
            style={{ animationDelay: "200ms" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-white text-base md:text-xl text-center mb-10 md:mb-16 max-w-2xl rise"
              style={{ animationDelay: "400ms" }}
            >
              {subtitle}
            </p>
          )}

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-[#f0cc75] text-black px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wide hover:bg-[#e0bc65] hover:scale-105 transition duration-300 rise"
              style={{ animationDelay: "600ms" }}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
