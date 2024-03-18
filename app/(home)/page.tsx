import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

import MobileHeroImageDisplay from "@/components/mobile-hero";
import NewArrivals from "@/components/new-arrivals";
import PopularItems from "@/components/popular-items";
import ShowCaseItems from "@/components/showcase-items";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TabletAndLargerScreensHeroImageDisplay from "@/components/tablet-and-larger";
import { buttonVariants } from "@/components/ui/button";
import { popularItems } from "@/config/popular";
import { showCaseImages } from "@/config/site";
import { getNewArrivalsProducts } from "@/data/new-arrivals";
import { getPopularProducts } from "@/data/popular-items";
import { cn } from "@/lib/utils";
import heroDesign from "@/public/hero/Hero Design.png";
import featuredItem from "@/public/hero/Hero Featured Item.png";
import mobieHeroDesign from "@/public/hero/Hero Mobile Design.png";
import modelGirlHero2 from "@/public/hero/hero2-image.png";
import modelBoyHero3 from "@/public/hero/hero3-image.png";
import sitwideSaleRing from "@/public/hero/Sitewide Sale.png";

export default async function Home() {
  //Fetch the New Arrival Products
  const newArrivalProducts = await getNewArrivalsProducts();
  //Fetch the Popular Products
  const popularItems = await getPopularProducts();

  return (
    <>
      <SiteHeader />
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
        {/* Mobile Hero Design sm screens*/}
        <div className="absolute top-[0.5rem] md:hidden">
          <Image src={mobieHeroDesign} alt="#" priority={true} />
        </div>

        {/* Tablet and larger Hero design and Featured Item*/}
        <div className="absolute top-[0.5rem] hidden md:-left-[4rem] md:block lg:left-0">
          <Image src={heroDesign} alt="#" priority={true} />
        </div>
        <div className="absolute top-[5rem] hidden md:right-[1rem] md:block lg:right-[4rem] xl:right-[8rem]">
          <Image
            src={featuredItem}
            alt="#"
            priority={true}
            className="h-[11.5rem] w-[11.5rem]"
          />
        </div>

        <div className="container relative flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="pt-24 font-heading text-3xl sm:text-5xl md:pt-0 md:text-6xl lg:text-7xl">
            Originality <br />
            You Wear <br /> Everyday
          </h1>
          <TabletAndLargerScreensHeroImageDisplay />
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary shadow-lg",
              )}
            >
              Shop Now
            </Link>
            <Link
              href="/sales"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "border border-primary text-primary shadow-lg",
              )}
            >
              Flash Sales
            </Link>
          </div>
          <div className="pt-10 font-sans_bold text-2xl font-bold md:text-4xl lg:pt-28 lg:text-6xl">
            <p className="max-w-[42rem]">
              SITEWIDE <br />
              SALE
            </p>
            <Image
              src={sitwideSaleRing}
              alt="S"
              priority={true}
              className="relative top-[-6rem] w-[14.375rem] md:top-[-8rem] md:w-[20rem] lg:top-[-11rem] lg:w-[26rem]"
            />
          </div>
          <MobileHeroImageDisplay />
        </div>
      </section>
      <PopularItems products={popularItems} />
      <section
        id="about"
        className="lg:pb-18  relative -top-14 space-y-6 bg-slate-100/60 py-8 md:top-0 md:py-12 lg:pt-20"
      >
        <div className="container flex flex-col items-center md:flex-row lg:max-w-[58rem] xl:max-w-[78rem] xl:gap-x-10">
          <div className="flex flex-col">
            <h2 className="text-pretty pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl lg:text-6xl">
              Where Personality Meets Fabric
            </h2>
            <p className="text-wrap text-sm font-normal leading-normal sm:text-lg md:text-lg">
              Personal style in fashion is more than just what you wear{"-"}
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
        className="lg:pb-18  relative -top-14 space-y-6 bg-white py-8 md:top-0 md:py-12 lg:pt-20"
      >
        <div className="container flex flex-col items-center md:flex-row lg:max-w-[58rem] lg:gap-x-10 xl:max-w-[78rem] xl:gap-x-14">
          <div className="shrink-0 pl-8 md:pl-0">
            <Image
              src={modelBoyHero3}
              alt="#"
              priority={true}
              className="w-64 sm:w-[20rem] md:w-[22rem] lg:w-[25rem] xl:w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-pretty pt-14 font-heading text-3xl leading-[1.1] sm:text-3xl md:pt-0 lg:text-6xl">
              Intersection of Confidence and Couture
            </h2>
            <p className="text-wrap text-sm font-normal leading-normal sm:text-lg md:text-lg">
              Staying confidently true to who you are in fashion involves
              embracing your quirks. It&apos;s about exuding an authenticity
              that is truly captivating.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-y-4 pb-10">
            <h2 className="text-pretty pt-14 font-heading text-2xl leading-[1.1] sm:text-2xl lg:text-3xl">
              FOLLOW US
            </h2>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "sm",
                }),
                "flex items-center gap-x-2",
              )}
            >
              <Instagram className="h-4 w-4" />
              <p className="text-sm text-muted">_insta.shoply</p>
            </Link>
          </div>
          <ShowCaseItems showCaseImage={showCaseImages} />
        </div>
      </section>
      <SiteFooter className="bg-slate-100/60" />
    </>
  );
}
