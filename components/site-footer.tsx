import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col">
        <div className="flex flex-col py-16">
          <Icons.mainLogo />
          <div className="flex flex-col md:items-center justify-between md:flex-row ">
            <div className="flex flex-col -space-y-1 text-base">
              <p>Discover Your Distinctive Look: </p>
              <p>Fashioned with Precision, Worn with Confidence</p>
            </div>
            <div className="flex flex-col mt-4 gap-y-4 lg:gap-y-0 lg:mt-0 md:flex-row md:gap-x-4 md:items-center">
              {siteConfig.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  rel="noreferrer"
                  className="text-sm leading-loose font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-8 md:ml-auto md:mr-4 md:mt-4">
            <a href={'#'} rel="noreferrer">
              <Instagram className="rounded-full text-black h-6 w-6" />
            </a>
            <a href={'#'} rel="noreferrer">
              <Facebook className="rounded-full text-black h-6 w-6" />
            </a>
            <a href={'#'} rel="noreferrer">
              <Twitter className="rounded-full text-black h-6 w-6" />
            </a>
          </div>
          <Separator className="bg-black/30 w-full my-7 lg:my-10" />
          <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:items-center justify-between font-semibold">
            <p className="md:hidden text-xs lg:text-sm leading-loose text-wrap">
              © 2023 Shoply Commerce Templates, Inc.
            </p>
            <a href={'#'} rel="noreferrer" className="text-sm leading-loose">
              Privacy Policy
            </a>
            <p className="hidden md:block text-xs lg:text-sm leading-loose text-wrap">
              © 2023 Shoply Commerce Templates, Inc.
            </p>
            <a href={'#'} rel="noreferrer" className="text-sm leading-loose">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
