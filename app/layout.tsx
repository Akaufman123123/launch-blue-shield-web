import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import CanonicalTag from "@/components/canonical-tag"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Add display swap for better font loading
})

export const metadata: Metadata = {
  title: {
    default: "IT Launch Solutions - Reliable IT Services",
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
    icon: [{ url: "/shield.ico" }, { url: "/shield.ico", type: "image/x-icon" }],
    apple: [{ url: "/shield.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itlaunchsolutions.com/",
    siteName: "IT Launch Solutions",
    title: "IT Launch Solutions - Reliable IT Services",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for businesses in the medical industry.",
    images: [
      {
        url: "https://itlaunchsolutions.com/shield.ico",
        width: 512,
        height: 512,
        alt: "IT Launch Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Launch Solutions - Reliable IT Services",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for businesses in the medical industry.",
    images: ["https://itlaunchsolutions.com/shield.ico"],
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
        <link rel="icon" href="/shield.ico" sizes="any" />
        <link rel="icon" href="/shield.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/shield.ico" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IT Launch Solutions",
              url: "https://itlaunchsolutions.com",
              logo: "https://itlaunchsolutions.com/shield.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                email: "info" + "@" + "itlaunchsolutions.com", // Obfuscated email
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

        {/* Add inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS for above-the-fold content */
          body {
            margin: 0;
            font-family: Inter, sans-serif;
          }
          .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          @media (min-width: 768px) {
            .container {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
          }
          /* Header styles */
          header {
            background-color: white;
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 50;
          }
          .flex {
            display: flex;
          }
          .items-center {
            align-items: center;
          }
          .justify-between {
            justify-content: space-between;
          }
          /* Hero section styles */
          .bg-blue-50 {
            background-color: #eff6ff;
          }
          .py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .font-bold {
            font-weight: 700;
          }
          .text-gray-700 {
            color: #374151;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <CanonicalTag />
        <Navbar />
        {children}
        <Footer />

        {/* Performance optimization script */}
        <Script id="performance-optimizations" strategy="afterInteractive">
          {`
            // Optimize resource loading
            if ('connection' in navigator && navigator.connection.saveData === false) {
              // Preload important pages if not on save-data mode
              const links = ['services', 'blog', 'contact'];
              links.forEach(link => {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = '/' + link;
                document.head.appendChild(preloadLink);
              });
            }
            
            // Break up long tasks
            const deferredTasks = [];
            
            // Add tasks that can be deferred
            function addDeferredTask(task) {
              deferredTasks.push(task);
            }
            
            // Execute deferred tasks when browser is idle
            function executeDeferredTasks() {
              if (deferredTasks.length === 0) return;
              
              const task = deferredTasks.shift();
              try {
                task();
              } catch (error) {
                console.error('Error in deferred task:', error);
              }
              
              if (deferredTasks.length > 0) {
                if (window.requestIdleCallback) {
                  window.requestIdleCallback(() => executeDeferredTasks());
                } else {
                  setTimeout(executeDeferredTasks, 1);
                }
              }
            }
            
            // Start executing deferred tasks after page load
            if (document.readyState === 'complete') {
              executeDeferredTasks();
            } else {
              window.addEventListener('load', () => {
                executeDeferredTasks();
              });
            }
            
            // Email obfuscation
            document.addEventListener('DOMContentLoaded', function() {
              // Find all elements with data-email attribute
              const emailElements = document.querySelectorAll('[data-email]');
              emailElements.forEach(element => {
                const emailParts = element.getAttribute('data-email').split('|');
                const email = emailParts.join('@');
                
                if (element.tagName === 'A') {
                  element.href = 'mailto:' + email;
                }
                
                // Replace content with obfuscated email
                if (element.textContent.includes('[email]')) {
                  element.textContent = element.textContent.replace('[email]', email);
                } else {
                  element.textContent = email;
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
