import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | IT Launch Solutions",
  description:
    "Our terms of service outline the rules, guidelines, and legal agreements between IT Launch Solutions and our clients.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="lead text-xl mb-6">Last Updated: May 1, 2025</p>

          <p className="mb-6">
            These Terms of Service ("Terms") govern your access to and use of the services, including our website,
            products, and applications (the "Services") provided by IT Launch Solutions ("Company," "we," "our," or
            "us"). Please read these Terms carefully before using our Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, you may not access or use the Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
          <p className="mb-6">
            We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as
            by sending an email notification, providing notice through the Services, or updating the "Last Updated" date
            at the beginning of these Terms. Your continued use of the Services following notification of changes will
            constitute your acceptance of such changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Services Description</h2>
          <p className="mb-6">
            IT Launch Solutions provides IT services, including but not limited to cybersecurity, server management,
            network setup, data recovery, and other related services as described on our website or in separate service
            agreements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. User Responsibilities</h2>
          <p className="mb-6">You are responsible for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Providing accurate and complete information when using our Services</li>
            <li>Maintaining the confidentiality of any account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of the Services complies with all applicable laws and regulations</li>
            <li>Obtaining and maintaining all equipment and services needed to access and use the Services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Payment Terms</h2>
          <p className="mb-6">
            Fees for our Services are described on our website or in separate service agreements. Unless otherwise
            specified:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>All fees are quoted in US dollars</li>
            <li>Payment is due upon receipt of invoice</li>
            <li>We may change our fees at any time with notice</li>
            <li>You are responsible for all taxes associated with your use of the Services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
          <p className="mb-6">
            The Services and their entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by the Company, its licensors, or other providers of such material and are protected by
            United States and international copyright, trademark, patent, trade secret, and other intellectual property
            or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-6">
            IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
            OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
            CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Indemnification</h2>
          <p className="mb-6">
            You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service
            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
            violation of these Terms or your use of the Services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
          <p className="mb-6">
            These Terms and your use of the Services shall be governed by and construed in accordance with the laws of
            the State of [Your State], without giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at info@itlaunchsolutions.com.
          </p>
        </div>
      </div>
    </main>
  )
}
