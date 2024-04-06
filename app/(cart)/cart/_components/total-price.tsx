import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import design from "@/public/cart/Design.png";
import { useCartStore } from "@/store/cartStore";

interface TotalPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  subTotal: number;
}

const TotalPrice = ({ className, subTotal, ...props }: TotalPriceProps) => {
  return (
    <div className={cn(className)} {...props}>
      <div className="flex items-center justify-between pb-4 pt-2">
        <p className="text-muted-foreground">SubTotal</p>
        <span className="font-bold">{formatPrice(subTotal)}</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between pb-4 pt-2">
        <p className="text-muted-foreground">Grand Total</p>
        <span className="font-bold">{formatPrice(subTotal)}</span>
      </div>
      <Button className="my-4 w-full text-lg">Checkout</Button>
      <div className="absolute right-[-18rem] top-[13rem]">
        <Image src={design} alt="s" priority={true} />
      </div>
    </div>
  );
};

export default TotalPrice;
