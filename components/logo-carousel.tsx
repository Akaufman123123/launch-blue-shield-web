"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

export default function LogoCarousel() {
  // Update to use placeholder.svg as fallback
  const logos: Logo[] = [
    {
      name: "AchieversABA",
      src: "/placeholder.svg?height=64&width=160&text=AchieversABA",
    },
    {
      name: "Clarity",
      src: "/placeholder.svg?height=64&width=160&text=Clarity",
    },
    {
      name: "SBH Laboratories",
      src: "/placeholder.svg?height=64&width=160&text=SBH+Laboratories",
    },
    {
      name: "Jade Capital",
      src: "/placeholder.svg?height=64&width=160&text=Jade+Capital",
    },
    {
      name: "Atlas Healthcare Group",
      src: "/images/atlas.png",
      // Fallback if atlas.png doesn't exist
      fallback: "/placeholder.svg?height=64&width=160&text=Atlas+Healthcare",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [logosPerView, setLogosPerView] = useState(5)
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  // Determine how many logos to show based on screen size
  useEffect(() => {
    const updateLogosPerView = () => {
      if (window.innerWidth >= 1024) {
        setLogosPerView(5) // Show all logos on large screens
      } else if (window.innerWidth >= 768) {
        setLogosPerView(3) // Show 3 logos on medium screens
      } else {
        setLogosPerView(2) // Show 2 logos on small screens
      }
    }

    updateLogosPerView()
    window.addEventListener("resize", updateLogosPerView)

    return () => {
      window.removeEventListener("resize", updateLogosPerView)
    }
  }, [])

  // Calculate visible logos based on currentIndex and logosPerView
  const visibleLogos = useMemo(() => {
    if (logosPerView >= logos.length) {
      return logos // Show all logos if we have enough space
    }

    const endIndex = (currentIndex + logosPerView) % logos.length

    if (endIndex > currentIndex) {
      return logos.slice(currentIndex, endIndex)
    } else {
      // Handle wrap-around case
      return [...logos.slice(currentIndex), ...logos.slice(0, endIndex)]
    }
  }, [currentIndex, logosPerView, logos])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
  }

  // Handle image error - use a text-based display instead
  const handleImageError = (logoName: string, index: number) => {
    setImageError((prev) => ({ ...prev, [logoName]: true }))
    console.log(`Using text fallback for ${logoName}`)
  }

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    // Only auto-advance if we're not showing all logos
    if (logosPerView < logos.length) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [logosPerView, logos.length])

  // Render a logo with fallback
  const renderLogo = (logo: Logo, index: number) => {
    // If we've already had an error for this logo, show the text version
    if (imageError[logo.name]) {
      return (
        <div className="flex items-center justify-center h-full w-full bg-gray-100 rounded p-2">
          <span className="text-gray-700 text-sm font-medium text-center">{logo.name}</span>
        </div>
      )
    }

    // Otherwise try to show the image
    return (
      <Image
        src={logo.src || "/placeholder.svg"}
        alt={`${logo.name} logo`}
        fill
        className="object-contain"
        onError={() => handleImageError(logo.name, index)}
        sizes="(max-width: 768px) 128px, 160px"
        priority={index < 2} // Prioritize loading the first two logos
      />
    )
  }

  // If we can show all logos at once, just display them in a row
  if (logosPerView >= logos.length) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="h-16 w-32 md:w-40 relative">{renderLogo(logo, index)}</div>
          </div>
        ))}
      </div>
    )
  }

  // Otherwise, show the carousel
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevSlide}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Previous logos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div ref={containerRef} className="overflow-hidden mx-4">
          <div className="flex justify-center items-center space-x-8 transition-transform duration-500">
            {visibleLogos.map((logo, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex-shrink-0 bg-white p-4 rounded-lg border border-gray-200"
              >
                <div className="h-16 w-32 md:w-40 relative">{renderLogo(logo, index)}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Next logos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
