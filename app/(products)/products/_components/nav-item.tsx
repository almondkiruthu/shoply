"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { productConfig } from "@/config/products";
import { cn } from "@/lib/utils";

interface NavItemProps {
  onExpand: (id: string) => void;
  onFilterChange?: (filters: string[]) => void; //Filter change
}

const NavItem = ({ onExpand, onFilterChange }: NavItemProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleCheckBoxChange = (subCategoryId: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(subCategoryId)
        ? prevFilters.filter((id) => id !== subCategoryId)
        : [...prevFilters, subCategoryId],
    );
  };

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
  }, [selectedFilters, onFilterChange]);

  return (
    <AccordionItem value={"categories"} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand("categories")}
        className={cn(
          "rounded-md bg-primary/20 p-2 text-black no-underline transition hover:no-underline",
        )}
      >
        <span className="text-sm font-medium">Category</span>
      </AccordionTrigger>
      <AccordionContent className="ml-3 bg-white pt-2 text-black">
        <AccordionItem value="women" className="border-none">
          <AccordionTrigger
            onClick={() => onExpand("women")}
            className={cn(
              "rounded-md bg-white p-2 text-black no-underline transition hover:no-underline",
            )}
          >
            <span className="mt-2 text-sm font-medium">Women</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2 text-neutral-700">
            {productConfig.womenSidebarNav.map((category) => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  className="mr-2 h-4 w-4"
                  onCheckedChange={() => handleCheckBoxChange(category.id)}
                />
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="men" className="border-none">
          <AccordionTrigger
            onClick={() => onExpand("men")}
            className={cn(
              "rounded-md bg-white p-2 text-black no-underline transition hover:no-underline",
            )}
          >
            <div className="flex items-center">
              <p className="mt-2 text-sm font-medium">Men</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2 text-neutral-700">
            {productConfig.menSidebarNav.map((category) => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  className="mr-2 h-4 w-4"
                  onCheckedChange={() => handleCheckBoxChange(category.id)}
                />
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;

interface NavItemSkeletonProps extends React.HTMLAttributes<HTMLElement> {}
NavItem.Skeleton = function NavItemSkeleton({
  className,
  ...props
}: NavItemSkeletonProps) {
  return (
    <div className={cn("", className)} {...props}>
      <Skeleton className="w-[170px]">
        <div className="mt-2 flex flex-col gap-y-4">
          <Skeleton className="hidden h-10 w-full lg:block" />
          <Skeleton className="hidden h-10 w-full lg:block" />
          <Skeleton className="hidden h-10 w-full lg:block" />
          <Skeleton className="hidden h-10 w-full lg:block" />
          <Skeleton className="h-8 w-full lg:h-10" />
        </div>
      </Skeleton>
    </div>
  );
};
