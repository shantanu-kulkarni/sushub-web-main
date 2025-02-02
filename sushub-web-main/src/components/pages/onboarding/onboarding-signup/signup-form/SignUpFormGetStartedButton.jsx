import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { MdLogin } from "react-icons/md";
import { OnboardingStateManagerContext } from "../../OnboardingStateManager";
import { AuthContext } from "@/context/AuthContext";
import { updateUserDocument } from "./SignUpFormSubmitRequest";

const SignUpFormGetStartedButton = ({userProfileUrl}) => {
  const { currentUser } = useContext(AuthContext);
  const { description, selectSdgChips, selectedOrgChip, setIsSubmitted } =
    useContext(OnboardingStateManagerContext);
    //console.log("SHOW URL OF UPLOADED PIC>>>", userProfileUrl);
  return (
    <div className="w-full mt-8 flex items-center justify-center font-bold">
      <Button
        startContent={<MdLogin size={20} />}
        className="w-2/3 bg-white disabled:bg-white/60"
        disabled={
          description.trim().length == 0 ||
          selectSdgChips.length == 0 ||
          selectedOrgChip.length == 0
            ? true
            : false
        }
        onClick={() =>
          updateUserDocument(
            currentUser,
            description,
            selectedOrgChip,
            selectSdgChips,
            userProfileUrl,
            setIsSubmitted
          )
        }
      >
        <p className="font-semibold">Get Started</p>
      </Button>
    </div>
  );
};

export default SignUpFormGetStartedButton;
