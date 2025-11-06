import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Plats",
    items: [
      { name: "Picanha Grill Na Chapa (200gr)", price: "18,90 €", description: "Chaque supplément de 100gr: 5,90 € | Cada suplemento de 100gr: 5,90 €", imageUrl: "https://images.unsplash.com/photo-1622634493855-35b910f56a5c?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Maminha Grill Na Chapa (200gr)", price: "17,90 €", description: "Chaque supplément de 100gr: 4,90 € | Cada suplemento de 100gr: 4,90 €", imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c7373051?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Filet de Poulet Grill (180gr)", price: "16,90 €", description: "Filé de frango tenro e saboroso, grelhado no ponto certo.", imageUrl: "https://images.unsplash.com/photo-1606071355442-1923376e4804?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Chicken Wings", price: "16,90 €", description: "Asinhas de frango crocantes com um toque picante.", imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Portion de riz", price: "3,90 €", description: "Acompanhamento clássico, arroz branco soltinho.", imageUrl: "https://images.unsplash.com/photo-1596560544242-e4bf5215e41a?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Portion de haricot noir", price: "3,90 €", description: "Feijão preto cremoso e bem temperado.", imageUrl: "https://images.unsplash.com/photo-1604247242205-5003a382c41c?q=80&w=400&h=400&auto=format&fit=crop" },
    ],
  },
  {
    title: "Snacks",
    items: [
      { name: "Hamburger Artisanal Maison", price: "13,90 €", description: "Pão brioche, blend de carnes da casa, queijo e salada fresca.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Bifana Maison", price: "10,90 €", description: "A tradicional bifana portuguesa, com um toque especial da casa.", imageUrl: "https://images.unsplash.com/photo-1634866847195-8167de7641f2?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Frites Gourmet Cheddar", price: "9,90 €", description: "Batatas fritas crocantes cobertas com cheddar cremoso e bacon.", imageUrl: "https://images.unsplash.com/photo-1576778203362-11a5b4117c4e?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Tacos Viande Hachée ou Poulet", price: "10,90 €", description: "Dois tacos recheados com sua escolha de carne moída ou frango.", imageUrl: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Spécial Tacos Picanha", price: "11,90 €", description: "Tacos irresistíveis com tiras de picanha grelhada.", imageUrl: "https://images.unsplash.com/photo-1599974579605-56ddc5184248?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Hamburger Végétarien", price: "13,90 €", description: "Hambúrguer de grão de bico, cogumelos e especiarias.", imageUrl: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Portion de frites", price: "3,90 €", description: "Batatas fritas douradas e crocantes.", imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Menu enfant", price: "7,90 €", description: "avec jus d'orange", imageUrl: "https://images.unsplash.com/photo-1502223594711-20a709291ab8?q=80&w=400&h=400&auto=format&fit=crop" },
    ],
  },
  {
    title: "Premium Na Chapa",
    items: [
      { name: "Premium Picanha (400gr)", price: "40,90 €", description: "Accompagnements: Sauce Fromage Maison", imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Premium Maminha (400gr)", price: "38,90 €", description: "Accompagnements: Sauce Fromage Maison", imageUrl: "https://images.unsplash.com/photo-1625938144367-5a7a095f7c30?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Premium Mixte (400gr)", price: "39,90 €", description: "Accompagnements: Sauce Fromage Maison", imageUrl: "https://images.unsplash.com/photo-1626082896492-763b719208e4?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Piscine Cheddar Burger", price: "16,90 €", description: "Accompagnements:", imageUrl: "https://plus.unsplash.com/premium_photo-1673809796288-e2142cec6360?q=80&w=400&h=400&auto=format&fit=crop" },
    ],
  },
  {
    title: "Boissons",
    items: [
      { name: "Coca-Cola / Coca-Cola Zero (33cl)", price: "3,00 €", description: "O refrigerante clássico para acompanhar sua refeição.", imageUrl: "https://images.unsplash.com/photo-1554118875-9bde357a15d2?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Sprite / Fanta (33cl)", price: "3,00 €", description: "Refrescante e borbulhante.", imageUrl: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Guaraná Antarctica", price: "3,50 €", description: "O sabor autêntico e refrescante do Brasil.", imageUrl: "https://images.unsplash.com/photo-1633519398018-b2668a644917?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Monster Energy", price: "3,50 €", description: "Para dar um gás no seu dia.", imageUrl: "https://images.unsplash.com/photo-1622543925917-763c34d1a941?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Fuze Tea / Multivitamine", price: "3,30 €", description: "Chá gelado ou suco multivitaminas.", imageUrl: "https://images.unsplash.com/photo-1578354636474-add658a41a41?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Coca-Cola / Coca-Cola Zero (50cl)", price: "3,70 €", description: "A dose certa para matar a sua sede.", imageUrl: "https://images.unsplash.com/photo-1622483767028-3f6e92c3ea09?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Sprite / Fanta (50cl)", price: "3,70 €", description: "Mais sabor para sua refeição.", imageUrl: "https://images.unsplash.com/photo-1581015933614-7d885d4529d5?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Rosport Blue / Viva (50cl)", price: "3,50 €", description: "Água mineral com ou sem gás para se hidratar.", imageUrl: "https://images.unsplash.com/photo-1607872013835-985698b6525a?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Café", price: "2,50 €", description: "Um bom café para finalizar.", imageUrl: "https://images.unsplash.com/photo-1511920183353-3c2c58a07f59?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Espresso", price: "2,00 €", description: "Café expresso forte e encorpado.", imageUrl: "https://images.unsplash.com/photo-1579992305312-300e843c08b7?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Thé", price: "2,50 €", description: "Uma seleção de chás quentes.", imageUrl: "https://images.unsplash.com/photo-1576092762791-d02d23595e6d?q=80&w=400&h=400&auto=format&fit=crop" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Suprême Açaí - Tasse M", price: "8,00 €", description: "Açaí cremoso com frutas e granola. Chaque supplément: 0,80 €", imageUrl: "https://images.unsplash.com/photo-1618043232128-e145b2853272?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Suprême Açaí - Tasse XL", price: "14,00 €", description: "Açaí em dose dupla para os apaixonados. Chaque supplément: 0,80 €", imageUrl: "https://images.unsplash.com/photo-1586917173693-d13854a8a413?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Coupe à glace avec 3 boules", price: "8,00 €", description: "Três bolas do seu sorvete favorito.", imageUrl: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=400&h=400&auto=format&fit=crop" },
      { name: "Mousse au chocolat", price: "7,00 €", description: "Mousse de chocolate caseira, rica e aveludada.", imageUrl: "https://images.unsplash.com/photo-1567692131469-87c2b535d5a2?q=80&w=400&h=400&auto=format&fit=crop" },
    ],
  },
];
