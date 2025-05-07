"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

export default function LogoCarousel() {
  const logos: Logo[] = [
    {
      name: "AchieversABA",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/achieverstherapy-YB63W147qJjqvtSMH7OdYSC9iK4ezk.png",
    },
    {
      name: "Clarity",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clarity-DglNqFwYvkPLG8iveGGShygQ3LYLOb.png",
    },
    {
      name: "SBH Laboratories",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SBH-Nh4injHExf8MAI5gEWDXhBuQtKpshc.png",
    },
    {
      name: "Jade Capital",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JADE-CAPITAL-LOGO-ai-03-CiUh7gvzKtOoHCYwtyCl9cSBa6AJXm.png",
    },
    { name: "Atlas Healthcare Group", src: "/images/atlas.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [logosPerView, setLogosPerView] = useState(5)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // If we can show all logos at once, just display them in a row
  if (logosPerView >= logos.length) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="h-16 w-32 md:w-40 relative">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
            </div>
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
                <div className="h-16 w-32 md:w-40 relative">
                  <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
                </div>
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
