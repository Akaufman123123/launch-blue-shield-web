import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workstation Management | IT Launch Solutions",
  description:
    "Complete workstation management with security, updates, and performance optimization for healthcare organizations.",
  keywords:
    "workstation management, desktop management, healthcare workstations, endpoint security, computer maintenance",
}

export default function WorkstationManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/workspace.png" alt="Workstation Management" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Workstation Management</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Efficient workstation management is essential for maintaining productivity and security across your
            organization. Our comprehensive workstation management services ensure your desktops, laptops, and other
            endpoint devices operate at peak performance with maximum security and reliability. We specialize in
            managing workstations in healthcare environments, implementing specialized configurations and security
            measures to protect patient data while supporting clinical workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Deployment & Configuration</h2>
              <p className="text-gray-700">
                Our team handles all aspects of workstation deployment, from initial setup and imaging to software
                installation and user configuration. We implement standardized deployment processes that ensure
                consistency across your organization while accommodating department-specific requirements. For
                healthcare organizations, we configure workstations to support electronic health records, medical
                imaging applications, and other specialized software while maintaining HIPAA compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Security & Compliance</h2>
              <p className="text-gray-700">
                Protect your endpoints from security threats with our comprehensive workstation security solutions. We
                implement multi-layered security measures including endpoint protection, application control, device
                encryption, and secure authentication. Regular security updates and patch management ensure your
                workstations remain protected against evolving threats while maintaining compliance with industry
                regulations like HIPAA for healthcare organizations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Monitoring & Maintenance</h2>
              <p className="text-gray-700">
                Our proactive monitoring and maintenance services ensure optimal performance and minimal downtime for
                your workstations. We continuously monitor system health, application performance, and security status,
                addressing potential issues before they impact productivity. Regular maintenance includes software
                updates, performance optimization, and hardware diagnostics to extend the lifespan of your equipment and
                maximize your technology investment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Help Desk Support</h2>
              <p className="text-gray-700">
                Provide your users with responsive, knowledgeable support for workstation issues. Our help desk services
                offer multiple support channels including phone, email, and remote assistance to quickly resolve
                technical problems. We maintain detailed documentation of your environment to ensure efficient
                troubleshooting and consistent support experiences. For medical practices, our support team understands
                the critical nature of healthcare operations and prioritizes issues that impact patient care.
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
