"use client"

import { useState, useEffect } from "react"

interface Logo {
  name: string
  url: string
  alt: string
}

export default function LogoCarousel() {
  const [mounted, setMounted] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Use the direct blob URLs for maximum reliability
  const logos: Logo[] = [
    {
      name: "AchieversABA",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/achieverstherapy-dXIkB8QDq32iGliq3IIfUq0eMX5T2K.png",
      alt: "AchieversABA logo",
    },
    {
      name: "Clarity",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clarity-WQ6tatg2HpNC4F5XOJzSHoZRAKN8BF.png",
      alt: "Clarity logo",
    },
    {
      name: "SBH Laboratories",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SBH-UO5U38ietAyy3gAnDAoNeKSE8YnVST.png",
      alt: "SBH Laboratories logo",
    },
    {
      name: "Jade Capital",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JADE-CAPITAL-LOGO-ai-03-Xg5VhbsOIxACX9Mt4wH6ZkMBulLdyd.png",
      alt: "Jade Capital logo",
    },
    {
      name: "Atlas Healthcare Group",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atlas-y5XKO2QsR7mfVUOH99GZamDPx98KrJ.png",
      alt: "Atlas Healthcare Group logo",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageError = (logoName: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [logoName]: true,
    }))
  }

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="h-16 w-32 md:w-40 flex items-center justify-center">
            <span className="text-gray-700">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {logos.map((logo, index) => (
        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="h-16 w-32 md:w-40 relative flex items-center justify-center">
            {imageErrors[logo.name] ? (
              // Fallback to text if image fails to load
              <span className="text-gray-700 font-semibold">{logo.name}</span>
            ) : (
              // Try to load the image
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                style={{ display: "block", margin: "0 auto" }}
                onError={() => handleImageError(logo.name)}
                loading="eager"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
