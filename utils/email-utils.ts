"use client"

import type React from "react"

/**
 * Obfuscates an email address to protect against spam harvesters
 * @param email The email address to obfuscate
 * @returns The obfuscated email address
 */
export function obfuscateEmail(email: string): string {
  if (!email) return ""

  // Split the email at the @ symbol
  const parts = email.split("@")
  if (parts.length !== 2) return email

  const [username, domain] = parts

  // Obfuscate the username
  const obfuscatedUsername =
    username.substring(0, Math.ceil(username.length / 2)) + "..." + username.substring(username.length - 1)

  // Obfuscate the domain
  const domainParts = domain.split(".")
  const obfuscatedDomain =
    domainParts[0].substring(0, Math.ceil(domainParts[0].length / 2)) +
    "..." +
    domainParts[0].substring(domainParts[0].length - 1) +
    "." +
    domainParts[1]

  return `${obfuscatedUsername}@${obfuscatedDomain}`
}

/**
 * Creates an encoded mailto link to protect against spam harvesters
 * @param email The email address for the mailto link
 * @param subject Optional subject line for the email
 * @param body Optional body text for the email
 * @returns The encoded mailto link
 */
export function createEncodedMailto(email: string, subject?: string, body?: string): string {
  let mailto = `mailto:${email}`

  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)

  if (params.length > 0) {
    mailto += `?${params.join("&")}`
  }

  // Convert the mailto link to HTML entities
  return mailto
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("")
}

/**
 * Creates a JavaScript-based email link that reveals the real email only when clicked
 * @param displayText The text to display for the link
 * @param username The username part of the email (before @)
 * @param domain The domain part of the email (after @)
 * @returns JSX for a spam-protected email link
 */
export function createProtectedEmailLink(displayText: string, username: string, domain: string) {
  // Instead of a string, we're now using a proper function for onClick
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${username}@${domain}`
    return false
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      onMouseOver={(e) => {
        e.currentTarget.title = `Email ${username}@${domain}`
      }}
      className="hover:text-blue-600 transition-colors"
    >
      {displayText}
    </a>
  )
}
