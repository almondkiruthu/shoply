import { useLocalStorage } from "usehooks-ts";

import { Accordion } from "@/components/ui/accordion";
interface ProductSidebarProps {
  storageKey?: string;
}
const ProductSidebar = ({
  storageKey = "t-sidebar-state",
}: ProductSidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  );

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    [],
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultAccordionValue}
      className="space-y-2"
    ></Accordion>
  );
};

export default ProductSidebar;
