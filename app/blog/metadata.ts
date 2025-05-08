import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IT Blog | IT Launch Solutions",
  description:
    "Stay updated with the latest IT trends, cybersecurity tips, and technology insights for businesses in the medical industry.",
  keywords: "IT blog, cybersecurity tips, healthcare IT, medical technology, HIPAA compliance, data security",
  openGraph: {
    title: "IT Blog | IT Launch Solutions",
    description:
      "Stay updated with the latest IT trends, cybersecurity tips, and technology insights for businesses in the medical industry.",
    url: "https://itlaunchsolutions.com/blog",
    siteName: "IT Launch Solutions",
    images: [
      {
        url: "https://itlaunchsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "IT Launch Solutions Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Blog | IT Launch Solutions",
    description:
      "Stay updated with the latest IT trends, cybersecurity tips, and technology insights for businesses in the medical industry.",
    images: ["https://itlaunchsolutions.com/og-image.png"],
    creator: "@itlaunchsolutions",
  },
}
