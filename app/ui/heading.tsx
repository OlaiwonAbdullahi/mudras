import Image from "next/image";
import React from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto">
        <Image
          src={"/images/icon.webp"}
          alt="Mudras Logo"
          width={30}
          height={30}
          className="object-contain mx-auto"
        />
        <h2 className=" text-3xl md:text-[42px]  mt-6 leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
