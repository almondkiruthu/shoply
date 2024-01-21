"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TabSwitcher = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="mb-4 ml-1 flex items-center gap-x-2">
        <Link
          className={cn(
            buttonVariants({
              variant: "default",
              size: "sm",
            }),
            pathname.startsWith("/cart") ? "" : "bg-slate-100 text-foreground",
          )}
          href={"/cart"}
        >
          <p className="text-sm font-bold">Cart</p>
        </Link>
        <Link
          className={cn(
            buttonVariants({
              variant: "default",
              size: "sm",
            }),
            pathname.startsWith("/favorites")
              ? ""
              : "bg-slate-100 text-foreground",
          )}
          href={"/favorites"}
        >
          <p className="text-sm font-bold">Favorites</p>
        </Link>
      </div>
    </>
  );
};

export default TabSwitcher;
