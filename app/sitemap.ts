import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itlaunchsolutions.com"

  // Main pages
  const mainPages = [
    "",
    "/services",
    "/blog",
    "/clients",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/sitemap",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }))

  // Service pages
  const servicePages = [
    "/services/cybersecurity",
    "/services/server-management",
    "/services/network-setup",
    "/services/data-recovery",
    "/services/it-planning",
    "/services/workstation-management",
    "/services/business-phone",
    "/services/ai-monitoring",
    "/services/device-management",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog pages
  const blogPages = [
    "/blog/securing-medical-devices",
    "/blog/cybersecurity-for-healthcare",
    "/blog/hipaa-compliance-it-infrastructure",
    "/blog/cloud-solutions-medical-practices",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...mainPages, ...servicePages, ...blogPages]
}
