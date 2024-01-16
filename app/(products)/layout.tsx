import SiteNavigation from "./products/_components/site-nav";

interface ProductsPageLayoutProps {
  children?: React.ReactNode;
}

const ProductsPageLayout = ({ children }: ProductsPageLayoutProps) => {
  return (
    <>
      <SiteNavigation />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside></aside>
        <main className="">{children}</main>
      </div>
      {/* TODO: Add Site Footer  */}
    </>
  );
};

export default ProductsPageLayout;
