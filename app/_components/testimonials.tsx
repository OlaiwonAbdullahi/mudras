import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-[#E7E4DB] w-full py-16 px-15 flex flex-col ">
      <div className="">
        <div className="text-4xl mb-8">
          <Image
            src={"/images/icon.webp"}
            alt="Mudras Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-8 leading-tight text-balance">
          What NYC Clients Say About Our <br /> Sports Massage and Message
          Therapy <br /> Treatments
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="border border-[#f0cc75] p-8">
          <p className="text-[#212121] text-[17px] leading-relaxed mb-6">
            "The best most intuitive body work therapist I have ever been
            treated by. Using massage, stretching and incredible knowledge of
            the body Mudras literally put me back together. Get a Mudras
            treatment for someone you care about."
          </p>
          <p className="text-lg font-semibold text-black mb-1">Nigel Barker</p>
          <p className="text-sm text-[#212121] italic">
            World-Renowned Fashion Photographer
          </p>
        </div>
        <div className="border border-[#f0cc75] p-8">
          <p className="text-[#212121] text-[17px] leading-relaxed mb-6">
            "I send all my clients to Mudras and I don't preach what I haven't
            tried first. It's the place to go, without a question. If you are
            serious about your active life and if you want to be the best, go to
            the best!"
          </p>
          <p className="text-lg font-semibold text-black mb-1">
            Dr. Robert Shire
          </p>
          <p className="text-sm text-[#212121] italic">Chiropractor</p>
        </div>
        <div className="border border-[#f0cc75] p-8">
          <p className="text-[#212121] text-[17px] leading-relaxed mb-6">
            "Yotam was the best masseuse I've ever had. He really took the time
            to ask and asses where I needed work rather than other experiences
            where it's one sized fits all treatment. His body work felt amazing
            and I walked out of the treatment a new person. It truly was a best
            bespoke body work I've ever come across. The space was incredible,
            quiet and tranquil. I would highly recommend the experience. As I
            understand it he has a great team that he has hand picked to
            highlight specialities such as postpartum. 10/10 recommend! You
            won't find better."
          </p>
          <p className="text-lg font-semibold text-black mb-1">
            Dr. Kyle O'Flaherty
          </p>
          <p className="text-sm text-[#212121] italic">
            Doctor of Physical Therapy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
