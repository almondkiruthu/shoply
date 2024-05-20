"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { ProductCardSkeleton } from "@/components/product-card-skeleton";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

interface NewArrivalsProps {
  products: Product[];
}

const NewArrivals = ({ products }: NewArrivalsProps) => {
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section
      id="new-arrivals"
      className="lg:pb-18 space-y-6 bg-white py-8 md:py-12 lg:pt-20"
    >
      <div className="container">
        <div className="mx-auto flex items-center space-y-4">
          <h2 className="-ml-4 pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:ml-0 md:text-5xl">
            New Arrivals
          </h2>
        </div>
        <Carousel className="relative">
          <CarouselContent>
            {!products.length
              ? skeletons.map((skeleton) => (
                  <CarouselItem
                    key={skeleton}
                    className="basis-1/1 pl-4 xl:basis-1/4"
                  >
                    <ProductCardSkeleton className="mb-4" />
                  </CarouselItem>
                ))
              : products?.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/1 pl-4 xl:basis-1/4"
                  >
                    <Link href={"#"} className="">
                      <div className="mb-10 mt-4 w-[250px] space-y-2 rounded-lg bg-white  p-5 shadow-lg sm:w-[300px] md:mt-0">
                        <div className="flex flex-col items-center justify-center rounded-lg p-5">
                          <Image
                            width={300}
                            height={220}
                            src={product.imageUrl!}
                            placeholder="blur"
                            blurDataURL="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                            alt={product.name}
                          />
                        </div>
                        <div className="ml-4 flex flex-col gap-y-2 text-left">
                          <h3 className="font-sans_bold text-xl font-bold tracking-tight">
                            {product.name}
                          </h3>
                          <p className="text-sm font-normal leading-normal">
                            {formatPrice(product.price ? product.price : 1000)}
                          </p>
                        </div>

                        <div className="ml-4 flex items-center pt-4">
                          <Button className="">Add to Cart</Button>
                          <Button
                            className="ml-auto rounded-full md:mr-4"
                            size="icon"
                          >
                            <Icons.heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
          </CarouselContent>
          <div className="absolute -top-9 right-4 flex items-center -space-x-[4rem] md:-top-11 md:right-8 md:gap-x-4 xl:right-24">
            <CarouselPrevious
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "default",
                }),
                "flex rounded-full shadow-lg hover:text-white md:inline-flex",
              )}
            />
            <CarouselNext
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "default",
                }),
                "flex rounded-full shadow-lg hover:text-white md:inline-flex",
              )}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrivals;
