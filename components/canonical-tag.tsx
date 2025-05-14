"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { getCanonicalUrl, cleanCanonicalUrl } from "@/utils/canonical-utils"

export default function CanonicalTag() {
  const pathname = usePathname()
  const [canonicalUrl, setCanonicalUrl] = useState<string>("")

  useEffect(() => {
    // Generate the canonical URL
    const baseUrl = "https://itlaunchsolutions.com"
    const url = getCanonicalUrl(pathname, baseUrl)

    // Clean the URL (remove tracking parameters, etc.)
    const cleanUrl = cleanCanonicalUrl(url)

    setCanonicalUrl(cleanUrl)
  }, [pathname])

  // Only render the tag on the client side when we have the URL
  if (!canonicalUrl) return null

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
    </>
  )
}
