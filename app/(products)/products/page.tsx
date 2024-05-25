import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/data/product";

import Products from "./_components/products";

const ProductPage = async () => {
  // Fetch all the products
  const products = await getAllProducts();
  return (
    <div className="mt-2 flex flex-col md:mt-10">
      <div className="ml-4 mr-auto flex flex-col gap-y-10">
        <p className="text-[0.8rem] font-medium md:text-sm">
          Showing <span className="font-bold">9</span> results from total{" "}
          <span className="font-bold">50</span> for{" "}
          <span className="font-bold">{'"shirts"'}</span>
        </p>
        <div className="flex items-center gap-x-4">
          <p className="text-wrap text-[0.8rem] md:text-sm">Applied Filters:</p>
          <div className="flex items-center gap-x-4">
            <Button
              variant="ghost"
              size={"sm"}
              className="flex items-center rounded-full shadow-xl hover:bg-primary/20"
            >
              <p className="font-medium">Women</p>
              <Icons.close className="ml-2 h-3 w-3 text-neutral-500/80" />
            </Button>
            <Button
              variant="ghost"
              size={"sm"}
              className="flex items-center rounded-full shadow-lg hover:bg-primary/20"
            >
              <p className="font-medium">shirts</p>
              <Icons.close className="ml-2 h-3 w-3 text-neutral-500/80" />
            </Button>
          </div>
        </div>
      </div>
      <Products products={products} className="my-8" />
    </div>
  );
};

export default ProductPage;
