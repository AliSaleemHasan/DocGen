import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AppInput from "../AppInput";
import { FolderCode, Globe } from "lucide-react";
import { Button } from "../ui/button";

const NewDocCard = () => {
  return (
    <Card
      className=" flex-1 flex flex-col justify-between  
          min-h-[70vh] px-5  min-w-md"
    >
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Create New Documentation
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 ">
        <AppInput
          Icon={<Globe className="h-4 w-4 text-muted-foreground" />}
          inputProps={{ placeholder: "Git URL", type: "url" }}
        />

        <AppInput
          className="w-full items-center   justify-center gap-10 flex-1 flex-col cursor-pointer "
          Icon={
            <FolderCode className="h-[50vh] w-[30vw] md:w-40 md:h-40 lg:w-60 lg:h-60  text-muted-foreground cursor-pointer" />
          }
          inputProps={{
            placeholder: "Local File Upload",
            type: "file",

            className: "cursor-pointer  ",
          }}
        />
      </CardContent>
      <CardFooter>
        <Button variant={"default"} className="bg-primary text-muted m-auto">
          Generate Docs
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewDocCard;
