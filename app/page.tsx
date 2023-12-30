import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import heroDesign from '@/public/hero/Hero Design.png';
import featuredItem from '@/public/hero/Hero Featured Item.png';
import modelBoy from '@/public/hero/Model Boy.png';
import modelGirl from '@/public/hero/Model Girl.png';
import sitwideSaleRing from '@/public/hero/Sitewide Sale.png';

export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
      <div>
        <Image src={heroDesign} alt="." className="absolute left-0 top-28" />
      </div>
      <div>
        <Image
          src={featuredItem}
          alt="."
          className="absolute right-16 top-28"
        />
      </div>

      <div className="container relative flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div>
          <Image
            src={modelBoy}
            alt="."
            className="absolute left-[-12rem] bottom-[10rem]"
          />
        </div>
        <div>
          <Image
            src={modelGirl}
            alt="."
            className="absolute right-[-16rem] bottom-[7rem]"
          />
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Originality <br />
          You Wear <br /> Everday
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            href="/products"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-primary')}
          >
            Shop Now
          </Link>
          <Link
            href="/sales"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'border border-primary text-primary'
            )}
          >
            Flash Sales
          </Link>
        </div>
        <div className="font-sans_bold font-bold text-6xl pt-6 md:pt-10 lg:pt-28 realtive">
          <p className="max-w-[42rem]">
            SITEWIDE <br />
            SALE
          </p>
          <Image
            src={sitwideSaleRing}
            alt="S"
            className="relative top-[-11rem]"
          />
        </div>
      </div>
    </section>
  );
}
