"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
    <div className={cn(className)} {...props}>
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
    </div>
  );
};

export default ProductSidebar;
