'use client';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyString } from 'use-shopping-cart';

import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SanityProduct } from '@/config/inventory';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
interface PopularItemsProps {
  products: SanityProduct[];
}

const PopularItems = ({ products }: PopularItemsProps) => {
  return (
    <>
      <section
        id="popular"
        className="container space-y-6 bg-slate-50 py-8 md:py-12 lg:pt-20 lg:pb-18"
      >
        <div className="mx-auto flex max-w-[58rem] items-center space-y-4">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Popular Items
          </h2>
        </div>
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product.slug}`}
            className="group text-sm"
          >
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg
            borde-2 border-gray-200 bg-gray-100 group-hover:opacity-75"
            >
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(225, 280)
                )}`}
                src={urlForImage(product.images[0])}
                alt={product.name}
                width={225}
                height={280}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium">{product.name}</h3>
            <p className="mt-2 font-medium">
              {formatCurrencyString({
                currency: product.currency,
                value: product.price,
              })}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
};

export default PopularItems;
