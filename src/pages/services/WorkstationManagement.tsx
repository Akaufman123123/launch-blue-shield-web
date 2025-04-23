
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';

const WorkstationManagement = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Workstation Management</h1>
        <p className="text-lg text-gray-700 mb-6">
          Keep your workstations productive and secure with our full-service management solutions.
          We handle software updates, security patches, performance monitoring, and inventory tracking for your
          computers and laptops. Our approach minimizes downtime and keeps your team's
          tools safe, efficient, and ready for work, allowing you to focus on your core business activities.
        </p>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default WorkstationManagement;
