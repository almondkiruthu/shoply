"use client";

import { useCartStore } from "@/store/cartStore";

import CartProductsPage from "./_components/cart-products-page";
import TotalPrice from "./_components/total-price";

interface CartPageProps {}

const CartPage = ({}: CartPageProps) => {
  const cartProdcuts = useCartStore((s) => s.cart);

  const total = cartProdcuts.reduce(
    (acc, product) => acc + product.price! * (product.count as number),
    0,
  );
  return (
    <>
      <div className="container grid flex-1 gap-12 md:grid-cols-[1fr_376.424px] lg:grid-cols-[1fr_400px]">
        <CartProductsPage />
        <aside>
          <TotalPrice
            subTotal={total}
            className="relative mt-3 rounded-lg p-4 shadow-xl md:mt-10"
          />
        </aside>
      </div>
    </>
  );
};

export default CartPage;
