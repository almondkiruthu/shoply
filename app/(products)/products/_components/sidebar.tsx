
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import NavItem from "./nav-item";

const ProductSidebar = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn(className)}>
      <Accordion type="multiple" className="space-y-2">
        <NavItem />
      </Accordion>
    </div>
  );
};

export default ProductSidebar;
