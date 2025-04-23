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
        <title>Data Recovery & Disaster Protection | IT Launch Solutions</title>
        <meta name="description" content="Professional data recovery services for businesses. Protect your critical data with automated backups, secure storage, and rapid restoration solutions." />
        <meta name="keywords" content="data recovery, disaster recovery, business continuity, data backup, data restoration, secure storage" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-16 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80" 
              alt="Data Recovery Services" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Disaster & Data Recovery</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Protect your critical business data from disasters, accidental deletion, and hardware failures.
            Our data recovery solutions include regular, automated backups, secure offsite storage, and
            rapid data restoration when needed. We help you prepare for the worst—so you can get back to business
            fast if something goes wrong. Let our team design your backup and recovery plan to ensure
            business continuity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Automated Backup Solutions</h2>
              <p className="text-gray-600">
                Our automated backup systems ensure your critical data is regularly saved without manual intervention. 
                We implement intelligent scheduling that minimizes performance impact while maintaining comprehensive 
                protection of your files, databases, and system configurations. Your data is continuously protected 
                without disrupting your business operations.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Secure Offsite Storage</h2>
              <p className="text-gray-600">
                Protect your backups from local disasters with our secure offsite storage solutions. Your data is 
                encrypted and transferred to geographically diverse locations, ensuring it remains safe even if your 
                primary location is affected. Our redundant storage systems guarantee your backups are always available 
                when you need them most.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Rapid Restoration</h2>
              <p className="text-gray-600">
                When disaster strikes, our rapid restoration services minimize downtime and data loss. Our recovery 
                systems can quickly restore individual files or complete systems, getting your business back online 
                fast. We regularly test restoration processes to ensure they work flawlessly when needed, giving you 
                confidence in your disaster recovery plan.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Business Continuity Planning</h2>
              <p className="text-gray-600">
                We develop comprehensive business continuity strategies that go beyond simple backups. Our experts 
                analyze your critical systems and create detailed recovery plans with defined RTOs and RPOs. This 
                holistic approach ensures your business can continue operating during and after unexpected events, 
                preserving both data and operational capabilities.
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
