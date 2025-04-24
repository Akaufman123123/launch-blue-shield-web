
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
        <title>Business Phone System Solutions | IT Launch Solutions</title>
        <meta name="description" content="Modern business phone solutions including VoIP and integrated systems with features like voicemail-to-email, call routing, and conferencing." />
        <meta name="keywords" content="business phone systems, VoIP, call routing, conferencing, remote access, telecommunications" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-16 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2000&q=80" 
              alt="Modern Business Phone Solutions" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Business Phone Systems</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Empower your team with flexible, modern business phone solutions. We design and deploy VoIP and integrated
            phone systems that connect employees and clients with clarity and reliability. Our platforms include features
            like voicemail-to-email, call routing, conferencing, and remote access—so your business can communicate
            professionally any time, anywhere.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">VoIP Integration</h2>
              <p className="text-gray-600">
                Our Voice over IP (VoIP) solutions deliver crystal-clear communication while reducing costs compared to 
                traditional phone systems. We seamlessly integrate VoIP technology with your existing infrastructure, 
                enabling features like video conferencing, instant messaging, and presence indication. This unified 
                communication approach improves team collaboration regardless of location.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Advanced Call Features</h2>
              <p className="text-gray-600">
                Enhance your business communications with advanced call management capabilities. Our systems provide 
                intelligent call routing, automated attendants, call queuing, and detailed analytics. These features 
                ensure callers are directed to the right person quickly, improving customer satisfaction and streamlining 
                internal workflows.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Mobile Integration</h2>
              <p className="text-gray-600">
                Stay connected and professional wherever you work with our mobile-integrated phone solutions. We extend 
                your office phone system to smartphones and tablets, allowing team members to make and receive business 
                calls using their work number while away from the desk. This seamless integration maintains consistent 
                communication regardless of device or location.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Scalable Solutions</h2>
              <p className="text-gray-600">
                Our business phone systems grow alongside your company with minimal disruption or additional hardware. 
                Adding new users, locations, or features can be done quickly and efficiently through our cloud-based 
                management interface. This scalability ensures your communication system remains cost-effective while 
                meeting your evolving business requirements.
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
