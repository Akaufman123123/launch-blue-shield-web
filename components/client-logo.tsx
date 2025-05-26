"use client"

import { useState } from "react"
import Image from "next/image"
import { createPlaceholderSVG } from "@/utils/image-checker"

interface ClientLogoProps {
  name: string
  src: string
  width?: number
  height?: number
  priority?: boolean
}

export default function ClientLogo({ name, src, width = 160, height = 64, priority = false }: ClientLogoProps) {
  const [hasError, setHasError] = useState(false)

  // Create a placeholder SVG with the client name
  const placeholderSrc = createPlaceholderSVG(name, width, height)

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="relative" style={{ height: `${height}px`, width: `${width}px` }}>
        {hasError ? (
          <div className="flex items-center justify-center h-full w-full text-gray-400 text-sm">{name}</div>
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={`${name} logo`}
            fill
            className="object-contain"
            onError={() => setHasError(true)}
            sizes={`${width}px`}
            priority={priority}
          />
        )}
      </div>
    </div>
  )
}
