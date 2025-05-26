import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "IT Blog: Healthcare Technology Insights | IT Launch Solutions",
  description:
    "Stay updated with the latest IT trends, cybersecurity tips, and technology insights for businesses in the medical industry.",
  keywords: "IT blog, cybersecurity tips, healthcare IT, medical technology, HIPAA compliance, data security",
}

export default function BlogPage() {
  return <BlogPageClient />
}
