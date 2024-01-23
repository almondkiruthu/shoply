import DashBoardSiteNavigation from "./dashboard/_components/dashboard-site-nav";

interface DashBoardProps {
  children?: React.ReactNode;
}

const DashBoard = ({ children }: DashBoardProps) => {
  return (
    <>
      <DashBoardSiteNavigation />
      <div className="container">
        <main className="mb-8 md:mb-10">{children}</main>
      </div>
    </>
  );
};

export default DashBoard;
