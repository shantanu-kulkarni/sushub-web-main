import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/lottie/create-form.json";
const BasicSectionHeader = () => {
  return (
    <div>
      <div>
        <div className="global-subtitle">
          {"Basic Information"}
        </div>
        <div className="global-subtitle-description">
          {
            "To get you on board, we need some basic information from your side to get you started!"
          }
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 md:w-1/2">
          <Lottie
            animationData={animationData}
            autoPlay={true}
            loop={true}
            height={75}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicSectionHeader;
