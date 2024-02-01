import { Separator } from "@/components/ui/separator";

import ProductNameForm from "./_components/product-name-form";
import ProductPriceForm from "./_components/product-price-form";
import ProductQuantityForm from "./_components/product-quantity-form";

interface DashBoardPageProps {}

const DashBoardPage = ({}: DashBoardPageProps) => {
  return (
    <>
      <div className="grid gap-6 md:mt-4 md:grid-cols-2">
        <div className="flex">
          <div className="flex flex-col items-start space-y-8">
            <ProductNameForm />
            <ProductPriceForm />
            <ProductQuantityForm />
          </div>
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        <div>Hello</div>
      </div>
    </>
  );
};

export default DashBoardPage;
