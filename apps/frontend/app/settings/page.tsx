import PasswordCard from "@/components/Cards/PasswordCard";
import PersonalDetails from "@/components/Cards/PersonalDetails";
import MainHeader from "@/components/layout/MainHeader";

const SettingsPage = () => {
  return (
    <div className=" container mx-auto  ">
      <MainHeader title="Account Settings" />
      <section className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <PersonalDetails />
        <PasswordCard />
      </section>
      <section></section>
    </div>
  );
};

export default SettingsPage;
