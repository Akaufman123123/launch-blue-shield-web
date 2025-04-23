import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const CloudSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cloud Security Solutions | IT Launch Solutions</title>
        <meta name="description" content="Enterprise-grade cloud security services. Implement strong access controls, monitor cloud environments, and protect sensitive data from breaches." />
        <meta name="keywords" content="cloud security, access controls, cloud monitoring, data protection, regulatory compliance" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-10 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
              alt="Enterprise Cloud Security Solutions" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Cloud Security</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Safely migrate and operate in the cloud with our advanced cloud security solutions. We implement strong
            access controls, monitor cloud environments for unusual activity, and protect your sensitive data
            from breaches. Our team ensures your cloud apps meet regulatory compliance, and we constantly
            update your security policies to adapt to new threats—so you get the freedom and flexibility of the
            cloud, minus the risks.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Cloud Access Security</h2>
              <p className="text-gray-600">
                Our cloud access security solutions provide granular control over who can access your cloud resources. 
                We implement multi-factor authentication, role-based access controls, and just-in-time privilege 
                elevation to prevent unauthorized access. Our comprehensive identity management ensures only authorized 
                personnel can access sensitive cloud data and applications.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Data Protection</h2>
              <p className="text-gray-600">
                Protect your cloud-hosted data with our advanced encryption and data loss prevention tools. We implement 
                encryption for data at rest and in transit, with secure key management to prevent unauthorized decryption. 
                Our intelligent data classification systems identify and protect sensitive information based on content, 
                ensuring regulatory compliance and data security.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Cloud Environment Monitoring</h2>
              <p className="text-gray-600">
                Our 24/7 cloud monitoring services detect suspicious activities and potential security incidents in real-time. 
                We implement advanced threat detection across your cloud infrastructure, with automated alerts and rapid 
                response protocols. Our security experts continuously analyze logs and traffic patterns to identify emerging 
                threats before they can impact your business.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Compliance Management</h2>
              <p className="text-gray-600">
                Navigate complex regulatory requirements with our cloud compliance expertise. We ensure your cloud 
                deployments meet industry standards like GDPR, HIPAA, and PCI DSS with automated compliance checks and 
                documentation. Our regular audits and remediation services keep your cloud environment aligned with 
                evolving regulations, protecting your business from costly penalties.
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

export default CloudSecurity;
