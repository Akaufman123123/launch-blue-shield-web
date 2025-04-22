
import React from 'react';
import { ContactSection } from '@/components/ContactSection';

const AIMonitoring = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">AI-Powered Monitoring</h1>
      <p className="text-lg text-gray-700 mb-6">
        Stay ahead of IT problems with advanced, AI-driven monitoring. Our intelligent systems analyze
        performance data, predict hardware or software issues before they result in downtime, and alert our
        team the moment something needs attention. Enjoy proactive maintenance, optimized performance,
        and a technology environment that’s always one step ahead.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default AIMonitoring;
