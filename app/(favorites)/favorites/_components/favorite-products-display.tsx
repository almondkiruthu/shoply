import Image from "next/image";
import { PartyPopper } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favorites-Store";

interface FavoriteProductsDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FavoriteProductsDisplay = ({
  className,
  ...props
}: FavoriteProductsDisplayProps) => {
  //Favorite store functionality
  const favoriteProducts = useFavoriteStore((s) => s.favorites);
  const removeFavoriteProduct = useFavoriteStore((s) => s.removeFromFavorites);

  //Cart functionality
  const addTocart = useCartStore((s) => s.addToCart);
  const itemsInCart = useCartStore((s) => s.cart);

  const itemsIdInCart = itemsInCart.map((item) => item.id);
  return (
    <>
      <div className={cn(className)} {...props}>
        {favoriteProducts.length == 0 ? (
          <div
            className="flex h-full w-[100%] flex-col items-center justify-center space-y-6 rounded-md bg-gradient-to-b
          from-white via-slate-100 to-primary/30 object-cover p-4 text-center xl:h-[425.25px]"
          >
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-5xl">
              Add at least one Favorite Item!
            </h1>
            <PartyPopper className="h-20 w-20" />
          </div>
        ) : (
          favoriteProducts.map((favoriteProduct) => (
            <div key={favoriteProduct.id}>
              <div className="mx-4 flex flex-col items-center justify-between py-6 sm:flex-row">
                <div className="flex flex-col items-center sm:flex-row">
                  {/* <Checkbox className="h-5 w-5" /> */}
                  <Image
                    width={300}
                    height={220}
                    src={favoriteProduct.imageUrl!}
                    alt="FavoriteProduct Image"
                    className="h-auto w-auto"
                  />
                  <div className="flex-col items-center justify-center space-y-1 text-lg">
                    <p className="text-wrap font-bold">
                      {favoriteProduct.name}
                    </p>
                    <p className="text-muted-foreground">
                      {/* {favoriteProduct.sizes} */}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center space-y-2 sm:mr-14">
                    <Button
                      variant={"outline"}
                      className="flex items-center border-primary text-primary hover:bg-primary/10"
                      onClick={() => addTocart(favoriteProduct)}
                      disabled={itemsIdInCart.includes(favoriteProduct.id)}
                    >
                      {itemsIdInCart.includes(favoriteProduct.id) ? (
                        <>Added to cart</>
                      ) : (
                        <> Add to Cart</>
                      )}
                    </Button>
                    <Button
                      variant={"outline"}
                      className="flex items-center border-primary text-primary hover:bg-primary/10"
                      onClick={() => removeFavoriteProduct(favoriteProduct)}
                    >
                      <Icons.remove className="mr-2 h-4 w-4" />
                      <span>Remove</span>
                    </Button>
                    <p className="max-w-[150px] text-wrap pt-10">
                      {formatPrice(favoriteProduct.price as number)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <Separator />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FavoriteProductsDisplay;
