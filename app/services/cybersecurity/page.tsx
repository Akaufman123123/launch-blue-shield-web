import Image from "next/image"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersecurity Services | IT Launch Solutions",
  description:
    "Protect your business with our comprehensive cybersecurity solutions including threat prevention, security assessments, email protection, and incident response.",
  keywords:
    "cybersecurity, network security, threat prevention, security assessments, email protection, incident response",
}

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 md:h-80">
          <Image src="/images/cyber.png" alt="Cybersecurity" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Cybersecurity</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-lg text-gray-700 mb-8">
            Protect your business with our comprehensive cybersecurity solutions. We provide advanced protection for
            your digital assets through multi-layered security measures, including cloud security infrastructure,
            network monitoring, and threat detection. Our cloud security services ensure your data remains protected
            whether it's stored on-premises or in the cloud, with features like encrypted storage, secure access
            controls, and real-time threat monitoring. We implement industry-leading security protocols to safeguard
            your sensitive information across all platforms and environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Threat Prevention</h2>
              <p className="text-gray-700">
                Our multi-layered threat prevention technology identifies and blocks malware, ransomware, and zero-day
                attacks before they can compromise your systems. We employ next-generation security tools to protect
                your business from even the most sophisticated threats, including advanced persistent threats and
                targeted attacks that traditional solutions miss.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Security Assessments</h2>
              <p className="text-gray-700">
                We conduct comprehensive security audits and penetration testing to identify potential vulnerabilities
                in your systems before attackers can exploit them. Our experts provide actionable recommendations to
                strengthen your security posture and implement industry best practices to prevent future breaches and
                maintain compliance with regulatory requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Email & Web Protection</h2>
              <p className="text-gray-700">
                Our advanced email security solutions filter out spam, phishing attempts, and malicious attachments
                before they reach your employees' inboxes. We also implement web filtering and content inspection to
                block dangerous websites and prevent data leaks, protecting your organization from both external threats
                and accidental insider risks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-600 mb-4">Incident Response</h2>
              <p className="text-gray-700">
                In the event of a security incident, our rapid response team quickly identifies the scope of the breach,
                contains the threat, and restores normal operations. We help you develop and implement incident response
                plans tailored to your business, ensuring minimal disruption and data loss while meeting all compliance
                reporting requirements.
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
