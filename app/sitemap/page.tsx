import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | IT Launch Solutions",
  description: "Navigate our website easily with our comprehensive sitemap.",
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-500 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-500 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-blue-500 hover:underline">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-500 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-500 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-blue-500 hover:underline">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/server-management" className="text-blue-500 hover:underline">
                  Server Management
                </Link>
              </li>
              <li>
                <Link href="/services/network-setup" className="text-blue-500 hover:underline">
                  Network Setup & Management
                </Link>
              </li>
              <li>
                <Link href="/services/data-recovery" className="text-blue-500 hover:underline">
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/it-planning" className="text-blue-500 hover:underline">
                  IT Planning & Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/workstation-management" className="text-blue-500 hover:underline">
                  Workstation Management
                </Link>
              </li>
              <li>
                <Link href="/services/business-phone" className="text-blue-500 hover:underline">
                  Business Phone Systems
                </Link>
              </li>
              <li>
                <Link href="/services/ai-monitoring" className="text-blue-500 hover:underline">
                  AI-Powered Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/device-management" className="text-blue-500 hover:underline">
                  Device Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Blog</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/cybersecurity-tips" className="text-blue-500 hover:underline">
                  5 Cybersecurity Tips Every Business Should Know
                </Link>
              </li>
              <li>
                <Link href="/blog/future-of-it-systems" className="text-blue-500 hover:underline">
                  The Future of IT Systems
                </Link>
              </li>
              <li>
                <Link href="/blog/ransomware-protection" className="text-blue-500 hover:underline">
                  Protecting Your Business from Ransomware
                </Link>
              </li>
              <li>
                <Link href="/blog/network-optimization-remote-work" className="text-blue-500 hover:underline">
                  Optimizing Your Network for Remote Work
                </Link>
              </li>
              <li>
                <Link href="/blog/cloud-solutions-businesses" className="text-blue-500 hover:underline">
                  Cloud Solutions for Businesses
                </Link>
              </li>
              <li>
                <Link href="/blog/staff-security-training" className="text-blue-500 hover:underline">
                  How to Train Your Staff on IT Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-blue-500 hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-500 hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
