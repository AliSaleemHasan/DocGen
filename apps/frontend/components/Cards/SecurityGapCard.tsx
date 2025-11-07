import { TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const SecurityGapCard = () => {
  return (
    <Card
      className=" flex-1 flex flex-col justify-between  
         px-5  "
    >
      <CardHeader>
        <CardTitle className="">
          <div className="flex items-center gap-3">
            <TriangleAlert className="text-destructive" />
            <p className="text-2xl">Security Gaps</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="flex flex-1 flex-col gap-3">
          <section className="flex items-center justify-between">
            <h2 className="  ">5 Security Gaps in 3 different endpoints</h2>

            <div className="bg-yellow-500 rounded-full p-2 w-8 h-8 flex items-center justify-center">
              <p className=" text-black font-normal text-center text-2xl">!</p>
            </div>
          </section>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="text-right m-auto ">
          More Info
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecurityGapCard;
