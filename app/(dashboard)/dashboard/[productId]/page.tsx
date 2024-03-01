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
import ProductSizeForm from "./_components/product-size-form";

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  const suCategories = await db.subcategory.findMany({});

  const mainCategories: MainCategories = [
    { id: "men-1", name: "Men" },
    { id: "women-1", name: "Women" },
  ];

  return (
    <>
      <div className="grid gap-6 md:mt-4 md:grid-cols-2">
        <div className="flex">
          <div className="flex flex-col items-start space-y-8">
            <ProductNameForm
              initialData={product}
              productId={params.productId}
            />
            <ProductPriceForm
              initialData={product}
              productId={params.productId}
            />
            <ProductQuantityForm
              initialData={product}
              productId={params.productId}
            />
            <ProductArrivalAndPopularForm
              initialData={product}
              productId={params.productId}
            />
          </div>
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        {/* Tab 2 for the ProductIdPage  */}
        <div>
          <div className="flex flex-col items-start space-y-8">
            <ProductSizeForm
              initialData={product}
              productId={params.productId}
            />
            <ProductMainCategoryForm
              initialData={product}
              productId={params.productId}
              options={mainCategories.map((mainCategory) => ({
                label: mainCategory.name,
                value: mainCategory.id,
              }))}
            />
            <ProductCategoryForm
              initialData={product}
              productId={params.productId}
              options={suCategories.map((subCategory) => ({
                label: subCategory.name,
                value: subCategory.id,
              }))}
            />
            <ProductImageForm
              initialData={product}
              productId={params.productId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIdPage;
