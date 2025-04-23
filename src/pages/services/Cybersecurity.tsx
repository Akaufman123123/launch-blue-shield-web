
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';

const Cybersecurity = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Cybersecurity Solutions</h1>
        <p className="text-lg text-gray-700 mb-6">
          Safeguard your business from modern digital threats with our comprehensive cybersecurity services.
          We provide advanced firewall configurations, proactive email filtering, and endpoint protection
          to ensure your networks, devices, and data are secure. Our security experts conduct ongoing vulnerability
          assessments and implement best-in-class solutions tailored to your industry. We help you maintain
          compliance, stop cyberattacks before they start, and keep your reputation intact, so you can focus on
          serving your customers without worry.
        </p>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default Cybersecurity;
