import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IT Planning & Architecture | IT Launch Solutions",
  description:
    "Strategic IT planning and architecture services aligned with your healthcare organization's business goals and future growth.",
  keywords: "IT planning, IT architecture, healthcare IT strategy, medical IT infrastructure, technology roadmap",
}

export default function ItPlanningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/IT.png" alt="IT Planning & Architecture" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">IT Planning & Architecture</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Effective IT planning and architecture is essential for aligning your technology investments with your
            business objectives. Our strategic IT planning services help you develop a comprehensive technology roadmap
            that supports your current needs while preparing for future growth. We specialize in creating IT strategies
            for healthcare organizations that address the unique challenges of medical environments, including
            regulatory compliance, interoperability requirements, and the need for secure, reliable systems that support
            patient care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">IT Assessment & Strategy</h2>
              <p className="text-gray-700">
                We begin with a comprehensive assessment of your current IT environment, identifying strengths,
                weaknesses, and opportunities for improvement. Based on this assessment and your business objectives, we
                develop a strategic IT plan that outlines technology initiatives, priorities, and timelines. For
                healthcare organizations, we ensure your IT strategy supports clinical workflows, regulatory compliance,
                and the secure management of patient information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Infrastructure Architecture</h2>
              <p className="text-gray-700">
                Our infrastructure architecture services help you design a robust, scalable technology foundation that
                supports your business operations. We consider factors such as performance, reliability, security, and
                cost-effectiveness to create an optimal infrastructure blueprint. For medical practices, we design
                specialized architectures that support electronic health records, medical imaging, telemedicine, and
                other healthcare-specific applications while ensuring HIPAA compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Technology Roadmapping</h2>
              <p className="text-gray-700">
                Develop a clear path for technology adoption and evolution with our technology roadmapping services. We
                help you plan for hardware refreshes, software upgrades, and new technology implementations in a
                coordinated, strategic manner. Our roadmaps include budget projections, resource requirements, and
                implementation timelines to ensure smooth execution of your technology initiatives while minimizing
                disruption to your operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Disaster Recovery Planning</h2>
              <p className="text-gray-700">
                Protect your business from technology disruptions with comprehensive disaster recovery planning. We help
                you identify critical systems, establish recovery objectives, and develop detailed procedures for
                restoring operations in the event of hardware failure, natural disasters, or other emergencies. For
                healthcare organizations, our disaster recovery plans address the unique requirements for maintaining
                access to patient data and clinical systems during emergencies.
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
