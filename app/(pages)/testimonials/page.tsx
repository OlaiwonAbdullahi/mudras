import Hero from "@/app/ui/hero";
import Image from "next/image";
import Link from "next/link";

const testimonials: { name: string; title: string; quote: string[] }[] = [
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
    name: "Dr. Robert Shire",
    title: "Chiropractor",
    quote: [
      "I send all my clients to Mudras and I don't preach what I haven't tried first. It's the place to go, without question. If you are serious about your active life and if you want to be the best, go to the best!",
    ],
  },
  {
    name: "Diane Lee",
    title: "Professional Dancer",
    quote: [
      "I've never met anyone as skilled, hands-on, and knowledgeable as Yotam.",
      "As a dancer who puts her body through so much stress week after week, it is imperative to have someone who can support me in recovery and performance. After two knee surgeries and chronic injuries, I've been hunting for a massage experience that helps me feel my best inside and outside the studio.",
      "I'm so thankful I was referred to Yotam. I always walk out of our sessions feeling restored. He always goes above and beyond. He's also generous in sharing practices I can integrate into my daily recovery regimen.",
      "I cannot recommend him enough!! He truly is the best!!!",
    ],
  },
  {
    name: "Kristan Serafino",
    title: "Celebrity Hairstylist",
    quote: [
      "I honestly can't put into words how amazing my experience with Yotam is. This is so much more than just a massage; it truly feels like therapy for both body and mind.",
      "Yotam has an incredible intuition for exactly what you need, and every session feels personalized and genuinely healing.",
      "I came in seriously tense and totally stressed out, but left feeling lighter, clearer, and recharged in a way I've never experienced anywhere else.",
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
  {
    name: "Gabriella Halikas (Ella)",
    title: "Model & Content Creator",
    quote: [
      "Yotam was so incredible and immediately relieved pain in my body! He knew the exact technique and movement specifically for my body and specific needs. I would 100% recommend him for all your body work needs.",
    ],
  },
  {
    name: "Dr. Cailin D.",
    title: "Physical Therapist",
    quote: [
      "As a Doctor of Physical Therapy specializing in pelvic floor care, I’m very selective about the bodywork I trust for myself and my patients. My experience at Mudras Massage has been exceptional.",
      "The therapists here combine deep expertise with a truly customized approach that makes every session both restorative and therapeutic.",
      "I not only come here for my own care, but I also confidently refer my patients to Mudras, knowing they will receive the same high level of treatment and attention.",
      "The massage specialists I’ve worked with are outstanding, and I highly recommend Mudras to anyone seeking serious massage and bodywork that delivers real results.",
    ],
  },
  {
    name: "Remi Bader",
    title: "Creator and Model",
    quote: [
      "This is my GO TO massage spot in nyc. I am very picky when it comes to massages because I have a really bad lower back and every time I leave Mudras, I feel so much better.",
      "I tell my friends and followers he has magic healing hands because he does! Must go to if in NYC!!!!!",
    ],
  },
  {
    name: "Dr. Peggy Brill",
    title: "Doctor of Physical Therapy",
    quote: [
      "Yotam gives the best massages ever…love his technique and I know bodywork as a manual orthopedic physical therapist! Highest recommendation for Yotam",
    ],
  },
  {
    name: "Qasim Ellis",
    title: "Financial Adviser",
    quote: [
      "I had the most amazing experience at Mudras! From the moment I walked in, the atmosphere was calming, welcoming, and exactly what I needed.",
      "But the real highlight of visit was Yotam—hands down the best masseuse I’ve ever had. His technique, attention to detail, and ability to find and relieve tension were truly incredible.",
      "I left feeling completely renewed, both physically and mentally. If you’re looking for a top-tier massage experience, ask for Yotam. You won’t regret it!",
    ],
  },
  {
    name: "Anastasiia Aslanidi",
    title: "Professional Choreographer/performer",
    quote: [
      "I have experienced an incredible massage session last week at Mudras Chelsea. My colleague TJ highly recommended the space and therapists and I had no doubt about that.",
      "Being an athlete and a Coach requires a lot of training and discipline and we always seek recovery options. Mudras provided the service I desperately needed.",
      "They asked and listened, customized the techniques focusing on lymphatic drainage and digestion improvements. I left relaxed and recharged.",
      "Highly recommend!",
    ],
  },
  {
    name: "Gabriele Nicolo",
    title: "Client",
    quote: [
      "I had an absolutely amazing massage experience that exceeded all my expectations. From the moment I walked in, the atmosphere was calm, clean, and welcoming exactly what you'd want when looking to relax.",
      "The massage therapist was professional, attentive, and incredibly skilled. They took the time to ask about any areas of tension or discomfort, and tailored the session to focus on those spots while still providing a full-body experience! True 11/10",
    ],
  },
  {
    name: "Vanessa Fry",
    title: "Athlete",
    quote: [
      "Genuinely had such a great experience at Mudras in Chelsea! Dawn was my massage therapist, and I’ve never felt like someone has ever cared about my experience more.",
      "She took the time to get to know my body’s needs, ask me plenty of questions, and had an endearing approach. Her deep tissue massage was affective but discomfort-free.",
      "The stretches she implemented helped further release my muscles and I really felt a difference in my body afterward. As an athlete, I would recommend her and Mudras to anyone who’s looking for a massage catered just for you.",
    ],
  },
  {
    name: "Adam Gray",
    title: "Client",
    quote: [
      "Yotam is literally magic! Not only is he a super high-quality guy, but somehow he just knows exactly what to do to reset my body.",
      "After a session I always walk straighter, stand taller, reach higher, and just function and feel better. I just wish there was more time to spend with him!",
    ],
  },
  {
    name: "Valerie Kogan",
    title: "Founder",
    quote: [
      "Running a tech company means long hours, high stress, and way too much time at a desk or on the plane. I’ve tried different spas and massages over the years, but nothing compares to Mudras’ BodyReset.",
      "It’s not just a massage — it’s a customized treatment that really gets into the deep tissue and resets my body so I can think clearly and perform at my best.",
      "I value efficiency and results, and that’s exactly what I get here. Truly next level.",
    ],
  },
  {
    name: "Julie Ann Aueron",
    title: "Client",
    quote: [
      "Outstanding massage—truly expert level. Yotam has an incredible understanding of anatomy and technique, and was able to target deep areas of tension with precision and care. I left feeling completely reset. Highly recommend for anyone serious about quality bodywork.",
    ],
  },
  {
    name: "Adam Weinberg",
    title: "Client",
    quote: [
      "Yotam and his team are absolutely the greatest wellness team in NYC. Why? They've got some special magic. Industry secrets that only elite facilities provide.",
      "If you want to see what's beyond the next level, go to Mudras for your massage. Believe me, I've tried them all over the past 25+ years. Nobody else is even in the same league. You won't be disappointed.",
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

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col flex-1">
      <Hero
        buttonLink="/contact"
        buttonText="Book Your Session"
        title="Testimonials"
        backgroundImage="/images/testhero.webp"
      />
      <section className="bg-[#fffcf2] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12 md:mb-16">
            <Image
              src="/images/icon.webp"
              alt="Mudras Icon"
              width={30}
              height={30}
              className="object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#212121] leading-tight">
              What our clients say about us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-[#212121]/15 rounded-xl p-8 md:p-10 bg-transparent flex flex-col transition-all duration-500 hover:border-[#a08858]/60 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#212121] mb-1">
                      {t.name}
                    </h3>
                    <p className="text-sm text-[#212121]/60 italic">
                      {t.title}
                    </p>
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
