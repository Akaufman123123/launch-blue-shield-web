import React from 'react';

export const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: "Jade Capital",
      logo: "/lovable-uploads/525770f0-2cb4-4480-8613-8b5724cdcd95.png",
      website: "#"
    },
    {
      name: "SBH Laboratories",
      logo: "/lovable-uploads/3f3a3794-e1df-43b6-9606-8a4b1b1604bf.png",
      website: "http://sbhlaboratories.com/"
    },
    {
      name: "Atlas Health Group",
      logo: "/lovable-uploads/dd1d70e0-9cdb-4d26-af09-5d5939273027.png",
      website: "https://atlashealthcaregroup.com/"
    },
    {
      name: "Achievers ABA Therapy",
      logo: "/lovable-uploads/9744344d-f84d-4e73-a9ba-4834ac90dfc0.png",
      website: "https://achieverstherapy.com/"
    },
    {
      name: "Clarity Diagnostics",
      logo: "/lovable-uploads/852ae307-06c4-41b6-b57c-e84a12b51789.png",
      website: "https://claritydiagnostics.com/"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional IT services to healthcare organizations and businesses across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <a 
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer" 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32`}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-20 max-w-full object-contain"
              />
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            Join our growing list of satisfied clients who trust IT Launch with their technology infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};
