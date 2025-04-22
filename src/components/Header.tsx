
import React, { useState, useEffect } from 'react';
import { ITLaunchLogo, ITLaunchLogoSmall } from './Logo';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'Clients', to: 'clients' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {isScrolled ? <ITLaunchLogoSmall /> : <ITLaunchLogo />}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              } hover:text-blue-600 cursor-pointer transition-colors font-medium`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Support
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Get Support
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
