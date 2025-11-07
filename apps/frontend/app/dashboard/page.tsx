import DocumentationCompleteness from "@/components/Cards/DocumentationCompletness";
import MainHeader from "@/components/layout/MainHeader";

const DashboardPage = () => {
  return (
    <div className=" container mx-auto   ">
      <MainHeader title="Dashbard - This will represent single Documentation entry for a project (for now)" />
      <div className="flex flex-col gap-5">
        <DocumentationCompleteness />
      </div>
    </div>
  );
};

export default DashboardPage;
