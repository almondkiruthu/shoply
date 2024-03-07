import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";

interface ProductCardSkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const ProductCardSkeleton = ({
  className,
  ...props
}: ProductCardSkeletonProps) => {
  return (
    <div className="mt-16 w-[250px] space-y-2 rounded-lg bg-white p-5 shadow-lg sm:w-[300px] xl:mt-0">
      <div className="m-5 flex flex-col items-center justify-center">
        <Skeleton className="h-[210px] w-[230px] md:w-[245px] p-4" />
      </div>
      <div className="ml-4 flex flex-col items-start gap-y-2">
        <Skeleton className="h-8 w-[108px]" />
        <Skeleton className="h-8 w-[70px]" />
      </div>
      <div className="ml-4 flex items-center gap-x-5">
        <Skeleton
          className={cn(
            buttonVariants({
              size: "icon",
            }),
            "h-9 w-9 bg-primary/20",
          )}
        />
        <Skeleton
          className={cn(
            buttonVariants({
              size: "icon",
            }),
            "h-9 w-9 bg-primary/20",
          )}
        />
        <Skeleton
          className={cn(
            buttonVariants({
              size: "icon",
            }),
            "h-9 w-9 bg-primary/20",
          )}
        />
        <Skeleton
          className={cn(
            buttonVariants({
              size: "icon",
            }),
            "h-9 w-9 bg-primary/20",
          )}
        />
      </div>
      <div className="ml-4 flex items-center pt-4">
        <Skeleton className="h-10 w-[150px] rounded-lg" />
        <Skeleton
          className={cn(
            buttonVariants({
              size: "icon",
            }),
            "ml-auto mr-4 h-7 w-7 rounded-full bg-primary/20",
          )}
        />
      </div>
    </div>
  );
};
