"use client"

import type React from "react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Shield, ChevronDown, ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"
import { scrollToTop } from "@/utils/scroll-utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const services = [
    { name: "Cybersecurity", path: "/services/cybersecurity" },
    { name: "Server Management", path: "/services/server-management" },
    { name: "Network Setup", path: "/services/network-setup" },
    { name: "Data Recovery", path: "/services/data-recovery" },
    { name: "IT Planning", path: "/services/it-planning" },
    { name: "Workstation Management", path: "/services/workstation-management" },
    { name: "Business Phone Systems", path: "/services/business-phone" },
    { name: "AI-Powered Monitoring", path: "/services/ai-monitoring" },
    { name: "Device Management", path: "/services/device-management" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const scrollToServices = (e: React.MouseEvent) => {
    // Only prevent default if we're on the homepage
    if (pathname === "/") {
      e.preventDefault()
      const servicesSection = document.getElementById("services")
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
      setIsServicesDropdownOpen(false)
    }
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
  }

  const handleServiceClick = () => {
    scrollToTop()
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-1.5 rounded">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xl font-semibold">
              <span className="text-blue-500">IT</span>Launch
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-500 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-gray-700 hover:text-blue-500 font-medium"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                aria-expanded={isServicesDropdownOpen}
                aria-label="Services menu"
                aria-controls="services-dropdown"
              >
                Services
                {isServicesDropdownOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                )}
              </button>

              {isServicesDropdownOpen && (
                <div
                  id="services-dropdown"
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                >
                  <div className="py-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                      onClick={handleServiceClick}
                    >
                      All Services
                    </Link>

                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                        onClick={handleServiceClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-blue-500 font-medium">
              Blog
            </Link>
          
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              onClick={scrollToContact}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white py-4 px-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex items-center text-gray-700 hover:text-blue-500 font-medium py-2 w-full text-left"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                aria-expanded={isServicesDropdownOpen}
                aria-label="Services submenu"
                aria-controls="mobile-services-dropdown"
              >
                Services
                {isServicesDropdownOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                )}
              </button>

              {isServicesDropdownOpen && (
                <div id="mobile-services-dropdown" className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/services"
                    className="block py-2 text-gray-700 hover:text-blue-500"
                    onClick={handleServiceClick}
                  >
                    All Services
                  </Link>

                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="block py-2 text-gray-700 hover:text-blue-500"
                      onClick={handleServiceClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/clients"
              className="text-gray-700 hover:text-blue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors inline-block"
              onClick={scrollToContact}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
