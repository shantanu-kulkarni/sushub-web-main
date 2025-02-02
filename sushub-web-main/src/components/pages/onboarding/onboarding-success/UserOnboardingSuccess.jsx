import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next-nprogress-bar";
import { Button } from "@nextui-org/react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { UserContext } from "@/context/UserContext";
import userOnboardingCompletedAnimation from "/public/lottie/user-journey-completed.json";
import Lottie from "lottie-react";

const UserOnboardingSuccess = ({ isExistingUser }) => {
  //const { onBoarded, setOnboarded } = useContext(UserContext);
  const [userJourneySuccess, setUserJourneySuccess] = useState(false);
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear the interval on cleanup
      return () => clearInterval(timer);
    } else {
      router.back();
      setUserJourneySuccess(true);
    }
  }, [countdown, router, setUserJourneySuccess]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="w-2/3 flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-start text-2xl font-bold">
          <div className="w-full">
            <Lottie
              animationData={userOnboardingCompletedAnimation}
              autoPlay={true}
              loop={true}
              height={30}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-start text-2xl font-bold">
          {isExistingUser ? "Login Successful!" : "Onboarding Successful!"}
        </div>
        <div className="w-full flex items-start justify-start text-md font-normal text-white/60">
          {`You've been successfully ${
            isExistingUser ? "logged in" : "onboarded"
          } to the Sustainability Hub platform. Start creating and registering projects on the sustainability hub platform and explore new opportunities now!`}
        </div>
      </div>
      <div className="w-full flex items-center justify-center"></div>
      <div className="w-full mt-8 flex items-center justify-center flex-col">
        <Button
          endContent={<IoMdArrowRoundForward size={20} />}
          className="w-2/3 bg-white"
          onClick={() => {
            router.push("/");
            setUserJourneySuccess(true);
          }}
        >
          {"Explore Sustainability Hub"}
        </Button>
        <p className="mt-2 font-normal text-xs text-white/60">
          {`Redirecting automatically to Sustainability Hub in ${countdown} seconds.`}
        </p>
      </div>
    </div>
  );
};

export default UserOnboardingSuccess;
