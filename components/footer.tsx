"use client"

import Link from "next/link"
import { Shield, Mail, Clock, Phone } from "lucide-react"

export default function Footer() {
  // Simple email obfuscation for the footer
  const emailClickHandler = () => {
    window.location.href = "mailto:info@itlaunchsolutions.com"
    return false
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-500 text-white p-1.5 rounded">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold">
                <span className="text-blue-400">IT</span>Launch
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Comprehensive IT, security, and managed services with predictable fees and dedicated support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/server-management"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Server Management
                </Link>
              </li>
              <li>
                <Link href="/services/network-setup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Network Setup
                </Link>
              </li>
              <li>
                <Link href="/services/data-recovery" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/business-phone" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Business Phone Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" aria-hidden="true" />
                <a href="tel:18882821299" className="text-gray-400 hover:text-blue-400 transition-colors">
                  1-888-282-1299
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" aria-hidden="true" />
                <a href="#" onClick={emailClickHandler} className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@itlaunchsolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" aria-hidden="true" />
                <span className="text-gray-400">Support: 24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} IT Launch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
