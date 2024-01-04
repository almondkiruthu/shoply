import Image from 'next/image';
import Link from 'next/link';

import MobileHeroImageDisplay from '@/components/mobile-hero';
import NewArrivals from '@/components/new-arrivals';
import PopularItems from '@/components/popular-items';
import TabletAndLargerScreensHeroImageDisplay from '@/components/tablet-and-larger';
import { buttonVariants } from '@/components/ui/button';
import { newArrivalProducts } from '@/config/new-arrivals';
import { popularItems } from '@/config/popular';
import { cn } from '@/lib/utils';
import heroDesign from '@/public/hero/Hero Design.png';
import featuredItem from '@/public/hero/Hero Featured Item.png';
import mobieHeroDesign from '@/public/hero/Hero Mobile Design.png';
import modelGirlHero2 from '@/public/hero/hero2-image.png';
import modelBoyHero3 from '@/public/hero/hero3-image.png';
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
      <section
        id="about"
        className="space-y-6  bg-slate-100/60 relative -top-14 md:top-0 py-8 md:py-12 lg:pt-20 lg:pb-18"
      >
        <div className="container flex flex-col items-center xl:gap-x-10 lg:max-w-[58rem] xl:max-w-[78rem] md:flex-row">
          <div className="flex flex-col">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-6xl pb-4 text-pretty">
              Where Personality Meets Fabric
            </h2>
            <p className="text-sm sm:text-lg md:text-lg font-normal leading-normal text-wrap">
              Personal style in fashion is more than just what you wear{'-'}
              it&apos;s a visual manifestation of your personality. It&apos;s
              the art of curating outfits that resonate with your inner essence.
            </p>
          </div>
          <div className="shrink-0 pr-8 md:pr-0">
            <Image
              src={modelGirlHero2}
              priority={true}
              alt="#"
              className="w-64 sm:w-[20rem] md:w-[22rem] lg:w-[25rem] xl:w-full"
            />
          </div>
        </div>
      </section>
      <NewArrivals products={newArrivalProducts} />
      <section
        id="about2"
        className="space-y-6  bg-white relative -top-14 md:top-0 py-8 md:py-12 lg:pt-20 lg:pb-18"
      >
        <div className="container flex flex-col items-center lg:gap-x-10 xl:gap-x-14 lg:max-w-[58rem] xl:max-w-[78rem] md:flex-row">
          <div className="shrink-0 pl-8 md:pl-0">
            <Image
              src={modelBoyHero3}
              alt="#"
              priority={true}
              className="w-64 sm:w-[20rem] md:w-[22rem] lg:w-[25rem] xl:w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-6xl pt-14 md:pt-0 text-pretty">
              Intersection of Confidence and Couture
            </h2>
            <p className="text-sm sm:text-lg md:text-lg font-normal leading-normal text-wrap">
              Staying confidently true to who you are in fashion involves
              embracing your quirks. It&apos;s about exuding an authenticity
              that is truly captivating.
            </p>
          </div>
        </div>
        <div className='container'>

        </div>
      </section>
    </>
  );
}
