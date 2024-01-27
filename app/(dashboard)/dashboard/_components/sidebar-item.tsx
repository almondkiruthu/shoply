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
    (pathname === "/dashboard" && href === "/dashboard") ||
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
        "mb-2 flex items-center gap-x-2 rounded-lg pl-6 text-sm font-[500] text-muted-foreground transition-all hover:bg-primary/10 hover:text-slate-600",
        isActive &&
          "bg-primary/20 text-black/80 hover:bg-primary/20 hover:text-black/70",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          className={cn("h-4 w-4 text-primary", isActive && "text-black/80")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto h-full border-2 border-black/50 opacity-0 transition-all",
          isActive && "opacity-100",
        )}
      />
    </button>
  );
};

export default SidebarItem;
