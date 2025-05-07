import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Server Management | IT Launch Solutions",
  description:
    "Expert server setup, monitoring, and maintenance services for healthcare organizations and medical practices.",
  keywords: "server management, healthcare IT, server monitoring, server maintenance, medical data servers",
}

export default function ServerManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/server.png" alt="Server Management" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Server Management</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive server management services ensure your critical infrastructure operates at peak
            performance with maximum security and reliability. We provide expert setup, continuous monitoring, and
            proactive maintenance of your servers to prevent downtime and optimize performance. Our team specializes in
            healthcare server environments, understanding the unique requirements for patient data security, regulatory
            compliance, and 24/7 availability that medical organizations demand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Server Setup & Configuration</h2>
              <p className="text-gray-700">
                Our expert team handles all aspects of server deployment, from initial hardware selection and
                installation to operating system configuration and application setup. We implement industry best
                practices for security, performance, and reliability, ensuring your server infrastructure is optimized
                for your specific business needs. For healthcare organizations, we implement specialized configurations
                that support HIPAA compliance and secure patient data management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">24/7 Monitoring & Maintenance</h2>
              <p className="text-gray-700">
                We provide round-the-clock monitoring of your server infrastructure, tracking performance metrics,
                security status, and system health. Our proactive approach allows us to identify and address potential
                issues before they impact your operations. Regular maintenance includes security updates, performance
                optimization, and capacity planning to ensure your servers continue to meet your evolving business
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Backup & Disaster Recovery</h2>
              <p className="text-gray-700">
                Protect your critical data with our comprehensive backup and disaster recovery solutions. We implement
                automated backup systems with regular testing to ensure data integrity and recoverability. Our disaster
                recovery planning includes detailed procedures for rapid restoration of services in the event of
                hardware failure, natural disasters, or other emergencies, minimizing potential downtime and data loss.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Security & Compliance</h2>
              <p className="text-gray-700">
                We implement comprehensive security measures to protect your servers from unauthorized access, malware,
                and other threats. Our security protocols include advanced firewall configuration, intrusion detection
                systems, vulnerability scanning, and security patch management. For healthcare clients, we ensure your
                server environment maintains compliance with HIPAA, HITECH, and other relevant regulations through
                regular security assessments and documentation.
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
