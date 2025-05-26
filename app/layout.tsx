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
    default: "IT Launch Solutions - Medical IT Services & Healthcare Technology",
    template: "%s | IT Launch Solutions",
  },
  description:
    "Comprehensive IT services with predictable fees and 24/7 monitoring for healthcare organizations and medical practices.",
  keywords: [
    "medical IT services",
    "healthcare cybersecurity",
    "HIPAA compliance",
    "medical device security",
    "healthcare technology",
    "EHR support",
    "telemedicine IT",
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
    title: "IT Launch Solutions - Medical IT Services & Healthcare Technology",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for healthcare organizations and medical practices.",
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
    title: "IT Launch Solutions - Medical IT Services & Healthcare Technology",
    description:
      "Comprehensive IT services with predictable fees and 24/7 monitoring for healthcare organizations and medical practices.",
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
        {/* Static canonical tag for SEO */}
        <link rel="canonical" href="https://itlaunchsolutions.com" />

        {/* Google Analytics - Load asynchronously */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WE96SX3LYR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WE96SX3LYR');
          `}
        </Script>

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
                telephone: "1-888-282-1299",
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

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <CanonicalTag />
        <Navbar />
        {children}
        <Footer />

        {/* Performance optimization script - load after page content */}
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
            
            // Lazy load images that are below the fold
            if ('IntersectionObserver' in window) {
              const lazyImages = document.querySelectorAll('img[loading="lazy"]');
              const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                  }
                });
              });
              
              lazyImages.forEach(image => {
                imageObserver.observe(image);
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
          `}
        </Script>
      </body>
    </html>
  )
}
