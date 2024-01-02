import camisole from '@/public/products/Popular Items/camisole.png';
import cropTop from '@/public/products/Popular Items/Crop Top.png';
import denimJacket from '@/public/products/Popular Items/Denim Jacket.png';
import shirt from '@/public/products/Popular Items/shirt.png';
import shorts from '@/public/products/Popular Items/shorts.png';
import sleeveLessBlouse from '@/public/products/Popular Items/Sleeveless Blouse.png';
import { PopularItems } from '@/types';

export const popularItems: PopularItems = [
  {
    image: denimJacket,
    title: 'DenimJacket',
    price: 2000,
    sizes: ['s', 'm', 'l', 'xl'],
  },
  {
    image: shirt,
    title: 'Shirt',
    price: 1000,
    sizes: ['s', 'm', 'l', 'xl'],
  },
  {
    image: shorts,
    title: 'Shorts',
    price: 800,
    sizes: ['s', 'm', 'l', 'xl'],
  },
  {
    image: camisole,
    title: 'Camisole',
    price: 800,
    sizes: ['s', 'm', 'l', 'xl'],
  },
  {
    image: cropTop,
    title: 'Crop Top',
    price: 900,
    sizes: ['s', 'm', 'l', 'xl'],
  },
  {
    image: sleeveLessBlouse,
    title: 'Sleeveless Blouse',
    price: 1000,
    sizes: ['s', 'm', 'l', 'xl'],
  },
];
