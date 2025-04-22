
import React from "react";
import { Link } from "react-router-dom";

const Sitemap: React.FC = () => (
  <div className="container mx-auto px-4 py-20 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Sitemap</h1>
    <ul className="space-y-3 text-lg">
      <li>
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      </li>
      <li>
        <a href="#services" className="text-blue-600 hover:underline">Services</a>
      </li>
      <li>
        <a href="#clients" className="text-blue-600 hover:underline">Clients</a>
      </li>
      <li>
        <a href="#about" className="text-blue-600 hover:underline">About Us</a>
      </li>
      <li>
        <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
      </li>
      <li>
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
      </li>
      <li>
        <Link to="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
      </li>
    </ul>
  </div>
);

export default Sitemap;
