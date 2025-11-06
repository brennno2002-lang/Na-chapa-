
import React from 'react';

interface HeroProps {
  scrollToSection: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1604467795338-02d762025232?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Burger sizzling on a hot grill with flames"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Sabor que <span className="text-orange-500">Pega Fogo</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-gray-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Hambúrgueres artesanais, grelhados na chapa e petiscos irresistíveis feitos com paixão.
        </p>
        <button
          onClick={scrollToSection}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-xl"
        >
          Ver Cardápio
        </button>
      </div>
    </section>
  );
};

export default Hero;