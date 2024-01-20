import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import design from "@/public/cart/Design.png";

interface TotalPriceProps extends React.HTMLAttributes<HTMLDivElement> {}

const TotalPrice = ({ className, ...props }: TotalPriceProps) => {
  const subTotal = 0;
  const grandTotal = subTotal + 0;
  return (
    <div className={cn(className)} {...props}>
      <div className="flex items-center justify-between pb-4 pt-2">
        <p className="text-muted-foreground">SubTotal</p>
        <span className="font-bold">{formatPrice(subTotal) || 0}</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between pb-4 pt-2">
        <p className="text-muted-foreground">Grand Total</p>
        <span className="font-bold">{formatPrice(subTotal) || 0}</span>
      </div>
      <Button className="my-4 w-full text-lg">Checkout</Button>
      <div className="absolute right-[-18rem] top-[13rem]">
        <Image src={design} alt="s" priority={true} />
      </div>
    </div>
  );
};

export default TotalPrice;
