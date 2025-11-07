import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppInput from "../AppInput";
import { Check, Key } from "lucide-react";
import { Button } from "../ui/button";

const PasswordCard = () => {
  return (
    <Card className="  flex-1  ">
      <CardHeader>
        <CardTitle>Password Management</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <section>
          <AppInput
            className="max-h-8"
            Icon={<Key />}
            inputProps={{ placeholder: "Password", type: "password" }}
          ></AppInput>
        </section>

        <section className="flex items-center gap-2 ">
          <AppInput
            className="max-h-8"
            Icon={<Check />}
            inputProps={{ placeholder: "Confirm Password..", type: "password" }}
          ></AppInput>
          <Button>Change Password</Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default PasswordCard;
