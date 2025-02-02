import React, { useContext } from "react";
import { useRouter } from "next-nprogress-bar";
import { signInWithGoogle } from "../onboarding-functions/GoogleSignIn";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { OnboardingStateManagerContext } from "../OnboardingStateManager";
import { ModeratorContext } from "@/context/ModeratorContext";
import { ProjectContext } from "@/context/ProjectContext";
import { OrganizerContext } from "@/context/OrganizerContext";
import { HandleDataAccess } from "@/components/pages/onboarding/onboarding-functions/HandleDataAccess";

const LogInWithGoogle = () => {
  const router = useRouter();
  const moderatorContext = useContext(ModeratorContext);
  const projectContext = useContext(ProjectContext);
  const organizerContext = useContext(OrganizerContext);
  const dataAccess = new HandleDataAccess({
    moderatorContext,
    projectContext,
    organizerContext,
  });
  const { setShowSignUpOption } = useContext(OnboardingStateManagerContext);

  const refetchDataOnSignIn = async (currentUserStatus) => {
    await dataAccess.refetchDataOnUserStateChangeActivity(currentUserStatus);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-2/3 flex items-center justify-center flex-col">
        <div className="w-full flex items-start justify-start text-2xl font-bold">
          {"Get Started"}.
        </div>
        <div className="w-full flex items-start justify-start text-md font-normal text-white/60">
          {
            "Start creating and registering projects on the sustainability hub platform by signing up quickly via google sign in."
          }
        </div>
      </div>
      <div className="w-full flex items-center justify-center"></div>
      <div className="w-full mt-8 flex items-center justify-center">
        <Button
          startContent={<FcGoogle size={20} />}
          className="w-2/3 bg-white"
          onClick={async () => {
            try {
              const user = await signInWithGoogle();
              //console.log("User signed in:", user);
              refetchDataOnSignIn(user);
              setShowSignUpOption(true);
            } catch (error) {
              toast(error.message, {
                position: "bottom-right",
                style: {
                  color: "#fff",
                  backgroundColor: "#000",
                },
              });
            }
          }}
        >
          {"Sign Up With Google"}
        </Button>
      </div>
      <div className="w-full mt-4 flex items-center justify-center">
        <Button
          variant="bordered"
          startContent={<IoMdArrowRoundBack size={20} />}
          className="w-2/3 bg-black border-white text-white"
          onClick={() => router.back()}
        >
          {"Go Back to Sustaintability Hub"}
        </Button>
      </div>
    </div>
  );
};

export default LogInWithGoogle;
