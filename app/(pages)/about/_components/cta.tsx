const Cta = () => {
  return (
    <div>
      <section className="py-14 md:py-20 px-6 md:px-12 bg-[url('/images/aboutcta.webp')] bg-cover bg-center w-full flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light tracking-wide text-white mb-6 md:mb-8 leading-tight text-balance">
            Mudras Massage Therapy in Chelsea: Extend Your Recovery
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto">
            Your massage therapy journey doesn&apos;t end when you leave our
            Chelsea location. Our professional-grade Mudras Recovery Cream
            brings the same expertise to your daily routine. Engineered for
            bodies that perform and demand real restoration between massage
            therapy sessions.
          </p>
          <button className="bg-[#f0cc75] mt-5 md:mt-6 uppercase text-black px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-medium tracking-wide hover:bg-[#e0bc65] transition duration-300">
            Explore Recovery Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cta;
