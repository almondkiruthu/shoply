"use client";

import { usePathname } from "next/navigation";

const FavoritesSiteNavigation = () => {
  const pathname = usePathname();

  return (
    pathname.startsWith("/favorites") && (
      <div className="container pt-2 text-sm md:pt-8">
        <div className="flex max-w-[150px] items-center gap-x-2 md:ml-8 xl:ml-32">
          <p className="text-primary">Home</p>
          <p className="text-muted-foreground">/</p>
          <p className="text-muted-foreground">Favorites</p>
        </div>
      </div>
    )
  );
};

export default FavoritesSiteNavigation;
