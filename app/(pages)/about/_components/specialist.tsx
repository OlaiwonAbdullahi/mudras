import Image from "next/image";
import React from "react";

const Specialist = () => {
  return (
    <div>
      <section className=" p-20 pt-30 pb-15 bg-[#EDE9DF]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-20">
          <div className="relative overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/specialist.webp"
              alt="Therapeutic massage treatment"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="  flex flex-col justify-center order-1 lg:order-2">
            <div className="text-4xl mb-8">
              <Image
                src={"/images/icon.webp"}
                alt="Mudras Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-8 leading-tight text-balance">
              About Our Hand-picked Specialists.
            </h2>
            <div className="space-y-6 text-base lg:text-[17px] w-[80%] leading-relaxed text-black ">
              <p>
                Mudras delivers fully customized, clinically informed massage
                and recovery treatments that blend technical precision with
                intuitive, deeply restorative touch. Our hand-selected team of
                specialists, which have between 15 to 20 years of experience
                individually, hold advanced training across a multitude of
                modalities such as sport massage, medical massage, lymphatic
                drainage, oncology massage, myofascial release, trigger point,
                neuromuscular therapy, pre and post natal and more. Each session
                is tailored in real time to meet the unique needs of the
                individual being treated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialist;
