import DocumentationCompleteness from "@/components/Cards/DocumentationCompletness";
import UsedFilesCard from "@/components/Cards/UsedFilesCard";
import SecurityGapCard from "@/components/Cards/SecurityGapCard";
import MainHeader from "@/components/layout/MainHeader";

const DashboardPage = () => {
  return (
    <div className=" container mx-auto   ">
      <MainHeader title="Dashbard - This will represent single Documentation entry for a project (for now)" />
      <div className="grid grid-cols-5 gap-5 ">
        <section className="flex col-span-2 flex-col gap-5">
          <DocumentationCompleteness />
          <SecurityGapCard />
          <UsedFilesCard></UsedFilesCard>
        </section>

        <section className="col-span-3"></section>
      </div>
    </div>
  );
};

export default DashboardPage;
