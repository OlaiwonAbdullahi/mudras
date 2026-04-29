"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-18 md:py-20 bg-[url('/images/newsletter.webp')] bg-cover bg-center w-full flex items-center justify-center">
      <div className=" max-w-4xl text-center">
        <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-white mb-8 leading-tight text-balance">
          Extend Your Recovery with Sports Massage Therapy in Chelsea
        </h2>
        <p className="mt-8 text-white leading-relaxed max-w-2xl mx-auto">
          Your massage therapy journey doesn&apos;t end when you leave our
          Chelsea location. Our professional-grade Mudras Recovery Cream brings
          the same expertise to your daily routine. Engineered for bodies that
          perform and demand real restoration between sessions.
        </p>
        <h2 className="text-4xl lg:text-4xl font-light tracking-wide text-white my-4 leading-tight text-balance">
          Coming Soon
        </h2>
        <p className="mt-8 text-white leading-relaxed max-w-2xl mx-auto">
          Sign up with your email address to receive news and updates.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            // toast({ title: "Thank you!", description: "You're on the list." });  setEmail("");
          }}
          className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 bg-white text-gray-500 border border-white  py-3  placeholder:text-gray-500 px-4 h-14 focus:outline-none "
          />
          <button className="bg-[#f0cc75] hover:bg-accent/90 uppercase text-black px-8 py-4 font-medium tracking-wide transition-colors w-fit">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
