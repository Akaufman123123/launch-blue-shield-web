
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const DataRecovery = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Disaster & Data Recovery</h1>
      <p className="text-lg text-gray-700 mb-6">
        Protect your critical business data from disasters, accidental deletion, and hardware failures.
        Our data recovery solutions include regular, automated backups, secure offsite storage, and
        rapid data restoration when needed. We help you prepare for the worst—so you can get back to business
        fast if something goes wrong. Let our team design your backup and recovery plan to ensure
        business continuity.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default DataRecovery;
