import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0"
      ></div>
    </footer>
  );
};

export default SiteFooter;
