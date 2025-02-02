"use client";
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import {
  OnboardingStateProvider,
  OnboardingStateManagerContext,
} from "./OnboardingStateManager";
import OnboardingAnimationContent from "./onboarding-graphic/OnboardingAnimationContent";
import LogInWithGoogle from "./onboarding-login/LogInWithGoogle";
import OnboardingLoadingSpinner from "./onboarding-graphic/OnboardingLoadingSpinner";
import SignUpWithGoogle from "./onboarding-signup/SignUpWithGoogle";
import OnboardingSidebarTitle from "./onboarding-graphic/OnboardingSidebarTitle";
import UserOnboardingSuccess from "./onboarding-success/UserOnboardingSuccess";
import { UserContext } from "@/context/UserContext";
import SignOutFromPortal from "./onboarding-signout/SignOutFromPortal";

const UserOnboardingFlowContent = () => {
  const { isSubmitted, setShowSignUpOption, profilePicUrl, setProfilePicUrl } =
    useContext(OnboardingStateManagerContext);
  const { userInfo, setUserInfo, onBoarded } = useContext(UserContext);
  const { currentUser, loading } = useContext(AuthContext);
  const [fetchUserDetails, setFetchUserDetails] = useState(false);

  const getOnboardingContent = () => {
    if (loading) {
      return <OnboardingLoadingSpinner />;
    } else if (!currentUser) {
      return <LogInWithGoogle />;
    } else if (fetchUserDetails) {
      if (userInfo === null && !isSubmitted) {
        return <SignUpWithGoogle userProfileUrl={profilePicUrl} />;
      } else {
        return <UserOnboardingSuccess isExistingUser={!!userInfo} />;
      }
    } else {
      return <OnboardingLoadingSpinner />;
    }
  };

  useEffect(() => {
    if (currentUser) {
      setFetchUserDetails(false);
      if (userInfo === null) {
        setShowSignUpOption(true);
        setProfilePicUrl(currentUser.photoURL);
      } else {
        setProfilePicUrl(userInfo.user_profile);
      }
      setFetchUserDetails(true);
    }
  }, [
    currentUser,
    setProfilePicUrl,
    setShowSignUpOption,
    setUserInfo,
    userInfo,
  ]);

  return (
    <div>
      <div className="flex flex-row w-full">
        <OnboardingAnimationContent />
        <div className="w-2/6 h-screen bg-black">
          <div className="w-full h-full">
            <OnboardingSidebarTitle currentUser={currentUser} />
            {getOnboardingContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
const UserOnboardingFlow = () => {
  return (
    <OnboardingStateProvider>
      <UserOnboardingFlowContent />
    </OnboardingStateProvider>
  );
};

export default UserOnboardingFlow;
