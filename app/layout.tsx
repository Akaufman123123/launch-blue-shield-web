import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jade Capital - Under Construction",
  description: "Jade Capital website is currently under construction. Thank you for your patience!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
