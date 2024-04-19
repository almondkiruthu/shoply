import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@prisma/client";

interface CartProduct extends Product {
  count?: number;
}

// Define the Interface for the cart state
interface State {
  cart: CartProduct[];
  totalItems: number;
  totalPrice: number;
}
// Define the Interface for the actions that can be performed in the cart
interface Actions {
  addToCart: (item: CartProduct) => void;
  removeFromCart: (item: CartProduct) => void;
  increaseQuantity: (item: CartProduct) => void;
  decreaseQuantity: (item: CartProduct) => void;
}

//Intialize a default state
const INTIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};
// Persistence middleware configuration
export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INTIAL_STATE.cart,
      totalItems: INTIAL_STATE.totalItems,
      totalPrice: INTIAL_STATE.totalPrice,
      addToCart: (product: CartProduct) => {
        const cart = get().cart;
        const updatedCart = [...cart, { ...product, count: 1 }];

        set((state) => ({
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + (product.price as number),
          cart: updatedCart,
        }));
      },
      removeFromCart: (product: CartProduct) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - (product.price as number),
        }));
      },
      increaseQuantity: (product: CartProduct) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, count: (item?.count as number) + 1 }
              : item,
          ),
          totalPrice: state.totalPrice + (product?.price || 0),
        }));
      },
      decreaseQuantity: (product: CartProduct) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, count: (item?.count as number) - 1 }
              : item,
          ),
          totalPrice: state.totalPrice - (product?.price || 0),
        }));
      },
    }),
    {
      name: "cart-storage", // unic name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    },
  ),
);
