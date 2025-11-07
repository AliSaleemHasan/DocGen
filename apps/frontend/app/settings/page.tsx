import DeleteAccountCard from "@/components/Cards/DeleteAccountCard";
import PasswordCard from "@/components/Cards/PasswordCard";
import PersonalDetails from "@/components/Cards/PersonalDetails";
import ThemeCard from "@/components/Cards/ThemeCard";
import MainHeader from "@/components/layout/MainHeader";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <div className=" container mx-auto   ">
      <MainHeader title="Account Settings" />
      <div className="flex flex-col gap-5">
        <section className="grid grid-cols-1 md:grid-cols-2   gap-5">
          <PersonalDetails />
          <PasswordCard />
        </section>
        <Separator />
        <section>
          <ThemeCard />
        </section>
        <section>
          <PersonalDetails />
        </section>
        <section>
          <DeleteAccountCard />
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
