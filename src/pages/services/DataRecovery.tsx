
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const DataRecovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Data Recovery Services | IT Launch Solutions</title>
        <meta name="description" content="Professional data recovery services for businesses. We specialize in retrieving lost data quickly and securely from any storage device." />
        <meta name="keywords" content="data recovery, data retrieval, lost data recovery, business data recovery, IT services" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-10 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/49f3d231-826b-4588-b5ff-605c86852dff.png" 
              alt="Data Recovery Services" 
              className="w-full h-80 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Data Recovery Services</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Losing critical data can be a nightmare for any business. At IT Launch Solutions, we specialize in providing comprehensive data recovery services to retrieve your valuable information quickly and securely.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Initial Consultation</h2>
              <p className="text-gray-600">
                We assess the data loss scenario to determine the best recovery approach. Our expert team evaluates 
                the damaged media to understand the extent of the data loss and develops a customized recovery plan.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Data Evaluation</h2>
              <p className="text-gray-600">
                Our experts evaluate the damaged media to understand the extent of the data loss using advanced 
                diagnostic tools. This thorough assessment helps us determine the most effective recovery method.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Recovery Execution</h2>
              <p className="text-gray-600">
                Using advanced tools and techniques, we recover your data in a secure environment. Our recovery 
                process is designed to minimize any potential further damage to your storage devices while 
                maximizing data recovery success.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Verification & Delivery</h2>
              <p className="text-gray-600">
                We verify the recovered data and deliver it to you on a secure medium. Our thorough verification 
                process ensures that all recovered data is complete and intact before being returned to you.
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

export default DataRecovery;
