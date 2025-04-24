
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DataRecovery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Data Recovery Services</h1>
        <div className="max-w-3xl mx-auto">
          <img 
            src="/lovable-uploads/852ae307-06c4-41b6-b57c-e84a12b51789.png" 
            alt="Data Recovery Services" 
            className="w-full rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg text-gray-700 mb-6">
            Losing critical data can be a nightmare for any business. At IT Launch Solutions, we specialize in providing comprehensive data recovery services to retrieve your valuable information quickly and securely.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Data Recovery Process</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li><strong>Initial Consultation:</strong> We assess the data loss scenario to determine the best recovery approach.</li>
            <li><strong>Data Evaluation:</strong> Our experts evaluate the damaged media to understand the extent of the data loss.</li>
            <li><strong>Recovery Execution:</strong> Using advanced tools and techniques, we recover your data in a secure environment.</li>
            <li><strong>Verification and Delivery:</strong> We verify the recovered data and deliver it to you on a secure medium.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6">
            With years of experience in the IT sector, we understand the importance of data integrity and security. Our data recovery services are tailored to meet the unique needs of your business, ensuring minimal downtime and maximum data retrieval.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li><strong>Expert Technicians:</strong> Our team consists of highly skilled data recovery specialists.</li>
            <li><strong>Advanced Technology:</strong> We use state-of-the-art tools and techniques for data retrieval.</li>
            <li><strong>Secure Environment:</strong> Your data is recovered in a secure and confidential environment.</li>
            <li><strong>Fast Turnaround:</strong> We strive to recover your data as quickly as possible to minimize disruption.</li>
          </ul>
          <p className="text-lg text-gray-700">
            Don't let data loss cripple your business. Contact IT Launch Solutions today for reliable and efficient data recovery services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataRecovery;
