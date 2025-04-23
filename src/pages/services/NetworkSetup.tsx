import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const NetworkSetup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Network Setup & Management Solutions | IT Launch Solutions</title>
        <meta name="description" content="Professional network setup and management services. Build reliable LAN, WAN, and WiFi solutions with our expert implementation and support." />
        <meta name="keywords" content="network setup, network management, WiFi solutions, LAN, WAN, IT infrastructure, network support" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-10 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80" 
              alt="Professional Network Setup Services" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Network Setup & Management</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Build a reliable and high-performance network foundation with our comprehensive
            network setup and management services. We design, implement, and support robust LAN,
            WAN, and WiFi solutions—optimized for your organization's needs. Our proactive maintenance ensures
            your connections are stable and secure, with expert troubleshooting and capacity planning ensuring
            you're always ready for growth.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Network Design</h2>
              <p className="text-gray-600">
                Our expert engineers design customized network architectures that align with your business goals. 
                From small office setups to enterprise-grade infrastructures, we consider scalability, redundancy, 
                and performance to create reliable networks that grow with your business. Our thorough planning 
                approach ensures maximum efficiency and minimal disruption.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Wireless Solutions</h2>
              <p className="text-gray-600">
                We deploy high-performance WiFi networks with optimal coverage, capacity, and security. Our site 
                surveys identify interference sources and optimal access point placement to eliminate dead zones 
                and ensure seamless connectivity. Advanced features like guest networks, bandwidth management, 
                and secure authentication provide a professional wireless experience.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Network Security</h2>
              <p className="text-gray-600">
                Protect your network infrastructure with comprehensive security measures. We implement firewalls, 
                VPNs, network segmentation, and intrusion prevention systems to safeguard your data and systems. 
                Our ongoing vulnerability assessments and security audits ensure your network defenses remain 
                effective against evolving threats.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Proactive Monitoring</h2>
              <p className="text-gray-600">
                Our 24/7 network monitoring detects and resolves issues before they impact your business. 
                We track bandwidth usage, device health, and connection quality in real-time, providing detailed 
                reporting on performance metrics. This proactive approach minimizes downtime and ensures optimal 
                network performance at all times.
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

export default NetworkSetup;
