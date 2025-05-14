"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  width?: number
  height?: number
  fill?: boolean
}

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  width,
  height,
  fill = false,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Only set up intersection observer if not priority
    if (priority) {
      setIsInView(true)
      return
    }

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const element = document.getElementById(`image-${src.replace(/\W/g, "")}`)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true)
              observer.disconnect()
            }
          })
        },
        { rootMargin: "200px" },
      )

      observer.observe(element)

      return () => {
        observer.disconnect()
      }
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsInView(true)
    }
  }, [src, priority])

  return (
    <div
      id={`image-${src.replace(/\W/g, "")}`}
      className={`relative overflow-hidden ${className} ${!isLoaded ? "bg-gray-100" : ""}`}
      style={fill ? { position: "relative" } : { width: width || "100%", height: height || "auto" }}
    >
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          style={{ height: fill ? "100%" : height || "100%" }}
        >
          <svg
            className="w-10 h-10 text-gray-300 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}
