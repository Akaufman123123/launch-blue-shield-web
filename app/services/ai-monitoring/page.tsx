import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI-Powered Monitoring | IT Launch Solutions",
  description:
    "Advanced AI-driven monitoring systems to predict and prevent potential IT issues for healthcare organizations.",
  keywords:
    "AI monitoring, predictive analytics, healthcare IT monitoring, real-time anomaly detection, automated remediation",
}

export default function AiMonitoringPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-ODYY2b5yZnwTrg2gOFlIW6j5H3SMEW.png"
            alt="AI-Powered Monitoring"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">AI-Powered Monitoring</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Stay ahead of IT problems with advanced, AI-driven monitoring. Our intelligent systems analyze performance
            data, predict hardware or software issues before they result in downtime, and alert our team the moment
            something needs attention. Enjoy proactive maintenance, optimized performance, and a technology environment
            that's always one step ahead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Predictive Analytics</h2>
              <p className="text-gray-700">
                Our AI-powered monitoring uses advanced predictive analytics to identify potential failures before they
                occur. By analyzing historical data and performance patterns, our systems can detect early warning signs
                of hardware degradation, capacity limitations, and software conflicts. This proactive approach allows us
                to address issues before they impact your business operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Real-time Anomaly Detection</h2>
              <p className="text-gray-700">
                Our intelligent monitoring platform continuously analyzes your IT environment to identify abnormal
                behavior. Using machine learning algorithms, we establish baseline performance metrics and immediately
                detect deviations that could indicate security breaches, performance issues, or system failures. This
                real-time detection capability minimizes response times and reduces potential damage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Automated Remediation</h2>
              <p className="text-gray-700">
                Many common IT issues can be resolved automatically with our AI-powered monitoring system. We implement
                intelligent automation workflows that can restart services, clear cache, optimize storage, and perform
                other maintenance tasks without human intervention. This automation reduces downtime and allows our team
                to focus on more complex issues requiring expert attention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Performance Optimization</h2>
              <p className="text-gray-700">
                Our AI monitoring doesn't just prevent problems—it also identifies opportunities to enhance performance.
                By analyzing resource utilization, application behavior, and user patterns, our systems recommend
                optimization strategies for your IT infrastructure. These data-driven insights help you maximize the
                value of your technology investments and improve user experiences.
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
