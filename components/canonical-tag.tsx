"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

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
    const baseUrl = "https://itlaunchsolutions.com"
    
    // For the homepage, use the base URL without trailing slash
    if (pathname === "/") {
      canonicalTag.href = baseUrl
    } else {
      // For other pages, normalize the path (remove trailing slash)
      const normalizedPath = pathname.endsWith("/") && pathname !== "/" 
        ? pathname.slice(0, -1) 
        : pathname
      
      canonicalTag.href = `${baseUrl}${normalizedPath}`
    }
  }, [pathname])

  // This component doesn't render anything visible
  return null
}
