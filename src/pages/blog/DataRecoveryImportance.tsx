
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DatabaseBackup } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DataRecoveryImportance = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>The Importance of Data Recovery and Business Continuity | IT Launch Blog</title>
        <meta name="description" content="Learn why having a solid data recovery and business continuity plan is crucial for your organization's survival in today's digital landscape." />
      </Helmet>
      <Header />
      <main className="flex-grow pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <DatabaseBackup className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-600">April 28, 2025</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-blue-800">The Importance of Data Recovery and Business Continuity</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-6 text-xl text-gray-600">
              In today's digital-first world, data is the lifeblood of business operations. Understanding the importance of data recovery and having a solid business continuity plan is crucial for organizational survival.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">The Cost of Data Loss</h2>
            <p className="mb-6">
              Data loss can be catastrophic for businesses of any size. From critical customer information to financial records, losing access to vital data can bring operations to a standstill and result in significant financial losses.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Key Components of Data Recovery</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>Regular automated backups</li>
              <li>Offsite data storage solutions</li>
              <li>Disaster recovery protocols</li>
              <li>Regular testing and verification</li>
              <li>Employee training and awareness</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Business Continuity Planning</h2>
            <p className="mb-6">
              A comprehensive business continuity plan ensures that your organization can maintain essential functions during and after a disaster. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>Risk assessment and business impact analysis</li>
              <li>Recovery strategies and procedures</li>
              <li>Emergency response guidelines</li>
              <li>Communication protocols</li>
              <li>Regular plan testing and updates</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Read More Articles</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline"
                onClick={() => navigate('/blog/firewalls-importance')}
                className="flex-1"
              >
                Read about Firewall Security
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/blog/it-planning-importance')}
                className="flex-1"
              >
                Learn about IT Planning
              </Button>
            </div>
          </div>
        </article>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default DataRecoveryImportance;
