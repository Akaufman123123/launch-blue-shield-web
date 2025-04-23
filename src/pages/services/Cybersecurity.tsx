import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cybersecurity Services | IT Launch Solutions</title>
        <meta name="description" content="Advanced cybersecurity solutions including cloud security, network protection, and threat prevention for your business." />
        <meta name="keywords" content="cybersecurity, cloud security, network security, data protection, threat prevention" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-16 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" 
              alt="Advanced Cybersecurity Solutions" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">Cybersecurity</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Protect your business with our comprehensive cybersecurity solutions. We provide advanced protection 
            for your digital assets through multi-layered security measures, including cloud security infrastructure, 
            network monitoring, and threat detection. Our cloud security services ensure your data remains protected 
            whether it's stored on-premises or in the cloud, with features like encrypted storage, secure access controls, 
            and real-time threat monitoring. We implement industry-leading security protocols to safeguard your sensitive 
            information across all platforms and environments.
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
};

export default Cybersecurity;
