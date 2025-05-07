import Image from "next/image"
import { Shield, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ITLaunch</h1>
            <p className="text-xl text-gray-700">
              We're a team of IT professionals dedicated to providing secure, reliable technology solutions for
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, ITLaunch began with a simple mission: to provide organizations with reliable, secure IT
                solutions that enable them to focus on their core business rather than technology challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders recognized that businesses face unique challenges when it comes to technology - from
                compliance requirements to the need for 24/7 system availability. We built our company specifically to
                address these needs.
              </p>
              <p className="text-lg text-gray-700">
                Today, we serve hundreds of businesses across the country, providing comprehensive IT services with
                predictable fees and round-the-clock support.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="ITLaunch team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">These core principles guide everything we do at ITLaunch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Security First</h3>
              <p className="text-gray-700 text-center">
                We prioritize the security of your data and systems above all else, implementing robust protections that
                exceed industry standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Excellence in Service</h3>
              <p className="text-gray-700 text-center">
                We're committed to providing exceptional service, with rapid response times and solutions tailored to
                your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Client-Centered Approach</h3>
              <p className="text-gray-700 text-center">
                We understand that technology exists to support your business. Our solutions are designed to enhance
                your operations and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experts who lead our company and ensure we deliver on our promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=256" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-blue-500 mb-4">CEO & Founder</p>
              <p className="text-gray-700">
                With over 20 years of experience in IT, John leads our company's vision and strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=256" alt="CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-500 mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Sarah oversees our technical operations and ensures we stay at the forefront of IT innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=256" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-blue-500 mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                Michael ensures our day-to-day operations run smoothly and that we consistently deliver exceptional
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business's IT?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how we can help you implement secure, reliable IT solutions tailored to your
            organization.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
