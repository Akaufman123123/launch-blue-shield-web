
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const WorkstationManagement = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Workstation and Device Management</h1>
      <p className="text-lg text-gray-700 mb-6">
        Keep every device productive and secure with full-service workstation and endpoint management.
        We handle software updates, security patches, performance monitoring, and inventory tracking for your
        computers, laptops, tablets, and mobile devices. Our approach minimizes downtime and keeps your team’s
        tools safe, efficient, and ready for work.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default WorkstationManagement;
