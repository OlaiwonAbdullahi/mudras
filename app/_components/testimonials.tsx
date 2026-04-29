import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Kyle O'Flaherty",
    title: "Doctor of Physical Therapy",
    quote: [
      "Yotam was the best masseuse I've ever had",
      "He really took the time to ask and asses where I needed work rather than other experiences where it's one sized fits all treatment. His body work felt amazing and I walked out of the treatment a new person",
      "It truly was a best bespoke body work I've ever come across",
      "The space was incredible, quiet and tranquil. I would highly recommend the experience",
      "As I understand it he has a great team that he has hand picked to highlight specialities such as postpartum.",
      "10/10 recommend ! You won't find better",
    ],
  },
  {
    name: "Johnny Mouflet",
    title: "Professional Choreographer/performer",
    quote: [
      "Yotam and his team are highly effective in their efforts to provide the best treatments whenever I had issues with my body, back, shoulders and knees as a dancer and drummer.",
    ],
  },
  {
    name: "Nigel Barker",
    title: "World-Renowned Fashion Photographer",
    quote: [
      "The best most intuitive body work therapist I have ever been treated by. Using massage, stretching and incredible knowledge of the body Mudras literally put me back together.",
      "Get a Mudras treatment for someone you care about.",
    ],
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-[#f59e0b]"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10 text-[#212121] shrink-0 rotate-180"
  >
    <path d="M11 7.05C7.05 7.55 4 10.76 4 14.6V21h7V14H7c0-2.76 1.79-5.1 4.27-5.93L11 7.05zM20 7.05c-3.95.5-7 3.71-7 7.55V21h7V14h-4c0-2.76 1.79-5.1 4.27-5.93L20 7.05z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-[#fffcf2] w-full py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Image
            src="/images/icon.webp"
            alt="Mudras Logo"
            width={30}
            height={30}
            className="object-contain mx-auto mb-6"
          />
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-foreground leading-tight text-balance">
            What our clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-[#212121]/15 rounded-xl p-8 md:p-10 bg-[#fffcf2] flex flex-col"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-[#212121] mb-1">
                    {t.name}
                  </h3>
                  <p className="text-sm text-[#212121]/60 italic">{t.title}</p>
                </div>
                <QuoteMark />
              </div>

              <Stars />

              <div className="space-y-4 text-[#212121]/80 text-base leading-relaxed mt-8">
                {t.quote.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
