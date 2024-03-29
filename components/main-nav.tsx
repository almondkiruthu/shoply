import Link from "next/link";

import { Icons } from "./icons";

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center">
        <Icons.mainLogo className="h-7 w-7" />
      </Link>
    </div>
  );
}
