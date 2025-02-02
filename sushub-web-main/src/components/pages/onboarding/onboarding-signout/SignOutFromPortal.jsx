import React, { useContext } from "react";
import { useRouter } from "next-nprogress-bar";
import { Button } from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { signOutUser } from "../onboarding-functions/GoogleSignOut";
import { ModeratorContext } from "@/context/ModeratorContext";
import { ProjectContext } from "@/context/ProjectContext";
import { OrganizerContext } from "@/context/OrganizerContext";
import { HandleDataAccess } from "@/components/pages/onboarding/onboarding-functions/HandleDataAccess";

const SignOutFromPortal = () => {
  const router = useRouter();
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
        refetchDataOnSignOut(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="w-2/3 flex items-center justify-center flex-col">
        <div className="w-full flex items-start justify-start text-2xl font-bold">
          {"Sign Out"}.
        </div>
        <div className="w-full flex items-start justify-start text-md font-normal text-white/60">
          {
            "Sign out from the Sustainability Hub Platform. You can still view the projects, events and opportunities available on the platform. Make sure to save all your changes."
          }
        </div>
      </div>
      <div className="w-full flex items-center justify-center"></div>
      <div className="w-full mt-8 flex items-center justify-center">
        <Button
          startContent={<MdLogout size={20} />}
          className="w-2/3 bg-white border-white text-black font-bold"
          onClick={() => handleSignOut()}
        >
          {"Sign Out"}
        </Button>
      </div>
      <div className="w-full mt-4 flex items-center justify-center">
        <Button
          variant="bordered"
          startContent={<IoMdArrowRoundBack size={20} />}
          className="w-2/3 bg-black border-white text-white"
          onClick={() => router.push("/")}
        >
          {"Go Back to Sustaintability Hub"}
        </Button>
      </div>
    </div>
  );
};

export default SignOutFromPortal;
