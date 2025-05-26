import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | IT Launch Solutions",
  description: "Get in touch with our IT experts for a free consultation about your technology needs.",
  keywords: "IT services contact, technology consultation, IT support contact, managed services contact",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Need reliable IT services? Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  )
}
