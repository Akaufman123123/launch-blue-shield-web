
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ResponseGuarantee: React.FC = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-8 text-white mb-8">
      <h3 className="text-2xl font-bold mb-6">Rapid Response Guarantee</h3>
      <p className="text-lg mb-6">
        We pride ourselves on responding quickly to all client inquiries. Your business demands prompt attention, and we deliver.
      </p>
      
      <div className="flex items-center space-x-3 mb-4">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <span>Immediate acknowledgment of your request</span>
      </div>
      
      <div className="flex items-center space-x-3 mb-4">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <span>Technical support within minutes</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <span>Dedicated account manager for your business</span>
      </div>
    </div>
  );
};
