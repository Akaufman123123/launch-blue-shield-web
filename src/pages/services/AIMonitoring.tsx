
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const AIMonitoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AI-Powered IT Monitoring Solutions | IT Launch Solutions</title>
        <meta name="description" content="Advanced AI-driven monitoring systems that predict hardware and software issues before they cause downtime, providing proactive maintenance." />
        <meta name="keywords" content="AI monitoring, predictive maintenance, proactive IT, performance optimization, system analytics" />
      </Helmet>
      <Header />
      <div className="flex-grow mt-16 pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/720f0811-6667-4ed4-9885-b436b7d62257.png" 
              alt="AI-Powered IT Monitoring" 
              className="w-full h-80 object-cover" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">AI-Powered Monitoring</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Stay ahead of IT problems with advanced, AI-driven monitoring. Our intelligent systems analyze
            performance data, predict hardware or software issues before they result in downtime, and alert our
            team the moment something needs attention. Enjoy proactive maintenance, optimized performance,
            and a technology environment that's always one step ahead.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Predictive Analytics</h2>
              <p className="text-gray-600">
                Our AI-powered monitoring uses advanced predictive analytics to identify potential failures before they occur. 
                By analyzing historical data and performance patterns, our systems can detect early warning signs of hardware 
                degradation, capacity limitations, and software conflicts. This proactive approach allows us to address issues 
                before they impact your business operations.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Real-time Anomaly Detection</h2>
              <p className="text-gray-600">
                Our intelligent monitoring platform continuously analyzes your IT environment to identify abnormal behavior. 
                Using machine learning algorithms, we establish baseline performance metrics and immediately detect deviations 
                that could indicate security breaches, performance issues, or system failures. This real-time detection 
                capability minimizes response times and reduces potential damage.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Automated Remediation</h2>
              <p className="text-gray-600">
                Many common IT issues can be resolved automatically with our AI-powered monitoring system. We implement 
                intelligent automation workflows that can restart services, clear cache, optimize storage, and perform 
                other maintenance tasks without human intervention. This automation reduces downtime and allows our 
                team to focus on more complex issues requiring expert attention.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Performance Optimization</h2>
              <p className="text-gray-600">
                Our AI monitoring doesn't just prevent problems—it also identifies opportunities to enhance performance. 
                By analyzing resource utilization, application behavior, and user patterns, our systems recommend 
                optimization strategies for your IT infrastructure. These data-driven insights help you maximize the 
                value of your technology investments and improve user experiences.
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

export default AIMonitoring;
