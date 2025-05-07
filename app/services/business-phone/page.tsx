import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Phone Systems | IT Launch Solutions",
  description:
    "Modern communication solutions including VoIP and integrated phone systems for healthcare organizations and medical practices.",
  keywords:
    "business phone systems, VoIP, healthcare communication, medical office phone systems, cloud-based phone systems",
}

export default function BusinessPhonePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/phone1.png" alt="Business Phone Systems" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Business Phone Systems</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            In today's fast-paced business environment, having a reliable and efficient phone system is crucial. At IT
            Launch Solutions, we offer comprehensive business phone system services designed to meet the unique needs of
            your organization. Our solutions are particularly tailored for healthcare organizations that require secure,
            reliable communication systems that comply with industry regulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">System Design & Implementation</h2>
              <p className="text-gray-700">
                We work with you to design a phone system that aligns with your business goals and operational
                requirements. Our team handles the entire implementation process, ensuring a seamless transition with
                minimal disruption. From initial assessment to final deployment, we ensure your new phone system
                integrates perfectly with your existing infrastructure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">VoIP Solutions</h2>
              <p className="text-gray-700">
                Leverage the power of Voice over Internet Protocol (VoIP) to make calls over the internet. VoIP systems
                offer greater flexibility, scalability, and cost savings compared to traditional phone systems. Our VoIP
                solutions are designed specifically for healthcare environments, with features that support patient
                confidentiality and efficient communication between departments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Cloud-Based Systems</h2>
              <p className="text-gray-700">
                Embrace the cloud for your phone system needs. Our cloud-based solutions provide advanced features, easy
                management, and the ability to access your phone system from anywhere with internet connectivity. This
                flexibility is particularly valuable for medical practices with multiple locations or providers who need
                to stay connected while moving between facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Integration & Support</h2>
              <p className="text-gray-700">
                Integrate your phone system with other business applications and receive ongoing maintenance and
                support. Our support team is available to address any issues and provide timely resolutions. We ensure
                your communication systems integrate seamlessly with electronic health records and practice management
                software for maximum efficiency.
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
