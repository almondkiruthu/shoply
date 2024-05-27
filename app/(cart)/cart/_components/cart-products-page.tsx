"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cartStore";

import CartProductsPageDisplay from "./cart-products-page-display";
import TabSwitcher from "./tab-switcher";

interface CartProductsPageProps {}

const CartProductsPage = ({}: CartProductsPageProps) => {
  const cartProdcuts = useCartStore((s) => s.cart);
  const clearCart = useCartStore((s) => s.clearCart);
  return (
    <>
      <div className="mt-2 flex flex-col md:mt-12">
        <TabSwitcher />
        <div className="rounded-lg border border-slate-400/40 p-6">
          {cartProdcuts.length === 0 ? null : (
            <>
              <Button
                variant={"outline"}
                className="ml-auto flex items-center border-primary text-primary hover:bg-primary/10
                sm:mr-4"
                onClick={clearCart}
                disabled={cartProdcuts.length === 0}
              >
                <Icons.remove className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:block">Empty Cart</span>
              </Button>

              <div className="mx-4 flex items-center justify-between py-6 text-lg text-muted-foreground">
                <div className="flex items-center gap-x-[61px]">
                  {/* Remove unused checkbox  */}
                  {/* <Checkbox className="h-5 w-5" /> */}
                  <h3 className="sm:block hidden xl:ml-24">PRODUCT</h3>
                </div>
                <div className="mr-8 hidden items-center sm:block">
                  <h3>QUANTITY & PRICE</h3>
                </div>
              </div>
              <div className="pb-4 pt-1">
                <Separator />
              </div>
            </>
          )}
          <CartProductsPageDisplay />
        </div>
      </div>
    </>
  );
};

export default CartProductsPage;
