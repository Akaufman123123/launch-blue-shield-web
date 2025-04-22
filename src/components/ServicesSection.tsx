import React from 'react';
import { 
  ShieldCheck, 
  Server, 
  Wifi, 
  Database, 
  Zap, 
  Lock,
  MonitorCheck,
  Phone,
  BrainCircuit
} from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Solutions',
    description: 'Advanced protection for your digital assets with firewall, email, and endpoint security.'
  },
  {
    icon: Server,
    title: 'Server Management',
    description: 'Expert setup and management of your servers with 24/7 monitoring and maintenance.'
  },
  {
    icon: Wifi,
    title: 'Network Setup & Management',
    description: 'Reliable network infrastructure design, implementation, and ongoing support.'
  },
  {
    icon: Database,
    title: 'Disaster & Data Recovery',
    description: 'Comprehensive backup and recovery solutions to protect your critical data.'
  },
  {
    icon: Lock,
    title: 'Cloud Security',
    description: 'Secure cloud solutions with managed access control and data protection.'
  },
  {
    icon: Zap,
    title: 'IT Planning & Architecture',
    description: 'Strategic IT planning aligned with your business goals and future growth.'
  },
  {
    icon: MonitorCheck,
    title: 'Workstation Management',
    description: 'Complete endpoint management with security, updates, and performance optimization.'
  },
  {
    icon: Phone,
    title: 'Business Phone Systems',
    description: 'Modern communication solutions including VoIP and integrated phone systems.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Monitoring',
    description: 'Advanced AI-driven monitoring systems to predict and prevent potential IT issues.'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive IT Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end IT solutions with predictable, set fees and a dedicated account manager for every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg text-blue-600 mb-6 mx-auto">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
