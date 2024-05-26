import { Icons } from "@/components/icons";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Icons.spinner className="h-14 w-14 animate-spin text-primary" />
    </div>
  );
};

export default Loader;
