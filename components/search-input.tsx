"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SearchInput = ({ className }: SearchInputProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/products?search=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="hidden sm:relative sm:block">
      <Search className="absolute left-3 top-3 h-4 w-4 text-primary" />

      <form onSubmit={handleSubmit}>
        <Input
          id="search"
          type="search"
          name="search"
          autoComplete="off"
          value={searchTerm}
          className="w-full rounded-full bg-slate-100 pl-9 focus-visible:ring-primary md:w-[300px]"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};
