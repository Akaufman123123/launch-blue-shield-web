
import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

export const ITLaunchLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg text-white">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <div className="ml-2 text-2xl font-bold text-blue-700">
        <span>IT</span>
        <span className="text-blue-500">Launch</span>
      </div>
    </div>
  );
};

export const ITLaunchLogoSmall: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg text-white">
        <Shield className="w-5 h-5" />
      </div>
      <span className="ml-1 text-xl font-bold text-blue-700">IT<span className="text-blue-500">Launch</span></span>
    </div>
  );
};
