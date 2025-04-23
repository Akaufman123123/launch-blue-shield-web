import React from 'react';
import { ITLaunchLogo } from './Logo';
import { useNavigate, Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <ITLaunchLogo className="mb-6" />
            <p className="text-gray-400 mb-6">
              Comprehensive IT, security, and managed services with predictable fees and dedicated support.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:info@itlaunchsolutions.com" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/#services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/#clients')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/#about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation('/services/cybersecurity')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/server-management')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Server Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/cloud-security')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Cloud Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/phone-systems')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Business Phone Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/data-recovery')}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Data Recovery
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Email: info@itlaunchsolutions.com
              </li>
              <li className="text-gray-400">
                Support: 24/7 Available
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} IT Launch. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors underline"
                onClick={() => handleNavigation('/privacy-policy')}
              >
                Privacy Policy
              </button>
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors underline"
                onClick={() => handleNavigation('/terms-of-service')}
              >
                Terms of Service
              </button>
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors underline"
                onClick={() => handleNavigation('/sitemap')}
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
