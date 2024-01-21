"use client";

import { usePathname } from "next/navigation";

const CartSiteNavigation = () => {
  const pathname = usePathname();

  return (
    pathname.startsWith("/cart") && (
      <div className="container pt-2 text-sm md:pt-8">
        <div className="ml-4 flex max-w-[150px] items-center gap-x-2">
          <p className="text-primary">Home</p>
          <p className="text-muted-foreground">/</p>
          <p className="text-muted-foreground">Cart</p>
        </div>
      </div>
    )
  );
};

export default CartSiteNavigation;
