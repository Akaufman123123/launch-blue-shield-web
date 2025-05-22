"use client"

import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    {
      name: "AchieversABA",
      src: "/images/logos/achievers-aba.png",
      alt: "AchieversABA logo",
      width: 200,
      height: 60,
    },
    {
      name: "Clarity",
      src: "/images/logos/clarity.png",
      alt: "Clarity logo",
      width: 200,
      height: 60,
    },
    {
      name: "SBH Laboratories",
      src: "/images/logos/sbh.png",
      alt: "SBH Laboratories logo",
      width: 200,
      height: 60,
    },
    {
      name: "Jade Capital",
      src: "/images/logos/jade-capital.png",
      alt: "Jade Capital logo",
      width: 200,
      height: 60,
    },
    {
      name: "Atlas Healthcare Group",
      src: "/images/logos/atlas.png",
      alt: "Atlas Healthcare Group logo",
      width: 200,
      height: 60,
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Leading Medical Organizations</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative w-[200px] h-[60px] bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-600">
          Join hundreds of medical practices that trust IT Launch with their technology needs
        </p>
      </div>
    </section>
  )
}
