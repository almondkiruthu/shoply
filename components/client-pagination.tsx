"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";

interface PaginationSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  totalItems: any;
  itemsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}

function PaginationSection({
  className,
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  ...props
}: PaginationSectionProps) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  const maxPageNum = 5; //Max Pages to display once
  const pageNumLimit = Math.floor(maxPageNum / 2); // current page should be in the middle if possible

  let activePages = pages.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pages.length),
  );

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //Function to render page Numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, index) => (
      <PaginationItem
        key={index}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          currentPage === page
            ? "rounded-md bg-primary text-white text-xs"
            : "text-primary text-xs",
        )}
      >
        <PaginationLink className="hover:cursor-pointer" onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />,
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pages.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />,
      );
    }

    return renderedPages;
  };

  return (
    <div className={cn(className)} {...props}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevPage}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "rounded-lg text-primary hover:bg-primary/10",
              )}
            />
          </PaginationItem>
          {renderPages()}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "rounded-lg text-primary hover:bg-primary/10",
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationSection;
