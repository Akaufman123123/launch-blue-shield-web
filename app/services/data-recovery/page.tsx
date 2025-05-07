import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Recovery Services | IT Launch Solutions",
  description:
    "Comprehensive data recovery services to retrieve your valuable information quickly and securely for healthcare organizations.",
  keywords:
    "data recovery, healthcare data recovery, medical data restoration, secure data recovery, patient data recovery",
}

export default function DataRecoveryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-kcgs2eFrMOzqYVPFhAOWPXbZyWTnze.png"
            alt="Data Recovery Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Data Recovery Services</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Losing critical data can be a nightmare for any business. At IT Launch Solutions, we specialize in providing
            comprehensive data recovery services to retrieve your valuable information quickly and securely. Our
            expertise is particularly valuable for healthcare organizations where patient data is irreplaceable and
            subject to strict regulatory requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Initial Consultation</h2>
              <p className="text-gray-700">
                We assess the data loss scenario to determine the best recovery approach. Our expert team evaluates the
                damaged media to understand the extent of the data loss and develops a customized recovery plan. This
                thorough assessment helps us determine the most effective recovery method for your specific situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Data Evaluation</h2>
              <p className="text-gray-700">
                Our experts evaluate the damaged media to understand the extent of the data loss using advanced
                diagnostic tools. This thorough assessment helps us determine the most effective recovery method. For
                healthcare organizations, we prioritize patient records and critical operational data in our recovery
                process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Recovery Execution</h2>
              <p className="text-gray-700">
                Using advanced tools and techniques, we recover your data in a secure environment. Our recovery process
                is designed to minimize any potential further damage to your storage devices while maximizing data
                recovery success. We work in a controlled environment that meets healthcare security standards to
                protect sensitive information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Verification & Delivery</h2>
              <p className="text-gray-700">
                We verify the recovered data and deliver it to you on a secure medium. Our thorough verification process
                ensures that all recovered data is complete and intact before being returned to you. We provide secure
                transfer methods that comply with healthcare data protection requirements, ensuring your recovered
                information remains protected.
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
