"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit } from "lucide-react";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favorites-Store";

const SiteHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const totalItems = useCartStore((s) => s.totalItems);
  const totalFavoriteItems = useFavoriteStore((s) => s.favorites);
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm 
  backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div
        className="mx-auto flex h-16 max-w-6xl items-center justify-between 
        space-x-4 px-6 sm:space-x-0"
      >
        <MainNav />
        <SearchInput className="" />
        <div className="hidden items-center gap-x-4 md:flex">
          <Link href="/products" className="text-sm font-bold">
            Products
          </Link>
          <Link href="/favorites">
            <Button size="sm" variant="ghost">
              <Icons.heart className="h-5 w-5" />
              <span
                className="ml-2 h-6 w-6 rounded-[2.25rem]
              bg-primary text-sm font-bold"
              >
                <p className="mx-[0.1rem] my-[0.1rem] text-white">
                  {totalFavoriteItems.length}
                </p>
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <Icons.shoppingBag className="h-5 w-5" />
              <span
                className="ml-2 h-6 w-6 rounded-[2.25rem]
              bg-primary text-sm font-bold"
              >
                <p className="mx-[0.1rem] my-[0.1rem] text-white">
                  {totalItems}
                </p>
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          {process.env.NODE_ENV === "development" && (
            <Link href="/dashboard">
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4 " />
              </Button>
            </Link>
          )}
        </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="ml-auto flex items-center space-x-2 md:hidden"
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
          <span className="text-sm font-bold">Menu</span>
        </button>
        {showMobileMenu && <MobileNav />}
      </div>
    </header>
  );
};

export default SiteHeader;
