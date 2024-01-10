import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col">
          <Icons.mainLogo />
          <div className='flex flex-col gap-y-1'>
            <p>Discover Your Distinctive Look: </p>
            <p>Fashioned with Precision, Worn with Confidence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
