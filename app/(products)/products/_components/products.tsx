"use client";

import { useState } from "react";
import Image from "next/image";

import PaginationSection from "@/components/client-pagination";
import { Icons } from "@/components/icons";
import { ProductCardSkeleton } from "@/components/product-card-skeleton";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favorites-Store";
import { Product } from "@prisma/client";

interface ProductsProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[];
}

const Products = ({ products, className, ...props }: ProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, _setProductsPerPage] = useState(3);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  //Favorites page functionality
  const itemsInfavorites = useFavoriteStore((s) => s.favorites);
  const addToFavorites = useFavoriteStore((s) => s.addToFavorites);

  //Cart Functionality
  const itemsInCart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);

  const itemsIdInFavorites = itemsInfavorites.map((fav) => fav.id);
  const itemsIdInCart = itemsInCart.map((item) => item.id);

  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  return (
    <>
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 lg:mx-0 lg:grid-cols-2 lg:gap-x-0 xl:grid-cols-3",
          className,
        )}
        {...props}
      >
        {!currentProducts.length
          ? skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)
          : currentProducts.map((product) => (
              <div
                key={product.id}
                className="w-[250px] space-y-2 rounded-lg border border-solid border-[0.9] 
                bg-gradient-to-b from-white to-primary/[0.05] p-5 
                shadow-md sm:w-[300px]"
              >
                <div className="flex flex-col items-center justify-center p-5">
                  <Image
                    width={300}
                    height={220}
                    src={product.imageUrl!}
                    placeholder="blur"
                    blurDataURL="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt={product.name}
                  />
                </div>
                <div className="ml-4 flex flex-col gap-y-2 text-left">
                  <h3 className="font-sans_bold text-xl font-bold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm font-normal leading-normal">
                    {formatPrice(product.price ? product.price : 1000)}
                  </p>
                </div>
                <div className="ml-4 flex items-center pt-4">
                  <Button
                    onClick={() => addToCart(product)}
                    disabled={itemsIdInCart.includes(product.id)}
                    type="button"
                  >
                    {itemsIdInCart.includes(product.id) ? (
                      <>Added to cart</>
                    ) : (
                      <> Add to Cart</>
                    )}
                  </Button>
                  <Button
                    onClick={() => addToFavorites(product)}
                    type="button"
                    className={cn(
                      "ml-auto rounded-full text-white shadow-xl md:mr-4",
                      !itemsIdInFavorites.includes(product.id)
                        ? "bg-white hover:text-white"
                        : "bg-primary text-white",
                    )}
                    size="icon"
                  >
                    {!itemsIdInFavorites.includes(product.id) ? (
                      <Icons.heart className="h-4 w-4 text-primary hover:text-white" />
                    ) : (
                      <Icons.heart className="h-4 w-4 text-white hover:text-white" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
      </div>
      <PaginationSection
        totalItems={products.length}
        itemsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="my-8 lg:mr-16"
      />
    </>
  );
};

export default Products;
