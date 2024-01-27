import DashBoardSiteNavigation from "./dashboard/_components/dashboard-site-nav";
import { Sidebar } from "./dashboard/_components/sidebar";

interface DashBoardProps {
  children?: React.ReactNode;
}

const DashBoard = ({ children }: DashBoardProps) => {
  return (
    <>
      <DashBoardSiteNavigation />
      <div className="container h-full">
        <aside
          className="fixed inset-y-0 z-50 hidden h-full w-56 
        flex-col md:mt-[4.05rem] md:flex"
        >
          <Sidebar />
        </aside>
        <main className="container mb-8 md:mb-10 md:pl-72">{children}</main>
      </div>
    </>
  );
};

export default DashBoard;
