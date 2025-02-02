import React from 'react'
import Lottie from "lottie-react";
import animationData from "/public/lottie/maintenance.json";

const Maintenance = () => {
  return (
    <div className="w-full px-4 md:px-8 flex flex-col justify-center items-center h-[100vh]">
    <div className="w-full md:w-1/3">
      <Lottie
        animationData={animationData}
        autoPlay={true}
        loop={true}
        height={50}
      />
    </div>
    <div className="text-center w-full flex justify-center items-center flex-col">
      <div className="text-black global-title flex items-center justify-center">{"Your Experience is Brewing!"}</div>
      <div className="my-4 global-title-description">
        {"We're almost there! The magic is happening behind the scenes as we craft the perfect experience just for you. Hang tight, grab a coffee, and we will have everything set up in no time. 🚀"}
      </div>
    </div>
  </div>
  )
}

export default Maintenance