
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';

const Cybersecurity = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80" 
            alt="Cybersecurity Solutions" 
            className="w-full h-64 object-cover" 
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Cybersecurity Solutions</h1>
        <p className="text-lg text-gray-700 mb-6">
          Safeguard your business from modern digital threats with our comprehensive cybersecurity services.
          We provide advanced firewall configurations, proactive email filtering, and endpoint protection
          to ensure your networks, devices, and data are secure. Our security experts conduct ongoing vulnerability
          assessments and implement best-in-class solutions tailored to your industry. We help you maintain
          compliance, stop cyberattacks before they start, and keep your reputation intact, so you can focus on
          serving your customers without worry.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Threat Prevention</h3>
            <p className="text-gray-600">
              Our advanced threat prevention technology identifies and blocks malware, ransomware, and zero-day attacks 
              before they can compromise your systems. We employ multiple layers of security to protect your business 
              from even the most sophisticated threats.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Security Assessments</h3>
            <p className="text-gray-600">
              We conduct regular security audits and vulnerability assessments to identify potential weaknesses in your 
              systems. Our experts will provide actionable recommendations to strengthen your security posture and 
              prevent future breaches.
            </p>
          </Card>
        </div>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default Cybersecurity;
