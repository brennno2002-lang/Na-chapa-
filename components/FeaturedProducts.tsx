
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const featuredItems: MenuItem[] = [
  MENU_DATA[1].items[0], // Hamburger Artisanal Maison
  MENU_DATA[0].items[0], // Picanha Grill
  MENU_DATA[2].items[3], // Piscine Cheddar Burger
];

const ProductCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
    <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
      <p className="font-roboto text-[#92908a] mb-4">{item.description}</p>
      <div className="text-2xl font-extrabold text-orange-500">{item.price}</div>
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => {
  return (
    <section className="bg-[#323130] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Os Mais Pedidos</h2>
          <p className="text-lg text-[#92908a] mt-2">Os favoritos da galera que você precisa provar.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
