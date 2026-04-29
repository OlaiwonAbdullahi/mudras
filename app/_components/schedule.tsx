import Image from "next/image";

const Schedule = () => {
  return (
    <div className="relative overflow-hidden bg-black flex items-center justify-stretch ">
      <Image
        src={"/images/schedule-bg.webp"}
        alt="Schedule a massage therapy session"
        fill
        className=" object-cover object-top
     opacity-30 absolute inset-0"
      />
      <div className="relative z-10 flex w-full h-full flex-row justify-between">
        <div className="w-1/2 h-full ">
          <Image
            src={"/images/schedule.webp"}
            alt="Schedule a massage therapy session"
            width={600}
            height={1000}
            className="object-cover z-20 w-fit object-left"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start p-12 pl-0 gap-6">
          <h1 className="text-white text-4xl md:text-5xl font-light leading-tight">
            Ready to Experience NYC&apos;s Most Personalized Massage Sports
            Therapy?
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            <span>
              Whether you&apos;re seeking sports massage for training recovery,
              deep tissue massage for chronic tension, or our signature Body
              Reset for comprehensive restoration, we&apos;re here for you.{" "}
            </span>
            <br />
            <br />
            <span>
              Join the Mudras family and discover what happens when ancient
              wisdom meets modern massage therapy expertise.
            </span>
          </p>
          <button className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors w-fit">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
