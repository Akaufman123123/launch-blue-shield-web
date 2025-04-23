
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const DeviceManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Enterprise Device Management Solutions | IT Launch Solutions</title>
        <meta name="description" content="Comprehensive mobile device management solutions for businesses. Secure configuration, remote monitoring, and management of all your company's mobile devices." />
        <meta name="keywords" content="device management, mobile device security, MDM, BYOD, application management, remote device management" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-16 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1548883354-7622d04ec510?auto=format&fit=crop&w=2000&q=80" 
              alt="Mobile Device Management" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Device Management</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Take complete control of your mobile devices and tablets with our enterprise-grade device management solutions.
            We provide secure configuration, continuous remote monitoring, and comprehensive management of all your company's mobile devices.
            From initial deployment and security policy enforcement to application management and data protection, we ensure your
            mobile workforce stays connected and secure wherever they work. Our device management services include real-time tracking,
            remote wiping capabilities, and automated compliance monitoring to protect your sensitive data across
            all devices while maintaining productivity and flexibility for your team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Mobile Device Security</h2>
              <p className="text-gray-600">
                We implement enterprise-grade security measures for your mobile devices, including advanced data encryption, multi-factor 
                authentication, and remote lock and wipe capabilities to protect sensitive information in case of 
                loss or theft. Our comprehensive solution ensures that company data remains secure even on employee-owned 
                devices, supporting your BYOD (Bring Your Own Device) initiatives while maintaining security standards.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Application Management</h2>
              <p className="text-gray-600">
                Our application management services provide complete control over which apps can be installed on company devices, 
                allowing you to deploy required business applications remotely, block potentially harmful software, and 
                ensure all applications are properly updated and patched. We maintain a secure enterprise app catalog that 
                simplifies software distribution while enforcing compliance with your security policies.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Policy Enforcement</h2>
              <p className="text-gray-600">
                Create and enforce detailed security policies across all mobile devices with our centralized management platform. 
                Set password requirements, encryption standards, network configurations, and access controls based on user roles 
                and device types. Our system automatically ensures compliance and alerts administrators to potential policy 
                violations, maintaining consistent security across your entire mobile fleet.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Device Lifecycle Management</h2>
              <p className="text-gray-600">
                We manage the complete lifecycle of your mobile devices from initial provisioning and enrollment through 
                ongoing maintenance to secure retirement and data wiping. Our comprehensive approach ensures consistent 
                user experiences, reduces IT overhead, extends device lifespan, and maintains security throughout the 
                entire device lifecycle, maximizing your return on investment.
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

export default DeviceManagement;
