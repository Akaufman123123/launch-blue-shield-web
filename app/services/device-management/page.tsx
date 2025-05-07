import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Device Management | IT Launch Solutions",
  description:
    "Take complete control of your mobile devices and tablets with our enterprise-grade device management solutions for healthcare organizations.",
  keywords: "device management, mobile device management, MDM, BYOD, healthcare IT, medical device management",
}

export default function DeviceManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/placeholder.svg?key=he6mr" alt="Device Management" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Device Management</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Take complete control of your mobile devices and tablets with our enterprise-grade device management
            solutions. We provide secure configuration, continuous remote monitoring, and comprehensive management of
            all your company's mobile devices. From initial deployment and security policy enforcement to application
            management and data protection, we ensure your mobile workforce stays connected and secure wherever they
            work. Our device management services include real-time tracking, remote wiping capabilities, and automated
            compliance monitoring to protect your sensitive data across all devices while maintaining productivity and
            flexibility for your team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Mobile Device Security</h2>
              <p className="text-gray-700">
                We implement enterprise-grade security measures for your mobile devices, including advanced data
                encryption, multi-factor authentication, and remote lock and wipe capabilities to protect sensitive
                information in case of loss or theft. Our comprehensive solution ensures that company data remains
                secure even on employee-owned devices, supporting your BYOD (Bring Your Own Device) initiatives while
                maintaining security standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Application Management</h2>
              <p className="text-gray-700">
                Our application management services provide complete control over which apps can be installed on company
                devices, allowing you to deploy required business applications remotely, block potentially harmful
                software, and ensure all applications are properly updated and patched. We maintain a secure enterprise
                app catalog that simplifies software distribution while enforcing compliance with your security
                policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Policy Enforcement</h2>
              <p className="text-gray-700">
                Create and enforce detailed security policies across all mobile devices with our centralized management
                platform. Set password requirements, encryption standards, network configurations, and access controls
                based on user roles and device types. Our system automatically ensures compliance and alerts
                administrators to potential policy violations, maintaining consistent security across your entire mobile
                fleet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Device Lifecycle Management</h2>
              <p className="text-gray-700">
                We manage the complete lifecycle of your mobile devices from initial provisioning and enrollment through
                ongoing maintenance to secure retirement and data wiping. Our comprehensive approach ensures consistent
                user experiences, reduces IT overhead, extends device lifespan, and maintains security throughout the
                entire device lifecycle, maximizing your return on investment.
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
