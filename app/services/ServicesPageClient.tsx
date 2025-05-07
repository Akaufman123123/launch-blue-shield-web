"use client"

import Link from "next/link"
import { Shield, Server, Wifi, Database, Monitor, Phone, Cpu } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { scrollToTop } from "@/utils/scroll-utils"

export default function ServicesPageClient() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Cybersecurity",
      description:
        "Advanced protection for your digital assets with firewall, email, endpoint security, and cloud security solutions.",
      link: "/services/cybersecurity",
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Server Management",
      description: "Expert setup and management of your servers with 24/7 monitoring and maintenance.",
      link: "/services/server-management",
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-500" />,
      title: "Network Setup & Management",
      description: "Reliable network infrastructure design, implementation, and ongoing support.",
      link: "/services/network-setup",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Data Recovery",
      description: "Comprehensive backup and recovery solutions to protect your critical data.",
      link: "/services/data-recovery",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "IT Planning & Architecture",
      description: "Strategic IT planning aligned with your business goals and future growth.",
      link: "/services/it-planning",
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      title: "Workstation Management",
      description: "Complete workstation management with security, updates, and performance optimization.",
      link: "/services/workstation-management",
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Business Phone Systems",
      description: "Modern communication solutions including VoIP and integrated phone systems.",
      link: "/services/business-phone",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Monitoring",
      description: "Advanced AI-driven monitoring systems to predict and prevent potential IT issues.",
      link: "/services/ai-monitoring",
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      title: "Device Management",
      description: "Comprehensive mobile device and tablet management for your entire organization.",
      link: "/services/device-management",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Comprehensive IT Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide end-to-end IT solutions with predictable, set fees and a dedicated account manager for every
            client.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                onClick={scrollToTop}
              >
                <div className="bg-blue-100 p-4 rounded-md w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-500 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  )
}
