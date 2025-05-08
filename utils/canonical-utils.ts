/**
 * Generates a canonical URL for a given path
 * @param path - The path to generate a canonical URL for
 * @returns The full canonical URL
 */
export function getCanonicalUrl(path = ""): string {
  const baseUrl = "https://itlaunchsolutions.com"
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  // Remove trailing slash except for the homepage
  const cleanPath =
    normalizedPath === "/"
      ? normalizedPath
      : normalizedPath.endsWith("/")
        ? normalizedPath.slice(0, -1)
        : normalizedPath

  return `${baseUrl}${cleanPath}`
}
