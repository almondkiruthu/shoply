import { MainNav } from '@/components/main-nav';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Edit } from 'lucide-react';

const SiteHeader = () => {
  return (
    <header
      className="sticky top-0 w-full z-40 border-b bg-background/95 backdrop-blur 
  supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div
        className="mx-auto flex h-16 max-w-6xl items-center justify-between 
        space-x-4 px-6 sm:space-x-0"
      >
        <MainNav />
        <form className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            type="search"
            name="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
          />
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <Icons.shoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">0</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5 " />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
