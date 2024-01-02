import { StaticImageData } from 'next/image';

export type PopularItem = {
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
};

export type PopularItems = PopularItem[];
