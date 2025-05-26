import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | IT Launch Solutions",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="lead text-xl mb-6">Last Updated: May 1, 2025</p>

          <p className="mb-6">
            IT Launch Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-bold mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information or services</li>
            <li>Contact our support team</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="mb-6">
            This information may include your name, email address, phone number, company name, job title, and any other
            information you choose to provide.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website addresses</li>
            <li>Other diagnostic data</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to comments, questions, and requests</li>
            <li>Communicate about promotions, upcoming events, and other news about our services</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure of Your Information</h2>
          <p className="mb-6">We may share your information in the following situations:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
              consent.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in
              response to valid requests by public authorities.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
          <p className="mb-6">
            We use administrative, technical, and physical security measures to protect your personal information. While
            we have taken reasonable steps to secure the information you provide to us, please be aware that no security
            measures are perfect or impenetrable, and no method of data transmission can be guaranteed against
            interception or other types of misuse.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Privacy Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have certain rights regarding your personal information, such as the
            right to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access the personal information we have about you</li>
            <li>Correct inaccuracies in your personal information</li>
            <li>Delete your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
            <li>Request transfer of your personal information</li>
            <li>Withdraw your consent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-6">Email: info@itlaunchsolutions.com</p>
        </div>
      </div>
    </main>
  )
}
