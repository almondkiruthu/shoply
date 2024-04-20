import { StaticImageData } from "next/image";

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

// Dashboard Page types
export type MainCategories = {
  id: string;
  name: string;
}[];
