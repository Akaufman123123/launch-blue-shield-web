import Image from "next/image"
import { CheckCircle, Star } from "lucide-react"

export default function ClientsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      position: "Operations Director",
      company: "Westside Business Center",
      quote:
        "ITLaunch transformed our organization's technology infrastructure. Their solutions and 24/7 support have been invaluable to our operations. We can now focus on our core business instead of IT issues.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "James Peterson",
      position: "Office Manager",
      company: "Peterson & Associates",
      quote:
        "The team at ITLaunch understands the unique challenges of business IT. They implemented a secure system and provide ongoing support that has significantly improved our workflow efficiency.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Owner",
      company: "Lakeside Enterprises",
      quote:
        "Since partnering with ITLaunch, we've experienced zero downtime and our systems are more secure than ever. Their proactive monitoring has prevented several potential issues before they affected our business.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Multi-Location Business",
      challenge:
        "A growing business with five locations needed a unified IT infrastructure with secure access to records across all sites.",
      solution:
        "Implemented a centralized system with secure cloud access, upgraded network infrastructure, and established compliant data sharing protocols.",
      results: [
        "50% reduction in record access time",
        "Seamless collaboration between locations",
        "Enhanced security with multi-factor authentication",
        "Improved customer experience with faster service",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Small Business IT Overhaul",
      challenge:
        "A small business struggled with unreliable internet connectivity and outdated systems that hindered operations.",
      solution:
        "Deployed redundant internet connections, modernized IT infrastructure, and implemented a cloud-based platform optimized for their needs.",
      results: [
        "99.9% system uptime achieved",
        "Remote work capabilities increased by 200%",
        "Reduced operational delays by 45 minutes daily",
        "Expanded customer base by 30%",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const clients = [
    { name: "Westside Business Center", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Peterson & Associates", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Lakeside Enterprises", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Metro Business Partners", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Valley Group", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Sunshine Industries", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Riverdale Associates", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Oakwood Business Center", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-700">
              We're proud to serve organizations of all sizes, from small businesses to multi-location enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted by Businesses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative h-20 w-48">
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm relative">
                <div className="absolute -top-5 left-8 text-yellow-400">
                  <Star className="h-10 w-10 fill-current" />
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`relative h-[300px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Satisfied Clients?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how we can help your organization with secure, reliable IT solutions.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
