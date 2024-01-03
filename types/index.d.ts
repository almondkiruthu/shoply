import { StaticImageData } from 'next/image';

export type PopularItem = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
};

export type PopularItems = PopularItem[];
