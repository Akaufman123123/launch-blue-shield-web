
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Clock, Server } from 'lucide-react';
import { Link } from 'react-scroll';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Secure, Reliable <span className="text-blue-600">IT Solutions</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              IT Launch provides comprehensive IT services with predictable fees and 24/7 monitoring to keep your systems secure and operational.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
                      <p className="text-gray-600">Comprehensive security solutions to protect your business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">24/7 Monitoring</h3>
                      <p className="text-gray-600">Round-the-clock monitoring for your critical systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Managed Services</h3>
                      <p className="text-gray-600">Predictable fees with dedicated account management</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-lg z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
