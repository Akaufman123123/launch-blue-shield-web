
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Cybersecurity = () => (
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <title>Advanced Cybersecurity Solutions | IT Launch Solutions</title>
      <meta name="description" content="Comprehensive cybersecurity solutions for businesses. Advanced protection with firewall configurations, email filtering, and endpoint security to safeguard your digital assets." />
      <meta name="keywords" content="cybersecurity, network security, data protection, firewall, endpoint protection, threat prevention" />
    </Helmet>
    <Header />
    <div className="flex-grow mt-24 pt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80" 
            alt="Advanced Cybersecurity Solutions" 
            className="w-full h-80 object-cover" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Cybersecurity Solutions</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Safeguard your business from sophisticated digital threats with our enterprise-grade cybersecurity services.
          We provide advanced firewall configurations, proactive email filtering, and comprehensive endpoint protection
          to ensure your networks, devices, and sensitive data remain secure. Our certified security experts conduct ongoing vulnerability
          assessments and implement best-in-class solutions tailored to your specific industry requirements. We help you maintain
          regulatory compliance, prevent cyberattacks before they compromise your systems, and protect your business reputation, 
          allowing you to focus on serving your customers without security concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Threat Prevention</h2>
            <p className="text-gray-600">
              Our multi-layered threat prevention technology identifies and blocks malware, ransomware, and zero-day attacks 
              before they can compromise your systems. We employ next-generation security tools to protect your business 
              from even the most sophisticated threats, including advanced persistent threats and targeted attacks that 
              traditional solutions miss.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Security Assessments</h2>
            <p className="text-gray-600">
              We conduct comprehensive security audits and penetration testing to identify potential vulnerabilities in your 
              systems before attackers can exploit them. Our experts provide actionable recommendations to strengthen your 
              security posture and implement industry best practices to prevent future breaches and maintain compliance with 
              regulatory requirements.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Email & Web Protection</h2>
            <p className="text-gray-600">
              Our advanced email security solutions filter out spam, phishing attempts, and malicious attachments before they 
              reach your employees' inboxes. We also implement web filtering and content inspection to block dangerous websites 
              and prevent data leaks, protecting your organization from both external threats and accidental insider risks.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Incident Response</h2>
            <p className="text-gray-600">
              In the event of a security incident, our rapid response team quickly identifies the scope of the breach, 
              contains the threat, and restores normal operations. We help you develop and implement incident response 
              plans tailored to your business, ensuring minimal disruption and data loss while meeting all compliance 
              reporting requirements.
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
