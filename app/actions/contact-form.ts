"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "")

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Validate the form data
  if (!fullName || !email || !message) {
    return {
      success: false,
      message: "Please fill out all required fields.",
    }
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "IT Launch Website <website@itlaunchsolutions.com>",
      to: ["info@itlaunchsolutions.com"],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "There was an error sending your message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message. We will get back to you shortly!",
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}
