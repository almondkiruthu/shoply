import Image from 'next/image';
import Link from 'next/link';

import MobileHeroImageDisplay from '@/components/mobile-hero';
import PopularItems from '@/components/popular-items';
import TabletAndLargerScreensHeroImageDisplay from '@/components/tablet-and-larger';
import { buttonVariants } from '@/components/ui/button';
import { popularItems } from '@/config/popular';
import { cn } from '@/lib/utils';
import heroDesign from '@/public/hero/Hero Design.png';
import featuredItem from '@/public/hero/Hero Featured Item.png';
import mobieHeroDesign from '@/public/hero/Hero Mobile Design.png';
import modelBoy from '@/public/hero/Model Boy.png';
import modelGirl from '@/public/hero/Model Girl.png';
import sitwideSaleRing from '@/public/hero/Sitewide Sale.png';

export default async function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
        {/* Mobile Hero Design sm screens*/}
        <div className="absolute top-[0.5rem] md:hidden">
          <Image src={mobieHeroDesign} alt="#" priority={true} />
        </div>

        {/* Tablet and larger Hero design and Featured Item*/}
        <div className="hidden absolute top-[0.5rem] md:block md:-left-[4rem] lg:left-0">
          <Image src={heroDesign} alt="#" priority={true} />
        </div>
        <div className="hidden absolute top-[5rem] md:block md:right-[1rem] lg:right-[4rem] xl:right-[8rem]">
          <Image
            width={184}
            height={184}
            src={featuredItem}
            alt="#"
            priority={true}
          />
        </div>

        <div className="container relative flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="pt-24 md:pt-0 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Originality <br />
            You Wear <br /> Everyday
          </h1>
          <TabletAndLargerScreensHeroImageDisplay />
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-primary shadow-lg'
              )}
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
                'border border-primary text-primary shadow-lg'
              )}
            >
              Flash Sales
            </Link>
          </div>
          <div className="font-sans_bold font-bold text-2xl md:text-4xl lg:text-6xl pt-10 lg:pt-28">
            <p className="max-w-[42rem]">
              SITEWIDE <br />
              SALE
            </p>
            <Image
              src={sitwideSaleRing}
              alt="S"
              priority={true}
              className="relative top-[-6rem] md:top-[-8rem] lg:top-[-11rem] w-[14.375rem] md:w-[20rem] lg:w-[26rem]"
            />
          </div>
          <MobileHeroImageDisplay />
        </div>
      </section>
      <PopularItems products={popularItems} />
    </>
  );
}
