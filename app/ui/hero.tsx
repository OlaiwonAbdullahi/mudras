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
    <div className="relative w-full h-[85vh] flex flex-col pt-10">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className="text-3xl md:text-[56px] text-[#fffcf2] font-light text-center mb-8 tracking-wide">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white text-lg md:text-xl text-center mb-16 max-w-2xl">
              {subtitle}
            </p>
          )}

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-[#f0cc75] text-black px-12 py-5 font-normal tracking-wide hover:bg-[#e0bc65] transition duration-300"
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
