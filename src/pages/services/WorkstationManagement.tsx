
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';

const WorkstationManagement = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
            alt="Workstation Management" 
            className="w-full h-64 object-cover" 
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Workstation Management</h1>
        <p className="text-lg text-gray-700 mb-6">
          Keep your workstations productive and secure with our full-service management solutions.
          We handle software updates, security patches, performance monitoring, and inventory tracking for your
          computers and laptops. Our approach minimizes downtime and keeps your team's
          tools safe, efficient, and ready for work, allowing you to focus on your core business activities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Proactive Maintenance</h3>
            <p className="text-gray-600">
              Our technicians perform regular maintenance on all workstations to prevent issues before they arise.
              This includes disk cleanup, software updates, and hardware diagnostics to keep everything running smoothly.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Security Management</h3>
            <p className="text-gray-600">
              We ensure all workstations have current antivirus protection, security patches, and proper access controls
              to protect your business data from unauthorized access and malware threats.
            </p>
          </Card>
        </div>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default WorkstationManagement;
