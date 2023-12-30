import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import heroDesign from '@/public/hero/Hero Design.png';
import featuredItem from '@/public/hero/Hero Featured Item.png';
import mobieHeroDesign from '@/public/hero/Hero Mobile Design.png';
import modelBoy from '@/public/hero/Model Boy.png';
import modelGirl from '@/public/hero/Model Girl.png';
import sitwideSaleRing from '@/public/hero/Sitewide Sale.png';

export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
      {/* Mobile Hero Design sm screens */}
      <div className="absolute top-[0.5rem] md:hidden">
        <Image src={mobieHeroDesign} alt="#" priority={true} />
      </div>

      {/* Tablet and larger Hero design and Featured Item md screens */}
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
        {/* Tablet and Larger Display for the hero image- modelBoy  */}
        <div className="hidden absolute left-2 bottom-0 md:block lg:hidden">
          <Image
            width={200}
            height={271}
            src={modelBoy}
            alt="s"
            priority={true}
            className="md:w-[200px] md:h-[271px] lg:w-[284px] h-[345px]"
          />
        </div>
        <div className="hidden absolute -left-[0.09rem] xl:-left-10 2xl:-left-20 bottom-0 lg:block">
          <Image
            width={290}
            height={450}
            src={modelBoy}
            alt="s"
            priority={true}
            className=""
          />
        </div>
        <h1 className="pt-24 md:pt-0 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Originality <br />
          You Wear <br /> Everyday
        </h1>
        {/* Tablet and Larger Display for the hero image- modelGirl  */}
        <div className="hidden absolute -right-5 -bottom-[2rem] md:block lg:hidden">
          <Image
            width={300.957}
            height={418.552}
            src={modelGirl}
            alt="s"
            priority={true}
          />
        </div>
        {/* Tablet and Larger Display for the hero image- modelGirl  */}
        <div className="hidden absolute -right-9 xl:-right-20 2xl:-right-40 -bottom-[2rem] lg:block">
          <Image
            width={420}
            height={533}
            src={modelGirl}
            alt="s"
            priority={true}
          />
        </div>

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
        {/* Mobile Display for the Hero images  */}
        <div
          className="flex flex-col justify-center items-center relative 
        gap-y-2 -top-32 md:hidden "
        >
          <Image
            width={223}
            height={271}
            src={modelBoy}
            alt="s"
            priority={true}
          />
          <Image
            width={194.4}
            height={194.4}
            src={featuredItem}
            priority={true}
            alt="s"
            className="mt-8"
          />
          <Image
            width={399.957}
            height={418.552}
            src={modelGirl}
            priority={true}
            alt="s"
          />
        </div>
      </div>
    </section>
  );
}
