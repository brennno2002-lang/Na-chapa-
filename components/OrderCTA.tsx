
import React from 'react';

const OrderCTA: React.FC = () => {
  return (
    <section className="bg-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-2">Bateu a Fome?</h2>
        <p className="text-lg text-white/90 mb-6">Peça agora e receba o sabor Na Chapa na sua casa!</p>
        <div className="flex justify-center items-center gap-4">
            <a href="#" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                iFood
            </a>
            <a href="#" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-600">
                Uber Eats
            </a>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;
