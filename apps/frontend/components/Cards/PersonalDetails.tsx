import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppInput from "../AppInput";
import { Mail, User } from "lucide-react";
import { Button } from "../ui/button";

const PersonalDetails = () => {
  return (
    <Card className="  flex-1 min-w-md">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <AppInput
          className="max-h-8"
          Icon={<User />}
          inputProps={{ placeholder: "Full Name" }}
        ></AppInput>

        <section className="flex items-center gap-2 ">
          <AppInput
            className="max-h-8"
            Icon={<Mail />}
            inputProps={{ placeholder: "Email.." }}
          ></AppInput>
          <Button>Update Profile</Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
