"use client";

import Image from "next/image";

const clients = [
  { id: 1, name: "Boltshift", logo: "/1.png" },
  { id: 2, name: "Lightbox", logo: "/2.png" },
  { id: 3, name: "FeatherDev", logo: "/3.png" },
  { id: 4, name: "Spherule", logo: "/4.png" },
  { id: 5, name: "GlobalBank", logo: "/5.png" },
  { id: 6, name: "Nietzsche", logo: "/6.png" },
];

const ClientLogos = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-[#475467] text-xl sm:text-2xl font-normal mb-16 max-w-3xl mx-auto">
          Join 400+ companies that trust our innovative IT solutions to drive growth and success.
        </h2>

        {/* Logo Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 lg:flex-nowrap lg:justify-between">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center space-x-3"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </div>
              <span className="text-[#475467] text-base sm:text-lg font-medium">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;