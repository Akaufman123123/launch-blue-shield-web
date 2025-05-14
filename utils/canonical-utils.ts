/**
 * Utility functions for handling canonical URLs
 */

/**
 * Generates the canonical URL for the current page
 * @param path The current page path
 * @param baseUrl The base URL of the website
 * @returns The canonical URL
 */
export function getCanonicalUrl(path: string, baseUrl = "https://itlaunchsolutions.com"): string {
  // Remove trailing slashes from baseUrl
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "")

  // Remove leading slashes from path
  const normalizedPath = path.replace(/^\/+/, "")

  // Combine baseUrl and path
  return `${normalizedBaseUrl}/${normalizedPath}`
}

/**
 * Checks if the current URL has any query parameters that should be excluded from the canonical URL
 * @param url The current URL
 * @param excludeParams Array of query parameters to exclude
 * @returns The canonical URL without excluded query parameters
 */
export function cleanCanonicalUrl(
  url: string,
  excludeParams: string[] = ["utm_source", "utm_medium", "utm_campaign"],
): string {
  try {
    const urlObj = new URL(url)

    // Create a new URLSearchParams object
    const params = new URLSearchParams(urlObj.search)

    // Remove excluded parameters
    excludeParams.forEach((param) => {
      params.delete(param)
    })

    // Update the search part of the URL
    urlObj.search = params.toString()

    return urlObj.toString()
  } catch (error) {
    // If URL parsing fails, return the original URL
    return url
  }
}

/**
 * Generates alternate language URLs for the current page
 * @param path The current page path
 * @param baseUrl The base URL of the website
 * @param languages Array of language codes
 * @returns Object with language codes as keys and URLs as values
 */
export function getAlternateLanguageUrls(
  path: string,
  baseUrl = "https://itlaunchsolutions.com",
  languages: string[] = ["en", "es"],
): Record<string, string> {
  const canonicalUrl = getCanonicalUrl(path, baseUrl)
  const result: Record<string, string> = {}

  languages.forEach((lang) => {
    if (lang === "en") {
      // English is the default language
      result[lang] = canonicalUrl
    } else {
      // For other languages, add the language code to the URL
      result[lang] = `${baseUrl}/${lang}/${path.replace(/^\/+/, "")}`
    }
  })

  return result
}
