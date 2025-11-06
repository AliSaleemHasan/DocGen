import AppInput from "@/components/AppInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, FolderCode } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full  h-full container max-w-[80vw] m-auto py-5 ">
      <section className="w-full h-32 "></section>
      <section className="flex w-full  items-center justify-between gap-4 flex-wrap">
        <Card
          className=" flex-1 flex flex-col justify-between  
          min-h-[70vh] px-20 "
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
            <Button
              variant={"default"}
              className="bg-primary text-muted m-auto"
            >
              Generate Docs
            </Button>
          </CardFooter>
        </Card>

        <Card className=" min-h-[70vh] flex-1">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
