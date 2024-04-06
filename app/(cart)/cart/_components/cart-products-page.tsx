"use client";

import React from "react";
import Image from "next/image";
import { Minus, PartyPopper } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { CartProduct } from "@/types";

import TabSwitcher from "./tab-switcher";

interface CartPageProps {}

export const CartProductsPage = ({}: CartPageProps) => {
  const cartProdcuts = useCartStore((s) => s.cart);
  return (
    <>
      <div className="mt-2 flex flex-col md:mt-12">
        <TabSwitcher />
        <div className="rounded-lg border border-slate-400/40 p-6">
          {cartProdcuts.length === 0 ? null : (
            <React.Fragment>
              <Button
                variant={"outline"}
                className="ml-auto mr-4 flex items-center border-primary text-primary
            hover:bg-primary/10"
              >
                <Icons.remove className="mr-2 h-4 w-4" />
                <span>Remove</span>
              </Button>

              <div className="mx-4 flex items-center justify-between py-6 text-lg text-muted-foreground">
                <div className="flex items-center gap-x-[61px]">
                  <Checkbox className="h-5 w-5" />
                  <h3>PRODUCT</h3>
                </div>
                <div className="mr-8 flex items-center">
                  <h3>QUANTITY & PRICE</h3>
                </div>
              </div>
              <div className="pb-4 pt-1">
                <Separator />
              </div>
            </React.Fragment>
          )}
          <CartProductsDisplay />
        </div>
      </div>
    </>
  );
};

interface CartProductsDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cartProducts?: CartProduct;
}

const CartProductsDisplay = ({
  className,
  cartProducts,
  ...props
}: CartProductsDisplayProps) => {
  const cartProdcuts = useCartStore((s) => s.cart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  return (
    <>
      <div className={cn(className)} {...props}>
        {cartProdcuts.length == 0 ? (
          <div
            className="flex h-full w-[100%] flex-col items-center justify-center space-y-6 rounded-md bg-gradient-to-b
          from-white via-slate-100 to-primary/30 object-cover p-4 xl:h-[425.25px] text-center"
          >
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-5xl">
              Add at least one Item to your cart!
            </h1>
            <PartyPopper className="h-20 w-20" />
          </div>
        ) : (
          cartProdcuts.map((cartProduct) => (
            <div key={cartProduct.id}>
              <div className="mx-4 flex items-center justify-between py-6">
                <div className="flex items-center">
                  <Checkbox className="h-5 w-5" />
                  <Image
                    src={cartProduct.imageUrl!}
                    width={300}
                    height={220}
                    placeholder="blur"
                    blurDataURL="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt={cartProduct.name}
                  />
                  <div className="flex-col items-center justify-center space-y-1 text-lg">
                    <p className="text-wrap font-bold">{cartProduct.name}</p>
                    <p className="text-muted-foreground">{cartProduct.sizes}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-14 flex flex-col items-center justify-center space-y-2">
                    <div className="flex items-center space-x-4 rounded-lg border border-primary">
                      <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="text-xs text-primary hover:bg-primary/10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-bold">1</span>
                      <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="text-xs text-primary  hover:bg-primary/10"
                      >
                        <Icons.add className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant={"outline"}
                      className="flex items-center border-primary text-primary hover:bg-primary/10"
                      onClick={() => removeFromCart(cartProduct)}
                    >
                      <Icons.remove className="mr-2 h-4 w-4" />
                      <span>Remove</span>
                    </Button>
                    <p className="max-w-[150px] text-wrap pt-10">
                      {formatPrice(cartProduct.price as number)}
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
