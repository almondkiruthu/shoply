import { usePathname } from "next/navigation";

interface ProductsPageLayoutProps {
  children?: React.ReactNode;
}

const ProductsPageLayout = ({ children }: ProductsPageLayoutProps) => {
  const pathName = usePathname();
  return (
    <>
      <div className="container flex items-center"></div>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside></aside>
        <main className="">{children}</main>
      </div>
      {/* TODO: Add Site Footer  */}
    </>
  );
};

export default ProductsPageLayout;
