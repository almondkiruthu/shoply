import { create } from "zustand";
import { persist } from "zustand/middleware";

import { toast } from "@/hooks/use-toast";
import { Product } from "@prisma/client";

interface SizeProduct extends Product {}

// Define the Interface for the favorite's tab state
interface State {
  sizedProducts: SizeProduct[];
}
// Define the Interface for the actions that can be performed in the cart
interface Actions {
  addToSizedProducts: (item: SizeProduct) => void;
  removeFromSizedProducts: (item: SizeProduct) => void;
  clearSizedProducts: () => void;
}

//Intialize a default state
const INTIAL_STATE: State = {
  sizedProducts: [],
};

// Persistence middleware configuration
export const useFavoriteStore = create(
  persist<State & Actions>(
    (set, get) => ({
      sizedProducts: INTIAL_STATE.sizedProducts,
      addToSizedProducts: (product: SizeProduct) => {
        const sizeProducts = get().sizedProducts;
        if (!sizeProducts.find((item) => item.id === product.id)) {
          const updatedFavorites = [...sizeProducts, { ...product }];

          toast({
            variant: "default",
            title: "😊 Added to favorites",
          });

          set((_state) => ({
            sizedProducts: updatedFavorites,
          }));
        } else {
          toast({
            variant: "default",
            title: "🥲 Already added to favorites",
          });
        }
      },
      removeFromSizedProducts: (product: SizeProduct) => {
        set((state) => ({
          sizedProducts: state.sizedProducts.filter(
            (item) => item.id !== product.id,
          ),
        }));
      },
      clearSizedProducts: () => {
        set({
          sizedProducts: INTIAL_STATE.sizedProducts,
        });
      },
    }),
    {
      name: "products-size", // unique name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    },
  ),
);
