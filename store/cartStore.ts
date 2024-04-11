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
}

//Intialize a default state
const INTIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 100,
};

export const useCartStore = create(
  persist<State & Actions>((set, get) => ({
    cart: INTIAL_STATE.cart,
    totalItems: INTIAL_STATE.totalItems,
    totalPrice: INTIAL_STATE.totalPrice,

    addToCart: (product: CartProduct) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === product.id);

      // If the item already exists in the Cart, increase its quantity
      if (cartItem) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity as number) + 1 }
            : item,
        );
        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + (product.price as number),
        }));
      } else {
        const updatedCart = [...cart, { ...product, quantity: 1 }];

        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + (product.price as number),
        }));
      }
    },

    removeFromCart: (product: CartProduct) => {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== product.id),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - (product.price as number),
      }));
    },
  })),
  {
    name: "cart-storage",
  },
);
