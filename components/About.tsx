
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Nossa História</h2>
            <div className="mt-2 mb-6 w-24 h-1 bg-orange-500 rounded"></div>
            <p className="font-roboto text-gray-300 mb-4 leading-relaxed">
              Na Chapa nasceu da paixão por comida de verdade e momentos felizes. Somos mais do que uma casa de lanches; somos um ponto de encontro para amigos e família que apreciam ingredientes frescos, um ambiente acolhedor e, claro, o sabor inconfundível do grill.
            </p>
            <p className="font-roboto text-gray-300 leading-relaxed">
              Cada hambúrguer, cada prato é preparado com o máximo cuidado e carinho, sempre buscando a combinação perfeita de sabores para criar uma experiência memorável. Venha nos visitar e sinta o calor da nossa chapa!
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=500&auto=format&fit=crop" 
              alt="Equipe Na Chapa" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
