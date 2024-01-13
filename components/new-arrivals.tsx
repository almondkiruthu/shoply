"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
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
import { NewArrivalProducts } from "@/types";

interface NewArrivalsProps {
  products: NewArrivalProducts;
}

const NewArrivals = ({ products }: NewArrivalsProps) => {
  return (
    <section
      id="popular"
      className="lg:pb-18 space-y-6 bg-white py-8 md:py-12 lg:pt-20"
    >
      <div className="container relative -top-10 md:top-0">
        <div className="mx-auto flex items-center space-y-4">
          <h2 className="pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            New Arrivals
          </h2>
        </div>
        <Carousel>
          <CarouselContent>
            {products?.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/1 pl-4 xl:basis-1/4"
              >
                <Link href={"#"} className="">
                  <div className="w-[250px] space-y-2 rounded-lg bg-white p-5 shadow-lg sm:w-[300px]">
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
                    <div className="ml-4 flex items-center gap-x-5">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="right-8 md:absolute md:-top-11 md:flex md:items-center md:gap-x-4 xl:right-24">
            <CarouselPrevious
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "default",
                }),
                "hidden rounded-full shadow-lg hover:text-white md:inline-flex",
              )}
            />
            <CarouselNext
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "default",
                }),
                "hidden rounded-full shadow-lg hover:text-white md:inline-flex",
              )}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrivals;
