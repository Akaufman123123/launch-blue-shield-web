/**
 * Utility functions for WebP image conversion and detection
 */

/**
 * Checks if the browser supports WebP format
 * @returns Promise that resolves to true if WebP is supported, false otherwise
 */
export function checkWebPSupport(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = () => resolve(true)
    webP.onerror = () => resolve(false)
    webP.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
  })
}

/**
 * Converts an image URL to use WebP format if supported
 * @param url Original image URL
 * @param fallback Fallback image URL if WebP is not supported
 * @returns Promise that resolves to the appropriate image URL
 */
export async function getOptimalImageFormat(url: string, fallback?: string): Promise<string> {
  try {
    const supportsWebP = await checkWebPSupport()

    if (supportsWebP) {
      // Add WebP format parameter to the URL
      const hasQuery = url.includes("?")
      return `${url}${hasQuery ? "&" : "?"}format=webp`
    } else {
      // Return fallback or original URL
      return fallback || url
    }
  } catch (error) {
    console.error("Error checking WebP support:", error)
    return fallback || url
  }
}

/**
 * Replaces all image sources with WebP versions if supported
 * @param selector CSS selector for images to convert
 */
export async function convertImagesToWebP(selector = "img:not([data-no-webp])"): Promise<void> {
  if (typeof window === "undefined") {
    return
  }

  try {
    const supportsWebP = await checkWebPSupport()

    if (supportsWebP) {
      const images = document.querySelectorAll(selector)

      images.forEach((img) => {
        const imgElement = img as HTMLImageElement
        const originalSrc = imgElement.src

        if (originalSrc && !originalSrc.includes("data:") && !originalSrc.includes("webp")) {
          // Add WebP format parameter to the URL
          const hasQuery = originalSrc.includes("?")
          imgElement.src = `${originalSrc}${hasQuery ? "&" : "?"}format=webp`
        }
      })
    }
  } catch (error) {
    console.error("Error converting images to WebP:", error)
  }
}
