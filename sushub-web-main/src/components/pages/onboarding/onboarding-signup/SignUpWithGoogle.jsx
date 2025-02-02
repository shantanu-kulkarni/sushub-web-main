import React from "react";
import SignUpFormOrganizationSelection from "./signup-form/SignUpFormOrganizationSelection";
import SignUpFormSdgSelection from "./signup-form/SignUpFormSdgSelection";
import SignUpFormDescription from "./signup-form/SignUpFormDescription";
import SignUpFormGetStartedButton from "./signup-form/SignUpFormGetStartedButton";
import SignUpFormSignOutButton from "./signup-form/SignUpFormSignOutButton";
import SignUpFormImageUpload from "./signup-form/SignUpFormImageUpload";

const SignUpWithGoogle = ({userProfileUrl}) => {

  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <SignUpFormImageUpload />
      <SignUpFormOrganizationSelection />
      <SignUpFormSdgSelection />
      <SignUpFormDescription />
      <SignUpFormGetStartedButton userProfileUrl={userProfileUrl}/>
      <SignUpFormSignOutButton />
    </div>
  );
};

export default SignUpWithGoogle;
