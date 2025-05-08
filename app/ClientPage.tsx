"use client"

import Link from "next/link"
import { Shield, Clock, Database, Server, Wifi, Monitor, Phone, Cpu, CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { scrollToTop } from "@/utils/scroll-utils"
import LogoCarousel from "@/components/logo-carousel"
import { deferExecution, executeTasksInChunks } from "@/utils/performance-utils"
import { useEffect } from "react"

export default function ClientPage() {
  useEffect(() => {
    // Defer non-critical operations
    deferExecution(() => {
      // Example of breaking up a long task into smaller chunks
      const heavyTasks = [
        () => {
          // Analytics initialization
          console.log("Analytics initialized")
        },
        () => {
          // Other non-critical initialization
          console.log("Other initialization")
        },
        // Add more tasks as needed
      ]

      executeTasksInChunks(heavyTasks, 2, 10)
    }, 100)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Secure, Reliable <span className="text-blue-500">IT</span>
                <br />
                <span className="text-blue-500">Solutions</span> for Your
                <br />
                Business
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                IT Launch provides comprehensive IT services with predictable fees and 24/7 monitoring to keep your
                systems secure and operational.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="border border-gray-300 hover:border-blue-500 hover:text-blue-500 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Enterprise Security</h3>
                    <p className="text-gray-600">Comprehensive security solutions to protect your business</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">24/7 Monitoring</h3>
                    <p className="text-gray-600">Round-the-clock monitoring for your critical systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Database className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Managed Services</h3>
                    <p className="text-gray-600">Predictable fees with dedicated account management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive IT Services</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            We provide end-to-end IT solutions with predictable, set fees and a dedicated account manager for every
            client.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/services/cybersecurity"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced protection for your digital assets with firewall, email, endpoint security, and cloud security
                solutions.
              </p>
            </Link>

            <Link
              href="/services/server-management"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Server className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Server Management</h3>
              <p className="text-gray-600">
                Expert setup and management of your servers with 24/7 monitoring and maintenance.
              </p>
            </Link>

            <Link
              href="/services/network-setup"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Wifi className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Setup & Management</h3>
              <p className="text-gray-600">
                Reliable network infrastructure design, implementation, and ongoing support.
              </p>
            </Link>

            <Link
              href="/services/data-recovery"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Disaster & Data Recovery</h3>
              <p className="text-gray-600">
                Comprehensive backup and recovery solutions to protect your critical data.
              </p>
            </Link>

            <Link
              href="/services/it-planning"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IT Planning & Architecture</h3>
              <p className="text-gray-600">Strategic IT planning aligned with your business goals and future growth.</p>
            </Link>

            <Link
              href="/services/workstation-management"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Workstation Management</h3>
              <p className="text-gray-600">
                Complete workstation management with security, updates, and performance optimization.
              </p>
            </Link>

            <Link
              href="/services/business-phone"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Phone Systems</h3>
              <p className="text-gray-600">
                Modern communication solutions including VoIP and integrated phone systems.
              </p>
            </Link>

            <Link
              href="/services/ai-monitoring"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Monitoring</h3>
              <p className="text-gray-600">
                Advanced AI-driven monitoring systems to predict and prevent potential IT issues.
              </p>
            </Link>

            <Link
              href="/services/device-management"
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              onClick={scrollToTop}
            >
              <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Device Management</h3>
              <p className="text-gray-600">
                Comprehensive mobile device and tablet management for your entire organization.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Providing exceptional IT services to healthcare organizations and businesses across various industries.
          </p>

          <LogoCarousel />

          <p className="mt-8 text-gray-700">
            Join our growing list of satisfied clients who trust IT Launch with their technology infrastructure.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose IT Launch?</h2>
              <p className="text-lg text-gray-700 mb-8">
                IT Launch Solutions provides comprehensive IT, security, and managed services with predictable, set fees
                and a dedicated account manager for every client. Our 24/7 monitoring ensures your systems stay secure
                and operational at all times.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Dedicated Account Manager</h3>
                    <p className="text-gray-600">
                      Personal attention from professionals who understand your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Predictable Monthly Fees</h3>
                    <p className="text-gray-600">No surprises, just reliable service at a predictable cost.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Rapid Response Time</h3>
                    <p className="text-gray-600">Our team responds quickly to resolve issues and minimize downtime.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500 p-6 rounded-lg text-white">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Grade Security</h3>
                <p>Protecting your business with industry-leading security solutions.</p>
              </div>

              <div className="bg-blue-500 p-6 rounded-lg text-white">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
                <p>Round-the-clock monitoring and protection for your critical systems.</p>
              </div>

              <div className="bg-blue-500 p-6 rounded-lg text-white">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
                <p>Our team consists of certified professionals with extensive experience.</p>
              </div>

              <div className="bg-blue-500 p-6 rounded-lg text-white">
                <div className="bg-blue-400 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Disaster Recovery</h3>
                <p>Comprehensive plans to protect your data and ensure business continuity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  )
}
