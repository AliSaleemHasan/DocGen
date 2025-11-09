import NewDocCard from "@/components/Cards/NewDocCard";
import PreviousDocsCard from "@/components/Cards/PreviousDocsCard";
import MainHeader from "@/components/layout/MainHeader";

export default function Home() {
  return (
    <div className="w-full  h-full md:container    md:max-w-[80vw] m-auto md:py-5 ">
      <MainHeader />
      <section className="flex w-full  items-center justify-between gap-4 flex-wrap">
        <NewDocCard />
        <PreviousDocsCard />
      </section>
    </div>
  );
}
