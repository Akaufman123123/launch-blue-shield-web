import React, { useState, useEffect } from 'react';
import { ITLaunchLogo, ITLaunchLogoSmall } from './Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/#services' },
  { name: 'Clients', to: '/#clients' },
  { name: 'About', to: '/#about' },
  { name: 'Contact', to: '/#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      
      // If we're already on the home page
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home page with the anchor
        navigate('/');
        // Need a small timeout to let the new page load before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Regular navigation
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white py-3 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          {isScrolled ? <ITLaunchLogoSmall /> : <ITLaunchLogo />}
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.to)}
              className={`${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              } hover:text-blue-600 cursor-pointer transition-colors font-medium`}
            >
              {item.name}
            </button>
          ))}
          
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
              <button
                key={item.name}
                onClick={() => handleNavigation(item.to)}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2 font-medium text-left"
              >
                {item.name}
              </button>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
