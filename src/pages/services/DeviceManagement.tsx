
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';

const DeviceManagement = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
            alt="Device Management" 
            className="w-full h-64 object-cover" 
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Device Management</h1>
        <p className="text-lg text-gray-700 mb-6">
          Take control of your mobile devices and tablets with our comprehensive device management solutions.
          We provide secure configuration, remote monitoring, and management of all your company's mobile devices.
          From deployment and security policy enforcement to app management and data protection, we ensure your
          mobile workforce stays connected and secure. Our device management services include real-time tracking,
          remote wiping capabilities, and automated compliance monitoring to protect your sensitive data across
          all devices.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Mobile Device Security</h3>
            <p className="text-gray-600">
              We implement robust security measures for your mobile devices, including data encryption, secure 
              authentication, and remote lock and wipe capabilities to protect sensitive information in case of 
              loss or theft.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Application Management</h3>
            <p className="text-gray-600">
              Our application management services allow you to control which apps can be installed on company devices, 
              deploy required business applications remotely, and ensure all software is properly updated and patched.
            </p>
          </Card>
        </div>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default DeviceManagement;
