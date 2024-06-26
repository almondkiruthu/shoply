import { Metadata } from "next";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

import CartSiteNavigation from "./cart/_components/cart-site-nav";

export const metadata: Metadata = {
  title: "Cart",
};

interface CartLayoutProps {
  children?: React.ReactNode;
}

const CartLayout = ({ children }: CartLayoutProps) => {
  return (
    <>
      <SiteHeader />
      <CartSiteNavigation />
      <main className="mb-8 md:mb-[26rem]">{children}</main>
      <SiteFooter className="bg-slate-100/80" />
    </>
  );
};

export default CartLayout;
