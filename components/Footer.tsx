import React from 'react';
import Logo from './Logo';
import { InstagramIcon, WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#323130] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Logo />
          <p className="text-[#92908a] font-roboto text-center md:text-left">
            &copy; {new Date().getFullYear()} Na Chapa Snack House. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/nachapa_lux/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#92908a] hover:text-orange-500 transition duration-300">
              <InstagramIcon className="w-7 h-7" />
            </a>
            <a href="https://wa.me/352691244215" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#92908a] hover:text-orange-500 transition duration-300">
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;