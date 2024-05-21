import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

import DashBoardSiteNavigation from "./dashboard/_components/dashboard-site-nav";
import { Sidebar } from "./dashboard/_components/sidebar";

interface DashBoardProps {
  children?: React.ReactNode;
}

const DashBoard = ({ children }: DashBoardProps) => {
  return (
    <>
      <DashBoardSiteNavigation />
      <div className="container grid h-full md:grid-cols-[200px_1fr]">
        <aside className="flex-col md:flex">
          <Sidebar />
        </aside>
        <main className="container mb-8 md:mb-10 md:pl-14">{children}</main>
      </div>
      <SiteFooter />
    </>
  );
};

export default DashBoard;
