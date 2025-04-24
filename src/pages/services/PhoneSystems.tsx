
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const PhoneSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Business Phone Systems | IT Launch Solutions</title>
        <meta name="description" content="Professional business phone system solutions. We provide comprehensive VoIP and cloud-based phone systems for modern businesses." />
        <meta name="keywords" content="business phone systems, VoIP, cloud telephony, phone system integration, business communications" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-10 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/5a4750da-a4ee-4c36-91bd-25f8e665085e.png" 
              alt="Business Phone Systems" 
              className="w-full h-80 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Business Phone Systems</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In today's fast-paced business environment, having a reliable and efficient phone system is crucial. 
            At IT Launch Solutions, we offer comprehensive business phone system services designed to meet the unique 
            needs of your organization.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">System Design & Implementation</h2>
              <p className="text-gray-600">
                We work with you to design a phone system that aligns with your business goals and operational 
                requirements. Our team handles the entire implementation process, ensuring a seamless transition 
                with minimal disruption.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">VoIP Solutions</h2>
              <p className="text-gray-600">
                Leverage the power of Voice over Internet Protocol (VoIP) to make calls over the internet. 
                VoIP systems offer greater flexibility, scalability, and cost savings compared to traditional 
                phone systems.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Cloud-Based Systems</h2>
              <p className="text-gray-600">
                Embrace the cloud for your phone system needs. Our cloud-based solutions provide advanced features, 
                easy management, and the ability to access your phone system from anywhere with internet connectivity.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Integration & Support</h2>
              <p className="text-gray-600">
                Integrate your phone system with other business applications and receive ongoing maintenance and 
                support. Our support team is available to address any issues and provide timely resolutions.
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

export default PhoneSystems;
