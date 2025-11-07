import DocumentationCompleteness from "@/components/Cards/DocumentationCompletness";
import UsedFilesCard from "@/components/Cards/UsedFilesCard";
import SecurityGapCard from "@/components/Cards/SecurityGapCard";
import MainHeader from "@/components/layout/MainHeader";
import EndpointsCard from "@/components/Cards/EndpointsCard";
import { EndpointMethod } from "@/constants";

const endpoints: {
  method: keyof typeof EndpointMethod;
  url: string;
}[] = [
  { method: "GET", url: "/user/[id]" },
  { method: "POST", url: "/auth/login" },
  { method: "PUT", url: "/user/[id]/profilephoto" },
  { method: "DELETE", url: "/user/[id]/comment/[commentid]" },
];
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

        <section className="col-span-3">
          <EndpointsCard endpoints={endpoints} />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
