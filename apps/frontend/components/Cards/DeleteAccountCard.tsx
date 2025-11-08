import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const DeleteAccountCard = () => {
  return (
    <Card className="  flex-1  ">
      <CardContent className="flex  gap-4 justify-between flex-wrap">
        <section className="flex items-center justify-center text-clip gap-5 flex-wrap  ">
          <h2 className="max-w-32 text-clip leading-none font-semibold  text-center">
            Danger Zone
          </h2>

          <h4 className="text-md">
            Once Account deleted: your data will be forever deleted, Are you
            sure you want to continue!
          </h4>
        </section>

        <Button variant={"destructive"}>Delete Account</Button>
      </CardContent>
    </Card>
  );
};

export default DeleteAccountCard;
