
import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose IT Launch?</h2>
            <p className="text-lg text-gray-700 mb-8">
              IT Launch Solutions provides comprehensive IT, security, and managed services with predictable, set fees and a dedicated account manager for every client. Our 24/7 monitoring ensures your systems stay secure and operational at all times.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Dedicated Account Manager</h3>
                  <p className="text-gray-600">Personal attention from professionals who understand your business needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Predictable Monthly Fees</h3>
                  <p className="text-gray-600">No surprises, just reliable service at a predictable cost.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Rapid Response Time</h3>
                  <p className="text-gray-600">Our team responds quickly to resolve issues and minimize downtime.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 rounded-lg p-8 text-white">
                  <Shield className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Enterprise Grade Security</h3>
                  <p>Protecting your business with industry-leading security solutions.</p>
                </div>
                
                <div className="bg-blue-500 rounded-lg p-8 text-white">
                  <Clock className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">24/7 Monitoring</h3>
                  <p>Round-the-clock monitoring and protection for your critical systems.</p>
                </div>
                
                <div className="bg-blue-500 rounded-lg p-8 text-white">
                  <CheckCircle className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Certified Experts</h3>
                  <p>Our team consists of certified professionals with extensive experience.</p>
                </div>
                
                <div className="bg-blue-600 rounded-lg p-8 text-white">
                  <Shield className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Disaster Recovery</h3>
                  <p>Comprehensive plans to protect your data and ensure business continuity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
