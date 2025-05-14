"use client"

import { useState } from "react"
import { CheckCircle, Clock, Mail, Phone } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-form"
import { createProtectedEmailLink } from "@/utils/email-utils"

export default function ContactForm() {
  const [formState, setFormState] = useState<{
    success?: boolean
    message?: string
    isSubmitting: boolean
  }>({
    isSubmitting: false,
  })

  async function handleSubmit(formData: FormData) {
    setFormState({ isSubmitting: true })

    try {
      const result = await submitContactForm(formData)
      setFormState({
        success: result.success,
        message: result.message,
        isSubmitting: false,
      })

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contactForm") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setFormState({
        success: false,
        message: "An error occurred. Please try again.",
        isSubmitting: false,
      })
    }
  }

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 text-center">
          Need reliable IT services for your healthcare organization? Contact us today for a free consultation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-left">Send Us a Message</h3>
            <form id="contactForm" action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="text-left">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Company"
                />
              </div>
              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your IT needs..."
                  required
                  aria-required="true"
                ></textarea>
              </div>

              {formState.message && (
                <div
                  className={`p-4 rounded-md ${formState.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                  role="alert"
                  aria-live="polite"
                >
                  {formState.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70"
                aria-label={formState.isSubmitting ? "Sending message..." : "Send message"}
              >
                {formState.isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-500 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4 text-left">Rapid Response Guarantee</h3>
              <p className="text-left mb-6">
                We pride ourselves on responding quickly to all client inquiries. Your business demands prompt
                attention, and we deliver.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>Immediate acknowledgment of your request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>Technical support within minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>Dedicated account manager for your business</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-left">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:18882821299" className="hover:text-blue-600 transition-colors">
                        1-888-282-1299
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                      {createProtectedEmailLink("info@itlaunchsolutions.com", "info", "itlaunchsolutions.com")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Support</h4>
                    <p className="text-gray-600">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
