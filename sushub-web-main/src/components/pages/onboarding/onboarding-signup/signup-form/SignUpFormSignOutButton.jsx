import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { signOutUser } from "../../onboarding-functions/GoogleSignOut";
import { OnboardingStateManagerContext } from "../../OnboardingStateManager";
import { ModeratorContext } from "@/context/ModeratorContext";
import { ProjectContext } from "@/context/ProjectContext";
import { OrganizerContext } from "@/context/OrganizerContext";
import { HandleDataAccess } from "@/components/pages/onboarding/onboarding-functions/HandleDataAccess";

const SignUpFormSignOutButton = () => {
  const { setDescription, setSelectedOrgChip, setSelectedSdgChips } =
    useContext(OnboardingStateManagerContext);
  const moderatorContext = useContext(ModeratorContext);
  const projectContext = useContext(ProjectContext);
  const organizerContext = useContext(OrganizerContext);
  const dataAccess = new HandleDataAccess({
    moderatorContext,
    projectContext,
    organizerContext,
  });

  const refetchDataOnSignOut = async (currentUserStatus) => {
    await dataAccess.refetchDataOnUserStateChangeActivity(currentUserStatus);
  };

  const handleSignOut = () => {
    signOutUser()
      .then((message) => {
        //console.log(message);
        setDescription("");
        setSelectedOrgChip([]);
        setSelectedSdgChips([]);
        refetchDataOnSignOut(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  return (
    <div className="w-full mt-4 flex items-center justify-center">
      <Button
        variant="bordered"
        startContent={<MdLogout size={20} />}
        className="w-2/3 bg-black border-white text-white"
        onClick={() => handleSignOut()}
      >
        {"Sign Out"}
      </Button>
    </div>
  );
};

export default SignUpFormSignOutButton;
