'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/utils';
import { PopularItems } from '@/types';

interface PopularItemsProps {
  products: PopularItems;
}

const PopularItems = ({ products }: PopularItemsProps) => {
  return (
    <>
      <section
        id="popular"
        className="space-y-6 bg-slate-100/60 py-8 md:py-12 lg:pt-20 lg:pb-18"
      >
        <div className="container relative -top-28 md:top-0">
          <div className="mx-auto flex items-center space-y-4">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl pb-4">
              Popular Items
            </h2>
          </div>
          <Carousel>
            <CarouselContent>
              {products?.map((product) => (
                <>
                  <CarouselItem className="basis-1/1 xl:basis-1/4 pl-4">
                    <Link key={product.title} href={'#'} className="">
                      <div className="w-[250px] sm:w-[300px] rounded-lg shadow-lg bg-white space-y-2 p-5">
                        <div className="flex flex-col items-center justify-center p-5">
                          <Image src={product.image} alt={product.title} />
                        </div>
                        <div className="flex flex-col text-left gap-y-2 ml-4">
                          <h3 className="font-sans_bold font-bold text-xl tracking-tight">
                            {product.title}
                          </h3>
                          <p className="text-sm font-normal leading-normal">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-5 ml-4">
                          {product.sizes.map((size, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="icon"
                              className="border-primary text-primary"
                            >
                              <p>{size.toUpperCase()}</p>
                            </Button>
                          ))}
                        </div>
                        <div className="ml-4 flex items-center pt-4">
                          <Button className="">Add to Cart</Button>
                          <Button
                            className="rounded-full ml-auto mr-4"
                            size="icon"
                          >
                            <Icons.heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
            <div className="md:flex md:items-center md:gap-x-4 md:absolute md:-top-11 right-8 xl:right-24">
              <CarouselPrevious
                className={cn(
                  buttonVariants({
                    size: 'icon',
                    variant: 'default',
                  }),
                  'rounded-full hover:text-white shadow-lg hidden md:inline-flex'
                )}
              />
              <CarouselNext
                className={cn(
                  buttonVariants({
                    size: 'icon',
                    variant: 'default',
                  }),
                  'rounded-full hover:text-white shadow-lg hidden md:inline-flex'
                )}
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default PopularItems;
