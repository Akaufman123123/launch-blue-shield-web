
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const ServerManagement = () => (
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <title>Professional Server Management Services | IT Launch Solutions</title>
      <meta name="description" content="Expert server management services for maximum uptime and reliability. We handle server setup, system administration, performance optimization, and patch management." />
      <meta name="keywords" content="server management, system administration, performance optimization, patch management, server monitoring" />
    </Helmet>
    <Header />
    <div className="flex-grow mt-16 pt-6">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" 
            alt="Professional Server Management Services" 
            className="w-full h-80 object-cover" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Server Management</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Ensure maximum uptime and reliability with our expert server management services.
          We handle initial server setup, system administration, performance optimization, and patch management
          for both on-premises and cloud-based systems. Our around-the-clock monitoring catches issues before
          they impact your business, and our rapid response team resolves problems quickly. With us,
          your servers run smoothly and securely, letting your team stay productive.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">24/7 Server Monitoring</h2>
            <p className="text-gray-600">
              Our comprehensive monitoring systems track your server health, performance metrics, and resource 
              utilization around the clock. We proactively identify potential issues through predictive analytics 
              and threshold alerts, allowing our team to address problems before they cause downtime. This constant 
              vigilance ensures your critical systems remain available when you need them most.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Patch Management</h2>
            <p className="text-gray-600">
              Keep your servers secure and stable with our systematic patch management process. We test, schedule, 
              and deploy critical updates during planned maintenance windows to minimize disruption. Our approach 
              ensures security vulnerabilities are addressed promptly while maintaining system stability and 
              compatibility with your business applications.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Performance Optimization</h2>
            <p className="text-gray-600">
              Maximize the efficiency of your server infrastructure with our performance tuning expertise. We analyze 
              resource usage patterns, optimize configurations, and implement best practices to enhance speed and 
              reliability. Our specialists can identify bottlenecks, streamline databases, and fine-tune application 
              servers to deliver optimal performance for your business workloads.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Backup & Recovery</h2>
            <p className="text-gray-600">
              Protect your server data with our comprehensive backup and recovery solutions. We implement automated, 
              verified backup processes with regular integrity checks to ensure data availability. Our team designs 
              recovery strategies with minimal RTO and RPO, enabling rapid restoration of services after any incident 
              to maintain business continuity.
            </p>
          </Card>
        </div>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default ServerManagement;
