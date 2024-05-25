"use client";

import TabSwitcher from "@/app/(cart)/cart/_components/tab-switcher";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFavoriteStore } from "@/store/favorites-Store";

import FavoriteProductsDisplay from "./_components/favorite-products-display";

interface FavoritesPageProps {}

const FavoritesPage = ({}: FavoritesPageProps) => {
  const favoriteProducts = useFavoriteStore((s) => s.favorites);
  const clearFavorites = useFavoriteStore((s) => s.clearFavorites);
  return (
    <>
      <div className="mt-2 flex flex-col md:mt-12">
        <TabSwitcher />
        <div className="rounded-lg border border-slate-400/40 p-6">
          {favoriteProducts.length !== 0 ? (
            <>
              <div className="flex items-center">
                <Button
                  variant={"outline"}
                  className="ml-auto flex items-center border-primary text-primary hover:bg-primary/10"
                  onClick={clearFavorites}
                >
                  <Icons.remove className="mr-2 h-4 w-4" />
                  <span>Remove</span>
                </Button>
              </div>

              <div className="mx-4 flex items-center justify-between py-6 text-lg text-muted-foreground">
                <div className="flex items-center gap-x-[61px]">
                  <h3>PRODUCT</h3>
                </div>
                <div className="mr-8 flex items-center">
                  <h3>ACTION & PRICE</h3>
                </div>
              </div>
              <div className="pb-4 pt-1">
                <Separator />
              </div>
            </>
          ) : null}
          <FavoriteProductsDisplay />
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
