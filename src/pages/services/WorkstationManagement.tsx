import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const WorkstationManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Professional Workstation Management Services | IT Launch Solutions</title>
        <meta name="description" content="Comprehensive workstation management services for businesses. We handle software updates, security patches, performance monitoring, and inventory tracking for your computers and laptops." />
        <meta name="keywords" content="workstation management, computer maintenance, IT support, software updates, security patches, performance monitoring" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-10 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
              alt="Professional Workstation Management Services" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Workstation Management</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Keep your workstations productive and secure with our comprehensive management solutions.
            Our team of certified IT professionals handles all aspects of workstation maintenance, including 
            regular software updates, critical security patches, ongoing performance monitoring, and detailed 
            inventory tracking for all your computers and laptops. Our proactive approach minimizes downtime 
            and ensures your team's tools remain safe, efficient, and ready for work, allowing you to focus 
            on your core business activities without technology interruptions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Proactive Maintenance</h2>
              <p className="text-gray-600">
                Our expert technicians perform regular maintenance on all workstations to prevent issues before they arise.
                This includes comprehensive disk cleanup, automated software updates, and detailed hardware diagnostics to keep 
                everything running at optimal performance. We implement scheduled maintenance windows to minimize disruption 
                to your workflow while maximizing system reliability.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Security Management</h2>
              <p className="text-gray-600">
                We ensure all workstations maintain current antivirus protection, receive critical security patches, and 
                implement proper access controls to protect your valuable business data from unauthorized access and emerging 
                malware threats. Our layered security approach includes endpoint protection, application control, and 
                continuous monitoring to address vulnerabilities before they can be exploited.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Performance Optimization</h2>
              <p className="text-gray-600">
                Our workstation management services include continuous performance monitoring and optimization to ensure 
                your team works with responsive, efficient computers. We identify and resolve resource bottlenecks, 
                implement hardware upgrades when necessary, and configure systems for maximum productivity based on 
                your specific business applications and workflows.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Asset Management</h2>
              <p className="text-gray-600">
                Keep track of all your hardware and software assets with our comprehensive inventory management system. 
                We maintain detailed records of warranties, licenses, configurations, and upgrade history to help you 
                plan for technology refreshes and ensure compliance with software licensing requirements. Our proactive 
                management extends the useful life of your IT investments.
              </p>
            </Card>
          </div>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default WorkstationManagement;
