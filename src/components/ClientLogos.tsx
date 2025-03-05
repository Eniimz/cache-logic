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
        <h2 className="text-center text-[#475467] text-xl sm:text-2xl font-normal mb-7 max-w-3xl mx-auto">
          Join 400+ companies that trust our innovative IT solutions to drive growth and success.
        </h2>

        {/* Logo Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-3 lg:flex-nowrap lg:justify-between">
          {clients.map((client) => (
            <div key={client.id} className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;