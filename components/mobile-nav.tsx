import Link from "next/link";

import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

import { Icons } from "./icons";
import { MobileNavSearchInput } from "./mobile-nav-search-input";

const MobileNav = () => {
  const totalItems = useCartStore((s) => s.totalItems);

  useLockBody();
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div
        className="relative z-20 grid gap-6 rounded-md bg-popover bg-gradient-to-b 
        from-white from-20%
        to-primary/20 to-80% p-4 text-popover-foreground shadow-md"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Icons.mainLogo />
        </Link>
        <nav className="grid grid-flow-row auto-rows-max space-y-4 text-sm text-foreground">
          <Link href="/products" className="text-sm font-bold">
            Products
          </Link>
          <Link href="/cart" className="text-sm font-bold">
            Cart
            <span
              className="ml-2 h-6 w-6 rounded-[2.25rem]
              bg-primary text-sm font-bold"
            >
              <span className="mx-[0.3rem] my-[0.4rem] text-white">
                {totalItems}
              </span>
            </span>
          </Link>
          <MobileNavSearchInput />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
