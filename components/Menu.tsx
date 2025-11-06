
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md flex-shrink-0" />
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <h4 className="text-lg font-bold text-white">{item.name}</h4>
        <p className="text-lg font-bold text-orange-500 whitespace-nowrap ml-4">{item.price}</p>
      </div>
      <p className="text-sm font-roboto text-[#92908a] mt-1">{item.description}</p>
    </div>
  </div>
);

const Menu: React.FC = () => {
  return (
    <section className="bg-gray-800/30 py-20" id="menu">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nosso Cardápio</h2>
          <p className="text-lg text-[#92908a] mt-2">Ingredientes frescos, sabor autêntico.</p>
           <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="space-y-12">
          {MENU_DATA.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">{category.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <MenuItemCard key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
