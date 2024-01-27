import { Separator } from "@/components/ui/separator";

interface DashBoardPageProps {}

const DashBoardPage = ({}: DashBoardPageProps) => {
  return (
    <>
      <div className="grid gap-6 md:mt-4 md:grid-cols-2">
        <div className="flex">
          Hello
          <Separator orientation="vertical" className="ml-auto mr-4 h-full" />
        </div>
        <div>Hello</div>
      </div>
    </>
  );
};

export default DashBoardPage;
