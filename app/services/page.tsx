import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "IT Services | IT Launch Solutions",
  description:
    "Comprehensive IT services including cybersecurity, server management, network setup, data recovery, and more for businesses.",
  keywords:
    "IT services, cybersecurity, server management, network setup, data recovery, IT planning, workstation management, business phone systems",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
