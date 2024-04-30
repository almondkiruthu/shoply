import { create } from "zustand";
import { persist } from "zustand/middleware";

import { toast } from "@/hooks/use-toast";
import { Product } from "@prisma/client";

interface FavoriteProduct extends Product {}

// Define the Interface for the favorite's tab state
interface State {
  favorites: FavoriteProduct[];
}
// Define the Interface for the actions that can be performed in the cart
interface Actions {
  addToFavorites: (item: FavoriteProduct) => void;
  removeFromFavorites: (item: FavoriteProduct) => void;
  clearFavorites: () => void;
}

//Intialize a default state
const INTIAL_STATE: State = {
  favorites: [],
};

// Persistence middleware configuration
export const useFavoriteStore = create(
  persist<State & Actions>(
    (set, get) => ({
      favorites: INTIAL_STATE.favorites,
      addToFavorites: (product: FavoriteProduct) => {
        const favoriteProducts = get().favorites;
        if (!favoriteProducts.find((item) => item.id === product.id)) {
          const updatedFavorites = [...favoriteProducts, { ...product }];

          toast({
            variant: "default",
            title: "😊 Added to favorites",
          });

          set((_state) => ({
            favorites: updatedFavorites,
          }));
        } else {
          toast({
            variant: "default",
            title: "🥲 Already added to favorites",
          });
        }
      },
      removeFromFavorites: (product: FavoriteProduct) => {
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== product.id),
        }));
      },
      clearFavorites: () => {
        set({
          favorites: INTIAL_STATE.favorites,
        });
      },
    }),
    {
      name: "favorites-storage", // unique name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    },
  ),
);
