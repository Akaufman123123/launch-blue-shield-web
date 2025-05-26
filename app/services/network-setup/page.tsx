import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Network Setup & Management | IT Launch Solutions",
  description:
    "Reliable network infrastructure design, implementation, and ongoing support for healthcare organizations.",
  keywords: "network setup, network management, healthcare networking, secure networks, medical office network",
}

export default function NetworkSetupPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/network.png" alt="Network Setup & Management" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Network Setup & Management</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            A robust, secure network is the foundation of your organization's IT infrastructure. Our network setup and
            management services provide comprehensive solutions for designing, implementing, and maintaining reliable
            network systems that support your business operations. We specialize in creating healthcare-grade networks
            that prioritize security, reliability, and performance to support critical medical applications and protect
            sensitive patient data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Network Design & Implementation</h2>
              <p className="text-gray-700">
                Our expert team designs custom network solutions tailored to your specific business requirements. We
                consider factors such as scalability, security, performance, and budget to create an optimal network
                architecture. Implementation is handled with minimal disruption to your operations, ensuring a smooth
                transition to your new or upgraded network infrastructure. For medical facilities, we design networks
                with redundancy and segmentation to support both clinical and administrative functions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Wireless Solutions</h2>
              <p className="text-gray-700">
                We provide comprehensive wireless network solutions that deliver reliable connectivity throughout your
                facility. Our wireless implementations include site surveys, optimal access point placement, secure
                authentication, and bandwidth management to ensure consistent performance. For healthcare environments,
                we create specialized wireless networks that support medical devices, electronic health records access,
                and secure guest access while maintaining strict separation between clinical and public networks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Network Security</h2>
              <p className="text-gray-700">
                Protect your network from unauthorized access and cyber threats with our comprehensive security
                solutions. We implement multi-layered security measures including next-generation firewalls, intrusion
                detection/prevention systems, VPN access, and network segmentation. Regular security assessments and
                updates ensure your network remains protected against evolving threats while maintaining compliance with
                industry regulations like HIPAA for healthcare organizations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Monitoring & Maintenance</h2>
              <p className="text-gray-700">
                Our proactive network monitoring and maintenance services ensure optimal performance and minimal
                downtime. We continuously monitor network health, bandwidth utilization, and security status, addressing
                potential issues before they impact your operations. Regular maintenance includes firmware updates,
                performance optimization, and capacity planning to ensure your network continues to meet your evolving
                business needs as your organization grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  )
}
