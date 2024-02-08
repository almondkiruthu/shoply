import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";

import ProductArrivialAndPopularForm from "./_components/product-arrival-and-popular-form";
import ProductCategoryForm from "./_components/product-category-form";
import ProductImageForm from "./_components/product-image-form";
import ProductNameForm from "./_components/product-name-form";
import ProductPriceForm from "./_components/product-price-form";
import ProductQuantityForm from "./_components/product-quantity-form";
import ProductSizeForm from "./_components/product-size-form";

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const product = await db.product.findFirst({
    where: {
      id: params.productId,
    },
  });

  const sizes = await db.size.findMany({});
  const suCategories = await db.subcategory.findMany({});

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
            <ProductQuantityForm />
            <ProductArrivialAndPopularForm />
          </div>
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        {/* Tab 2 for the ProductIdPage  */}
        <div>
          <div className="flex flex-col items-start space-y-8">
            <ProductSizeForm sizes={sizes} />
            <ProductCategoryForm subCategories={suCategories} />
            <ProductImageForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIdPage;