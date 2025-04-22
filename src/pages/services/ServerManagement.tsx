
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const ServerManagement = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Server Management</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ensure maximum uptime and reliability with our expert server management services.
        We handle initial server setup, system administration, performance optimization, and patch management
        for both on-premises and cloud-based systems. Our around-the-clock monitoring catches issues before
        they impact your business, and our rapid response team resolves problems quickly. With us,
        your servers run smoothly and securely, letting your team stay productive.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default ServerManagement;
