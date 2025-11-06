
export interface MenuItem {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}
