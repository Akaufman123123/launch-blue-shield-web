import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import ClientLogos from "@/components/client-logos"

export const metadata: Metadata = {
  title: "IT Launch Solutions - Comprehensive IT Services for Businesses",
  description:
    "IT Launch provides secure, reliable IT solutions with predictable fees and 24/7 monitoring to keep your systems operational.",
  keywords: "IT services, cybersecurity, server management, network setup, business IT solutions, managed IT services",
  alternates: {
    canonical: "https://itlaunchsolutions.com",
  },
}

export default function Home() {
  return (
    <>
      <ClientPage />
      <ClientLogos />
    </>
  )
}
