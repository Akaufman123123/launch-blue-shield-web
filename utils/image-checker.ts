"use client"

/**
 * Utility to check if an image exists and is accessible
 * @param src The image source URL
 * @returns Promise that resolves to true if the image exists and is accessible
 */
export async function checkImageExists(src: string): Promise<boolean> {
  // For local images, we can't easily check if they exist on the client side
  // For external images, we can try to fetch them
  if (src.startsWith("http")) {
    try {
      const response = await fetch(src, { method: "HEAD" })
      return response.ok
    } catch (error) {
      console.error(`Error checking image ${src}:`, error)
      return false
    }
  }

  // For local images, we'll assume they exist but log a warning
  console.warn(`Cannot verify local image ${src} exists on client side`)
  return true
}

/**
 * Get a fallback image source if the original doesn't exist
 * @param src The original image source
 * @param fallbackSrc The fallback image source
 * @returns Promise that resolves to the appropriate image source
 */
export async function getImageSrcWithFallback(src: string, fallbackSrc = "/placeholder.svg"): Promise<string> {
  const exists = await checkImageExists(src)
  return exists ? src : fallbackSrc
}

/**
 * Create a placeholder SVG with the given text
 * @param text The text to display in the placeholder
 * @param width The width of the placeholder
 * @param height The height of the placeholder
 * @returns A data URL for an SVG placeholder
 */
export function createPlaceholderSVG(text: string, width = 200, height = 100): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
