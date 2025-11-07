import NewDocCard from "@/components/Cards/NewDocCard";
import PreviousDocsCard from "@/components/Cards/PreviousDocsCard";
import MainHeader from "@/components/layout/MainHeader";

export default function Home() {
  return (
    <div className="w-full  h-full container max-w-[80vw] m-auto py-5 ">
      <MainHeader />
      <section className="flex w-full  items-center justify-between gap-4 flex-wrap">
        <NewDocCard />
        <PreviousDocsCard />
      </section>
    </div>
  );
}
