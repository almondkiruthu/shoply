import { cache } from "react";

import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { MainCategories } from "@/types";

import ProductArrivalAndPopularForm from "./_components/product-arrival-and-popular-form";
import ProductCategoryForm from "./_components/product-category-form";
import ProductImageForm from "./_components/product-image-form";
import ProductMainCategoryForm from "./_components/product-main-category-form copy";
import ProductNameForm from "./_components/product-name-form";
import ProductPriceForm from "./_components/product-price-form";
import ProductQuantityForm from "./_components/product-quantity-form";

// Manually deduplicate requests if not using fetch
const getProducts = cache(async () => {
  const products = await db.product.findMany({});
  return products;
});

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(({ id }) => id);
}

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const productIds: string[] = await generateStaticParams();
  const productId = productIds.find(
    (productId) => productId.toString() === params.productId,
  );

  const products = await getProducts();

  const product = products.find((product) => product.id === productId);

  const mainCategories: MainCategories = [
    { id: "men-1", name: "Men" },
    { id: "women-1", name: "Women" },
  ] as const;

  const subCategories: { id: string; name: string }[] = [
    {
      id: "65cdee2353fc958b8024485f",
      name: "Sports Clothing",
    },
    {
      id: "65cdee2353fc958b8024485c",
      name: "Dresses",
    },
    {
      id: "65cdee2353fc958b8024485b",
      name: "Shirts",
    },
    {
      id: "65cdee2353fc958b8024485e",
      name: "Skirts",
    },
    {
      id: "65cdee2353fc958b80244861",
      name: "Pants",
    },
    {
      id: "65cdee2353fc958b8024485d",
      name: "Shorts",
    },
    {
      id: "65cdee2353fc958b80244860",
      name: "Polos",
    },
  ] as const;

  return (
    <>
      <div className="grid gap-6 md:mt-4 md:grid-cols-2">
        <div className="flex">
          <div className="flex flex-col items-start space-y-8">
            <ProductNameForm
              initialData={product!}
              productId={params.productId}
            />
            <ProductPriceForm
              initialData={product!}
              productId={params.productId}
            />
            <ProductQuantityForm
              initialData={product!}
              productId={params.productId}
            />
            <ProductArrivalAndPopularForm
              initialData={product!}
              productId={params.productId}
            />
          </div>
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        {/* Tab 2 for the ProductIdPage  */}
        <div>
          <div className="flex flex-col items-start space-y-8">
            <ProductMainCategoryForm
              initialData={product!}
              productId={params.productId}
              options={mainCategories.map((mainCategory) => ({
                label: mainCategory.name,
                value: mainCategory.id,
              }))}
            />
            <ProductCategoryForm
              initialData={product!}
              productId={params.productId}
              options={subCategories.map((subCategory) => ({
                label: subCategory.name,
                value: subCategory.id,
              }))}
            />
            <ProductImageForm
              initialData={product!}
              productId={params.productId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIdPage;
