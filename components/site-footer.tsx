import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col">
          <Icons.mainLogo />
          <div className="flex items-center justify-between">
            <div className="flex flex-col -space-y-1 text-base">
              <p>Discover Your Distinctive Look: </p>
              <p>Fashioned with Precision, Worn with Confidence</p>
            </div>
            <div className="flex gap-x-3 items-center">
              {siteConfig.footer.map((link, index) => (
                <a key={index} className="text-sm leading-loose">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
