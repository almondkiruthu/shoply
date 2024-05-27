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
      <div className="container flex flex-col md:flex-1 md:grid-cols-[1fr_376.424px] md:gap-12 lg:grid lg:grid-cols-[1fr_400px]">
        <CartProductsPage />
        <TotalPrice
          subTotal={total}
          className="relative mt-8 rounded-lg p-4 shadow-xl md:mt-10 h-[200px]"
        />
      </div>
    </>
  );
};

export default CartPage;
