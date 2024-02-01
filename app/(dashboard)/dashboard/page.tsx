import { Separator } from "@/components/ui/separator";

import ProductNameForm from "./_components/product-name-form";

interface DashBoardPageProps {}

const DashBoardPage = ({}: DashBoardPageProps) => {
  return (
    <>
      <div className="grid gap-6 md:mt-4 md:grid-cols-2">
        <div className="flex">
          <ProductNameForm />
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        <div>Hello</div>
      </div>
    </>
  );
};

export default DashBoardPage;
