import img1 from "@/assets/forearms.jpg";
import img2 from "@/assets/spa-interior.jpg";

const Therapist = () => (
  <section className="py-28 md:py-40">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-gold text-xs tracking-[0.4em] uppercase">
          — Our Practice
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-tight">
          Work With A Top-Rated Sports Massage Therapist
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <img
          src={img2}
          alt="Mudras Chelsea studio interior"
          loading="lazy"
          className="w-full aspect-[5/4] object-cover"
        />
        <div>
          <h3 className="font-serif text-3xl md:text-4xl leading-tight">
            Located in the Heart of Chelsea — Your Go-To Spot for Sports Massage
          </h3>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            At Mudras, every session begins with presence. We listen closely to
            what your body is carrying and tailor the treatment to meet those
            specific needs. No scripts. No formula. Expertly attuned,
            personalized care that adapts to your lifestyle, your training, and
            your body's unique demands.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mt-24 md:mt-32">
        <div className="md:order-2">
          <img
            src={img1}
            alt="Massage therapist forearms and hands"
            loading="lazy"
            className="w-full aspect-[5/4] object-cover"
          />
        </div>
        <div className="md:order-1">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight">
            Meet Our NYC Massage Therapist Specializing in Athletic Massage
          </h3>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Cumulative experience between all our team — they bring over 40
            years of expertise to every custom massage session. Professionally
            trained across Western and Eastern modalities, they continue
            learning new techniques that enhance your Mudras experience. When
            you work with us, you're benefiting from deep expertise in reading
            what bodies need and responding with exactly the right approach.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Therapist;
