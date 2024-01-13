import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  process.setMaxListeners(15);
  return (
    <>
      <Toaster />
      {children}
      <TailwindIndicator />
    </>
  );
};

export default Providers;
