import Heading from "@/app/ui/heading";
import { Check } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Service = () => {
  const services = [
    "Customized massage",
    "Prenatal and postnatal",
    "Myofascial release",
    "Deep tissue massage",
    "Sports and Medical massage",
    "Stretching & Mobility",
    "Trigger point therapy",
    "Swedish Massage Therapy",
    "Lymphatic massage",
    "Reflexology",
    "Thai Massage",
    "Orthopedic Massage",
  ];

  return (
    <div className="bg-[#EDE9DF] w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Heading title="The Mudras Specialist Services" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#C4A574] p-6   flex items-center gap-4"
            >
              <HugeiconsIcon
                icon={Check}
                size={24}
                className="text-[#A0826D] flex-shrink-0 mt-0.5"
                stroke="currentColor"
              />
              <p className="text-gray-800 font-medium leading-snug">
                {service}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className=" italic text-lg">and more...</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
