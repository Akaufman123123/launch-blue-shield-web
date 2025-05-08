"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { getCanonicalUrl } from "@/utils/canonical-utils"

export default function CanonicalTag() {
  const pathname = usePathname()

  useEffect(() => {
    // Get existing canonical tag if any
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

    // If no canonical tag exists, create one
    if (!canonicalTag) {
      canonicalTag = document.createElement("link")
      canonicalTag.rel = "canonical"
      document.head.appendChild(canonicalTag)
    }

    // Set the href attribute to the canonical URL
    canonicalTag.href = getCanonicalUrl(pathname)
  }, [pathname])

  // This component doesn't render anything visible
  return null
}
