import { SidebarRoutes } from "./sidebar-routes";
export const Sidebar = () => {
  return (
    <div className="flex h-[50vh] flex-col overflow-y-auto border-r bg-white p-1 shadow-md">
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
};
