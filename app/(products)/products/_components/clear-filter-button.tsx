"use client";

import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClearFilterButton {
  search: string | undefined;
}

const ClearFilterButton = ({ search }: ClearFilterButton) => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      size={"sm"}
      className={cn(
        "flex items-center rounded-full border border-dashed border-primary/80 shadow-xl hover:bg-primary/20",
        search ? "" : "border-none",
      )}
      onClick={() => router.push(`/products`)}
    >
      <p className="font-medium">{search || <>none</>}</p>
      <Icons.close
        className={cn(
          "ml-2 h-4 w-4 text-neutral-500/80",
          search ? "" : "hidden",
        )}
      />
      <Icons.sparkles
        className={cn(
          "ml-2 h-4 w-4 text-neutral-500/80",
          search ? "hidden" : "",
        )}
      />
    </Button>
  );
};

export default ClearFilterButton;
