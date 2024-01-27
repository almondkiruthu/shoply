"use client";

import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600",
        isActive &&
          "bg-primary/20 text-white hover:bg-primary/20 hover:text-white",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          className={cn("h-4 w-4 text-white", isActive && "text-primary")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto h-full border-0 border-primary opacity-0 transition-all",
          isActive && "opacity-100",
        )}
      />
    </button>
  );
};

export default SidebarItem;
