
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const ITPlanning = () => (
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <title>Strategic IT Planning & Architecture Services | IT Launch Solutions</title>
      <meta name="description" content="Strategic IT planning and technology architecture services. Align technology investments with business goals and design scalable IT systems." />
      <meta name="keywords" content="IT planning, technology architecture, strategic planning, IT budget management, technology roadmap" />
    </Helmet>
    <Header />
    <div className="flex-grow mt-16 pt-6">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80" 
            alt="Strategic IT Planning Services" 
            className="w-full h-80 object-cover" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-blue-800">IT Planning & Architecture</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Take control of your IT future with strategic planning and technology architecture services.
          We align technology investments with your business goals, analyze workflows to identify efficiencies,
          and design scalable IT systems. Our experts help you choose the right tools, manage budgets, and
          ensure that your tech evolves alongside your company for ongoing success.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Technology Roadmapping</h2>
            <p className="text-gray-600">
              Our technology roadmapping services create clear, actionable plans for your IT evolution. We analyze 
              your current infrastructure, identify gaps and opportunities, and develop phased implementation strategies. 
              This strategic approach ensures your technology investments align with business objectives while 
              minimizing disruption and maximizing ROI.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">IT Budget Planning</h2>
            <p className="text-gray-600">
              Take control of technology spending with our comprehensive IT budget planning. We help you forecast 
              costs, prioritize investments, and identify opportunities for optimization. Our detailed financial 
              models account for operational expenses, capital investments, and total cost of ownership, ensuring 
              predictable IT spending aligned with your business goals.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">System Architecture Design</h2>
            <p className="text-gray-600">
              Our expert architects design scalable, resilient technology systems tailored to your business requirements. 
              We create detailed blueprints for your IT infrastructure, applications, and integrations with future growth 
              in mind. Our designs incorporate industry best practices and emerging technologies to create flexible 
              systems that evolve with your business needs.
            </p>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Digital Transformation</h2>
            <p className="text-gray-600">
              Navigate the complexities of digital transformation with our strategic guidance. We help you identify 
              opportunities to streamline operations, enhance customer experiences, and create new revenue streams 
              through technology. Our change management approach ensures successful adoption of new digital tools 
              and processes across your organization.
            </p>
          </Card>
        </div>
      </div>
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default ITPlanning;
