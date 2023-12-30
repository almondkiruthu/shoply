import { Toaster } from '@/components/ui/toaster';

import { TailwindIndicator } from './tailwind-indicator';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster />
      {children}
      <TailwindIndicator />
    </>
  );
};

export default Providers;
