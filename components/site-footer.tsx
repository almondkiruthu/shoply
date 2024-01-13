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
          <div className="flex items-center justify-between">
            <div className="flex flex-col -space-y-1 text-base">
              <p>Discover Your Distinctive Look: </p>
              <p>Fashioned with Precision, Worn with Confidence</p>
            </div>
            <div className="flex gap-x-4 items-center">
              {siteConfig.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  rel="noreferrer"
                  className="text-sm leading-loose"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-3 ml-auto mr-4 mt-4">
            <Instagram className="rounded-full text-black h-6 w-6" />
            <Facebook className="rounded-full text-black h-6 w-6" />
            <Twitter className="rounded-full text-black h-6 w-6" />
          </div>
          <Separator className="bg-black w-full my-10" />
          <div className="flex items-center justify-between font-semibold">
            <a href={'#'} rel="noreferrer" className="text-sm leading-loose">
              Privacy Policy
            </a>
            <p className="text-sm leading-loose">
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
