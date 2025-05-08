"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import { scrollToTop } from "@/utils/scroll-utils"

export default function BlogPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Cybersecurity Measures for Healthcare Organizations",
      excerpt:
        "Protecting patient data is critical for healthcare providers. Learn about the essential cybersecurity measures every medical organization should implement.",
      date: "May 1, 2025",
      author: "John Smith",
      category: "Cybersecurity",
      image: "/images/cyb.png",
      slug: "cybersecurity-for-healthcare",
    },
    {
      id: 2,
      title: "HIPAA Compliance and Your IT Infrastructure: What You Need to Know",
      excerpt:
        "Maintaining HIPAA compliance requires a robust IT infrastructure. Discover the key components needed to ensure your systems meet all requirements.",
      date: "April 22, 2025",
      author: "Sarah Johnson",
      category: "Compliance",
      image: "/images/hippa.png",
      slug: "hipaa-compliance-it-infrastructure",
    },
    {
      id: 3,
      title: "Cloud Solutions for Medical Practices: Benefits and Considerations",
      excerpt:
        "Cloud technology offers numerous advantages for medical practices. Learn about the benefits and important considerations before making the transition.",
      date: "April 10, 2025",
      author: "Michael Chen",
      category: "Cloud Computing",
      image: "/images/cloud.png",
      slug: "cloud-solutions-medical-practices",
    },
    {
      id: 4,
      title: "Optimizing Network Infrastructure for Telemedicine",
      excerpt:
        "Telemedicine requires a robust and reliable network. Discover how to optimize your IT infrastructure to support seamless telehealth operations.",
      date: "March 28, 2025",
      author: "Emily Rodriguez",
      category: "Network",
      image: "/images/networkmed.png",
      slug: "network-optimization-telemedicine",
    },
    {
      id: 5,
      title: "Protecting Electronic Health Records from Ransomware Attacks",
      excerpt:
        "Ransomware attacks on healthcare organizations are increasing. Learn how to protect your electronic health records with these essential cybersecurity measures.",
      date: "March 15, 2025",
      author: "David Wilson",
      category: "Cybersecurity",
      image: "/images/ransom.png",
      slug: "protecting-ehr-ransomware",
    },
    {
      id: 6,
      title: "IT Staff Training: Building a Security-Conscious Medical Team",
      excerpt:
        "Your staff is your first line of defense against cyber threats. Discover effective strategies for training healthcare employees on IT security.",
      date: "March 5, 2025",
      author: "Lisa Thompson",
      category: "Security Training",
      image: "/images/train.png",
      slug: "security-training-medical-staff",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-700">
              Insights, tips, and news about IT, cybersecurity, and technology solutions for healthcare and medical
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/secmeddev.png"
                alt="Securing Medical Devices: The Next Frontier in Healthcare Cybersecurity"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Securing Medical Devices: The Next Frontier in Healthcare Cybersecurity
              </h2>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">May 10, 2025</span>
                <User className="h-4 w-4 mr-2" />
                <span>Robert Anderson</span>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                As medical devices become increasingly connected, they present new cybersecurity challenges for
                healthcare organizations. This comprehensive guide helps medical facilities prepare for and defend
                against sophisticated cyber attacks targeting medical devices.
              </p>
              <Link
                href="/blog/securing-medical-devices"
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700"
                onClick={scrollToTop}
              >
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <User className="h-3 w-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700"
                    onClick={scrollToTop}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
