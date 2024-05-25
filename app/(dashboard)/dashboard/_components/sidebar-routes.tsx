"use client";

import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";

import SidebarItem from "./sidebar-item";

const adminRoutes = [
  {
    icon: Icons.clothes,
    label: "Store",
    href: "/dashboard",
  },
  {
    icon: Icons.barChart,
    label: "Analytics",
    href: "dashboard/analytics",
  },
];

const _DashBoardConfig: typeof adminRoutes = adminRoutes;

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.includes("/dashboard");

  const routes = isAdminPage ? adminRoutes : null;

  return (
    <div className="flex w-full flex-col">
      {routes?.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
