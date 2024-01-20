import { cn } from "@/lib/utils";

interface TotalPriceProps extends React.HTMLAttributes<HTMLDivElement> {}

const TotalPrice = ({ className, ...props }: TotalPriceProps) => {
  return (
    <div className={cn(className)} {...props}>
      This The Total Price Section
    </div>
  );
};

export default TotalPrice;
