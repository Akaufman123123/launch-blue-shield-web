"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { scrollToTop } from "@/utils/scroll-utils"

export default function BlogPage() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Blog</h1>
        <p className="text-xl text-gray-600 mb-8">Insights and resources for healthcare IT professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cybersecurity for Healthcare */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/cybersecurity-for-healthcare" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image src="/images/cyb.png" alt="Cybersecurity for Healthcare" fill className="object-cover" />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>January 15, 2025</span>
              </div>
              <Link href="/blog/cybersecurity-for-healthcare" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  Cybersecurity for Healthcare: Protecting Patient Data
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Explore the unique cybersecurity challenges facing healthcare organizations and strategies to protect
                sensitive patient information.
              </p>
              <Link
                href="/blog/cybersecurity-for-healthcare"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* HIPAA Compliance */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/hipaa-compliance-it-infrastructure" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image
                  src="/images/hippa.png"
                  alt="HIPAA Compliance and IT Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>January 28, 2025</span>
              </div>
              <Link href="/blog/hipaa-compliance-it-infrastructure" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  HIPAA Compliance and IT Infrastructure
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Learn how to build and maintain HIPAA-compliant IT systems to protect patient data and avoid costly
                penalties.
              </p>
              <Link
                href="/blog/hipaa-compliance-it-infrastructure"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/cloud-solutions-medical-practices" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image
                  src="/images/cloud.png"
                  alt="Cloud Solutions for Medical Practices"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>February 10, 2025</span>
              </div>
              <Link href="/blog/cloud-solutions-medical-practices" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  Cloud Solutions for Medical Practices
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Discover how cloud computing can enhance efficiency, security, and collaboration in healthcare settings.
              </p>
              <Link
                href="/blog/cloud-solutions-medical-practices"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Securing Medical Devices */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/securing-medical-devices" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image
                  src="/images/secmeddev.png"
                  alt="Securing Medical Devices in the IoT Era"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>February 22, 2025</span>
              </div>
              <Link href="/blog/securing-medical-devices" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  Securing Medical Devices in the IoT Era
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Explore the security challenges of connected medical devices and strategies to protect them from cyber
                threats.
              </p>
              <Link
                href="/blog/securing-medical-devices"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Network Optimization for Telemedicine */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/network-optimization-telemedicine" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image
                  src="/images/networkmed.png"
                  alt="Network Optimization for Telemedicine"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 8, 2025</span>
              </div>
              <Link href="/blog/network-optimization-telemedicine" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  Optimizing Network Infrastructure for Telemedicine
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Learn how to build robust network infrastructure to support reliable, high-quality telemedicine
                services.
              </p>
              <Link
                href="/blog/network-optimization-telemedicine"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Protecting EHR from Ransomware */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/protecting-ehr-ransomware" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image src="/images/ransom.png" alt="Protecting EHR from Ransomware" fill className="object-cover" />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 20, 2025</span>
              </div>
              <Link href="/blog/protecting-ehr-ransomware" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  Protecting Electronic Health Records from Ransomware Attacks
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Discover strategies to safeguard electronic health records from increasingly sophisticated ransomware
                threats.
              </p>
              <Link
                href="/blog/protecting-ehr-ransomware"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* IT Staff Training */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/blog/security-training-medical-staff" onClick={scrollToTop}>
              <div className="relative h-48">
                <Image src="/images/train.png" alt="IT Staff Training" fill className="object-cover" />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 5, 2025</span>
              </div>
              <Link href="/blog/security-training-medical-staff" onClick={scrollToTop}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  IT Staff Training: Building a Security-Conscious Medical Team
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                Learn effective strategies for training healthcare employees on IT security to create a strong first
                line of defense.
              </p>
              <Link
                href="/blog/security-training-medical-staff"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={scrollToTop}
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
