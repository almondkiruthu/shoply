"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import design from "@/public/products/Design.png";

import NavItem from "./nav-item";

interface ProductSidebarProps extends React.HTMLAttributes<HTMLElement> {
  storageKey?: string;
}

const ProductSidebar = ({
  className,
  storageKey = "t-sidebar-state",
  ...props
}: ProductSidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  );

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    },
    [],
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={cn("relative", className)} {...props}>
      {isClient ? (
        <Accordion
          type="multiple"
          defaultValue={defaultAccordionValue}
          className="space-y-2"
        >
          <NavItem onExpand={onExpand} />
        </Accordion>
      ) : (
        <NavItem.Skeleton />
      )}
      <div className="absolute -left-[2rem] hidden md:block xl:-left-[5.5rem] 2xl:-left-[17rem]">
        <Image src={design} alt="s" priority={true} />
      </div>
    </div>
  );
};

export default ProductSidebar;
