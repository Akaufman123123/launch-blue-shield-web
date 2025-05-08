import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IT Launch Solutions - IT Services for Your Business",
    template: "%s | IT Launch Solutions",
  },
  description:
    "Comprehensive IT services with predictable fees and 24/7 monitoring for businesses in the medical industry.",
  keywords: [
    "IT services",
    "cybersecurity",
    "server management",
    "network setup",
    "data recovery",
    "medical IT",
    "healthcare IT",
    "managed services",
  ],
  authors: [{ name: "IT Launch Solutions" }],
  creator: "IT Launch Solutions",
  publisher: "IT Launch Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itlaunchsolutions.com/",
    siteName: "IT Launch Solutions",
    title: "IT Launch Solutions - IT Services for Your Business",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for businesses in the medical industry.",
    images: [
      {
        url: "https://itlaunchsolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Launch Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Launch Solutions - IT Services for Your Business",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for businesses in the medical industry.",
    images: ["https://itlaunchsolutions.com/twitter-image.jpg"],
    creator: "@itlaunchsolutions",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
