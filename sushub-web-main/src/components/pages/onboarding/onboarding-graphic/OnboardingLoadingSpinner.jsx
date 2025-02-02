import React from "react";
import Lottie from "lottie-react";
import onboardingSpinner from "/public/lottie/loading-animation.json";

const OnboardingLoadingSpinner = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-1/6">
        <Lottie
          animationData={onboardingSpinner}
          autoPlay={true}
          loop={true}
          height={30}
          className="aspect-square"
        />
      </div>
    </div>
  );
};

export default OnboardingLoadingSpinner;
