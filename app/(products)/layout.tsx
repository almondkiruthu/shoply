import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

// import ProductSidebar from "./products/_components/sidebar";
import SiteNavigation from "./products/_components/site-nav";

interface ProductsPageLayoutProps {
  children?: React.ReactNode;
}

const ProductsPageLayout = ({ children }: ProductsPageLayoutProps) => {
  return (
    <>
      <SiteHeader />
      <SiteNavigation />
      <div className="container grid flex-1 gap-12 md:grid-cols-[100px_1fr]">
        <aside>
          {/* <ProductSidebar className="mt-3 rounded-lg p-4 shadow-xl md:mt-10" /> */}
        </aside>
        <main className="">{children}</main>
      </div>
      <SiteFooter className="bg-slate-100/80" />
    </>
  );
};

export default ProductsPageLayout;
