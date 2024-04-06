"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-primary" />
      <Input
        className="w-full rounded-full bg-slate-100 pl-9 focus-visible:ring-primary md:w-[300px]"
        placeholder="Search for a product"
      />
    </div>
  );
};
