import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check } from "lucide-react";

const DocumentationCompletness = () => {
  return (
    <Card
      className=" flex-1 flex flex-col justify-between  
         px-20  "
    >
      <CardHeader>
        <CardTitle className=" text-2xl">Overview</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="flex flex-1 flex-col gap-3">
          <section className="flex items-center justify-between">
            <h2 className="text-4xl text-primary font-extrabold">85 %</h2>

            <Check className="bg-green-500 rounded-full p-2 w-8 h-8 text-white font-bold" />
          </section>
          <p className="text-muted-foreground">Documentation Completness</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentationCompletness;
