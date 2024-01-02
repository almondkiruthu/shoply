'use client';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyString } from 'use-shopping-cart';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { formatPrice } from '@/lib/format';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import { PopularItems } from '@/types';

import { Button } from './ui/button';
import { Icons } from './icons';

interface PopularItemsProps {
  products: PopularItems;
}

const PopularItems = ({ products }: PopularItemsProps) => {
  return (
    <>
      <section
        id="popular"
        className="container space-y-6 bg-slate-50/10 py-8 md:py-12 lg:pt-20 lg:pb-18"
      >
        <div className="mx-auto flex items-center space-y-4 relative">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Popular Items
          </h2>
        </div>
        <Carousel>
          <CarouselContent>
            {products?.map((product) => (
              <>
                <CarouselItem className='basis-1/4 pl-4'>
                  <Link key={product.title} href={'#'} className="">
                    <div className="w-[300px] rounded-lg drop-shadow-lg bg-white space-y-2">
                      <div
                        className="flex flex-col items-center justify-center
                      p-5"
                      >
                        <Image src={product.image} alt={product.title} />
                      </div>
                      <div
                        className="flex flex-col text-left
                      gap-y-2 ml-4"
                      >
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default PopularItems;
