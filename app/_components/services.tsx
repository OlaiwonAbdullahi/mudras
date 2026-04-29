import bodyReset from "@/public/images/service1.webp";
import sports from "@/public/images/service2.webp";
import Image from "next/image";

const Services = () => (
  <section className="py-12 md:py-16 bg-stone-50">
    <div className="px-6 md:px-10">
      <div className="text-center max-w-3xl mx-auto">
        <Image
          src={"/images/icon.webp"}
          alt="Mudras Logo"
          width={30}
          height={30}
          className="object-contain mx-auto"
        />
        <h2 className="text-2xl sm:text-3xl md:text-[42px] mt-6 leading-tight text-balance">
          Deep Tissue & Athletic Massage Therapy in NYC for Total Recovery
        </h2>
        <div className="mt-6 md:mt-8 flex justify-center">
          <span className="ornament" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-4 mt-12 md:mt-20">
        {[
          {
            img: bodyReset,
            tag: "Signature",
            title: "The Mudras Body Reset",
            body: "Our signature massage therapy offering. A completely customized session tailored to your unique needs and goals. We listen to your body and address its specific concerns, considering your condition, lifestyle, and what you want to achieve. Every BodyReset becomes an unparalleled bespoke massage therapy experience designed specifically for you.",
          },
          {
            img: sports,
            tag: "Performance",
            title: "Expert Sports & Deep Tissue Massage",
            isFormatted: true,
            intro:
              "Our deep tissue and sports massage services draw from extensive training across multiple disciplines:",
            sections: [
              {
                label: "Western & Eastern Techniques:",
                items: [
                  "Swedish, Deep Tissue, Thai, Trigger Point Therapy, Acupressure, Reflexology, Shiatsu, Neuromuscular Therapy, and more",
                ],
              },
              {
                label: "Specialized Applications:",
                items: ["Pre & Postnatal, Hydrotherapy, Myofascial Release"],
              },
            ],
          },
        ].map((s) => (
          <article key={s.title} className="group">
            <div className="overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full aspect-auto object-cover transition-transform duration-1500 group-hover:scale-105"
              />
            </div>
            <div className="mt-8 text-[#212121]">
              <p className="text-xl md:text-2xl mt-3 text-center font-medium">
                {s.title}
              </p>
              {s.isFormatted ? (
                <div className="mt-5 text-center">
                  <p className="">{s.intro}</p>
                  <div className="space-y-4">
                    {s.sections?.map((section, idx) => (
                      <div
                        key={idx}
                        className="text-left flex flex-col items-start gap-0"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <span className="font-medium text-lg flex-shrink-0">
                            ✓
                          </span>
                          <span className="font-medium">{section.label}</span>
                        </div>
                        <div className="ml-6  leading-relaxed text-gray-700">
                          {section.items.map((item, i) => (
                            <div key={i}>{item}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-5  leading-relaxed text-center">{s.body}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center ">
        <p className="text-[#212121] text-base md:text-lg max-w-3xl mx-auto">
          Each Mudras massage therapy session skillfully combines the modalities
          your body needs most. Thanks to our extensive experience with diverse
          therapeutic approaches, we know which techniques serve each
          individual.
        </p>
        <button className="bg-black uppercase hover:bg-accent/90 text-white px-8 py-4 mt-8 font-medium tracking-wide transition-colors w-fit">
          Join the Mudras Family
        </button>
      </div>
    </div>
  </section>
);

export default Services;
