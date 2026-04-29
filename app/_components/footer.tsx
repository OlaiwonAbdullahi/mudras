import Image from "next/image";
import Link from "next/link";
import {
  Linkedin02Icon,
  InstagramIcon,
  TiktokIcon,
  Facebook02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#f0cc75] w-full py-10 md:py-14 ">
        <section className="px-6 text-center">
          <div className="text-center max-w-3xl mx-auto">
            <Image
              src={"/images/icon.webp"}
              alt="Mudras Logo"
              width={30}
              height={30}
              className="object-contain mx-auto"
            />
            <h2 className=" text-3xl md:text-[42px]  mt-6 leading-tight">
              37 W 20th Street, New York City,
              <br /> NY 10011.
            </h2>
            <div className="mt-8 flex justify-center">
              <span className="ornament" />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.263541573151!2d-73.99338692345432!3d40.740793671384676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3697c4e91%3A0x1df0f317a2527a61!2s37%20W%2020th%20St%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="bg-[#212121] w-full py-8 px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center flex-col gap-4 mb-8 items-center">
            <Image
              src={"/images/logotm.webp"}
              alt="Mudras Logo"
              width={100}
              height={100}
              className="object-contain mx-auto mt-10"
            />
            <button className="border border-[#f0cc75] w-fit text-[#f0cc75] px-8 py-4 text-sm  hover:bg-[#f0cc75] hover:text-[#2a2a2a] transition">
              CONTACT US
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={"/logo.webp"}
                alt="Mudras Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="text-white text-center">
              <p className="">Phone: (212) 837-8382</p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#f0cc75] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2a2a2a] transition duration-300"
              >
                <HugeiconsIcon
                  icon={Linkedin02Icon}
                  size={20}
                  stroke="currentColor"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#f0cc75] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2a2a2a] transition duration-300"
              >
                <HugeiconsIcon
                  icon={TiktokIcon}
                  size={20}
                  stroke="currentColor"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#f0cc75] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2a2a2a] transition duration-300"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  size={20}
                  stroke="currentColor"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#f0cc75] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2a2a2a] transition duration-300"
              >
                <HugeiconsIcon
                  icon={Facebook02Icon}
                  size={20}
                  stroke="currentColor"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm pb-10 text-white gap-4">
            <p>© 2025 Mudras</p>
            <p>37 W 20th Street, New York City, NY 10011</p>
            <div className="flex gap-2">
              <Link href="/privacy" className="hover:text-[#f0cc75] transition">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-[#f0cc75] transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
