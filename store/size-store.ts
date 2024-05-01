import { create } from "zustand";
import { persist } from "zustand/middleware";

import { toast } from "@/hooks/use-toast";

interface SelectedSize {
  [productId: string]: string[];
}

interface State {
  selectedSizes: SelectedSize;
}

// Define the Interface for the actions that can be performed in the cart
interface Actions {
  addToSelectedSizes: (productId: string, size: string) => void;
  removeFromSelectedSizes: (productId: string, size: string) => void;
}

//Intialize a default state
const INITIAL_STATE: State = {
  selectedSizes: {},
};

// Persistence middleware configuration
export const useSizeStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...INITIAL_STATE,
      addToSelectedSizes: (productId, size) => {
        const selectedSizes = get().selectedSizes;
        if (!selectedSizes[productId]?.includes(size)) {
          const updatedSelectedSizes = {
            ...selectedSizes,
            [productId]: [...(selectedSizes[productId] || []), size],
          };

          toast({
            variant: "default",
            title: `😊 Added ${size} sucessfully `,
          });

          set({ selectedSizes: updatedSelectedSizes });
        }
      },
      removeFromSelectedSizes: (productId, size) => {
        const selectedSizes = get().selectedSizes;
        if (selectedSizes[productId]?.includes(size)) {
          const updatedSelectedSizes = {
            ...selectedSizes,
            [productId]: selectedSizes[productId].filter((s) => s !== size),
          };

          toast({
            variant: "default",
            title: `😊 Deselected size ${size} sucessfully `,
          });

          set({ selectedSizes: updatedSelectedSizes });
        }
      },
    }),
    {
      name: "products-size", // unique name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    },
  ),
);
