
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const PhoneSystems = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Business Phone Systems</h1>
      <p className="text-lg text-gray-700 mb-6">
        Empower your team with flexible, modern business phone solutions. We design and deploy VoIP and integrated
        phone systems that connect employees and clients with clarity and reliability. Our platforms include features
        like voicemail-to-email, call routing, conferencing, and remote access—so your business can communicate
        professionally any time, anywhere.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default PhoneSystems;
