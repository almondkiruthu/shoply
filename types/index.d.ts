import { StaticImageData } from 'next/image';

export type PopularItem = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
};

export type PopularItems = PopularItem[];

export type NewArrivalProduct = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
};

export type NewArrivalProducts = NewArrivalProduct[];

export type ShowCaseImage = {
  path: StaticImageData;
};

export type ShowCaseImages = ShowCaseImage[];
