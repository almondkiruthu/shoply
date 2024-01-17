import { StaticImageData } from "next/image";

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

export type Product = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
};

export type Products = Product[];

export type ShowCaseImage = {
  path: StaticImageData;
};

export type ShowCaseImages = ShowCaseImage[];

export type ProductSidebarNavItem = {
  name: string;
};

export type ProductConfig = {
  womenSidebarNav: ProductSidebarNavItem[];
  menSidebarNav: ProductSidebarNavItem[];
};
