/**
 * Utility functions for image optimization
 */

/**
 * Determines the appropriate image size based on viewport width
 * @param viewportWidth The current viewport width
 * @param imageSizes Available image sizes
 * @returns The appropriate image size
 */
export function getResponsiveImageSize(viewportWidth: number, imageSizes: number[]): number {
  // Sort sizes in ascending order
  const sortedSizes = [...imageSizes].sort((a, b) => a - b)

  // Find the smallest size that is larger than the viewport
  for (const size of sortedSizes) {
    if (size >= viewportWidth) {
      return size
    }
  }

  // If no size is larger than the viewport, return the largest available size
  return sortedSizes[sortedSizes.length - 1]
}

/**
 * Generates srcset attribute for responsive images
 * @param basePath Base path to the image
 * @param filename Image filename without extension
 * @param extension Image extension
 * @param sizes Array of image sizes
 * @returns Formatted srcset string
 */
export function generateSrcSet(basePath: string, filename: string, extension: string, sizes: number[]): string {
  return sizes.map((size) => `${basePath}/${filename}-${size}.${extension} ${size}w`).join(", ")
}

/**
 * Converts an image URL to use WebP format if supported
 * @param url Original image URL
 * @returns URL with WebP format if supported
 */
export function getWebPUrl(url: string): string {
  // Check if the URL already has a query parameter
  const hasQuery = url.includes("?")

  // Add the WebP format parameter
  return `${url}${hasQuery ? "&" : "?"}format=webp`
}

/**
 * Lazy loads images that are not in the viewport
 * @param imageSelector CSS selector for images to lazy load
 */
export function setupLazyLoading(imageSelector = "img[data-src]"): void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return
  }

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.getAttribute("data-src")

          if (src) {
            img.src = src
            img.removeAttribute("data-src")
            img.classList.remove("lazy-load")
            observer.unobserve(img)
          }
        }
      })
    },
    {
      rootMargin: "200px 0px",
    },
  )

  const images = document.querySelectorAll(imageSelector)
  images.forEach((img) => {
    imageObserver.observe(img)
  })
}

/**
 * Preloads critical images
 * @param imageUrls Array of image URLs to preload
 */
export function preloadCriticalImages(imageUrls: string[]): void {
  if (typeof window === "undefined") {
    return
  }

  imageUrls.forEach((url) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = url
    document.head.appendChild(link)
  })
}
