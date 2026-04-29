import Image from "next/image";

const Info = () => {
  return (
    <div>
      <section className="px-6 py-16 md:p-20 md:py-30 bg-stone-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="relative overflow-hidden order-2 lg:order-1">
            <img
              src="/images/about.webp"
              alt="Therapeutic massage treatment"
              className="w-full h-full object-cover"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-6 md:mb-8 leading-tight text-balance">
              When Standard Massage Isn&apos;t Enough, Try a Therapeutic Sports
              Massage
            </h2>
            <div className="space-y-5 md:space-y-6 text-base lg:text-[17px] leading-relaxed text-foreground/90 font-light">
              <p>
                Most massage therapy in NYC follows the same script: generic
                sessions that ignore what your body is actually telling you. You
                leave feeling temporarily relaxed but not truly restored.
              </p>

              <p>
                Your body works hard. Whether through intense training, a
                demanding career, or the daily stresses of city life, it
                deserves therapeutic expertise that matches your standards.{" "}
                <b>Bodies with above-average self-care</b> awareness need
                massage therapy providers who understand that difference.
              </p>

              <p>
                At Mudras, we go <b>beyond standard massage </b>therapy by
                offering a level of customization and expertise rarely found
                elsewhere.
              </p>
            </div>
            <button className="bg-[#f0cc75] hover:bg-accent/90 text-black px-6 md:px-8 py-3 md:py-4 mt-6 md:mt-8 text-sm md:text-base font-medium tracking-wide transition-colors w-fit">
              EXPERIENCE THE DIFFERENCE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
