"use client"

interface Logo {
  name: string
}

export default function SimpleLogoDisplay() {
  // Just use company names without trying to load images
  const logos: Logo[] = [
    { name: "AchieversABA" },
    { name: "Clarity" },
    { name: "SBH Laboratories" },
    { name: "Jade Capital" },
    { name: "Atlas Healthcare Group" },
  ]

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Trusted Clients</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm min-w-[160px] h-[80px] flex items-center justify-center"
          >
            <span className="text-gray-700 font-medium text-center">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
