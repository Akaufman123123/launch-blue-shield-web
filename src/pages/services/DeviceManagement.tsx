
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';

const DeviceManagement = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Device Management</h1>
        <p className="text-lg text-gray-700 mb-6">
          Take control of your mobile devices and tablets with our comprehensive device management solutions.
          We provide secure configuration, remote monitoring, and management of all your company's mobile devices.
          From deployment and security policy enforcement to app management and data protection, we ensure your
          mobile workforce stays connected and secure. Our device management services include real-time tracking,
          remote wiping capabilities, and automated compliance monitoring to protect your sensitive data across
          all devices.
        </p>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default DeviceManagement;
