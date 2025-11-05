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
import { File, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full  h-full container max-w-[80vw] m-auto py-5 ">
      <section className="w-full h-32 "></section>
      <section className="flex w-full  items-center justify-between gap-4 flex-wrap">
        <Card className=" flex-1   px-20 ">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Create New Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <AppInput
              Icon={<Globe className="h-4 w-4 text-muted-foreground" />}
              inputProps={{ placeholder: "Git URL", type: "url" }}
            />

            <AppInput
              Icon={<File className="h-4 w-4 text-muted-foreground" />}
              inputProps={{ placeholder: "Local File Upload", type: "file" }}
            />
          </CardContent>
          <CardFooter>
            <Button variant={"default"} className="bg-primary text-muted">
              Generate Docs
            </Button>
          </CardFooter>
        </Card>

        <Card className=" flex-1">
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
