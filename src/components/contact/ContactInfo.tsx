
import React from 'react';
import { Mail, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <p className="text-gray-700">info@itlaunchsolutions.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <p className="text-gray-700">24/7 Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};
