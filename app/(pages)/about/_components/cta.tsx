const Cta = () => {
  return (
    <div>
      <section className="py-18 md:py-20 bg-[url('/images/aboutcta.webp')] bg-cover bg-center w-full flex items-center justify-center">
        <div className=" max-w-4xl text-center">
          <h2 className="text-4xl lg:text-[42px] font-light tracking-wide text-white mb-8 leading-tight text-balance">
            Mudras Massage Therapy in <br /> Chelsea: Extend Your <br />{" "}
            Recovery{" "}
          </h2>
          <p className="mt-6 text-white leading-relaxed max-w-2xl mx-auto">
            Your massage therapy journey doesn&apos;t end when you leave our
            Chelsea location. Our professional-grade Mudras Recovery Cream
            brings the same expertise to your daily routine. Engineered for
            bodies that perform and demand real restoration between massage
            therapy sessions.{" "}
          </p>
          <button className="bg-[#f0cc75] mt-6 uppercase text-black px-12 py-5 font-medium tracking-wide hover:bg-[#e0bc65] transition duration-300">
            {" "}
            Explore Recovery Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cta;
