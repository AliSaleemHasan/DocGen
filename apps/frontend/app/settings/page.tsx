import PersonalDetails from "@/components/Cards/PersonalDetails";
import MainHeader from "@/components/layout/MainHeader";
import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <MainHeader title="Account Settings" />
      <PersonalDetails />
    </div>
  );
};

export default SettingsPage;
