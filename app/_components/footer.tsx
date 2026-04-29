import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className=" px-6 text-center ">
        <div className="bg-[#f0cc75] w-full py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <Image
              src={"/images/icon.webp"}
              alt="Mudras Logo"
              width={30}
              height={30}
              className="object-contain mx-auto"
            />
            <h2 className=" text-3xl md:text-[42px]  mt-6 leading-tight">
              37 W 20th Street, New York City, NY 10011.
            </h2>
            <div className="mt-8 flex justify-center">
              <span className="ornament" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
