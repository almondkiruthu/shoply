"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { productConfig } from "@/config/products";
import { cn } from "@/lib/utils";

const NavItem = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <AccordionItem value={"categories"} className="border-none">
      <AccordionTrigger
        className={cn(
          "rounded-md bg-primary/20 p-2 text-black no-underline transition hover:no-underline",
        )}
      >
        <span className="text-sm font-medium">Category</span>
      </AccordionTrigger>
      <AccordionContent className="ml-3 bg-white pt-2 text-black">
        <AccordionItem value="women" className="border-none">
          <AccordionTrigger
            className={cn(
              "rounded-md bg-white p-2 text-black no-underline transition hover:no-underline",
            )}
          >
            <span className="text-sm font-medium mt-2">Women</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 text-neutral-700 space-y-4">
            {productConfig.womenSidebarNav.map((categoryName, index) => (
              <div key={index} className="flex items-center">
                <Checkbox className="mr-2 h-4 w-4" />
                <span className="text-sm">{categoryName.name}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="men" className="border-none">
          <AccordionTrigger
            className={cn(
              "rounded-md bg-white p-2 text-black no-underline transition hover:no-underline",
            )}
          >
            <div className="flex items-center">
              <p className="text-sm font-medium mt-2">Men</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 text-neutral-700 space-y-4">
            {productConfig.menSidebarNav.map((categoryName, index) => (
              <div key={index} className="flex items-center">
                <Checkbox className="mr-2 h-4 w-4" />
                <span className="text-sm">{categoryName.name}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
