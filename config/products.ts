import blouse from "@/public/products/All products/blouse.png";
import bodysuit from "@/public/products/All products/body-suit.png";
import bralette from "@/public/products/All products/bralette.png";
import camisole from "@/public/products/All products/camisole.png";
import cardigan from "@/public/products/All products/cardigan.png";
import collaredSweater from "@/public/products/All products/collared-sweater.png";
import croppedCamisole from "@/public/products/All products/cropped-camisole.png";
import croppedSweater from "@/public/products/All products/cropped-sweater.png";
import hoodie from "@/public/products/All products/hoodie.png";
import looseSleeveLess from "@/public/products/All products/loose-sleevless.png";
import overSizedShirt from "@/public/products/All products/over-sized-shirt.png";
import plungeShirt from "@/public/products/All products/plunge-shirt.png";
import shirt from "@/public/products/All products/shirt.png";
import sleeveLessShirt from "@/public/products/All products/sleeveless-shirt.png";
import stripedShirt from "@/public/products/All products/striped-shirt.png";
import sweater from "@/public/products/All products/sweater.png";
import vNeckSleeveless from "@/public/products/All products/v-neck sleevless.png";
import zipUpHoodie from "@/public/products/All products/zip-up-hoodie.png";
import cropTop from "@/public/products/New Arrivals/Crop Top.png";
import denimJacket from "@/public/products/New Arrivals/Denim Jacket.png";
import knittedCamisole from "@/public/products/New Arrivals/Knitted camisole.png";
import poloShirt from "@/public/products/New Arrivals/Polo shirt.png";
import shorts from "@/public/products/New Arrivals/shorts.png";
import sleeveLessBlouse from "@/public/products/New Arrivals/Sleeveless Blouse.png";
import { ProductConfig, Products } from "@/types";

export const productConfig: ProductConfig = {
  womenSidebarNav: [
    { name: "Shirts" },
    { name: "Dresses" },
    { name: "Shorts" },
    { name: "Skirts" },
    { name: "Sports Clothing" },
  ],
  menSidebarNav: [
    { name: "Shirts" },
    { name: "Polos" },
    { name: "Pants" },
    { name: "Sports Clothing" },
  ],
};

export const products: Products = [
  // Front Line Products
  {
    id: "edjjccxserqw",
    image: blouse,
    title: "Blouse",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc5757",
    image: overSizedShirt,
    title: "Oversized Shirt",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjccde3244",
    image: croppedSweater,
    title: "Cropped Sweater",
    price: 1300,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjc35iitc",
    image: camisole,
    title: "Camisole",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcghghtic",
    image: sweater,
    title: "Sweater",
    price: 1800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc464477",
    image: croppedCamisole,
    title: "Cropped Camisole",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc565657",
    image: shirt,
    title: "Shirt",
    price: 1000,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc5656478478",
    image: hoodie,
    title: "Hoodie",
    price: 1500,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjccjgjgjgejg",
    image: cardigan,
    title: "Cardigan",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  // Front Line flash Sale Products
  {
    id: "edjjccxserqw34",
    image: vNeckSleeveless,
    title: "V-neck Sleeveless",
    price: 860,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc5757rttrt",
    image: bodysuit,
    title: "Bodysuit",
    price: 900,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjccde3244ggrggr",
    image: sleeveLessShirt,
    title: "SleeveLess Shirt",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjc35iitc4546747",
    image: zipUpHoodie,
    title: "Zip-up Hoodie",
    price: 1500,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcghghtic4654647",
    image: plungeShirt,
    title: "Plunge Shirt",
    price: 720,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc464477ththio0",
    image: stripedShirt,
    title: "Striped Shirt",
    price: 1000,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjcc565657wer23",
    image: looseSleeveLess,
    title: "Loose Sleeveless",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "zsee232454",
    image: bralette,
    title: "Bralette",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "edjjccjgjgjgejg4566624",
    image: collaredSweater,
    title: "Collared Sweater",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  // Popluar Products
  {
    id: "efr3",
    image: denimJacket,
    title: "Denim Jacket",
    price: 2000,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "fgfgfg",
    image: shirt,
    title: "Shirt",
    price: 1000,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "sedr",
    image: shorts,
    title: "Shorts",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "rt4566",
    image: camisole,
    title: "Camisole",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "fgfg5665",
    image: cropTop,
    title: "Crop Top",
    price: 900,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "fgffgy455789",
    image: sleeveLessBlouse,
    title: "Sleeveless Blouse",
    price: 1000,
    sizes: ["s", "m", "l", "xl"],
  },
  // New Arrivals
  {
    id: "efr24255",
    image: cropTop,
    title: "Crop Top",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "fgfgfg4545456  ",
    image: sleeveLessBlouse,
    title: "Sleeveless Blouse",
    price: 1000,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "344xff",
    image: poloShirt,
    title: "Polo Shirt",
    price: 1500,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "rt4566xxffhr",
    image: knittedCamisole,
    title: "Knitted Camisole",
    price: 1200,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "fgfg56653435",
    image: shorts,
    title: "Shorts",
    price: 800,
    sizes: ["s", "m", "l", "xl"],
  },
  {
    id: "denim343435",
    image: denimJacket,
    title: "Denim Jacket",
    price: 2000,
    sizes: ["s", "m", "l", "xl"],
  },
];
