import React from "react";
import Lottie from "lottie-react";
import animationSdgData from "/public/lottie/sdgs.json";

const SdgSectionHeader = () => {
  return (
    <div>
      <div>
        <div className="global-subtitle">
          {"Organization and SDGs"}
        </div>
        <div className="global-subtitle-description">
          {
            "Before you start creating your first project, let us know your organization and the SDGs you're interested to work on!"
          }
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 md:w-1/2">
          <Lottie
            animationData={animationSdgData}
            autoPlay={true}
            loop={true}
            height={30}
            className="aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default SdgSectionHeader;
