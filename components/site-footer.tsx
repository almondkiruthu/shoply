import { Facebook, Instagram, Twitter } from "lucide-react";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col">
        <div className="flex flex-col py-16">
          <Icons.mainLogo />
          <div className="flex flex-col justify-between md:flex-row md:items-center ">
            <div className="flex flex-col -space-y-1 text-base">
              <p>Discover Your Distinctive Look: </p>
              <p>Fashioned with Precision, Worn with Confidence</p>
            </div>
            <div className="mt-4 flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-4 lg:mt-0 lg:gap-y-0">
              {siteConfig.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  rel="noreferrer"
                  className="text-sm font-semibold leading-loose"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-x-3 md:ml-auto md:mr-4 md:mt-4">
            <a href={"#"} rel="noreferrer">
              <Instagram className="h-6 w-6 rounded-full text-black" />
            </a>
            <a href={"#"} rel="noreferrer">
              <Facebook className="h-6 w-6 rounded-full text-black" />
            </a>
            <a href={"#"} rel="noreferrer">
              <Twitter className="h-6 w-6 rounded-full text-black" />
            </a>
          </div>
          <Separator className="my-7 w-full bg-black/30 lg:my-10" />
          <div className="flex flex-col justify-between gap-y-2 font-semibold md:flex-row md:items-center md:gap-y-0">
            <p className="text-wrap text-xs leading-loose md:hidden lg:text-sm">
              © 2023 Shoply Commerce Templates, Inc.
            </p>
            <a href={"#"} rel="noreferrer" className="text-sm leading-loose">
              Privacy Policy
            </a>
            <p className="hidden text-wrap text-xs leading-loose md:block lg:text-sm">
              © 2023 Shoply Commerce Templates, Inc.
            </p>
            <a href={"#"} rel="noreferrer" className="text-sm leading-loose">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
