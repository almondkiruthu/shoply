"use client";

import { usePathname } from "next/navigation";

const FavoritesSiteNavigation = () => {
  const pathname = usePathname();

  return (
    pathname.startsWith("/favorites") && (
      <div className="container pt-2 text-sm md:pt-8">
        <div className="ml-32 flex max-w-[150px] items-center gap-x-2">
          <p className="text-primary">Home</p>
          <p className="text-muted-foreground">/</p>
          <p className="text-muted-foreground">Favorites</p>
        </div>
      </div>
    )
  );
};

export default FavoritesSiteNavigation;
