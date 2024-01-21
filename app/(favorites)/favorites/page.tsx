import Image from "next/image";
import { Minus, PartyPopper } from "lucide-react";

import TabSwitcher from "@/app/(cart)/cart/_components/tab-switcher";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cartProdcuts } from "@/config/cart";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { CartProducts } from "@/types";

interface CartPageProps {}

const CartPage = ({}: CartPageProps) => {
  return (
    <>
      <div className="mt-2 flex flex-col md:mt-12">
        <TabSwitcher />
        <div className="rounded-lg border border-slate-400/40 p-6">
          <div className="flex items-center gap-x-3">
            <Button
              variant={"outline"}
              className="ml-auto flex items-center border-primary text-primary hover:bg-primary/10"
            >
              Add to Cart
            </Button>
            <Button
              variant={"outline"}
              className="mr-4 flex items-center border-primary text-primary hover:bg-primary/10"
            >
              <Icons.remove className="mr-2 h-4 w-4" />
              <span>Remove</span>
            </Button>
          </div>

          <div className="mx-4 flex items-center justify-between py-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-x-[61px]">
              <Checkbox className="h-5 w-5" />
              <h3>PRODUCT</h3>
            </div>
            <div className="mr-8 flex items-center">
              <h3>ACTION & PRICE</h3>
            </div>
          </div>
          <div className="pb-4 pt-1">
            <Separator />
          </div>
          <CartProductsDisplay className="" cartProducts={cartProdcuts} />
        </div>
      </div>
    </>
  );
};

export default CartPage;

interface CartProductsDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cartProducts: CartProducts;
}
const CartProductsDisplay = ({
  className,
  cartProducts,
  ...props
}: CartProductsDisplayProps) => {
  return (
    <>
      <div className={cn(className)} {...props}>
        {cartProdcuts.length == 0 ? (
          <div
            className="flex h-[525.96px] w-[1040px] flex-col items-center justify-center
          space-y-6 rounded-md bg-gradient-to-b from-white via-slate-100 to-primary/30"
          >
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-5xl">
              Add at least one Item to your cart!
            </h1>
            <PartyPopper className="h-[10rem] w-[10rem]" />
          </div>
        ) : (
          cartProdcuts.map((cartProduct, index) => (
            <div key={index}>
              <div className="mx-4 flex items-center justify-between py-6">
                <div className="flex items-center">
                  <Checkbox className="h-5 w-5" />
                  <Image src={cartProduct.image} alt="s" />
                  <div className="flex-col items-center justify-center space-y-1 text-lg">
                    <p className="text-wrap font-bold">{cartProduct.title}</p>
                    <p className="text-muted-foreground">{cartProduct.size}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-14 flex-col items-center justify-center space-y-2">
                    <Button
                      variant={"outline"}
                      className="flex items-center border-primary text-primary hover:bg-primary/10"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant={"outline"}
                      className="flex items-center border-primary text-primary hover:bg-primary/10"
                    >
                      <Icons.remove className="mr-2 h-4 w-4" />
                      <span>Remove</span>
                    </Button>
                    <p className="max-w-[150px] text-wrap pt-10">
                      {formatPrice(cartProduct.price)}
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
