import React from 'react';
import { MapPinIcon, ClockIcon, InstagramIcon, WhatsAppIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-800/30 py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Onde nos Encontrar</h2>
          <p className="text-lg text-[#92908a] mt-2">Estamos esperando por você!</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
              <ul className="space-y-6 text-lg font-roboto">
                <li className="flex items-start">
                  <MapPinIcon className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">166A Rue du Brill, 3898 Foetz Mondercange, Luxemburgo</span>
                </li>
                 <li className="flex items-start">
                  <PhoneIcon className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">+352 691 244 215</span>
                </li>
                <li className="flex items-start">
                  <ClockIcon className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong>Segunda - Sábado:</strong> 12:00–14:30, 18:30–21:30<br/>
                    <span className="text-sm text-[#92908a]">Fechado aos Domingos</span>
                  </span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/nachapa_lux/" target="_blank" rel="noopener noreferrer" className="text-[#92908a] hover:text-orange-500 transition duration-300"><InstagramIcon className="w-8 h-8"/></a>
                  <a href="https://wa.me/352691244215" target="_blank" rel="noopener noreferrer" className="text-[#92908a] hover:text-orange-500 transition duration-300"><WhatsAppIcon className="w-8 h-8"/></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <a href="https://share.google/gqNxdKb4KTUK43f7H" target="_blank" rel="noopener noreferrer">
                 <img src="https://lh5.googleusercontent.com/p/AF1QipNX4xL3gE_J-VjB7oK4Q3Lp9p0_f9wF9wI-f_w=w816-h612-k-no" alt="Localização do Na Chapa Snack House" className="w-full h-full object-cover"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;