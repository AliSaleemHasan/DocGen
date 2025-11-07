import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { File } from "lucide-react";

const UsedFilesCard = () => {
  return (
    <Card
      className=" flex-1 flex flex-col justify-between  
         px-5  "
    >
      <CardHeader>
        <CardTitle className="text-2xl">Used Files</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between ">
        <h2>5 Security Gaps in 3 different endpoints</h2>
        <File className="text-blue-600" />
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="text-right mx-auto ">
          Check the list
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UsedFilesCard;
