import SiteFooter from "@/components/site-footer";

import FavoritesSiteNavigation from "./favorites/_components/favorites-site-nav";

interface FavoritesLayoutProps {
  children?: React.ReactNode;
}

const FavoritesLayout = ({ children }: FavoritesLayoutProps) => {
  return (
    <>
      <FavoritesSiteNavigation />
      <div className="container flex-1">
        <main className="mx-auto mb-8 max-w-[1040px] md:mb-10">{children}</main>
      </div>
      <SiteFooter className="bg-slate-100/80" />
    </>
  );
};

export default FavoritesLayout;
