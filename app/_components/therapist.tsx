import img1 from "@/public/images/tera1.webp";
import img2 from "@/public/images/tera2.webp";
import Image from "next/image";

const Therapist = () => (
  <section className="py-8 md:py-20 px-15">
    <div className="">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Image
          src={"/images/icon.webp"}
          alt="Mudras Logo"
          width={30}
          height={30}
          className="object-contain flex items-center justify-center mx-auto mb-4"
        />
        <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-foreground mb-8 leading-tight text-balance">
          Work With A Top-Rated Sports Massage Therapist
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Image
          src={img2}
          alt="Mudras Chelsea studio interior"
          loading="lazy"
          className="w-full aspect-[5/4] object-cover"
        />
        <div>
          <h3 className="text-black text-3xl md:text-4xl font-light leading-tight">
            Meet Our NYC Massage Therapist Specializing in Athletic Massage
          </h3>
          <p className="mt-6 text-[#121212] leading-relaxed text-[17px]">
            Cumulative experience between all our team, they bring over 40 years
            of experience to every custom massage session. Professionally
            trained across Western and Eastern massage modalities, they continue
            learning new techniques that enhances your Mudras experience. When
            you work with our Mudras team, you&apos;re benefiting from deep
            expertise in reading what bodies need and responding with exactly
            the right approach.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mt-24 md:mt-32">
        <div className="md:order-2">
          <Image
            src={img1}
            alt="Massage therapist forearms and hands"
            loading="lazy"
            className="w-full aspect-[5/4] object-cover"
          />
        </div>
        <div className="md:order-1">
          <h3 className="text-black text-3xl md:text-4xl font-light leading-tight">
            Located in the Heart of Chelsea – Your Go-To Spot for Sports Massage
          </h3>
          <p className="mt-6 text-[#121212] leading-relaxed text-[17px]">
            At Mudras, every session begins with presence. We listen closely to
            what your body is carrying and tailor the treatment to meet those
            specific needs. No scripts. No formula. Expertly attuned,
            personalized care, customized care that adapts to your lifestyle,
            your training, and your body’s unique demands.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Therapist;
