
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const CloudSecurity = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Cloud Security</h1>
      <p className="text-lg text-gray-700 mb-6">
        Safely migrate and operate in the cloud with our advanced cloud security solutions. We implement strong
        access controls, monitor cloud environments for unusual activity, and protect your sensitive data
        from breaches. Our team ensures your cloud apps meet regulatory compliance, and we constantly
        update your security policies to adapt to new threats—so you get the freedom and flexibility of the
        cloud, minus the risks.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default CloudSecurity;
