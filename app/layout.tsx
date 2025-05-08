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
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
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
        url: "https://itlaunchsolutions.com/og-image.png",
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
    images: ["https://itlaunchsolutions.com/og-image.png"],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IT Launch Solutions",
              url: "https://itlaunchsolutions.com",
              logo: "https://itlaunchsolutions.com/favicon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                email: "info@itlaunchsolutions.com",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/itlaunchsolutions",
                "https://www.linkedin.com/company/itlaunchsolutions",
                "https://twitter.com/itlaunchsolutions",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
