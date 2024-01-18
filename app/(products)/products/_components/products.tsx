import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Products } from "@/types";

interface ProductsProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Products;
}

const Products = ({ products, className, ...props }: ProductsProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-y-8 lg:mx-0 lg:grid-cols-2 xl:grid-cols-3",
        className,
      )}
      {...props}
    >
      {products.map((product) => (
        <Link key={product.id} href={"#"}>
          <div
            className="w-[250px] space-y-2 rounded-lg border border-solid border-[0.9] 
            bg-gradient-to-b from-white to-primary/[0.05] p-5 
          shadow-md sm:w-[300px]"
          >
            <div className="flex flex-col items-center justify-center p-5">
              <Image src={product.image} alt={product.title} />
            </div>
            <div className="ml-4 flex flex-col gap-y-2 text-left">
              <h3 className="font-sans_bold text-xl font-bold tracking-tight">
                {product.title}
              </h3>
              <p className="text-sm font-normal leading-normal">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="flex items-center gap-x-5 md:ml-4">
              {product.sizes.map((size, index) => (
                <div key={index}>
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary"
                  >
                    <p>{size.toUpperCase()}</p>
                  </Button>
                </div>
              ))}
            </div>
            <div className="ml-4 flex items-center pt-4">
              <Button className="">Add to Cart</Button>
              <Button className="ml-auto mr-4 rounded-full" size="icon">
                <Icons.heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
