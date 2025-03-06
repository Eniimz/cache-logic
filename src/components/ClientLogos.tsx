"use client"
import Image from "next/image"

const clients = [
  { id: 1, name: "Boltshift", logo: "/1.png" },
  { id: 2, name: "Lightbox", logo: "/2.png" },
  { id: 3, name: "FeatherDev", logo: "/3.png" },
  { id: 4, name: "Spherule", logo: "/4.png" },
  { id: 5, name: "GlobalBank", logo: "/5.png" },
  { id: 6, name: "Nietzsche", logo: "/6.png" },
]

const ClientLogos = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-[#475467] text-md sm:text-lg font-normal mb-12 max-w-3xl mx-auto">
          Join 400+ companies that trust our innovative IT solutions to drive growth and success.
        </h2>

        {/* Static Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-28 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={160}
                height={80}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

