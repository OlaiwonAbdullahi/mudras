import Image from "next/image";

const Info = () => {
  return (
    <div>
      <section className="px-6 py-16 md:p-20 md:pt-30 md:pb-10 bg-[#EDE9DF]">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 md:gap-10">
          <div className="relative overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/abiutinfo.webp"
              alt="Therapeutic massage treatment"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="mb-6 md:mb-8">
              <Image
                src={"/images/icon.webp"}
                alt="Mudras Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light tracking-wide text-foreground mb-6 md:mb-8 leading-tight text-balance">
              Expert massage therapy for body and soul
            </h2>
            <div className="space-y-5 md:space-y-6 text-base lg:text-[17px] w-full md:w-[80%] leading-relaxed text-foreground/90 font-light">
              <p>Mudras treatments are personally tailored.</p>

              <p>
                Each session is custom-made, designed to meet your individual
                needs and to generate optimal results with our signature
                treatment – the Mudras BodyReset.
              </p>

              <p>
                During the Mudras BodyReset, we listen to your body and address
                your concerns and sensations. We consider your particular body
                type and condition, and skillfully apply our unique technique,
                inspired from deep knowledge of different methodologies.
                including:
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
