import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Dr. Kyle O'Flaherty",
    title: "Doctor of Physical Therapy",
    quote:
      "Yotam was the best masseuse I've ever had. He really took the time to ask and assess where I needed work rather than other experiences where it's one-size-fits-all treatment. His bodywork felt amazing and I walked out of the treatment a new person. It truly was the best bespoke bodywork I've ever come across. The space was incredible, quiet and tranquil. I would highly recommend the experience. As I understand it he has a great team that he has hand-picked to highlight specialties such as postpartum. 10/10 recommend! You won't find better.",
  },
  {
    name: "Johnny Mouflet",
    title: "Professional Choreographer & Performer",
    quote:
      "Yotam and his team are highly effective in their efforts to provide the best treatments whenever I had issues with my body, back, shoulders and knees as a dancer and drummer.",
  },
  {
    name: "Dr. Robert Shire",
    title: "Chiropractor",
    quote:
      "I send all my clients to Mudras and I don't preach what I haven't tried first. It's the place to go, without question. If you are serious about your active life and if you want to be the best, go to the best!",
  },
  {
    name: "Diane Lee",
    title: "Professional Dancer",
    quote:
      "I've never met anyone as skilled, hands-on, and knowledgeable as Yotam. As a dancer who puts her body through so much stress week after week, it is imperative to have someone who can support me in recovery and performance. After two knee surgeries and chronic injuries, I've been hunting for a massage experience that helps me feel my best inside and outside the studio. I'm so thankful I was referred to Yotam. I always walk out of our sessions feeling restored. He always goes above and beyond. He's also generous in sharing practices I can integrate into my daily recovery regimen. I cannot recommend him enough!! He truly is the best!!!",
  },
  {
    name: "Kristan Serafino",
    title: "Celebrity Hairstylist",
    quote:
      "I honestly can't put into words how amazing my experience with Yotam is. This is so much more than just a massage; it truly feels like therapy for both body and mind. Yotam has an incredible intuition for exactly what you need, and every session feels personalized and genuinely healing. I came in seriously tense and totally stressed out, but left feeling lighter, clearer, and recharged in a way I've never experienced anywhere else.",
  },
  {
    name: "Nigel Barker",
    title: "World-Renowned Fashion Photographer",
    quote:
      "The best most intuitive body work therapist I have ever been treated by. Using massage, stretching and incredible knowledge of the body Mudras literally put me back together. Get a Mudras treatment for someone you care about.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center overflow-hidden pt-44 pb-24 bg-stone-100">
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mb-8"
          />
          <h1 className="text-5xl lg:text-7xl font-light tracking-wide text-[#212121] mb-4">
            Testimonials
          </h1>
          <p className="text-lg text-[#212121]/60 font-light mt-2">
            What our clients say about us
          </p>
          <div className="mt-6 flex justify-center">
            <span className="ornament" />
          </div>
        </div>
      </section>

      {/* Testimonials - Alternating Layout */}
      <section className="bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          {testimonials.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="py-12 md:py-16 border-b border-[#212121]/10 last:border-b-0"
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Quote Side */}
                  <div className="md:w-2/3">
                    <svg
                      className="w-10 h-10 text-[#f0cc75] mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 7.05C7.05 7.55 4 10.76 4 14.6V21h7V14H7c0-2.76 1.79-5.1 4.27-5.93L11 7.05zM20 7.05c-3.95.5-7 3.71-7 7.55V21h7V14h-4c0-2.76 1.79-5.1 4.27-5.93L20 7.05z" />
                    </svg>
                    <p className="text-[#212121] text-base md:text-[17px] leading-relaxed">
                      {t.quote}
                    </p>
                  </div>

                  {/* Name Side */}
                  <div
                    className={`md:w-1/3 ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="w-10 h-px bg-[#f0cc75] mb-4" />
                    <p className="text-xl font-semibold text-[#212121]">
                      {t.name}
                    </p>
                    <p className="text-sm text-[#212121]/60 italic mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-18 md:py-20 bg-[url('/images/newsletter.webp')] bg-cover bg-center w-full flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-white mb-6 leading-tight text-balance">
            Experience It Yourself
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            Join the community of professionals, athletes, and individuals who
            trust Mudras for their recovery and performance needs.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  );
}
