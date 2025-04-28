import React from "react";
import { Link } from "react-router-dom";

const Sitemap: React.FC = () => (
  <div className="container mx-auto px-4 py-20 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Sitemap</h1>
    
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Main Pages</h2>
        <ul className="space-y-3 text-lg">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li>
            <a href="#about" className="text-blue-600 hover:underline">About Us</a>
          </li>
          <li>
            <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Services</h2>
        <ul className="space-y-3 text-lg">
          <li>
            <Link to="/services/cybersecurity" className="text-blue-600 hover:underline">Cybersecurity</Link>
          </li>
          <li>
            <Link to="/services/server-management" className="text-blue-600 hover:underline">Server Management</Link>
          </li>
          <li>
            <Link to="/services/network-setup" className="text-blue-600 hover:underline">Network Setup</Link>
          </li>
          <li>
            <Link to="/services/data-recovery" className="text-blue-600 hover:underline">Data Recovery</Link>
          </li>
          <li>
            <Link to="/services/it-planning" className="text-blue-600 hover:underline">IT Planning</Link>
          </li>
          <li>
            <Link to="/services/workstation-management" className="text-blue-600 hover:underline">Workstation Management</Link>
          </li>
          <li>
            <Link to="/services/phone-systems" className="text-blue-600 hover:underline">Phone Systems</Link>
          </li>
          <li>
            <Link to="/services/ai-monitoring" className="text-blue-600 hover:underline">AI Monitoring</Link>
          </li>
          <li>
            <Link to="/services/device-management" className="text-blue-600 hover:underline">Device Management</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Blog</h2>
        <ul className="space-y-3 text-lg">
          <li>
            <Link to="/blog" className="text-blue-600 hover:underline">Blog Home</Link>
          </li>
          <li>
            <Link to="/blog/firewalls-importance" className="text-blue-600 hover:underline">The Critical Role of Firewalls</Link>
          </li>
          <li>
            <Link to="/blog/it-planning-importance" className="text-blue-600 hover:underline">Strategic IT Planning</Link>
          </li>
          <li>
            <Link to="/blog/data-recovery-importance" className="text-blue-600 hover:underline">Data Recovery and Business Continuity</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Legal</h2>
        <ul className="space-y-3 text-lg">
          <li>
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
          </li>
        </ul>
      </section>
    </div>
  </div>
);

export default Sitemap;
