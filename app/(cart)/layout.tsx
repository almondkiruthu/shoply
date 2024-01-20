import SiteFooter from "@/components/site-footer";

import CartSiteNavigation from "./cart/_components/cart-site-nav";
import TotalPrice from "./cart/_components/total-price";

interface CartLayoutProps {
  children?: React.ReactNode;
}

const CartLayout = ({ children }: CartLayoutProps) => {
  return (
    <>
      <CartSiteNavigation />
      <div className="container grid flex-1 gap-12 md:grid-cols-[1fr_376.424px] lg:grid-cols-[1fr_400px]">
        <main className="mb-8 md:mb-10">{children}</main>
        <aside>
          <TotalPrice className="relative mt-3 rounded-lg p-4 shadow-xl md:mt-10" />
        </aside>
      </div>
      <SiteFooter className="bg-slate-100/80" />
    </>
  );
};

export default CartLayout;
