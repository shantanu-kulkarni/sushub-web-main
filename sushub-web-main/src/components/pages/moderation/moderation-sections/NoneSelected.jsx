import React from 'react'
import Lottie from "lottie-react";
import animationData from "/public/lottie/moderation-no-option-selected.json";

const NoneSelected = () => {
    return (
        <div className="w-full flex flex-col mt-16 justify-center items-center">
          <div className="w-1/2">
            <Lottie
              animationData={animationData}
              autoPlay={true}
              loop={true}
              height={50}
            />
          </div>
          <div className="mt-8 text-center flex-row w-2/3">
            <div className="text-black text-5xl font-bold">
              {"Start your moderation!"}
            </div>
            <div className="mt-4 text-black/30 font-bold text-md">
              {
                "Start moderating projects, events, opportunities and much more by simply clicking on the buttons from the moderation panel. It's that simple and easy!"
              }
            </div>
          </div>
        </div>
      );
}

export default NoneSelected