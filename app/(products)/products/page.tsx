import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getAllProducts, getProductsCount } from "@/data/product";
import { cn } from "@/lib/utils";

import ClearFilterButton from "./_components/clear-filter-button";
import Products from "./_components/products";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  // Fetch all the products dynamically
  const products = await getAllProducts({ query: search });

  //Fetch current count of all products
  const totalProductCount = await getProductsCount();
  return (
    <div className="mt-2 flex flex-col md:mt-10">
      <div className="ml-4 mr-auto flex flex-col gap-y-10">
        <p className="text-[0.8rem] font-medium md:text-sm">
          Showing <span className="font-bold">{products.length}</span> results
          from total <span className="font-bold">{totalProductCount}</span> for{" "}
          <span className="font-bold">
            &quot;{search || "All Products"}&quot;
          </span>
        </p>
        <div className="flex items-center gap-x-4">
          <p className="text-wrap text-[1rem] md:text-sm">Applied Filters:</p>
          <div className="flex items-center gap-x-4">
            <ClearFilterButton search={search} />
          </div>
        </div>
      </div>
      <Products products={products} className="my-8" />
    </div>
  );
};

export default ProductPage;
