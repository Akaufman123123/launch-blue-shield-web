"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
}

export default function SocialShare({ url, title, description, className = "" }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState(url)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    // Update URL if we're in the browser
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = description ? encodeURIComponent(description) : ""

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
        onClick={(e) => {
          e.preventDefault()
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            "facebook-share-dialog",
            "width=626,height=436",
          )
        }}
      >
        <Facebook size={18} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
        aria-label="Share on Twitter"
        onClick={(e) => {
          e.preventDefault()
          window.open(
            `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            "twitter-share-dialog",
            "width=626,height=436",
          )
        }}
      >
        <Twitter size={18} />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors"
        aria-label="Share on LinkedIn"
        onClick={(e) => {
          e.preventDefault()
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            "linkedin-share-dialog",
            "width=626,height=436",
          )
        }}
      >
        <Linkedin size={18} />
      </a>

      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`}
        className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Share via Email"
      >
        <Mail size={18} />
      </a>

      <button
        onClick={copyToClipboard}
        className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors relative"
        aria-label="Copy link to clipboard"
      >
        <LinkIcon size={18} />
        {isCopied && (
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  )
}
