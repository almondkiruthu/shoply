import { StaticImageData } from "next/image";

// Marketing Page types
// export type PopularItem = {
//   id: string;
//   image: StaticImageData;
//   title: string;
//   price: number;
//   sizes: string[];
// };

// export type PopularItems = PopularItem[];

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

// Product Page types
export type Product = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  sizes?: string[];
};

export type Products = Product[];

export type ProductSidebarNavItem = {
  name: string;
};

export type ProductConfig = {
  womenSidebarNav: ProductSidebarNavItem[];
  menSidebarNav: ProductSidebarNavItem[];
};

// Cart Page types

export type CartProduct = {
  id?: string;
  image?: StaticImageData;
  title?: string;
  size?: string;
  price?: number;
  quantity?: number;
};

export type CartProducts = CartProduct[];

// Dashboard Page types

export type MainCategories = {
  id: string;
  name: string;
}[];
