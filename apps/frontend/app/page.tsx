import NewDocCard from "@/components/Cards/NewDocCard";
import PreviousDocsCard from "@/components/Cards/PreviousDocsCard";

export default function Home() {
  return (
    <div className="w-full  h-full container max-w-[80vw] m-auto py-5 ">
      <section className="w-full h-32 "></section>
      <section className="flex w-full  items-center justify-between gap-4 flex-wrap">
        <NewDocCard />
        <PreviousDocsCard />
      </section>
    </div>
  );
}
