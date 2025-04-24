
import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ResponseGuarantee } from './contact/ResponseGuarantee';
import { ContactInfo } from './contact/ContactInfo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need reliable IT services? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ContactForm />
          <div>
            <ResponseGuarantee />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
