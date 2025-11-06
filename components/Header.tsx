
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  scrollToSection: (section: 'home' | 'menu' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', section: 'home' as const },
    { name: 'Cardápio', section: 'menu' as const },
    { name: 'Contato', section: 'contact' as const },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#323130]/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div onClick={() => scrollToSection('home')}>
            <Logo />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection(link.section); }}
                className="text-gray-300 hover:text-orange-500 transition duration-300 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="https://www.wedely.com/restaurant/207098-na-chapa" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
              Pedir Online
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#323130]">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => { e.preventDefault(); setIsOpen(false); scrollToSection(link.section); }}
                className="text-gray-300 hover:text-orange-500 transition duration-300 font-semibold text-lg"
              >
                {link.name}
              </a>
            ))}
             <a href="https://www.wedely.com/restaurant/207098-na-chapa" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4">
              Pedir Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;