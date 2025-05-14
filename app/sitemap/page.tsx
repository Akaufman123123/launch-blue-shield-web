import Link from "next/link"

export default function SitemapPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-600 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-600 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-blue-600 hover:underline">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-600 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <Link href="/services/cybersecurity" className="text-blue-600 hover:underline">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/server-management" className="text-blue-600 hover:underline">
                  Server Management
                </Link>
              </li>
              <li>
                <Link href="/services/network-setup" className="text-blue-600 hover:underline">
                  Network Setup
                </Link>
              </li>
              <li>
                <Link href="/services/data-recovery" className="text-blue-600 hover:underline">
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/it-planning" className="text-blue-600 hover:underline">
                  IT Planning
                </Link>
              </li>
              <li>
                <Link href="/services/workstation-management" className="text-blue-600 hover:underline">
                  Workstation Management
                </Link>
              </li>
              <li>
                <Link href="/services/business-phone" className="text-blue-600 hover:underline">
                  Business Phone Systems
                </Link>
              </li>
              <li>
                <Link href="/services/ai-monitoring" className="text-blue-600 hover:underline">
                  AI Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/device-management" className="text-blue-600 hover:underline">
                  Device Management
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <Link href="/blog/enterprise-device-management" className="text-blue-600 hover:underline">
                  Healthcare Device Management: MDM Solutions for Medical Organizations
                </Link>
              </li>
              <li>
                <Link href="/blog/cybersecurity-for-healthcare" className="text-blue-600 hover:underline">
                  Cybersecurity for Healthcare: Protecting Patient Data
                </Link>
              </li>
              <li>
                <Link href="/blog/hipaa-compliance-it-infrastructure" className="text-blue-600 hover:underline">
                  HIPAA Compliance and IT Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/blog/cloud-solutions-medical-practices" className="text-blue-600 hover:underline">
                  Cloud Solutions for Medical Practices
                </Link>
              </li>
              <li>
                <Link href="/blog/securing-medical-devices" className="text-blue-600 hover:underline">
                  Securing Medical Devices in the IoT Era
                </Link>
              </li>
              <li>
                <Link href="/blog/network-optimization-telemedicine" className="text-blue-600 hover:underline">
                  Optimizing Network Infrastructure for Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/blog/protecting-ehr-ransomware" className="text-blue-600 hover:underline">
                  Protecting Electronic Health Records from Ransomware Attacks
                </Link>
              </li>
              <li>
                <Link href="/blog/security-training-medical-staff" className="text-blue-600 hover:underline">
                  IT Staff Training: Building a Security-Conscious Medical Team
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
