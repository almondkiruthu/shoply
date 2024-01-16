"use client";

import { usePathname } from "next/navigation";

const SiteNavigation = () => {
  const pathname = usePathname();

  return (
    pathname.startsWith("/products") && (
      <div className="container pt-2 text-sm md:pt-4">
        <div className="max-w-[150px] flex items-center gap-x-2">
          <p className="text-primary">Home</p>
          <p className="text-muted-foreground">/</p>
          <p className="text-muted-foreground">Products</p>
        </div>
      </div>
    )
  );
};

export default SiteNavigation;
