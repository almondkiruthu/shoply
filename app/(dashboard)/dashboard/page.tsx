import ProductNameForm from "./_components/product-name-form";

interface DashBoardPageProps {}

const DashBoardPage = async ({}: DashBoardPageProps) => {
  return (
    <>
      <div
        className="container flex flex-1 flex-col items-center 
        bg-gradient-to-tr from-white/10 via-primary/10 to-slate-100 shadow-lg 
        md:my-10 md:py-10"
      >
        <ProductNameForm />
      </div>
    </>
  );
};

export default DashBoardPage;
